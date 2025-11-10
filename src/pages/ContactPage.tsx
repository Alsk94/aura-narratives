import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { api } from '@/lib/api-client';
import type { Inquiry } from '@shared/types';
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});
type ContactFormValues = z.infer<typeof contactFormSchema>;
export function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });
  const onSubmit = async (data: ContactFormValues) => {
    try {
      await api<Inquiry>('/api/inquiries', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      toast.success('Message sent!', {
        description: 'Thank you for reaching out. We will get back to you shortly.',
      });
      reset();
    } catch (error) {
      toast.error('Failed to send message.', {
        description: 'Please try again later or contact us directly via email.',
      });
    }
  };
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 sm:py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text tracking-tight">
              Get in Touch
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-brand-text/80">
              We'd love to hear about your project. Let's connect and start crafting your narrative.
            </p>
          </motion.div>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <div className="bg-brand-accent/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-text">Email</h3>
                  <p className="text-brand-text/80">hello@auranarratives.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-brand-accent/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-text">Phone</h3>
                  <p className="text-brand-text/80">(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-brand-accent/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-text">Office</h3>
                  <p className="text-brand-text/80">123 Storyteller Lane, Narrative City, 10001</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-8 bg-white/50 rounded-lg border border-brand-accent/20 shadow-lg">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-medium text-brand-text">Full Name</Label>
                  <Input id="name" placeholder="Your Name" {...register('name')} className="bg-white" />
                  {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-medium text-brand-text">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" {...register('email')} className="bg-white" />
                  {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base font-medium text-brand-text">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your project..." rows={5} {...register('message')} className="bg-white" />
                  {errors.message && <p className="text-sm text-red-600">{errors.message.message}</p>}
                </div>
                <Button type="submit" size="lg" className="w-full bg-brand-text text-white hover:bg-brand-text/90 text-lg" disabled={isSubmitting}>
                  {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Send Message'}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}