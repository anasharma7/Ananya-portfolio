import ProjectCard from '@/components/ui/ProjectCard';

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of your first project.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/project1.jpg',
    projectUrl: '#',
  },
  {
    title: 'Project 2',
    description: 'A brief description of your second project.',
    technologies: ['Next.js', 'Node.js', 'MongoDB'],
    imageUrl: '/project2.jpg',
    projectUrl: '#',
  },
  {
    title: 'Project 3',
    description: 'A brief description of your third project.',
    technologies: ['Python', 'Django', 'PostgreSQL'],
    imageUrl: '/project3.jpg',
    projectUrl: '#',
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
          My Projects
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
          A collection of my work and personal projects
        </p>
      </div>
      
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
} 