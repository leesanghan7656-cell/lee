import React, { useState } from 'react';
import { PROGRAMS } from '../data/golfData';
import { Program } from '../types/golf';
import { Clock, Calendar, Check, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

interface CurriculumProps {
  onSelectProgram: (programTitle: string) => void;
}

export const Curriculum: React.FC<CurriculumProps> = ({ onSelectProgram }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>('starter-101');

  const categories = [
    { id: 'all', label: '전체 과정' },
    { id: 'beginner', label: '입문 & 비기너' },
    { id: 'breaker', label: '100타 격파' },
    { id: 'single', label: '싱글 플레이어' },
    { id: 'field', label: '필드 레슨' },
  ];

  const filteredPrograms =
    activeCategory === 'all'
      ? PROGRAMS
      : PROGRAMS.filter((p: Program) => p.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="curriculum" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-emerald-800 tracking-wider uppercase mb-2">
              CURRICULUM ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900" style={{ textWrap: 'balance' }}>
              목표 수준별 맞춤 마스터 커리큘럼
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl">
              모든 과정은 TrackMan 4 데이터 측정과 KPGA 투어 프로 1:1 전담 지도로 진행되며, 학생의 신체 유연성과 구력에 맞추어 주차별 훈련 강도가 조절됩니다.
            </p>
          </div>

          {/* Interactive filter tabs / segmented controls */}
          <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-white text-stone-900 shadow-sm font-semibold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredPrograms.map((prog: Program) => {
            const isExpanded = expandedId === prog.id;
            return (
              <div
                key={prog.id}
                className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 flex flex-col justify-between hover:border-stone-300 transition-colors shadow-sm"
              >
                <div>
                  {/* Clean unboxed metadata with separators */}
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-3">
                    <span className="font-semibold text-emerald-800">{prog.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {prog.duration}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {prog.sessions}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
                    {prog.title}
                  </h3>
                  <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                    {prog.subtitle}
                  </p>

                  <div className="p-3.5 bg-stone-50 rounded-xl mb-6 text-xs text-stone-700">
                    <span className="font-semibold text-stone-900">추천 대상: </span>
                    {prog.target}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                      주요 레슨 포인트
                    </div>
                    {prog.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                        <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expandable Weekly Plan */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-stone-100 mb-6 space-y-3">
                      <div className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                        주차별 세부 훈련 로드맵
                      </div>
                      <div className="space-y-2">
                        {prog.weeklyPlan.map((wp, i) => (
                          <div
                            key={i}
                            className="p-3 bg-stone-50 rounded-lg border border-stone-100 text-xs"
                          >
                            <div className="flex items-center justify-between text-stone-900 font-semibold mb-1">
                              <span>{wp.week}: {wp.topic}</span>
                            </div>
                            <div className="text-stone-600">
                              {wp.drill}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => toggleExpand(prog.id)}
                    className="text-xs font-medium text-stone-600 hover:text-stone-900 flex items-center gap-1 cursor-pointer py-1"
                  >
                    <span>{isExpanded ? '세부 일정 닫기' : '주차별 로드맵 보기'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectProgram(prog.title)}
                    className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>이 과정 예약 상담</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
