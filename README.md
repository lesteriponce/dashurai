# Dashurai AI - Advanced AI Solutions Platform

Dashurai AI is a cutting-edge platform that delivers intelligent AI solutions to transform your business operations and drive innovation.

## 🚀 Features

- **AI Development**: Build intelligent solutions with machine learning models and neural networks
- **AI Integration**: Seamlessly integrate AI capabilities into existing systems
- **AI Consulting**: Strategic guidance for successful AI adoption
- **Machine Learning**: Data-driven insights and predictive analytics
- **Natural Language Processing**: Advanced NLP solutions for customer interactions
- **Computer Vision**: Intelligent visual recognition and image analysis

## 🛠️ Tech Stack

- **Frontend**: React 19.2.0 with TypeScript
- **Build Tool**: Vite 7.2.4
- **Styling**: TailwindCSS 4.1.18
- **Routing**: React Router DOM 7.12.0
- **State Management**: React Context API
- **Development**: ESLint, TypeScript Compiler

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npm run type-check

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── DashuraiServiceCards.tsx
│   ├── DashuraiCTAButtons.tsx
│   └── ...
├── pages/              # Page components
│   ├── DashuraiServicesSection.tsx
│   ├── DashuraiFeaturesSection.tsx
│   ├── DashuraiCTASection.tsx
│   └── ...
├── contexts/           # React contexts
│   └── DarkModeContext.tsx
├── hooks/              # Custom hooks
│   └── useDarkMode.ts
├── assets/             # Static assets
└── styles.css          # Global styles
```

## 🎯 Development

This project uses:

- **React Compiler**: Enabled for optimized performance
- **TypeScript**: For type safety and better developer experience
- **ESLint**: For code quality and consistency
- **TailwindCSS**: For utility-first styling

## 🔧 Configuration

### ESLint Configuration

For production applications, consider enabling type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

### React-Specific Lint Rules

Install additional plugins for React-specific linting:

```bash
npm install eslint-plugin-react-x eslint-plugin-react-dom
```

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

## 🌟 Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Open your browser to the local development URL
5. Start building your AI-powered features!

## 📄 License

This project is private and proprietary to Dashurai AI.

## 🤝 Support

For support and inquiries, please contact the Dashurai AI team.
