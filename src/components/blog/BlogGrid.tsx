'use client';

import { useState, useEffect } from "react";

interface Post {
  slug: string;
  title: string;
  excerpt?: string;
  category?: string;
  readingTime?: number;
  quote?: string;
  date?: string;
  content: string;
}

interface BlogGridProps {
  posts: Post[];
  locale?: string;
}

export const BlogGrid = ({ posts, locale = 'en' }: BlogGridProps) => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    // Extract unique categories
    const uniqueCategories = Array.from(new Set(
      posts
        .map(post => post.category)
        .filter(Boolean)
    )) as string[];
    setCategories(uniqueCategories);
  }, [posts]);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post => post.category === selectedCategory));
    }
  }, [selectedCategory, posts]);

  return (
    <>
      {/* Filter Section */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 text-sm rounded-sm transition-colors ${
              selectedCategory === 'all'
                ? 'bg-gray-900 dark:bg-neutral-800 text-white dark:text-white shadow-lg shadow-black/20'
                : 'bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-neutral-600 hover:shadow-lg hover:shadow-black/20'
            }`}
          >
            all posts ({posts.length})
          </button>
          {categories.map((category) => {
            const count = posts.filter(post => post.category === category).length;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm rounded-sm transition-colors ${
                  selectedCategory === category
                    ? 'bg-gray-900 dark:bg-neutral-800 text-white dark:text-white shadow-lg shadow-black/20'
                    : 'bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-neutral-600 hover:shadow-lg hover:shadow-black/20'
                }`}
              >
                {category.toLowerCase()} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <a
            key={post.slug}
            href={`/${locale}/blog/${post.slug}`}
            className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 rounded-sm p-6 hover:shadow-lg hover:shadow-black/20 hover:border-gray-500 dark:hover:border-gray-400 transition-all duration-200 block shadow-lg shadow-black/10 dark:shadow-black/20"
          >
            <h3 className="text-lg font-bold tracking-wide text-black dark:text-white leading-tight mb-3">
              {post.title.toLowerCase()}
            </h3>
            
            {post.quote && (
              <p className="text-gray-700 dark:text-gray-300 text-sm dark:font-medium leading-relaxed mb-4">
                "{post.quote.toLowerCase()}"
              </p>
            )}
            
            <div className="flex flex-wrap gap-1 mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
              {post.category && (
                <span className="text-gray-500 dark:text-gray-300 dark:font-medium text-xs">
                  {post.category.toLowerCase()}
                </span>
              )}
              {post.readingTime && post.category && (
                <span className="text-gray-500 dark:text-gray-300 dark:font-medium text-xs"> • {post.readingTime} min</span>
              )}
              {post.readingTime && !post.category && (
                <span className="text-gray-500 dark:text-gray-300 dark:font-medium text-xs">{post.readingTime} min</span>
              )}
            </div>
            
            {post.date && (
              <div className="text-xs text-gray-400 dark:text-gray-300 dark:font-medium">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            )}
          </a>
        ))}
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-300 dark:font-medium">no posts found in this category.</p>
        </div>
      )}
    </>
  );
};