
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const AboutHila = () => {
  const navigate = useNavigate();

  const handleContactHila = () => {
    navigate('/contact');
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-[#2E4A87] mb-6">
            About Hila
          </h1>
          <h2 className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic Coach & Consultant for Doctoral Students and PhDs
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Photo */}
          <div className="lg:col-span-1">
            <div className="rounded-lg aspect-[3/4] overflow-hidden" style={{width: '80%'}}>
              <img 
                src="/lovable-uploads/081f4916-488f-4692-8248-1b59dc401d0a.png" 
                alt="Hila - Academic Coach & Consultant"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="prose prose-lg max-w-none space-y-4">
              <p className="text-gray-700">
                I provide strength-based coaching that includes tools for identifying and tracking your individual needs, goals and progress. I offer help navigating your professional relationships and gaining the necessary clarity for completing your dissertation.
              </p>

              <p className="text-gray-700">
                I am experienced with offering one-on-one support to students, having served as a teacher, instructor and mentor for over a decade in different settings and countries (England, The Netherlands, Israel, Canada and the US). My work has included developing educational programs and curricula and teaching at Columbia University's Teachers College, The University of Toronto, and Oranim College.
              </p>

              <p className="text-gray-700">
                My educational background includes Doctor of Education and Master of Education degrees from Teachers College, Columbia University; a master's degree in music from the Guildhall School of Music and Drama, London; and a B.A. focused on the humanities from the University of Haifa's Honors Program.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                className="bg-[#2E4A87] hover:bg-[#1e3a6f] text-white px-8 py-3"
                onClick={handleContactHila}
              >
                Contact Hila
              </Button>
              <Button asChild variant="outline" className="border-[#2E4A87] text-[#2E4A87] hover:bg-[#2E4A87] hover:text-white px-8 py-3">
                <Link to="/schedule">
                  Schedule a Meeting
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default AboutHila;
