
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, useNavigate } from 'react-router-dom';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const AboutReuven = () => {
  const navigate = useNavigate();

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error('Image failed to load:', e.currentTarget.src);
    console.log('Attempting to load image from:', e.currentTarget.src);
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.log('Image loaded successfully:', e.currentTarget.src);
  };

  const handleContactReuven = () => {
    navigate('/contact');
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-[#2E4A87] mb-6">
            About Reuven
          </h1>
          <h2 className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic Consultant for Doctoral Students and PhDs
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Photo */}
          <div className="lg:col-span-1">
            <div className="rounded-lg aspect-[3/4] overflow-hidden" style={{width: '80%'}}>
              <img 
                src="/lovable-uploads/003dc3c9-28c4-4919-9a1a-b5f1d39221b9.png" 
                alt="Reuven Katz - Academic Coach & Consultant"
                className="w-full h-full object-cover"
                onError={handleImageError}
                onLoad={handleImageLoad}
                loading="eager"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700">
                My academic career spans over two decades in research and higher education. Over the years, many students have approached me for help and guidance in completing the dissertation. This led me to develop a methodology for teaching effective doctoral research management. I also provide guidance to recent PhD graduates as they explore career opportunities and transition back into the professional workforce. My consulting approach is built upon years of experience, empathy for the challenges faced by doctoral candidates and graduates, and strategies proven to be effective.
              </p>

              <p className="text-gray-700">
                My educational background includes a BSc and MSc from the Technion, Israel Institute of Technology, a PhD in Engineering from the University of Michigan, and an Executive MBA from Tel Aviv University. I served as a Research Scientist at the University of Michigan before joining the faculty of the Technion as a Professor of Mechanical Engineering.
              </p>

              <p className="text-gray-700">
                I have worked with doctoral students from diverse disciplines and institutions, providing individualized one-on-one consulting. Throughout my career, I have conducted workshops for doctoral students in the United States, Israel, Italy, and Poland. This international perspective has deepened my understanding of the shared universal challenges facing doctoral students. Students who attended my workshops and consulted with me consistently reported increased clarity about their research direction, enhanced confidence in their abilities, and the development of concrete, actionable plans for completing the dissertation and moving forward with their careers.
              </p>

              <p className="text-gray-700">
                As PhD consultant, I now collaborate with my daughter Hila, whose background in arts, humanities and education compliments my own.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                className="bg-[#2E4A87] hover:bg-[#1e3a6f] text-white px-8 py-3"
                onClick={handleContactReuven}
              >
                Contact Reuven
              </Button>
              <Button asChild variant="outline" className="border-[#2E4A87] text-[#2E4A87] hover:bg-[#2E4A87] hover:text-white px-8 py-3">
                <Link to="/schedule">
                  Schedule a Meeting
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Publications Section */}
        <div className="mt-16">
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle className="text-3xl font-serif text-[#2E4A87]">Publications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Book Section */}
              <div>
                <h3 className="text-xl font-serif font-bold text-[#2E4A87] mb-4">Book</h3>
                <p className="text-gray-700">
                  Katz, R. (2009). <em>Shorten the Time to Doctorate: A Guide to Managing a Ph.D. as a Project</em>. AuthorHouse.
                </p>
              </div>

              {/* Journal Articles Section */}
              <div>
                <h3 className="text-xl font-serif font-bold text-[#2E4A87] mb-4">Journal Articles</h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Katz, R. (2016). Challenges in doctoral research project management: A comparative study. <em>International Journal of Doctoral Studies</em>, 11, 105-125.
                  </p>
                  <p>
                    Katz, R. (2018). Crises in a doctoral research project: A comparative study. <em>International Journal of Doctoral Studies</em>, 13, 211-231. <a href="https://doi.org/10.28945/4044" className="text-[#2E4A87] hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.28945/4044</a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default AboutReuven;
