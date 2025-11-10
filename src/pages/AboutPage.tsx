import { MainLayout } from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
export function AboutPage() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 sm:py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text tracking-tight">
              We Believe in the Power of Story
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-brand-text/80 leading-relaxed">
              At Aura Narratives, we are more than just a consultancy; we are architects of perception, champions of authenticity, and partners in your success.
            </p>
          </motion.div>
          <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
                alt="Team collaborating in a modern office"
                className="rounded-lg shadow-2xl object-cover aspect-[4/3]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="space-y-6 text-lg text-brand-text/90 leading-loose"
            >
              <h2 className="text-3xl font-bold text-brand-text">Our Mission</h2>
              <p>
                Our mission is to empower visionary brands and leaders to command their narrative. We cut through the noise of the modern media landscape to build lasting influence and meaningful connections. We believe that a well-crafted story is the most powerful tool for change, growth, and impact.
              </p>
              <p>
                Founded on the principles of integrity, strategy, and creativity, Aura Narratives was born from a desire to bring a more human-centric approach to public relations and media engagement. We saw a world saturated with fleeting trends and hollow buzz, and we knew there was a better way.
              </p>
            </motion.div>
          </div>
          <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="space-y-6 text-lg text-brand-text/90 leading-loose md:order-2"
            >
              <h2 className="text-3xl font-bold text-brand-text">Our Approach</h2>
              <p>
                We are strategic partners, not just service providers. Our process begins with a deep dive into your world—your vision, your challenges, your audience. We listen intently to understand the unique 'aura' of your brand.
              </p>
              <p>
                From there, we blend time-tested public relations principles with innovative digital strategies to create bespoke campaigns that deliver measurable results. We don't believe in one-size-fits-all solutions. Every client, every story, every challenge is unique, and our approach reflects that.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="md:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="Strategic planning session with sticky notes"
                className="rounded-lg shadow-2xl object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}