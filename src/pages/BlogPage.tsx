import { Link } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { blogPosts } from '@/lib/mock-content';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export function BlogPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 sm:py-20 md:py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text tracking-tight"
          >
            Insights & Ideas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-brand-text/80"
          >
            Explore our latest articles on storytelling, media strategy, and brand communication.
          </motion.p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16 sm:pb-20 md:pb-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.slug} variants={itemVariants}>
              <Card className="h-full flex flex-col bg-white/50 border-brand-accent/20 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-brand-text leading-tight">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-base text-brand-text/80">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link to={`/blog/${post.slug}`} className="flex items-center font-semibold text-brand-accent hover:underline">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MainLayout>
  );
}