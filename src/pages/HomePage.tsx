import { Link } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { services, testimonials, blogPosts } from '@/lib/mock-content';
import { ArrowRight, Quote, Megaphone, Users, PenTool, Clapperboard, Mic } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';
const iconMap: { [key: string]: React.ElementType } = {
  Megaphone,
  Users,
  PenTool,
  Clapperboard,
  Mic,
};
export function HomePage() {
  const featuredPosts = blogPosts.slice(0, 2);
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-brand-bg py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-brand-accent/10 rounded-full -translate-x-1/3 -translate-y-1/3" style={{ filter: 'blur(100px)' }}></div>
        <div className="absolute bottom-0 right-0 bg-brand-text/5 rounded-full translate-x-1/3 translate-y-1/3" style={{ filter: 'blur(100px)' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-text tracking-tight leading-tight"
          >
            Crafting Narratives That Captivate & Compel
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-brand-text/80 leading-relaxed"
          >
            Aura Narratives is a premier consultancy dedicated to shaping powerful stories and forging impactful media connections for visionary brands.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="bg-brand-text text-white hover:bg-brand-text/90 rounded-full px-10 py-4 text-lg font-semibold transition-transform hover:scale-105 w-full sm:w-auto">
              <Link to="/contact">Start Your Story</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-brand-text text-brand-text hover:bg-brand-text hover:text-white rounded-full px-10 py-4 text-lg font-semibold transition-all w-full sm:w-auto">
              <Link to="/services">Explore Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text">Our Core Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-text/80">
              Strategic solutions to elevate your brand's voice and impact.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="text-center p-8 h-full bg-transparent border-none shadow-none">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-brand-accent/10 rounded-full">
                        {IconComponent && <IconComponent className="w-10 h-10 text-brand-accent" />}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-brand-text">{service.title}</h3>
                    <p className="mt-2 text-base text-brand-text/80">{service.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="link" className="text-lg text-brand-accent hover:underline">
              <Link to="/services">View All Services <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text">What Our Clients Say</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-8 bg-white/50 border-brand-accent/20 shadow-lg">
                  <CardContent className="p-0">
                    <Quote className="w-8 h-8 text-brand-accent/50 mb-4" />
                    <p className="text-lg text-brand-text/90 italic">"{testimonial.quote}"</p>
                    <div className="mt-6">
                      <p className="font-bold text-brand-text">{testimonial.author}</p>
                      <p className="text-sm text-brand-text/70">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Featured Blog Posts Section */}
      <section className="py-16 md:py-24 bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text">From Our Blog</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-text/80">
              The latest insights in media, storytelling, and brand strategy.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredPosts.map((post) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full flex flex-col bg-white/50 border-brand-accent/20 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-brand-text">{post.title}</h3>
                    <p className="mt-2 text-base text-brand-text/80 flex-grow">{post.excerpt}</p>
                    <div className="mt-4">
                      <Link to={`/blog/${post.slug}`} className="font-semibold text-brand-accent hover:underline flex items-center">
                        Read More <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="link" className="text-lg text-brand-accent hover:underline">
              <Link to="/blog">Visit The Blog <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}