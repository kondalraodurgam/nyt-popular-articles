import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Article } from '../types/article';
import { ChevronRight, Newspaper } from 'lucide-react';

interface ArticleListProps {
  articles: Article[];
  isLoading: boolean;
  error: Error | null;
}

export function ArticleList({ articles, isLoading, error }: ArticleListProps) {
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-red-500">
        <Newspaper className="w-16 h-16 mb-4" />
        <p className="text-xl">Error loading articles: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">NY Times Most Popular Articles</h1>
      <div className="space-y-4">
        {articles.map((article) => (
          <article
            key={article.id}
            onClick={() => navigate(`/article/${article.id}`)}
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h2>
                <p className="text-gray-600 mb-2">{article.abstract}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{article.byline}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(article.published_date).toLocaleDateString()}</span>
                </div>
              </div>
              {article.media[0]?.['media-metadata']?.[0]?.url && (
                <img
                  src={article.media[0]['media-metadata'][0].url}
                  alt=""
                  className="w-24 h-24 object-cover rounded-lg ml-4"
                />
              )}
              <ChevronRight className="w-6 h-6 text-gray-400 ml-4" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}