import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Feather } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About Us', href: '/about' },
  { name: 'Blog', href: '/blog' },
];
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-brand-bg/80 backdrop-blur-lg border-b border-brand-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold font-sans text-brand-text hover:text-opacity-80 transition-colors">
            <Feather className="w-7 h-7 text-brand-accent" />
            Aura Narratives
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    'text-lg font-medium text-brand-text hover:text-brand-accent transition-colors relative after:content-[""] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-brand-accent after:scale-x-0 after:origin-left after:transition-transform',
                    isActive ? 'text-brand-accent' : 'after:hover:scale-x-100'
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button asChild size="lg" className="bg-brand-text text-white hover:bg-brand-text/90 rounded-full px-8 py-3 text-base font-semibold transition-transform hover:scale-105">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Button onClick={() => setIsMenuOpen(true)} variant="ghost" size="icon">
              <Menu className="h-8 w-8 text-brand-text" />
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-brand-bg z-50 p-4 md:hidden"
          >
            <div className="flex justify-end">
              <Button onClick={() => setIsMenuOpen(false)} variant="ghost" size="icon">
                <X className="h-8 w-8 text-brand-text" />
              </Button>
            </div>
            <nav className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'text-3xl font-bold text-brand-text hover:text-brand-accent transition-colors',
                      isActive && 'text-brand-accent'
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Button asChild size="lg" className="bg-brand-text text-white hover:bg-brand-text/90 rounded-full px-10 py-4 text-xl font-semibold mt-8" onClick={() => setIsMenuOpen(false)}>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}