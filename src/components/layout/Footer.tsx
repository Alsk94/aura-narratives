import { Link } from 'react-router-dom';
import { Feather, Twitter, Linkedin, Instagram } from 'lucide-react';
const footerLinks = [
  { name: 'Services', href: '/services' },
  { name: 'About Us', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];
const socialLinks = [
  { icon: Twitter, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Instagram, href: '#' },
];
export function Footer() {
  return (
    <footer className="bg-brand-bg border-t border-brand-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold font-sans text-brand-text">
              <Feather className="w-7 h-7 text-brand-accent" />
              Aura Narratives
            </Link>
            <p className="text-base text-brand-text/80">
              Crafting stories that resonate and strategies that deliver.
            </p>
          </div>
          <div className="md:justify-self-center">
            <h3 className="text-lg font-semibold text-brand-text mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-base text-brand-text/80 hover:text-brand-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:justify-self-end">
            <h3 className="text-lg font-semibold text-brand-text mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-brand-text/80 hover:text-brand-accent transition-colors">
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-brand-accent/20 text-center text-brand-text/60">
          <p>&copy; {new Date().getFullYear()} Aura Narratives. All Rights Reserved.</p>
          <p className="mt-2 text-sm">Built with ❤️ at Cloudflare</p>
        </div>
      </div>
    </footer>
  );
}