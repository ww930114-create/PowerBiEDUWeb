import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun, Search } from 'lucide-react';
import SearchBox from './SearchBox';
import CviLuxLogo from '../assets/CivLux-Logo.png';
import { useTheme } from "../contexts/ThemeContext";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      {/* 注意這裡：加上 relative，並移除原來的 justify-between */}
      <div className="container relative flex items-center h-16">
        
        {/* 左側區塊：Logo (設定 flex-1 靠左) */}
        <div className="flex-1 flex items-center justify-start">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <img
              src={CviLuxLogo}
              alt="CviLux Logo"
              className="w-16 h-16 object-contain"
            />
            <span className="text-foreground whitespace-nowrap hidden sm:inline-block">Power BI 教學中心</span>
          </Link>
        </div>

        {/* 中間區塊：Desktop Navigation (使用 absolute 強制絕對置中) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          <Link href="/introduction" className="text-foreground hover:text-primary transition font-medium">入門指南</Link>
          <Link href="/concepts/core" className="text-foreground hover:text-primary transition font-medium">核心概念</Link>
          <Link href="/concepts/visualization" className="text-foreground hover:text-primary transition font-medium">視覺化設計</Link>
          <Link href="/concepts/data-modeling" className="text-foreground hover:text-primary transition font-medium">資料建模</Link>
          <Link href="/scenarios" className="text-foreground hover:text-primary transition font-medium">應用情境</Link>
          <Link href="/support/faq" className="text-foreground hover:text-primary transition font-medium">常見問題</Link>
        </div>

        {/* 右側區塊：Actions (設定 flex-1 靠右) */}
        <div className="flex-1 flex items-center justify-end gap-2 sm:gap-4">
          <div className="hidden sm:block">
            <SearchBox />
          </div>
          
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-foreground">
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </Button>

          {/* 手機版漢堡選單 */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation (保留你的原本設定) */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 space-y-4">
            <div className="mb-4">
              <SearchBox />
            </div>
            <Link href="/introduction" className="block font-semibold text-foreground" onClick={() => setIsOpen(false)}>入門指南</Link>
            <Link href="/concepts/core" className="block font-semibold text-foreground" onClick={() => setIsOpen(false)}>核心概念</Link>
            <Link href="/concepts/visualization" className="block font-semibold text-foreground" onClick={() => setIsOpen(false)}>視覺化設計</Link>
            <Link href="/concepts/data-modeling" className="block font-semibold text-foreground" onClick={() => setIsOpen(false)}>資料建模</Link>
            <Link href="/scenarios" className="block font-semibold text-foreground" onClick={() => setIsOpen(false)}>應用情境</Link>
            <Link href="/support/faq" className="block font-semibold text-foreground" onClick={() => setIsOpen(false)}>常見問題</Link>
          </div>
        </div>
      )}
    </nav>
  );
}