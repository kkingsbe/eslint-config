# @kkingsbe/eslint-config

This is my personal ESLint configuration with fairly strict rules for TypeScript projects. This config enforces code quality standards, documentation requirements, and maintainability best practices.

## Features

- **TypeScript Support**: Full TypeScript linting with recommended type-checked rules
- **Code Quality**: SonarJS rules for detecting bugs and code smells
- **Documentation**: JSDoc enforcement for all public functions, classes, interfaces, and type definitions
- **Code Formatting**: Prettier integration for consistent code style
- **Complexity Limits**: Enforced limits on function length, nesting depth, and file size
- **Node.js & Jest**: Configured for Node.js and Jest testing environments

## Installation

```bash
npm install --save-dev @kkingsbe/eslint-config
```

## Usage

Create an `eslint.config.js` file in your project root:

```javascript
import config from '@kkingsbe/eslint-config';

export default config;
```

Or extend it with your own rules:

```javascript
import kyleConfig from '@kkingsbe/eslint-config';

export default [
  ...kyleConfig,
  {
    rules: {
      // Your custom rules here
    },
  },
];
```

## Required Peer Dependencies

Make sure you have these dependencies installed:

```bash
npm install --save-dev eslint typescript
```

## Configuration Details

### Included Plugins & Configs

- **@eslint/js**: ESLint recommended rules
- **typescript-eslint**: TypeScript-specific linting with type checking
- **eslint-plugin-sonarjs**: Code quality and bug detection rules
- **eslint-plugin-jsdoc**: JSDoc documentation enforcement
- **eslint-plugin-prettier**: Code formatting integration

### Key Rules

- **JSDoc Required**: All public functions, classes, interfaces, type aliases, and enums must have JSDoc comments
- **Function Length**: Maximum 70 lines per function (excluding blank lines and comments)
- **Nesting Depth**: Maximum 3 levels of nesting
- **File Length**: Maximum 300 lines per file
- **TypeScript**: Relaxed `no-explicit-any`, but warns on floating promises and unsafe arguments

### Environment Support

- Node.js globals
- Jest testing framework globals
- CommonJS module system

## TypeScript Configuration

This config expects a `tsconfig.json` file in your project root. The TypeScript parser will use project service for type-aware linting.

## License

ISC

---

*This is Kyle's (@kkingsbe) personal ESLint configuration. Feel free to use it as a starting point for your own projects!*