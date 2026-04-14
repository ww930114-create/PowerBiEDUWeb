import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 flex flex-col">
      {/* 頂部導覽列 */}
      <Navigation />

      {/* 主要內容區域 */}
      <main className="flex-1">
        {children}
      </main>

      {/* 底部頁尾 */}
      <Footer />
    </div>
  );
}
