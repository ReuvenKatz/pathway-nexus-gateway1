
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, useNavigate } from 'react-router-dom';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const About = () => {
  const navigate = useNavigate();

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error('Image failed to load:', e.currentTarget.src);
    console.log('Attempting to load image from:', e.currentTarget.src);
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.log('Image loaded successfully:', e.currentTarget.src);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-aptos font-bold text-[#2E4A87] mb-6">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our team of experienced academic consultants dedicated to helping doctoral students succeed.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="reuven" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2 h-12 bg-gray-100 p-1 rounded-lg">
              <TabsTrigger 
                value="reuven" 
                className="text-sm font-medium py-2 px-4 rounded-md transition-all data-[state=active]:bg-[#2E4A87] data-[state=active]:text-white data-[state=active]:shadow-sm"
              >
                About Reuven
              </TabsTrigger>
              <TabsTrigger 
                value="hila" 
                className="text-sm font-medium py-2 px-4 rounded-md transition-all data-[state=active]:bg-[#2E4A87] data-[state=active]:text-white data-[state=active]:shadow-sm"
              >
                About Hila
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Reuven Tab Content */}
          <TabsContent value="reuven" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left Column - Photo */}
              <div className="lg:col-span-1">
                <div className="rounded-lg aspect-[3/4] overflow-hidden" style={{width: '101%'}}>
                  <img 
                    src="/lovable-uploads/c079fde1-c57a-49b8-8d4a-58ba68a42096.png" 
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
                <div>
                  <h2 className="text-2xl font-serif font-bold text-[#2E4A87] mb-4">
                    Academic Coach and Consultant for Doctoral Students and PhDs
                  </h2>
                </div>

                <div className="prose prose-lg max-w-none space-y-4">
                  <p className="text-gray-700">
                    My academic career spans over two decades in research and higher education. Over the years, many students have approached me for help and guidance in completing their dissertations. This led me to develop a methodology for teaching effective doctoral research management.
                  </p>

                  <p className="text-gray-700">
                    I also provide guidance to recent PhD graduates as they explore career opportunities and transition back into the professional workforce. My counselling approach is built on years of experience, empathy for the challenges faced by doctoral students and graduates, and strategies proven to be effective.
                  </p>

                  <p className="text-gray-700">
                    My educational background includes a BSc and MSc in Engineering from the Technion, Israel Institute of Technology, a PhD in Engineering from the University of Michigan, and an Executive MBA from Tel Aviv University. I served as a Research Scientist at the University of Michigan, before joining the faculty of Technion as a Professor of Mechanical Engineering.
                  </p>

                  <p className="text-gray-700">
                    I have worked with doctoral students from diverse disciplines and institutions, providing individualized one-on-one coaching. Throughout my career, I have conducted workshops for doctoral students in Europe, the United States and Asia. Students who attended my workshops and consulted with me consistently reported increased clarity about their research direction, enhanced confidence in their abilities, and the development of concrete, actionable plans for completing the dissertation and moving forward with their careers.
                  </p>
                </div>
              </div>
            </div>

            {/* Publications Section */}
            <div className="mt-16">
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-3xl font-serif text-[#2E4A87]">Publications on this topic</CardTitle>
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
                        Katz, R. (2016). Challenges in doctoral research project management: A comparative study. <em>International Journal of Doctoral Studies</em>, <em>11</em>, 105-125.
                      </p>
                      <p>
                        Katz, R. (2018). Crises in a doctoral research project: A comparative study. <em>International Journal of Doctoral Studies</em>, <em>13</em>, 211-231. <a href="https://doi.org/10.28945/4044" className="text-[#2E4A87] hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.28945/4044</a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Hila Tab Content */}
          <TabsContent value="hila" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left Column - Photo */}
              <div className="lg:col-span-1">
                <div className="rounded-lg aspect-[3/4] overflow-hidden" style={{width: '101%'}}>
                  <img 
                    src="/lovable-uploads/081f4916-488f-4692-8248-1b59dc401d0a.png" 
                    alt="Hila - Academic Coach & Consultant"
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                    onLoad={handleImageLoad}
                    loading="eager"
                  />
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-[#2E4A87] mb-4">
                    Academic Consultant & Coach for Doctoral Students
                  </h2>
                </div>

                <div className="prose prose-lg max-w-none space-y-4">
                  <p className="text-gray-700">
                    I provide strength-based coaching that includes tools for identifying and tracking your individual needs, goals and progress. I offer help navigating your professional relationships and gaining the necessary clarity for completing your dissertation.
                  </p>

                  <p className="text-gray-700">
                    I am experienced with offering one-on-one support to students, having served as a teacher, instructor and mentor for over a decade in different settings and countries (England, The Netherlands, Israel, Canada and the US). My work has included developing educational programs and curricula and teaching at Columbia University's Teachers College, The University of Toronto, and Oranim College, Israel.
                  </p>

                  <p className="text-gray-700">
                    My educational background includes Doctor of Education and Master of Education degrees from Columbia University, NY; a master's degree in music (MMus) from the Guildhall School of Music and Drama, London; and a B.A. focused on the humanities from the University of Haifa's Honors Program.
                  </p>
                </div>

                {/* Services Button */}
                <div className="flex justify-start pt-6">
                  <Button asChild className="bg-[#2E4A87] hover:bg-[#1e3a6f] text-white px-8 py-3">
                    <Link to="/services">
                      Services
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default About;
