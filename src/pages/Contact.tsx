import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useEffect, useState } from 'react';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  // Form states for Reuven
  const [reuvenForm, setReuvenForm] = useState({
    name: '',
    email: '',
    field: '',
    stage: '',
    message: ''
  });

  // Form states for Hila
  const [hilaForm, setHilaForm] = useState({
    name: '',
    email: '',
    field: '',
    stage: '',
    message: ''
  });

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const handleSubmit = async (contactType: 'reuven' | 'hila') => {
    const formData = contactType === 'reuven' ? reuvenForm : hilaForm;
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error", 
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          ...formData,
          contactType
        }
      });

      if (error) {
        throw error;
      }

      // Reset form
      if (contactType === 'reuven') {
        setReuvenForm({ name: '', email: '', field: '', stage: '', message: '' });
      } else {
        setHilaForm({ name: '', email: '', field: '', stage: '', message: '' });
      }

      toast({
        title: "Message Sent!",
        description: `Your message has been sent to ${contactType === 'reuven' ? 'Reuven' : 'Hila'}. We'll get back to you soon!`,
      });

    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-algerian font-bold text-[#2E4A87] mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take the next step in your doctoral journey? We're here to help you succeed.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="reuven" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="reuven" className="text-lg">Contact Reuven</TabsTrigger>
            <TabsTrigger value="hila" className="text-lg">Contact Hila</TabsTrigger>
          </TabsList>

          <TabsContent value="reuven" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Reuven's Photo */}
              <div className="lg:col-span-1 flex justify-center">
                <div className="w-96 h-96">
                  <img 
                    src="/lovable-uploads/6d130454-1c86-4057-96ba-a375ced6f78e.png" 
                    alt="Reuven Katz - Academic Consultant"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif text-[#2E4A87]">Get In Touch With Us</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="reuven-name">Full Name *</Label>
                      <Input 
                        id="reuven-name" 
                        placeholder="Your full name"
                        value={reuvenForm.name}
                        onChange={(e) => setReuvenForm({...reuvenForm, name: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="reuven-email">Email Address *</Label>
                      <Input 
                        id="reuven-email" 
                        type="email" 
                        placeholder="your.email@example.com"
                        value={reuvenForm.email}
                        onChange={(e) => setReuvenForm({...reuvenForm, email: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="reuven-field">Field of Study</Label>
                      <Input 
                        id="reuven-field" 
                        placeholder="e.g., Computer Science, Psychology, etc."
                        value={reuvenForm.field}
                        onChange={(e) => setReuvenForm({...reuvenForm, field: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="reuven-stage">Current Stage</Label>
                      <select 
                        id="reuven-stage" 
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={reuvenForm.stage}
                        onChange={(e) => setReuvenForm({...reuvenForm, stage: e.target.value})}
                      >
                        <option value="">Select your current stage</option>
                        <option value="early-phd">Early PhD (1st-2nd year)</option>
                        <option value="mid-phd">Mid PhD (3rd-4th year)</option>
                        <option value="late-phd">Late PhD (5th+ year)</option>
                        <option value="writing">Writing dissertation</option>
                        <option value="recent-grad">Recent PhD graduate</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="reuven-message">How can we help you? *</Label>
                      <Textarea 
                        id="reuven-message" 
                        placeholder="Tell us about your specific challenges or goals..."
                        rows={4}
                        value={reuvenForm.message}
                        onChange={(e) => setReuvenForm({...reuvenForm, message: e.target.value})}
                      />
                    </div>
                    
                    <Button 
                      className="w-full bg-[#2E4A87] hover:bg-[#1e3a6f] text-white"
                      onClick={() => handleSubmit('reuven')}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </CardContent>
                </Card>

              </div>

              {/* Session Info */}
              <div className="space-y-8">
                {/* What to Expect */}
                <Card className="shadow-lg bg-gray-50">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-[#2E4A87]">What to Expect</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-700">
                      <li>• Personalized guidance based on your specific field and stage</li>
                      <li>• Strategic planning for your research and career goals</li>
                      <li>• Practical tools and frameworks for PhD success</li>
                      <li>• One-on-one consulting tailored to your needs</li>
                      <li>• Clear action steps and follow-up recommendations</li>
                      <li>• After the first session we will decide together who will be your consultant</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Session Details */}
                <Card className="shadow-lg bg-gray-50">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-[#2E4A87]">Session Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-gray-700">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Duration & Format</h4>
                        <p className="text-sm">50-minute one-on-one video consultation via Zoom/Teams</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Scheduling</h4>
                        <p className="text-sm">Flexible scheduling</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="hila" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Hila's Photo */}
              <div className="lg:col-span-1 flex justify-center">
                <div className="w-96 h-96">
                  <img 
                    src="/lovable-uploads/56736c88-2950-47c0-b73a-aa3c8aa3edca.png" 
                    alt="Hila - Academic Consultant"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
              
              {/* Contact Form for Hila */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif text-[#2E4A87]">Get In Touch with Hila</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="hila-name">Full Name *</Label>
                      <Input 
                        id="hila-name" 
                        placeholder="Your full name"
                        value={hilaForm.name}
                        onChange={(e) => setHilaForm({...hilaForm, name: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="hila-email">Email Address *</Label>
                      <Input 
                        id="hila-email" 
                        type="email" 
                        placeholder="your.email@example.com"
                        value={hilaForm.email}
                        onChange={(e) => setHilaForm({...hilaForm, email: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="hila-field">Field of Study</Label>
                      <Input 
                        id="hila-field" 
                        placeholder="e.g., Computer Science, Psychology, etc."
                        value={hilaForm.field}
                        onChange={(e) => setHilaForm({...hilaForm, field: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="hila-stage">Current Stage</Label>
                      <select 
                        id="hila-stage" 
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={hilaForm.stage}
                        onChange={(e) => setHilaForm({...hilaForm, stage: e.target.value})}
                      >
                        <option value="">Select your current stage</option>
                        <option value="early-phd">Early PhD (1st-2nd year)</option>
                        <option value="mid-phd">Mid PhD (3rd-4th year)</option>
                        <option value="late-phd">Late PhD (5th+ year)</option>
                        <option value="writing">Writing dissertation</option>
                        <option value="recent-grad">Recent PhD graduate</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="hila-message">How can Hila help you? *</Label>
                      <Textarea 
                        id="hila-message" 
                        placeholder="Tell us about your specific challenges or goals..."
                        rows={4}
                        value={hilaForm.message}
                        onChange={(e) => setHilaForm({...hilaForm, message: e.target.value})}
                      />
                    </div>
                    
                    <Button 
                      className="w-full bg-[#2E4A87] hover:bg-[#1e3a6f] text-white"
                      onClick={() => handleSubmit('hila')}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </CardContent>
                </Card>

              </div>

              {/* Session Info for Hila */}
              <div className="space-y-8">
                {/* What to Expect for Hila */}
                <Card className="shadow-lg bg-gray-50">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-[#2E4A87]">What to Expect</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-700">
                      <li>• Personalized guidance based on your specific field and stage focused on Humanities and Arts</li>
                      <li>• Strategic planning for your research</li>
                      <li>• Practical tools and frameworks for PhD success</li>
                      <li>• One-on-one consulting tailored to your needs</li>
                      <li>• Clear action steps and follow-up recommendations</li>
                      <li>• After the first session we will decide together who will be your consultant</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Session Details for Hila */}
                <Card className="shadow-lg bg-gray-50">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-[#2E4A87]">Session Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-gray-700">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Duration & Format</h4>
                        <p className="text-sm">50-minute one-on-one video consultation via Zoom/Teams</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Scheduling</h4>
                        <p className="text-sm">Flexible scheduling</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg bg-gray-50">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                    <p className="text-gray-600 text-sm">
                      We typically respond to inquiries within 24-48 hours. For urgent matters, please mention it in your message.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Contact;
