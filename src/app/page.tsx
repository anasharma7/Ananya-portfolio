import HeroSection from '@/components/sections/HeroSection';
import ProjectCard from '@/components/ui/ProjectCard';

const featuredProjects = [
  {
    title: 'Project 1',
    description: 'A brief description of your first featured project.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/project1.jpg',
    projectUrl: '#',
  },
  {
    title: 'Project 2',
    description: 'A brief description of your second featured project.',
    technologies: ['Next.js', 'Node.js', 'MongoDB'],
    imageUrl: '/project2.jpg',
    projectUrl: '#',
  },
  {
    title: 'Project 3',
    description: 'A brief description of your third featured project.',
    technologies: ['Python', 'Django', 'PostgreSQL'],
    imageUrl: '/project3.jpg',
    projectUrl: '#',
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      
      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Here are some of my recent projects that showcase my skills and experience.
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
