import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/golfData';
import { GalleryItem } from '../types/golf';
import { SwingComparisonSection } from './SwingComparisonSection';
import { X, ChevronLeft, ChevronRight, Eye, Calendar, Sparkles } from 'lucide-react';

interface GalleryPageProps {
  onGoToReservation?: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onGoToReservation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: '전체 사진' },
    { id: 'swing', label: '스윙 분석 & 테크' },
    { id: 'lesson', label: '1:1 레슨 현장' },
    { id: 'facility', label: '스튜디오 & 시설' },
    { id: 'field', label: '필드 라운드' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  return (
    <div className="py-12 lg:py-16 bg-white animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 tracking-wider uppercase mb-2">
            <span>PHOTO & VIDEO SHOWCASE</span>
            <span aria-hidden="true">·</span>
            <span>GALLERY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            미스터리 골프스쿨 갤러리
          </h1>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            수강생들의 드라마틱한 스윙 비포&애프터 비교 영상부터 정밀 스윙 분석 현장, 프로 코치와의 1:1 레슨 순간, 최첨단 시설과 명문 골프 코스 라운드 모습을 생생하게 확인하세요.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* 1. Feature: Students' Swing Development 'Before & After' Comparison Video Section */}
        <SwingComparisonSection onGoToReservation={onGoToReservation} />

        {/* 2. Photo & Facility Showcase Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pt-4 border-t border-stone-200">
          <div>
            <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ACADEMY PHOTO ARCHIVE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
              현장 스케치 및 스튜디오 갤러리
            </h3>
          </div>

          {/* Categories */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl overflow-x-auto max-w-full shrink-0">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-white text-stone-950 font-bold shadow-sm'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item: GalleryItem, idx: number) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-4/3 bg-stone-900 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="w-10 h-10 rounded-full bg-white/90 text-stone-900 flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                    {item.categoryLabel}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-stone-400 mb-2 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </span>
                    <span className="text-emerald-800 font-semibold">{item.tag}</span>
                  </div>
                  <h4 className="text-base font-bold text-stone-900 group-hover:text-emerald-800 transition-colors mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 cursor-pointer z-10"
            aria-label="닫기"
          >
            <X className="w-7 h-7" />
          </button>

          <button
            type="button"
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 rounded-full bg-stone-900/60 hover:bg-stone-800 cursor-pointer z-10"
            aria-label="이전 사진"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 rounded-full bg-stone-900/60 hover:bg-stone-800 cursor-pointer z-10"
            aria-label="다음 사진"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 text-white">
            <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[70vh] w-auto object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 bg-stone-900">
              <div className="flex items-center justify-between text-xs text-emerald-400 mb-1">
                <span>{filteredItems[lightboxIndex].categoryLabel} · {filteredItems[lightboxIndex].tag}</span>
                <span className="text-stone-400 font-mono">{filteredItems[lightboxIndex].date}</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {filteredItems[lightboxIndex].title}
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {filteredItems[lightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
