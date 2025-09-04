export interface Blog {
  id: string;
  title: string;
  description: string;
  content: string;
  publishDate: string;
}

export const blogs: Blog[] = [
  {
    id: "1",
    title: "Essential Steps to PhD Success: A Complete Guide",
    description: "Discover the key strategies and mindset shifts needed to excel in your PhD journey from start to finish.",
    publishDate: "2024-01-15",
    content: `
      <div class="prose max-w-none">
        <h2>Introduction</h2>
        <p>Pursuing a PhD is one of the most challenging yet rewarding academic endeavors. This comprehensive guide will walk you through the essential steps to ensure your success throughout your doctoral journey.</p>
        
        <h2>1. Choose the Right Research Topic</h2>
        <p>Your research topic will be your companion for 3-7 years, so choose wisely. Consider these factors:</p>
        <ul>
          <li>Personal passion and interest</li>
          <li>Market relevance and future prospects</li>
          <li>Available resources and supervision</li>
          <li>Feasibility within your timeframe</li>
        </ul>
        
        <h2>2. Develop Strong Research Skills</h2>
        <p>Master the fundamental research methodologies relevant to your field. This includes:</p>
        <ul>
          <li>Literature review techniques</li>
          <li>Data collection and analysis</li>
          <li>Critical thinking and problem-solving</li>
          <li>Academic writing and presentation skills</li>
        </ul>
        
        <h2>3. Build Professional Networks</h2>
        <p>Networking is crucial for academic and career success. Attend conferences, join professional associations, and collaborate with peers in your field.</p>
        
        <h2>Conclusion</h2>
        <p>Success in a PhD program requires dedication, strategic planning, and continuous learning. With the right approach and mindset, you can achieve your doctoral goals and make meaningful contributions to your field.</p>
      </div>
    `
  },
  {
    id: "2",
    title: "Navigating Academic Writing: From Thesis to Publication",
    description: "Master the art of academic writing with proven strategies for crafting compelling research papers and dissertations.",
    publishDate: "2024-01-10",
    content: `
      <div class="prose max-w-none">
        <h2>The Foundation of Academic Writing</h2>
        <p>Academic writing is the cornerstone of scholarly communication. Whether you're working on your thesis or preparing manuscripts for publication, mastering this skill is essential for your success.</p>
        
        <h2>Structure and Organization</h2>
        <p>Every successful academic paper follows a clear structure:</p>
        <ol>
          <li><strong>Abstract:</strong> A concise summary of your research</li>
          <li><strong>Introduction:</strong> Set the context and research questions</li>
          <li><strong>Literature Review:</strong> Position your work within existing scholarship</li>
          <li><strong>Methodology:</strong> Explain your research approach</li>
          <li><strong>Results:</strong> Present your findings clearly</li>
          <li><strong>Discussion:</strong> Interpret and contextualize your results</li>
          <li><strong>Conclusion:</strong> Summarize key contributions and future directions</li>
        </ol>
        
        <h2>Writing Techniques</h2>
        <p>Develop your academic voice through:</p>
        <ul>
          <li>Clear, concise sentences</li>
          <li>Proper citation and referencing</li>
          <li>Logical flow between paragraphs</li>
          <li>Evidence-based arguments</li>
        </ul>
        
        <h2>From Thesis to Publication</h2>
        <p>Transform your thesis chapters into publishable papers by:</p>
        <ul>
          <li>Identifying the unique contribution of each chapter</li>
          <li>Tailoring content to specific journal audiences</li>
          <li>Collaborating with supervisors and colleagues</li>
          <li>Responding constructively to peer review feedback</li>
        </ul>
      </div>
    `
  },
  {
    id: "3",
    title: "The \"Hidden Task\"",
    description: "Doctoral candidates must complete two parallel tasks during their doctoral project the first one is research; the other is the \"hidden task\".",
    publishDate: "2025-07-24",
    content: `
      <div class="prose max-w-none">
        <p>One of the goals of this short article is to explain that you must complete two parallel tasks during your doctoral project: The first and most important task is your academic research and writing your dissertation! The other, parallel task is managing your research project efficiently, as presented in the following figure.</p>
        
        <div class="my-8 flex justify-center">
          <img src="/lovable-uploads/c419b618-7d31-46db-bb91-b4e0e2818e8e.png" alt="PhD thesis project diagram showing academic research tasks and project management tasks leading to successful project completion" class="max-w-full h-auto rounded-lg shadow-md" />
        </div>
        
        <p>Academic research tasks, in all their variety, are something that doctoral student have been learning to handle from their days in kindergarten to their master's degree. On the other hand, most doctoral students have never learned project management at all. It is a "hidden task" that no one ever told them about. As we explained in an earlier article, a Ph.D. is a research project and should be managed by applying project management methodologies and tools.</p>
        
        <p>Doctoral students that are unaware of this "hidden task" manage their work using common sense and intuition. Some are innately good managers and do very well; however, many others wind up wasting a lot of time and feeling confused, lost and even desperate.</p>
        
        <p>Our message to all doctoral students is simple: Be aware that, perhaps for the first time in your life, you are managing a significant and complex research project. You should invest several hours in learning the basic concepts of project management. Doing so will not make you a certified project manager. But you will understand the importance of handling your work methodically, learn and implement the rudimentary tools for managing your work, conduct and culminate your doctoral project more efficiently and less stressfully, and forever have these useful tools at your disposal.</p>
        
        <p>Project management methodologies and tools help the researcher plan and organize tasks, time and resources; however, they should not touch either the essence of the research or its results. These are simply generic tools aimed at improving the researcher's performance and helping them concentrate on the primary objectives of the thesis, instead of being preoccupied with many unproductive chores and frustrations that do not contribute to the primary effort.</p>
      </div>
    `
  }
];

export const getBlogById = (id: string): Blog | undefined => {
  return blogs.find(blog => blog.id === id);
};