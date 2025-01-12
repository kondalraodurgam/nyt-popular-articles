# NY Times Most Popular Articles

This React application displays the most popular articles from the NY Times API, featuring a master/detail view pattern.

## Features

- List view of most popular articles
- Detailed view for each article
- Responsive design
- Unit tests with Vitest and React Testing Library
- E2E tests with Cypress
- TypeScript support
- Modern React practices with hooks
- Error handling and loading states

## Prerequisites

Before running the application, you need to:

1. Sign up for an API key at [NY Times Developer Portal](https://developer.nytimes.com/get-started)
2. Create a `.env` file in the root directory with  API key:

```
VITE_NYT_API_KEY=1xZAeiTPA6vsWWJMzFtVf89mJEM6CPKx
```

## Installation

```bash
npm install
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run unit tests
- `npm run coverage` - Generate test coverage report
- `npm run e2e` - Open Cypress for E2E testing
- `npm run e2e:headless` - Run E2E tests headlessly
- `npm run lint` - Run ESLint

## Architecture

The application follows a component-based architecture with:

- Container/Presentational pattern
- React Router for navigation
- TypeScript for type safety
- Tailwind CSS for styling
- Lucide React for icons

## Testing

- Unit tests with Vitest and React Testing Library
- E2E tests with Cypress
- High code coverage focus

## Best Practices

- Modern React hooks
- TypeScript for type safety
- Responsive design
- Error handling
- Loading states
- Clean code principles
- ESLint for code quality
