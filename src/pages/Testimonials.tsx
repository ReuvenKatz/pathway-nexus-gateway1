
import { Card, CardContent } from '@/components/ui/card';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { useNavigate } from 'react-router-dom';

const Testimonials = () => {
  const navigate = useNavigate();
  
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Dr. Katz, When I started my doctoral program, I was sure it would be easy, I'll think about a research topic, I'll plan it, get the approval, perform successful research and publish. But as I advanced in the doctorate, I came to realize that the administrative aspect and the research itself are more complex than I thought. Not everything I managed to accomplish was worth publication. Also, the relationship with my adviser became challenging. The more I advanced, the more questions arose. Following the workshop attendance, and especially after the individual sessions with you, I understood that a solid doctorate research plan will allow me to anticipate challenges and prepare solutions in advance, that can be applied later when needed. My research includes two large studies. I learned from you how to work on both of them in parallel. I also learned how to incorporate into my research plan personal constraints, such as the birth of my child. Now I know how to follow the \"big picture\" of my research and at the same time also plan my daily chores… Having a solid plan helped me not only on the cognitive level of planning and executing, but also gave me peace of mind and deep confidence on the emotional level, that I previously lacked. Since our last meeting many unanticipated things popped up in my personal life, but the plan that I created with your help calmed me down and allowed me to reorganize my new focus. Now I understand that my adviser should be involved in this process and take part in it. Thank you,",
      author: "Ifat",
      position: "Department of Psychology"
    },
    {
      id: 2,
      rating: 5,
      text: "Hello Reuven, As doctoral students we often encounter moments of hopelessness and ask ourselves questions such as: 'Am I doing what I am expected to do?', 'Where am I headed?', 'How will I manage to do it?'  In the 'Managing Doctoral Research as a Project' workshop, I felt the 'you are not alone' phenomenon – the doctoral student experience of feeling alone can be handled effectively with the right skills. This workshop greatly expanded my understanding of the importance of time optimization as a PhD student.  I learned how to keep on focusing on the bigger picture – the end goal of writing a dissertation – while also modulating the work by breaking down the research process into smaller, 'manageable' projects, and setting realistic goals within the available time frame. Through the workshop, I gained day-to-day organizational skills and techniques. Besides the practical skills, the workshop gave me a stronger sense of direction and provided a quantitative way of planning and measuring the work. During the one-on-one meeting, you tailored your advice to my specific needs, and showed me how to be operational and how to handle communication with my advisor in a more effective and professional way. The workshop and the individualized meeting helped me regain my belief in what I am doing and know where I am headed to. I felt highly motivated to create my WBS, Gantt, and Master Plans, and this sense of ambition stays with me to this day.",
      author: "Brigitta",
      position: "PhD student in Linguistics"
    },
    {
      id: 3,
      rating: 5,
      text: "Hi Reuven, I really enjoyed the workshop. I found it especially interesting to interact with students from other faculties and see that we share similar challenges in the doctoral program. It was a great opportunity to present my research in front of an audience that was not familiar with my research topic! I showed my newly prepared plan to both my advisors. They agreed that it's very important to create a plan and follow it. I intend to update my plan once a semester, analyze in which points I did not meet my schedule and why, update my plan and discuss it with my advisors to get their approval for the changes. I've also shared topics from the workshop with my lab mates, and they're really interested in applying the methods you taught. Regards,",
      author: "Monica",
      position: "PhD candidate in Behavioral Sciences"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-algerian font-bold text-[#2E4A87] mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read what our clients say about their experience working with us. Their 
            success stories demonstrate the impact of our personalized consulting approach.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="border-t pt-4">
                  <p className="font-semibold text-[#2E4A87]">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Us CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-[#2E4A87] mb-6">
            Contact Us
          </h2>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-[#2E4A87] hover:bg-[#1e3a6f] text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Testimonials;
