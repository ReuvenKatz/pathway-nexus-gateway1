
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const Services = () => {
  const individualConsultingServices = [
    "Receiving support from caring, experienced, and objective mentors",
    "Structuring your research and setting realistic, achievable goals",
    "Choosing the right advisor, or improving communication with your current one",
    "Developing effective time-management skills and daily routines",
    "Finding a healthy work-life balance",
    "Identifying and addressing potential crises before they escalate",
    "Maintaining steady progress on your dissertation or thesis"
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-aptos font-bold text-[#2E4A87] mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support for doctoral students and PhD graduates at every stage of their academic journey.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="individual" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2 h-12 bg-gray-100 p-1 rounded-lg">
              <TabsTrigger 
                value="individual" 
                className="text-sm font-medium py-2 px-4 rounded-md transition-all data-[state=active]:bg-[#2E4A87] data-[state=active]:text-white data-[state=active]:shadow-sm"
              >
                Individual Consulting
              </TabsTrigger>
              <TabsTrigger 
                value="career" 
                className="text-sm font-medium py-2 px-4 rounded-md transition-all data-[state=active]:bg-[#2E4A87] data-[state=active]:text-white data-[state=active]:shadow-sm"
              >
                Career Guidance
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Individual Consulting Tab Content */}
          <TabsContent value="individual" className="space-y-8">
            {/* Main Content Card */}
            <Card className="mb-12 shadow-lg">
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-6 text-gray-700">
                  <p>
                    Pursuing a PhD can be both rewarding and overwhelming. The experience of feeling stressed or stuck is shared by many students. Our consulting services are designed to help you gain clarity, structure, and confidence for your work.
                    Doctoral studies come with a unique set of challenges: managing independent research, writing a dissertation, meeting expectations to publish, and maintaining motivation over the long term. Students often struggle with isolation, financial pressures, and personal challenges that can enhance their stress. For international students, there is the added challenge of cultural adjustment far from home.
                    If you're having difficulty making progress, our aim is to help you move forward.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* How Can We Support You Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-[#2E4A87] mb-8 text-center">
                How Can We Support You
              </h2>
              <p className="text-lg text-gray-600 text-center mb-8">
                Through personalized consulting, we help PhD students with:
              </p>

              <div className="grid lg:grid-cols-2 gap-6">
                {individualConsultingServices.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-[#2E4A87] mr-3 mt-1 flex-shrink-0">•</span>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Message */}
            <Card className="bg-gray-50">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center">
                  <Button asChild className="bg-[#2E4A87] hover:bg-[#1e3a6f] text-white px-8 py-3">
                    <Link to="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Career Guidance Tab Content */}
          <TabsContent value="career" className="space-y-8">
            {/* Service Description */}
            <Card className="mb-12 shadow-lg">
              <CardContent className="p-8 lg:p-12">
                <p className="text-gray-700 mb-6">
                  This service is offered by Dr. Reuven Katz to doctoral candidates who anticipate defending their dissertation within the next six months, as well as recent PhD graduates who are exploring their professional opportunities and career trajectories.
                </p>

                <p className="text-gray-700 mb-6">
                  The consulting is based in Reuven's extensive experience across diverse sectors and roles. His career has encompassed positions as a research engineer and R&D director in industry, co-founding a technology startup, conducting advanced research as a scientist at the University of Michigan, and serving as a faculty member at the Technion. This multifaceted background provides insights into the varied career pathways available to PhD holders.
                </p>

                <p className="text-gray-700 mb-6">
                  While Reuven works with individuals from all academic disciplines, his expertise is particularly well-suited for PhDs in Engineering, Sciences, and Architecture. Reuven is committed to sharing his experience and providing guidance to help identify career opportunities that align with one's strengths, personal values, and professional aspirations.
                </p>

                <p className="text-gray-700">
                  Through a collaborative process, questions that shape career decisions are investigated, including whether academia represents the optimal path for your goals, or simply the most familiar option. In the sessions, the strategic value of pursuing postdoctoral positions is explored, alongside opportunities for researchers within high-technology industries, and an assessment of how PhDs are valued and utilized in the private sector.
                </p>
              </CardContent>
            </Card>


            {/* Bottom Note */}
            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <div className="flex justify-center">
                  <Button asChild className="bg-[#2E4A87] hover:bg-[#1e3a6f] text-white px-8 py-3">
                    <Link to="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Services;
