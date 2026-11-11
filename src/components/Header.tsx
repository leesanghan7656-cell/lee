import React, { useState } from 'react';
import { PageView } from '../types/golf';
import { Menu, X, Calendar } from 'lucide-react';

interface HeaderProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenBookingModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenBookingModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageView; label: string }[] = [
    { id: 'home', label: '홈' },
    { id: 'about', label: '소개' },
    { id: 'services', label: '서비스' },
    { id: 'gallery', label: '갤러리' },
    { id: 'reviews', label: '수강생 후기' },
    { id: 'reservation', label: '온라인 예약·문의' },
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group cursor-pointer text-left"
        >
          <div className="w-9 h-9 rounded-lg bg-emerald-900 flex items-center justify-center text-white font-bold text-sm tracking-wider shadow-sm group-hover:bg-emerald-800 transition-colors">
            ML
          </div>
          <span className="text-xl font-bold tracking-tight text-stone-900">
            미스터리 골프스쿨
          </span>
        </button>

        {/* Zone 2: 5-6 single-line navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1 relative ${
                  isActive
                    ? 'text-emerald-900 font-bold'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-800 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleNavClick('reservation')}
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-800 rounded-lg hover:bg-emerald-900 transition-colors shadow-sm whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5 text-emerald-300" />
            <span>온라인 예약 신청</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleNavClick('reservation')}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-emerald-800 rounded-md sm:hidden whitespace-nowrap"
          >
            예약
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-4 space-y-2 animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                currentPage === item.id
                  ? 'bg-emerald-50 text-emerald-950 font-bold'
                  : 'text-stone-700 hover:bg-stone-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
            <span className="text-xs text-stone-500">천안 쌍용대로 66</span>
            <button
              type="button"
              onClick={() => handleNavClick('reservation')}
              className="px-4 py-2 text-xs font-semibold text-white bg-emerald-800 rounded-lg hover:bg-emerald-900"
            >
              예약 및 문의
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
