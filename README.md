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
2. Create a `.env` file in the root directory with  your API key:

```
VITE_NYT_API_KEY= add your API key

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

## Project Management

- Wireframes
  
 ![image](https://github.com/user-attachments/assets/d197613e-b298-4e82-ba88-f8bdfe0d283f)

 ![image](https://github.com/user-attachments/assets/d3617721-6b45-4bca-a9d2-ab315736e5b3)

 ![image](https://github.com/user-attachments/assets/8bb20eea-c085-402b-a9db-d6ed34d4eca4)



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

## Components

### 1. ArticleList
- **Props:**
  - `articles`: Array of articles to display.
  - `isLoading`: Boolean to indicate loading state.
  - `error`: Error object if fetching articles fails.
- **Responsibilities:**
  - Render a loading spinner during data fetching.
  - Display a list of articles with titles, abstracts, bylines, and publication dates.
  - Handle navigation to the article detail page on click.
- **Key Interactions:**
  - Fetches data from `fetchMostViewedArticles`.
  - Passes the selected article's ID to the detail route.

### 2. ArticleDetail
- **Props:**
  - `articles`: Array of articles (from context or parent).
- **Responsibilities:**
  - Render detailed content of the selected article.
  - Handle "Back to Articles" navigation.
  - Provide an external link to the full article.
- **Key Interactions:**
  - Matches the article ID from `useParams` to fetch the correct article.

### 3. App
- **Responsibilities:**
  - Top-level component managing routing.
  - Fetch data using `fetchMostViewedArticles`.
  - Handle global states: `articles`, `isLoading`, and `error`.
  - Render `ArticleList` and `ArticleDetail` components based on routes.

## Utilities

### 1. fetchMostViewedArticles (API Service)
- **Responsibilities:**
  - Fetch most-viewed articles from the NY Times API.
  - Handle errors and data transformation (if required).
- **Implementation Notes:**
  - Use `axios` or `fetch` to make an HTTP GET request.
  - Transform the API response to match the component's expected structure.

## Routes

### 1. `/` (Home Page)
- Component: `ArticleList`
- Displays the list of most-viewed articles.

### 2. `/article/:id` (Article Detail Page)
- Component: `ArticleDetail`
- Displays the detailed view of a selected article.

## Data Models

### 1. Article (TypeScript Interface)
```typescript
interface Article {
  id: number;
  title: string;
  abstract: string;
  byline: string;
  published_date: string;
  url: string;
  media: {
    'media-metadata': { url: string }[];
  }[];
}
```

## State Management

### State Variables (in `App`):
- `articles`: Array of `Article`.
- `isLoading`: Boolean to indicate loading state.
- `error`: Holds error details if API call fails.

### State Flow:
- `App` fetches articles and passes them as props to `ArticleList` and `ArticleDetail`.

## Interactions

### Article Selection
1. `ArticleList`:
   - User clicks on an article.
   - Navigates to `/article/:id` with the selected article ID.
2. `ArticleDetail`:
   - Matches the `id` parameter to fetch the article details from `articles`.

### Error Handling
- If the API call fails:
  - `error` state is updated in `App`.
  - `ArticleList` displays the error message.

## Styling

### CSS Framework: TailwindCSS

### Key Design Choices:
- Minimalist and responsive layout.
- Cards for the article list.
- Typography hierarchy for readability.


  
