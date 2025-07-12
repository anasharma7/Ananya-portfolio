import Navbar from './Navbar';
import Footer from './Footer';
import InteractiveCursor from '../InteractiveCursor';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <InteractiveCursor />
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 