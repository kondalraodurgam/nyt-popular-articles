import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ArticleList } from '../components/ArticleList';
import { BrowserRouter } from 'react-router-dom';

const mockArticles = [
  {
    id: 1,
    title: 'Test Article',
    abstract: 'Test Abstract',
    byline: 'By Test Author',
    published_date: '2024-03-14',
    url: 'https://example.com',
    media: []
  }
];

describe('ArticleList', () => {
  it('renders loading state', () => {
    render(
      <BrowserRouter>
        <ArticleList articles={[]} isLoading={true} error={null} />
      </BrowserRouter>
    );
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('renders error state', () => {
    const error = new Error('Test error');
    render(
      <BrowserRouter>
        <ArticleList articles={[]} isLoading={false} error={error} />
      </BrowserRouter>
    );
    expect(screen.getByText(/Test error/)).toBeInTheDocument();
  });

  it('renders articles', () => {
    render(
      <BrowserRouter>
        <ArticleList articles={mockArticles} isLoading={false} error={null} />
      </BrowserRouter>
    );
    expect(screen.getByText('Test Article')).toBeInTheDocument();
    expect(screen.getByText('Test Abstract')).toBeInTheDocument();
  });
});