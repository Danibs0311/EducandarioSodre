import React from 'react';
import { Calendar, User } from 'lucide-react';
import { MOCK_BLOG_POSTS, CONTENT } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog do Núcleo</h1>
          <p className="text-gray-600 whitespace-pre-line">{CONTENT.blog.text}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_BLOG_POSTS.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition duration-300 flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.titulo}
                  className="w-full h-full object-cover transition transform hover:scale-105" 
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(post.created_at).toLocaleDateString()}</span>
                  <span className="flex items-center gap-1"><User size={14} /> {post.autor}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.titulo}</h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{post.resumo}</p>
                <button className="text-primary-600 font-semibold text-sm hover:underline mt-auto self-start">
                  Ler artigo completo →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;