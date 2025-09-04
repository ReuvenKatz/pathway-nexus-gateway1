export interface Blog {
  id: string;
  title: string;
  description: string;
  content: string;
  publishDate: string;
}

export const blogs: Blog[] = [
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