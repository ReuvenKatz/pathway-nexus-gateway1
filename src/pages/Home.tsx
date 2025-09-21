import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const Home = () => {
  return (
    <div className="bg-yellow-400">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white pt-8 lg:pt-12 pb-6 lg:pb-10" aria-labelledby="hero-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 mb-8">
              <div
                className="w-full py-10 px-6 text-center"
                style={{
                  backgroundImage: 'url(/lovable-uploads/logo-website.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                role="img"
                aria-label="Academic background with books and graduation elements"
              >
                <h1 id="hero-heading" className="text-4xl lg:text-6xl font-aptos italic text-black mb-4">
                  PhD GATEWAY CONSULTING
                </h1>
                <p className="text-xl lg:text-2xl text-gray-700">
                  Professional guidance for completing the doctoral research and building your career post-graduation. Offered by Dr. Hila Katz and Dr. Reuven Katz, author of the book <em>Shorten the Time to Doctorate</em>.
                </p>
              </div>
            </div>
            
            {/* Horizontal line */}
            <div className="border-b border-gray-200 w-full max-w-3xl mx-auto mb-8" role="separator" aria-hidden="true"></div>
            
            {/* Dr. Reuven Katz Section */}
            <section className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto text-left" aria-labelledby="dr-reuven-intro">
              {/* Left side - Dr. Reuven Katz intro and photo */}
              <div className="flex flex-col items-start lg:w-2/5">
                <p id="dr-reuven-intro" className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-4 max-w-[322px]">
                  Hi, I am Dr. Reuven Katz. I am an academic coach and consultant for doctoral students and PhDs, offering help in completing the doctorate and building your career post-graduation.
                </p>
                <img
                  src="/lovable-uploads/466312e0-95c0-480b-9d77-cecc0f4ddf22.png"
                  alt="Professional headshot of Dr. Reuven Katz, PhD consultant and academic coach, smiling and wearing business attire"
                  className="w-full max-w-[322px] rounded-lg shadow-lg"
                />
              </div>
              
              {/* Right side - About Dr. Reuven Katz */}
              <div className="lg:w-3/5">
                <div className="text-base text-gray-700 leading-relaxed space-y-4" role="article" aria-labelledby="dr-reuven-about">
                  <p>
                    I am an experienced PhD coach and consultant, and for the past two decades I've specialized in working with doctoral students who are ready to be empowered and make positive changes.
                  </p>
                  <p>
                    Pursuing doctoral research and writing a thesis/dissertation present significant challenge. Doctoral students are expected to complete an original research project on their own, sometimes without having the tools to organize it. I help graduate students manage their research projects: plan and execute project tasks in a systematic manner, build solid work habits, improve the relationship with their advisor, and overcome setbacks. My clients gain the confidence to take action that moves them forward, towards successful completion of the doctorate.
                  </p>
                  <p>
                    My background and experience drive my work with clients individually and in groups. For the past 20 years, I have taught dozens of workshops for doctoral students in the United States, Italy, Poland, Israel, and the United Kingdom. I have observed and studied management patterns among doctoral students in many academic disciplines across several countries. I've found that these patterns are quite similar among most doctoral students. Doctoral candidates spend years studying their academic discipline; however, most of them have not been trained in managing their research tasks. As a result, many candidates encounter obstacles and get stuck in their work. My goal is to assist doctoral students. I've helped dozens of students break through the obstacles that were holding them back in their doctoral journey. Let me help you learn and develop better ways to handle the issues that are standing in the way of your goals, i.e. to graduate successfully, get the Ph.D., and move on with your life and career. Besides guidance on completing the doctorate, I also offer consulting in building your career post-graduation, as elaborated on this website.
                  </p>
                  <p>
                    As a retired Professor of Mechanical Engineering at the Technion, Israel Institute of Technology, I have been working with students of engineering, science and architecture. I have recently been collaborating with Dr. Hila Katz in my consulting practice, as her background is in the humanities, arts and education. You're welcome to read more about both of us at the link below. Have a look around this site and get in touch to see how we can assist you.
                  </p>
                  <p className="text-lg font-bold text-[#2E4A87] mt-6">
                    On the Contact Us page please fill out the contact form and get a FREE 20-minute initial consultation to discuss your current status and needs.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-12" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="sr-only">Learn more about our services</h2>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            <Link to="/about" aria-describedby="cta-description">
              <span id="cta-description" className="sr-only">Navigate to learn more about Dr. Hila Katz and Dr. Reuven Katz</span>
              About Us
            </Link>
          </Button>
        </div>
      </section>

      <ScrollToTopButton />
    </div>
  );
};

export default Home;
