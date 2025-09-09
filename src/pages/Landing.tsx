import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Mail, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
            Struggling with Your Doctoral Journey? Get Expert Guidance Today
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            PhD Gateway provides comprehensive support for doctoral students navigating research, 
            dissertation writing, and career planning with expert mentorship and proven strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link to="/contact">Get Your Free Consultation</Link>
            </Button>
            <a 
              href="https://PHDGATEWAY.COM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Globe className="h-5 w-5" />
              <span className="text-lg font-medium">Visit PHDGATEWAY.COM</span>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-foreground">
            Expert Support for Your Academic Success
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Research Guidance & Methodology Support
                </h3>
                <p className="text-muted-foreground">
                  Navigate complex research methodologies, develop robust frameworks, 
                  and ensure your research meets the highest academic standards.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Dissertation Writing & Structure Assistance
                </h3>
                <p className="text-muted-foreground">
                  Transform your research into a compelling, well-structured dissertation 
                  with expert guidance on academic writing and presentation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Academic Career Planning & Development
                </h3>
                <p className="text-muted-foreground">
                  Strategically plan your academic career path, build professional networks, 
                  and position yourself for success in academia or industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-8 text-foreground">
            Ready to Transform Your Doctoral Experience?
          </h2>
          
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-8 pb-6">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <a 
                    href="mailto:reuven.katz@gmail.com"
                    className="text-lg font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    reuven.katz@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center justify-center gap-3">
                  <Globe className="h-6 w-6 text-primary" />
                  <a 
                    href="https://PHDGATEWAY.COM" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    PHDGATEWAY.COM
                  </a>
                </div>
                
                <div className="bg-secondary/50 p-6 rounded-lg">
                  <p className="text-lg font-medium text-foreground mb-4">
                    Please fill the contact form and get FREE 20-minute initial consultation 
                    to discuss your current status and needs.
                  </p>
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link to="/contact">Start Your Free Consultation</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Landing;