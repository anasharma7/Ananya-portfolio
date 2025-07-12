import Link from 'next/link';
import { FaFigma, FaCodepen, FaNetworkWired, FaLockOpen, FaFire } from 'react-icons/fa';
import ProjectThumbnail from '../ui/ProjectThumbnail';
import { ReactNode } from 'react';
import ScrollAnimation from '../ScrollAnimation';

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
    description: 'Interactive visualization showing real-time network traffic patterns and security analysis.',
    color: '#e53e3e',
    icon: <FaNetworkWired className="h-6 w-6" />,
    technologies: ['JavaScript', 'D3.js', 'Cybersecurity'],
    link: 'https://codepen.io/anasharma7/pen/network-viz'
  },
  {
    title: 'Encryption Process Demo',
    description: 'Educational demonstration of encryption and decryption processes with visual feedback.',
    color: '#38a169',
    icon: <FaLockOpen className="h-6 w-6" />,
    technologies: ['JavaScript', 'Crypto.js', 'Animation'],
    link: 'https://codepen.io/anasharma7/pen/encryption-demo'
  },
  {
    title: 'Firewall Simulation',
    description: 'Interactive firewall simulation showing packet filtering and security rule enforcement.',
    color: '#dd6b20',
    icon: <FaFire className="h-6 w-6" />,
    technologies: ['JavaScript', 'Canvas API', 'Security'],
    link: 'https://codepen.io/anasharma7/pen/firewall-sim'
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
              className="px-2 py-1 text-sm font-medium text-purple-600 bg-purple-100 dark:bg-purple-900/50 dark:text-purple-400 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center text-sm text-purple-600 dark:text-purple-400">
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
    <ScrollAnimation>
      <div id="projects" className="py-20 bg-white dark:bg-gray-900">
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
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200"
              >
                <FaCodepen className="mr-2 h-5 w-5" />
                View More Codepen Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default FeaturedProjects; 