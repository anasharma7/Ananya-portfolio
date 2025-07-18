import AnimatedBackground from '@/components/AnimatedBackground';

export default function About() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-8 py-20 flex flex-col items-center text-center bg-white/70 dark:bg-slate-900/70 rounded-3xl shadow-2xl backdrop-blur-md border border-blue-200/30 dark:border-blue-900/30">
        {/* Profile Photo Placeholder */}
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-300 dark:border-blue-700 shadow-lg mb-8 bg-gradient-to-br from-blue-200 via-indigo-200 to-white flex items-center justify-center">
          {/* Replace src below with your real photo when ready */}
          <img src="/images/ana-profile.jpg" alt="Ana Sharma" className="object-cover w-full h-full" />
        </div>
        <h1 className="text-4xl font-extrabold text-blue-900 dark:text-blue-200 mb-4 font-handwriting">Hi, I’m Ana Sharma</h1>
        <p className="text-xl text-blue-700 dark:text-blue-300 mb-6 font-semibold">Artist at heart, technologist by trade.</p>
        <p className="text-lg text-gray-700 dark:text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in-up">
          I see the world as a canvas—whether I’m painting, designing, or coding, I’m always searching for beauty, meaning, and connection. My journey in tech began with a love for art and storytelling, and I bring that creative spirit to every project I touch. I believe technology is most powerful when it feels human, and I strive to build digital experiences that are as thoughtful and expressive as a work of art.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-6">
          <a href="mailto:ana@email.com" className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold shadow-lg hover:scale-105 transition-transform">Contact Me</a>
          <a href="/projects" className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold shadow-lg hover:scale-105 transition-transform">See My Work</a>
        </div>
      </div>
    </div>
  );
} 