import { useParams, Link, useNavigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { blogPosts } from '@/lib/mock-content';
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
export function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  if (!post) {
    return (
      <MainLayout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="text-4xl font-bold text-brand-text">Post not found</h1>
          <p className="mt-4 text-lg text-brand-text/80">The article you're looking for doesn't exist.</p>
          <Button asChild className="mt-8 bg-brand-text text-white hover:bg-brand-text/90">
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </MainLayout>
    );
  }
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Button variant="ghost" onClick={() => navigate('/blog')} className="mb-8 text-brand-text/80 hover:text-brand-accent hover:bg-brand-accent/10">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
          <p className="text-base text-brand-accent font-semibold">{post.date}</p>
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-brand-text leading-tight">{post.title}</h1>
          <p className="mt-4 text-lg text-brand-text/70">By {post.author}</p>
          <img src={post.imageUrl} alt={post.title} className="w-full h-auto object-cover rounded-lg my-8 md:my-12 shadow-lg" />
          <div
            className="prose prose-lg lg:prose-xl max-w-none text-brand-text/90 prose-headings:text-brand-text prose-strong:text-brand-text prose-a:text-brand-accent hover:prose-a:underline prose-blockquote:border-brand-accent prose-blockquote:text-brand-text/80 prose-li:marker:text-brand-accent"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>
      </div>
    </MainLayout>
  );
}