import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getArticleById } from '@/data/articles';
import { Button } from '@/components/ui/button';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const Article = () => {
  const { id } = useParams<{ id: string }>();
  
  if (!id) {
    return <Navigate to="/articles" replace />;
  }

  const article = getArticleById(id);

  if (!article) {
    return (
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/articles">
            <Button variant="default" className="bg-[#2E4A87] hover:bg-[#1E3A72]">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Button>
          </Link>
        </div>
        <ScrollToTopButton />
      </main>
    );
  }

  return (
    <main className="flex-1">
      {/* Header Section */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/articles" className="inline-block mb-6">
            <Button variant="ghost" className="text-[#2E4A87] hover:text-[#1E3A72] hover:bg-blue-50">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Button>
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight font-serif">
            {article.title}
          </h1>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            {article.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <div 
              className="text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="bg-gray-50 py-12 border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            On the Contact Us page please fill out the contact form and get a FREE 20-minute initial consultation to discuss your current status and needs.
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/articles">
              <Button variant="default" className="bg-[#2E4A87] hover:bg-[#1E3A72]">
                View All Articles
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-[#2E4A87] text-[#2E4A87] hover:bg-[#2E4A87] hover:text-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ScrollToTopButton />
    </main>
  );
};

export default Article;
