import { FaCode, FaServer, FaMobile, FaLightbulb } from 'react-icons/fa';

const skills = [
  {
    icon: <FaCode className="h-8 w-8" />,
    title: 'Frontend Excellence',
    description: 'Creating responsive, accessible, and performant user interfaces with modern frameworks like React and Next.js.',
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    icon: <FaServer className="h-8 w-8" />,
    title: 'Backend Proficiency',
    description: 'Building robust server-side applications with Node.js, Express, and various databases including MongoDB and PostgreSQL.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: <FaMobile className="h-8 w-8" />,
    title: 'Cross-Platform Development',
    description: 'Developing applications that work seamlessly across web, mobile, and desktop platforms.',
    gradient: 'from-pink-500 to-red-500'
  },
  {
    icon: <FaLightbulb className="h-8 w-8" />,
    title: 'Problem-Solving Mindset',
    description: 'Approaching complex challenges with creativity and analytical thinking to deliver innovative solutions.',
    gradient: 'from-red-500 to-orange-500'
  }
];

const WhyHireMe = () => {
  return (
    <div className="relative bg-white dark:bg-gray-900 py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 -mt-20 -ml-20 w-80 h-80 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 dark:bg-pink-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      <div className="absolute bottom-0 right-20 w-72 h-72 bg-orange-200 dark:bg-orange-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-3000" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 sm:text-5xl">
            Crafting Digital Excellence
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            With a harmonious blend of technical precision and creative vision, I transform complex challenges into elegant digital solutions. 
            My approach weaves together cutting-edge technology with timeless design principles, creating experiences that resonate deeply 
            with users while delivering measurable business impact.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <div 
                key={skill.title}
                className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br ${skill.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {skill.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gradient-br from-blue-500 to-purple-500 rounded-2xl transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHireMe; 