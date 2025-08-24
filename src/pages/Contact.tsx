import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useEffect, useState } from 'react';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
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

  const handleSubmit = async () => {
    // Basic validation
    if (!formData.name || !formData.email || !formData.field || !formData.message) {
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
          contactType: 'general'
        }
      });

      if (error) {
        throw error;
      }

      // Reset form
      setFormData({ name: '', email: '', field: '', stage: '', message: '' });

      toast({
        title: "Message Sent!",
        description: "Your message has been sent. We'll get back to you soon!",
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
          <h1 className="text-4xl lg:text-5xl font-aptos font-bold text-[#2E4A87] mb-6">
            Contact Us
          </h1>
          <p className="text-lg font-bold text-[#2E4A87] max-w-3xl mx-auto">
            Fill out the "contact us" form below and get a FREE 20-minute initial consultation to discuss your current status and needs.
          </p>
        </div>

        <div className="w-full">
          <div className="flex justify-center">
            {/* Contact Form */}
            <div className="max-w-lg w-full">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-[#2E4A87]">Contact Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name" 
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="field">Field of Study *</Label>
                    <Input 
                      id="field" 
                      placeholder="e.g., Computer Science, Psychology, etc."
                      value={formData.field}
                      onChange={(e) => setFormData({...formData, field: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="stage">Current Stage</Label>
                    <select 
                      id="stage" 
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={formData.stage}
                      onChange={(e) => setFormData({...formData, stage: e.target.value})}
                    >
                      <option value="">Select your current stage</option>
                      <option value="early-phd">Early PhD (1st-2nd year)</option>
                      <option value="mid-phd">Mid PhD (3rd-4th year)</option>
                      <option value="late-phd">Late PhD (5th+ year)</option>
                      <option value="recent-grad">Recent PhD graduate</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">How can we help you? *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your specific challenges or goals..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  
                  <Button 
                    className="w-full bg-[#2E4A87] hover:bg-[#1e3a6f] text-white"
                    onClick={handleSubmit}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Contact;