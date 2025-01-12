import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ArticleList } from './components/ArticleList';
import { ArticleDetail } from './components/ArticleDetail';
import { fetchMostViewedArticles } from './services/nytimes';
import { Article } from './types/article';

function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await fetchMostViewedArticles();
        setArticles(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch articles'));
      } finally {
        setIsLoading(false);
      }
    };

    loadArticles();
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route 
            path="/" 
            element={
              <ArticleList 
                articles={articles} 
                isLoading={isLoading} 
                error={error} 
              />
            } 
          />
          <Route 
            path="/article/:id" 
            element={<ArticleDetail articles={articles} />} 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;