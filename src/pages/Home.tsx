import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const Home = () => {
  return (
    <div className="bg-yellow-400">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white pt-16 lg:pt-24 pb-6 lg:pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-algerian text-black mb-6">
              PhD GATEWAY CONSULTING
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Professional guidance for completing the doctorate and advancing careers.
            </p>
            
            {/* Yellow Illustration */}
            <div className="mb-12">
              <img
                src="/lovable-uploads/79617020-94dd-435f-89b0-a5e1eb5fec83.png"
                alt="PhD Graduate Illustration"
                className="mx-auto w-[600px] h-[600px] object-contain"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[#2E4A87] hover:bg-[#1e3a6f] text-white px-8 py-3 text-lg">
                <Link to="/services">
                  Explore Our Services
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-[#2E4A87] text-[#2E4A87] hover:bg-[#2E4A87] hover:text-white px-8 py-3 text-lg">
                <Link to="/contact">
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Consultants Section */}
      <section className="pt-6 lg:pt-10 pb-16 lg:pb-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Reuven Card */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-algerian font-bold text-[#2E4A87] mb-4">
                  About Dr. Reuven Katz
                </h3>
                <div className="mb-6"></div>
                <Button asChild className="bg-[#2E4A87] hover:bg-[#1e3a6f] text-white">
                  <Link to="/about">
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Hila Card */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-algerian font-bold text-[#2E4A87] mb-4">
                  About Dr. Hila Katz
                </h3>
                <div className="mb-6"></div>
                <Button asChild className="bg-[#2E4A87] hover:bg-[#1e3a6f] text-white">
                  <Link to="/about">
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
