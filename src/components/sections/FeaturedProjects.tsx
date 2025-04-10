import Link from 'next/link';
import { FaFigma, FaCodepen, FaNetworkWired, FaLockOpen, FaFire } from 'react-icons/fa';
import ProjectThumbnail from '../ui/ProjectThumbnail';
import { ReactNode } from 'react';

interface Project {
  title: string;
  description: string;
  color: string;
  icon: ReactNode;
  technologies: string[];
  link: string;
}

const uxProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with a focus on user experience and accessibility.',
    color: '#4c51bf',
    icon: <FaFigma className="h-6 w-6" />,
    technologies: ['Figma', 'User Research', 'Prototyping'],
    link: 'https://figma.com/file/project1'
  },
  {
    title: 'Task Management App',
    description: 'Intuitive task management application designed for productivity and team collaboration.',
    color: '#805ad5',
    icon: <FaFigma className="h-6 w-6" />,
    technologies: ['Figma', 'UX Design', 'User Testing'],
    link: 'https://figma.com/file/project2'
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website showcasing UX design work and case studies.',
    color: '#6b46c1',
    icon: <FaFigma className="h-6 w-6" />,
    technologies: ['Figma', 'Interaction Design', 'Visual Design'],
    link: 'https://figma.com/file/project3'
  }
];

const cyberProjects = [
  {
    title: 'Network Traffic Visualization',
    description: 'Interactive visualization showing real-time network traffic patterns, packet flow, and connection states using HTML5 Canvas animations.',
    color: '#2b6cb0',
    icon: <FaNetworkWired className="h-6 w-6" />,
    technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3'],
    link: 'https://codepen.io/anasharma7/pen/RwXxBVN'
  },
  {
    title: 'Encryption/Decryption Simulator',
    description: 'Visual demonstration of encryption and decryption processes with interactive key generation and data transformation visualization.',
    color: '#805ad5',
    icon: <FaLockOpen className="h-6 w-6" />,
    technologies: ['JavaScript', 'CSS3', 'SVG'],
    link: 'https://codepen.io/anasharma7/pen/xxvpJdm'
  },
  {
    title: 'Firewall Simulator',
    description: 'Interactive simulation of firewall rules and packet filtering, demonstrating how network security policies are enforced.',
    color: '#e53e3e',
    icon: <FaFire className="h-6 w-6" />,
    technologies: ['JavaScript', 'CSS3', 'HTML5'],
    link: 'https://codepen.io/anasharma7/pen/GRVyBEp'
  }
];

const ProjectCard = ({ project, type }: { project: Project; type: 'ux' | 'cyber' }) => {
  return (
    <Link
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative overflow-hidden">
        <ProjectThumbnail 
          title={project.title} 
          color={project.color} 
          icon={project.icon}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-2 py-1 text-sm font-medium text-primary-600 bg-primary-100 dark:bg-primary-900/50 dark:text-primary-400 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center text-sm text-primary-600 dark:text-primary-400">
          {type === 'ux' ? (
            <FaFigma className="mr-2" />
          ) : (
            <FaCodepen className="mr-2" />
          )}
          View {type === 'ux' ? 'Prototype' : 'Project'}
        </div>
      </div>
    </Link>
  );
};

const FeaturedProjects = () => {
  return (
    <div className="relative bg-white dark:bg-gray-900 py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-red-200 dark:bg-red-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-200 dark:bg-green-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-3000" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-200 dark:bg-yellow-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-1000" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Check out some of my recent work
          </p>
        </div>

        {/* UX/UI Projects Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            UX/UI & HCI Projects
          </h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {uxProjects.map((project) => (
              <ProjectCard key={project.title} project={project} type="ux" />
            ))}
          </div>
        </div>

        {/* Cyber Projects Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Interactive Security Visualizations
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
            Explore these interactive demonstrations that visualize key cybersecurity concepts. From network traffic patterns to encryption processes and firewall operations, these visualizations help understand complex security protocols through engaging animations and simulations.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cyberProjects.map((project) => (
              <ProjectCard key={project.title} project={project} type="cyber" />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="https://codepen.io/anasharma7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
            >
              <FaCodepen className="mr-2 h-5 w-5" />
              View More Codepen Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects; 