'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { ProjectModal } from '@/components/ui/ProjectModal';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialEmail, setInitialEmail] = useState('');

  const handleOpenModal = (email?: string) => {
    if (typeof email === 'string' && email.trim()) {
      setInitialEmail(email.trim());
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Check if current route is an admin or control panel page
  const isAdminPage = pathname.startsWith('/admin') || pathname.startsWith('/kx-control-857df3');

  if (isAdminPage) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Global Header on All Website Pages */}
      <Header onOpenModal={handleOpenModal} />

      {/* Main Page Content */}
      <main className="min-h-screen">
        {children}
      </main>

      {/* Global Footer on All Website Pages */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Floating Direct WhatsApp Button */}
      <WhatsAppButton />

      {/* Global 4-Step Project Inquiry Lead Modal */}
      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        initialEmail={initialEmail} 
      />
    </>
  );
}
