'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaClock, FaTag, FaArrowRight } from 'react-icons/fa';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  readTime: string;
  tags: string[];
  category: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'vertex-ai-journey',
    title: 'My Journey with Google Vertex AI: From Confusion to Confidence',
    excerpt: 'Exploring the complexities of Google\'s Vertex AI platform and how I overcame the initial learning curve to build scalable ML pipelines.',
    content: 'When I first encountered Google Vertex AI, I was both excited and overwhelmed. The platform promised to simplify machine learning workflows, but the initial setup and configuration felt like navigating a maze...',
    coverImage: '/images/blog/vertex-ai.svg',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['Machine Learning', 'Google Cloud', 'Vertex AI', 'ML Pipelines'],
    category: 'Cloud & AI',
    author: 'Ana Sharma'
  },
  {
    id: 'aws-lambda-challenges',
    title: 'AWS Lambda: The Good, The Bad, and The Unexpected',
    excerpt: 'A deep dive into my experiences with AWS Lambda, including performance optimization, cold starts, and cost management strategies.',
    content: 'AWS Lambda has been a game-changer for serverless architecture, but it comes with its own set of challenges. From cold start issues to memory optimization, here\'s what I learned...',
    coverImage: '/images/blog/aws-lambda.svg',
    date: '2024-01-10',
    readTime: '12 min read',
    tags: ['AWS', 'Serverless', 'Lambda', 'Performance'],
    category: 'Cloud Computing',
    author: 'Ana Sharma'
  },
  {
    id: 'apache-airflow-mastery',
    title: 'Mastering Apache Airflow: Orchestrating Complex Data Workflows',
    excerpt: 'How I learned to design and implement robust data pipelines using Apache Airflow, including best practices and common pitfalls.',
    content: 'Apache Airflow has become the de facto standard for workflow orchestration in data engineering. But mastering it requires understanding not just the basics, but also advanced concepts...',
    coverImage: '/images/blog/airflow.svg',
    date: '2024-01-05',
    readTime: '15 min read',
    tags: ['Data Engineering', 'Apache Airflow', 'ETL', 'Workflows'],
    category: 'Data Engineering',
    author: 'Ana Sharma'
  },
  {
    id: 'kubernetes-deep-dive',
    title: 'Kubernetes Deep Dive: Lessons from Production Deployments',
    excerpt: 'Real-world insights from deploying and managing Kubernetes clusters in production environments.',
    content: 'Kubernetes is powerful, but production deployments reveal challenges that tutorials don\'t cover. From resource management to monitoring, here are the lessons I learned...',
    coverImage: '/images/blog/kubernetes.svg',
    date: '2023-12-28',
    readTime: '18 min read',
    tags: ['Kubernetes', 'DevOps', 'Container Orchestration', 'Production'],
    category: 'DevOps',
    author: 'Ana Sharma'
  },
  {
    id: 'gcp-vs-aws-comparison',
    title: 'GCP vs AWS: A Developer\'s Perspective After Using Both',
    excerpt: 'Comparing Google Cloud Platform and AWS from a developer\'s viewpoint, including pricing, features, and developer experience.',
    content: 'Having worked extensively with both GCP and AWS, I\'ve developed preferences for different use cases. Here\'s my honest comparison based on real project experience...',
    coverImage: '/images/blog/gcp-aws.svg',
    date: '2023-12-20',
    readTime: '10 min read',
    tags: ['GCP', 'AWS', 'Cloud Comparison', 'Developer Experience'],
    category: 'Cloud Computing',
    author: 'Ana Sharma'
  },
  {
    id: 'react-performance-optimization',
    title: 'React Performance Optimization: Beyond the Basics',
    excerpt: 'Advanced techniques for optimizing React applications, including code splitting, memoization, and bundle analysis.',
    content: 'Performance optimization in React goes far beyond just using React.memo. Here are advanced techniques I\'ve used to significantly improve application performance...',
    coverImage: '/images/blog/react-performance.svg',
    date: '2023-12-15',
    readTime: '14 min read',
    tags: ['React', 'Performance', 'Frontend', 'Optimization'],
    category: 'Frontend Development',
    author: 'Ana Sharma'
  }
];

const categories = ['All', 'Cloud Computing', 'Data Engineering', 'DevOps', 'Frontend Development', 'Cloud & AI'];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl mb-4">
          Words & Ideas
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Stories, lessons, and things I'm learning along the way. Thanks for reading!
        </p>
      </div>
      
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
            onClick={() => setSelectedPost(post)}
          >
            {/* Cover Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={post.coverImage}
                alt={post.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                style={{ height: '100%', width: '100%' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-400/10 z-10" />
            </div>

            {/* Content */}
          <div className="p-6">
              {/* Category Badge */}
              <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-100 dark:bg-purple-900/50 dark:text-purple-400 rounded-full mb-3">
                {post.category}
              </span>

              {/* Title */}
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {post.title}
            </h2>

              {/* Excerpt */}
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded"
                  >
                    {tag}
                  </span>
                ))}
                {post.tags.length > 3 && (
                  <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded">
                    +{post.tags.length - 3}
                  </span>
                )}
              </div>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <FaCalendar className="mr-1" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center">
                    <FaClock className="mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Cover Image */}
              <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
                <img
                  src={selectedPost.coverImage}
                  alt={selectedPost.title}
                  className="object-cover w-full h-full"
                  style={{ height: '100%', width: '100%' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-400/10 z-10" />
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                ×
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Header */}
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-purple-600 bg-purple-100 dark:bg-purple-900/50 dark:text-purple-400 rounded-full mb-4">
                  {selectedPost.category}
                </span>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedPost.title}
                </h1>
                <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <span className="flex items-center">
                    <FaCalendar className="mr-2" />
                    {formatDate(selectedPost.date)}
                  </span>
                  <span className="flex items-center">
                    <FaClock className="mr-2" />
                    {selectedPost.readTime}
                  </span>
                  <span className="flex items-center">
                    <FaTag className="mr-2" />
                    {selectedPost.author}
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {selectedPost.content}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-4">
                  This is a preview of the full blog post. The complete article would include detailed explanations, code examples, and real-world insights from my experience with {selectedPost.tags[0].toLowerCase()}.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center space-x-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-2 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Close
                </button>
                <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  Read Full Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 