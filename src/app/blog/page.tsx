export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
          Blog
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
          Thoughts, tutorials, and insights about web development
        </p>
      </div>
      
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Blog post cards will go here */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Coming Soon
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Blog posts are coming soon. Stay tuned!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 