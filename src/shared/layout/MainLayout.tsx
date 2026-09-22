import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Toast } from '../components/Toast';

interface MainLayoutProps {
  children: React.ReactNode;
}

/**
 * Root shell: sticky header, grid background, content area, footer, and global toast.
 */
export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div className="min-h-screen bg-black text-neutral-100 flex flex-col font-sans selection:bg-white selection:text-black">
    <Header />
    <main className="flex-1 relative">
      {/* Subtle engineering grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </main>
    <Footer />
    <Toast />
  </div>
);
