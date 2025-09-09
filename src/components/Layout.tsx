
import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SkipNavigation from './SkipNavigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      <SkipNavigation />
      <Header />
      <main id="main-content" className="flex-1" role="main" tabIndex={-1}>
        {children}
      </main>
      {isHomePage && <Footer />}
    </div>
  );
};

export default Layout;
