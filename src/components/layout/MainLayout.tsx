import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Toaster } from '@/components/ui/sonner';
type MainLayoutProps = {
  children: React.ReactNode;
};
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-text">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Toaster richColors closeButton />
    </div>
  );
}