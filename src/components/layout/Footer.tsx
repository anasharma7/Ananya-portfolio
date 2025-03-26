import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { href: 'https://github.com', label: 'GitHub' },
    { href: 'https://linkedin.com', label: 'LinkedIn' },
    { href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400">
              © {currentYear} Your Name. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <span className="sr-only">{link.label}</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 