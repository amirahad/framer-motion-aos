# Contributing to framer-motion-aos

First off, thank you for considering contributing to framer-motion-aos! It's people like you that make this library better.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct:

- Be respectful and inclusive
- Use welcoming and inclusive language
- Be collaborative
- Focus on what is best for the community
- Show empathy towards other community members

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* Use a clear and descriptive title
* Describe the exact steps to reproduce the problem
* Provide specific examples to demonstrate the steps
* Describe the behavior you observed after following the steps
* Explain which behavior you expected to see instead and why
* Include screenshots if possible
* Include your environment details (OS, browser, React version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* A clear and descriptive title
* A detailed description of the proposed feature
* Explain why this enhancement would be useful
* List any potential drawbacks
* If possible, provide examples of how this feature would be used

### Pull Requests

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. Ensure the test suite passes
4. Make sure your code lints (`npm run lint`)
5. Update documentation if needed

#### Development Process

1. Clone your fork
```bash
git clone https://github.com/your-username/framer-motion-aos.git
cd framer-motion-aos
```

2. Install dependencies
```bash
npm install
```

3. Create a branch
```bash
git checkout -b feature/your-feature-name
```

4. Make your changes and test them
```bash
npm run dev
npm run test
```

5. Commit your changes using conventional commits
```bash
git commit -m "feat: add new animation preset"
```

6. Push to your fork
```bash
git push origin feature/your-feature-name
```

7. Create a Pull Request

#### Commit Messages

We use conventional commits. Format:
```
type(scope): subject

body

footer
```

Types:
- feat: new feature
- fix: bug fix
- docs: documentation changes
- style: formatting, missing semicolons, etc
- refactor: code change that neither fixes a bug nor adds a feature
- test: adding tests
- chore: updating build tasks, package manager configs, etc

### Development Setup

1. Prerequisites
   - Node.js (v16 or higher)
   - npm (v7 or higher)

2. Development commands
```bash
npm run dev          # Watch mode
npm run build        # Production build
npm run test         # Run tests
npm run lint         # Check code style
npm run lint:fix     # Fix code style issues
```

### Documentation

If you're adding new features, please update the following:
- README.md
- JSDoc comments in the code
- Example usage in /examples
- TypeScript types

### Testing

- Write unit tests for new features
- Ensure all tests pass before submitting PR
- Follow existing test patterns
- Use meaningful test descriptions

## Questions?

Feel free to open an issue with your question or reach out to maintainers.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
