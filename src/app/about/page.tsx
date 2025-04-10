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
          I am a passionate Full Stack Developer with a strong foundation in web development
          and a keen eye for creating exceptional user experiences. My journey in software
          development began with a curiosity for building things that make a difference.
        </p>
        
        <h2>Experience</h2>
        <p>
          I have worked on various projects ranging from e-commerce platforms to task
          management applications. My experience includes:
        </p>
        <ul>
          <li>Building responsive and user-friendly web applications</li>
          <li>Developing full-stack solutions using modern technologies</li>
          <li>Implementing authentication and authorization systems</li>
          <li>Creating real-time features using WebSocket</li>
          <li>Optimizing application performance and user experience</li>
        </ul>
        
        <h2>Skills</h2>
        <p>
          My technical expertise includes:
        </p>
        <ul>
          <li>Frontend: React, Next.js, TypeScript, Tailwind CSS</li>
          <li>Backend: Node.js, Express, Python, Django</li>
          <li>Databases: MongoDB, PostgreSQL</li>
          <li>Tools: Git, Docker, AWS</li>
          <li>Other: REST APIs, WebSocket, CI/CD</li>
        </ul>
        
        <h2>Education</h2>
        <p>
          Bachelor&apos;s Degree in Computer Science<br />
          [Your University Name]<br />
          [Graduation Year]
        </p>
      </div>
    </div>
  );
} 