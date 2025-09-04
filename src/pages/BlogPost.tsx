import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import { getBlogById } from '@/data/blogs';
import { Button } from '@/components/ui/button';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  
  if (!id) {
    return <Navigate to="/blogs" replace />;
  }

  const blog = getBlogById(id);

  if (!blog) {
    return (
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blogs">
            <Button variant="default" className="bg-[#2E4A87] hover:bg-[#1E3A72]">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blogs
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
          <Link to="/blogs" className="inline-block mb-6">
            <Button variant="ghost" className="text-[#2E4A87] hover:text-[#1E3A72] hover:bg-blue-50">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blogs
            </Button>
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight font-serif">
            {blog.title}
          </h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <Calendar className="mr-2 h-5 w-5" />
            <span>
              Published on {new Date(blog.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            {blog.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <div 
              className="text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </article>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="bg-gray-50 py-12 border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Want to read more insights?
          </h3>
          <Link to="/blogs">
            <Button variant="default" className="bg-[#2E4A87] hover:bg-[#1E3A72]">
              View All Blog Posts
            </Button>
          </Link>
        </div>
      </section>

      <ScrollToTopButton />
    </main>
  );
};

export default BlogPost;