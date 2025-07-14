
import { useEffect } from 'react';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const Schedule = () => {
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

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-algerian font-bold text-[#2E4A87] mb-6">
            Schedule with Reuven
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Book your consultation session with Reuven to discuss your academic goals and challenges.
          </p>
        </div>

        {/* Calendly Widget */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-[#2E4A87] mb-6 text-center">Schedule Your Session</h2>
          <p className="text-gray-600 text-center mb-6">Choose a convenient time for your consultation</p>
          
          {/* Calendly Embedded Widget */}
          <div className="calendly-inline-widget min-h-[650px] w-full" 
               data-url="https://calendly.com/reuven-katz/one-on-one-with-reuven"
               style={{ minWidth: '320px', height: '650px' }}>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Schedule;
