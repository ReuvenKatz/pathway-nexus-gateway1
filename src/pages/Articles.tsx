import { Link } from 'react-router-dom';
import { articles } from '@/data/articles';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Articles = () => {
  const sortedArticles = [...articles].sort((a, b) => Date.parse(b.publishDate) - Date.parse(a.publishDate));
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wider text-[#2E4A87]">
            OUR ARTICLES
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of articles presenting management methods and supplementary academic topics essential for doctoral success.
          </p>
        </div>
      </section>

      {/* Articles Table Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-20 font-semibold text-[#2E4A87]">#</TableHead>
                      <TableHead className="font-semibold text-[#2E4A87]">Title</TableHead>
                      <TableHead className="font-semibold text-[#2E4A87]">Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sortedArticles.map((article, index) => (
                      <TableRow key={article.id} className="hover:bg-gray-50">
                        <TableCell className="font-medium text-gray-600">
                          {sortedArticles.length - index}
                        </TableCell>
                        <TableCell>
                          <Link 
                            to={`/articles/${article.id}`}
                            className="text-[#2E4A87] hover:text-[#1E3A72] font-medium hover:underline transition-colors duration-200"
                          >
                            {article.title}
                          </Link>
                        </TableCell>
                        <TableCell className="text-gray-700">
                          {article.description}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTopButton />
    </main>
  );
};

export default Articles;
