import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { services } from '@/lib/mock-content';
import { motion, Variants } from 'framer-motion';
import { Megaphone, Users, PenTool, Clapperboard, Mic, Star } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
const iconMap: { [key: string]: React.ElementType } = {
  Megaphone,
  Users,
  PenTool,
  Clapperboard,
  Mic,
};
export function ServicesPage() {
  const storytellingService = services.find(s => s.title === 'Storytelling');
  const otherServices = services.filter(s => s.title !== 'Storytelling');
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        <div className="py-16 md:py-24 lg:py-32 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text tracking-tight"
          >
            Our Expertise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-brand-text/80"
          >
            We offer a comprehensive suite of services designed to build, enhance, and protect your brand's reputation through powerful storytelling and strategic media engagement.
          </motion.p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16 md:pb-24 lg:pb-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {storytellingService && (
            <motion.div className="md:col-span-2 lg:col-span-3" variants={itemVariants}>
              <Card className="h-full bg-gradient-to-br from-brand-accent/10 to-brand-bg border-brand-accent/30 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-brand-accent text-white text-xs font-bold uppercase px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  <span>Enterprise Focus</span>
                </div>
                <CardHeader className="p-8">
                  <div className="mb-4">
                    <PenTool className="w-12 h-12 text-brand-accent" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-brand-text">{storytellingService.title}</CardTitle>
                  <CardDescription className="text-lg text-brand-text/80 pt-2 leading-relaxed max-w-4xl">
                    {storytellingService.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          )}
          {otherServices.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div key={service.title} variants={itemVariants}>
                <Card className="h-full bg-white/50 border-brand-accent/20 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardHeader className="p-8">
                    <div className="mb-4">
                      {IconComponent && <IconComponent className="w-12 h-12 text-brand-accent" />}
                    </div>
                    <CardTitle className="text-2xl font-bold text-brand-text">{service.title}</CardTitle>
                    <CardDescription className="text-base text-brand-text/80 pt-2 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </MainLayout>
  );
}