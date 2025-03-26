export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
          About Me
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
          Learn more about my background and experience
        </p>
      </div>
      
      <div className="mt-12 prose prose-lg dark:prose-invert mx-auto">
        <p>
          [Your introduction and background information goes here]
        </p>
        
        <h2>Experience</h2>
        <p>
          [Your work experience and achievements go here]
        </p>
        
        <h2>Skills</h2>
        <p>
          [Your technical skills and expertise go here]
        </p>
        
        <h2>Education</h2>
        <p>
          [Your educational background goes here]
        </p>
      </div>
    </div>
  );
} 