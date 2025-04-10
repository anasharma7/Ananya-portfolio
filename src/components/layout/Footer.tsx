import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6">
            <Link
              href="https://github.com/anasharma7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            >
              <span className="sr-only">GitHub</span>
              <FaGithub className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/anasharma15/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            >
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="h-6 w-6" />
            </Link>
            <Link
              href="https://x.com/the_root_cipher"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            >
              <span className="sr-only">Twitter</span>
              <FaTwitter className="h-6 w-6" />
            </Link>
          </div>
          <p className="mt-8 text-base text-gray-400">
            &copy; {new Date().getFullYear()} Ana Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 