import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Article } from '../types/article';
import { ArrowLeft, ExternalLink } from 'lucide-react';

interface ArticleDetailProps {
  articles: Article[];
}

export function ArticleDetail({ articles }: ArticleDetailProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Article not found</h2>
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-blue-500 hover:text-blue-600"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to articles
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <button
        onClick={() => navigate('/')}
        className="flex items-center text-blue-500 hover:text-blue-600 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to articles
      </button>
      
      <article className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{article.title}</h1>
        
        {article.media[0]?.['media-metadata']?.[2]?.url && (
          <img
            src={article.media[0]['media-metadata'][2].url}
            alt=""
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        )}
        
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span>{article.byline}</span>
          <span className="mx-2">•</span>
          <span>{new Date(article.published_date).toLocaleDateString()}</span>
        </div>
        
        <p className="text-gray-600 text-lg mb-6">{article.abstract}</p>
        
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Read full article
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </article>
    </div>
  );
}