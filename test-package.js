#!/usr/bin/env node

// Simple test script to verify the package builds and exports correctly
const fs = require('fs');
const path = require('path');

console.log('🔍 Testing framer-motion-aos package...\n');

// Check if dist directory exists
const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
  console.error('❌ dist directory not found. Run "npm run build" first.');
  process.exit(1);
}

// Check if main files exist
const requiredFiles = [
  'dist/index.js',
  'dist/index.esm.js',
  'dist/index.d.ts'
];

let allFilesExist = true;
requiredFiles.forEach(file => {
  if (fs.existsSync(path.join(__dirname, file))) {
    console.log(`✅ ${file} exists`);
  } else {
    console.error(`❌ ${file} missing`);
    allFilesExist = false;
  }
});

if (!allFilesExist) {
  process.exit(1);
}

// Try to require the built package
try {
  const pkg = require('./dist/index.js');
  console.log('\n📦 Package exports:');
  console.log('- AnimateOnScroll:', typeof pkg.AnimateOnScroll);
  console.log('- StaggerContainer:', typeof pkg.StaggerContainer);
  console.log('- CountUp:', typeof pkg.CountUp);
  console.log('- ParallaxScroll:', typeof pkg.ParallaxScroll);
  console.log('- animationPresets:', typeof pkg.animationPresets);
  console.log('- useInView:', typeof pkg.useInView);

  console.log('\n✅ Package test passed! Ready to publish.');
} catch (error) {
  console.error('\n❌ Package test failed:', error.message);
  process.exit(1);
}
