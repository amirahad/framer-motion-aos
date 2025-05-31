# Publishing Guide for framer-motion-aos

## Before Publishing

1. **Update Version**: Update the version in `package.json`
2. **Test the Build**: Run `npm run build` to ensure everything compiles
3. **Update Documentation**: Make sure README.md is up to date

## Publishing Steps

### 1. Login to npm (first time only)
```bash
npm login
```

### 2. Publish to npm
```bash
npm publish
```

### 3. For scoped packages (if you want to publish under your username)
```bash
npm publish --access public
```

## Pre-release Testing

### Test Locally
```bash
# Pack the package locally
npm pack

# This creates a .tgz file you can install in another project
npm install ./framer-motion-aos-1.0.0.tgz
```

### Test in Another Project
```bash
# In another React project
npm install framer-motion-aos
```

## Updating the Package

1. Make your changes
2. Update version in package.json (follow semantic versioning)
3. Run build: `npm run build`
4. Publish: `npm publish`

## Version Management

- **Patch** (1.0.1): Bug fixes
- **Minor** (1.1.0): New features (backwards compatible)
- **Major** (2.0.0): Breaking changes

```bash
# Automatically bump version and publish
npm version patch && npm publish
npm version minor && npm publish
npm version major && npm publish
```

## npm Scripts for Development

```bash
# Development with hot reload
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Fix lint issues
npm run lint:fix

# Clean build directory
npm run clean
```
