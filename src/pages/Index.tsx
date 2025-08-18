import ScrollToTopButton from '@/components/ScrollToTopButton';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-primary/20 backdrop-blur-sm rounded-lg px-8 py-4 inline-block mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Success in PhD</h1>
          </div>
        </div>
      </div>

      {/* Framed Section */}
      <div className="relative w-full py-12 px-6" style={{backgroundImage: 'url(/lovable-uploads/419c667a-c2d0-4edd-877e-a5d3c1b79406.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-aptos text-primary mb-4">
            PhD GATEWAY CONSULTING
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            Professional guidance for completing the doctorate and building your career post-graduation. 
            Offered by Dr. Hila Katz and Dr. Reuven Katz, author of the book <em>Shorten the Time to Doctorate</em>.
          </p>
        </div>
      </div>

      {/* Horizontal line */}
      <div className="border-b border-border mx-4 sm:mx-8 lg:mx-16 my-8"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Hi, I am Reuven. I am an academic guide and counselor for doctoral students and PhDs
            </h2>
          </div>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I am an experienced Coach and Counselor, who specializes in working with doctoral students who are ready to be empowered and make positive changes.
            </p>
            
            <p>
              Doctoral research and writing a thesis is a challenge. Doctoral students are expected to complete an original research project on their own, sometimes without having the tools to organize it. I help graduate students to manage their research projects: improve relationships with their adviser, plan and execute project tasks, build solid work habits, identify situations of getting into trouble and propose ways to overcome them. My clients gain confidence and take action that moves them towards successful completion of the doctorate.
            </p>
            
            <p>
              For the last 20 years, I observed and studied management patterns among doctoral students in many academic disciplines and in several countries.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
            <Link to="/about">About Us</Link>
          </Button>
        </div>
      </div>
      
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
