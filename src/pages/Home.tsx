import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const Home = () => {
  return (
    <div className="bg-yellow-400">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white pt-8 lg:pt-12 pb-6 lg:pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-algerian text-black mb-6">
              PhD GATEWAY CONSULTING
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Professional guidance for completing the doctorate and building your career post-graduation. Offered by Dr. Hila Katz and Dr. Reuven Katz, author of the book <em>Shorten the Time to Doctorate</em>.
            </p>
            
            {/* Horizontal line */}
            <div className="border-b border-gray-200 w-full max-w-3xl mx-auto"></div>
          </div>
        </div>
      </section>

      <ScrollToTopButton />
    </div>
  );
};

export default Home;
