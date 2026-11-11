import React, { useState } from 'react';
import { DETAILED_SERVICES } from '../data/golfData';
import { Program } from '../types/golf';
import { Clock, Calendar, Check, ArrowRight, ShieldCheck, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface ServicesPageProps {
  onSelectProgramForBooking: (programTitle: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectProgramForBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedSyllabus, setExpandedSyllabus] = useState<string | null>('service-beginner');

  const categories = [
    { id: 'all', label: '전체 프로그램' },
    { id: 'beginner', label: '초급반 (비기너)' },
    { id: 'breaker', label: '중급반 (100타 격파)' },
    { id: 'single', label: '고급반 (싱글 마스터)' },
    { id: 'custom', label: '맞춤 레슨 (원포인트)' },
    { id: 'field', label: '필드 레슨 (18홀)' },
  ];

  const filtered =
    selectedCategory === 'all'
      ? DETAILED_SERVICES
      : DETAILED_SERVICES.filter((s) => s.category === selectedCategory);

  const toggleSyllabus = (id: string) => {
    setExpandedSyllabus((prev) => (prev === id ? null : id));
  };

  return (
    <div className="py-12 lg:py-16 bg-white animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 tracking-wider uppercase mb-2">
              <span>ACADEMY CURRICULUM & TUITION</span>
              <span aria-hidden="true">·</span>
              <span>SERVICES</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              제공 레슨 프로그램 및 수강료 안내
            </h1>
            <p className="text-stone-600 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
              초급 비기너부터 싱글 플레이어, 1:1 맞춤 원포인트, 실전 18홀 필드 레슨까지 골퍼의 목표와 일정에 최적화된 전문 커리큘럼을 제공합니다.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl overflow-x-auto max-w-full shrink-0">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
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
      </div>

      {/* Main Program List */}
      <div className="max-w-7xl mx-auto px-6 space-y-10 mb-16">
        {filtered.map((service: Program) => {
          const isExpanded = expandedSyllabus === service.id;
          return (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:border-stone-300 transition-colors"
            >
              <div className="p-6 sm:p-8">
                {/* Header row */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-stone-100">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-stone-500">
                      <span className="font-bold text-emerald-800">{service.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span className="bg-emerald-50 text-emerald-900 px-2 py-0.5 rounded text-[11px] font-semibold">
                        {service.tag}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{service.recommendedFor}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
                      {service.title}
                    </h2>
                    <p className="text-stone-600 text-sm max-w-2xl leading-relaxed">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 shrink-0 lg:text-right min-w-[240px]">
                    <div className="text-xs text-stone-500">수강료 (VAT 및 타석료 포함)</div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-mono tracking-tight mt-0.5">
                      {service.price}
                    </div>
                    {service.pricePerSession && (
                      <div className="text-xs text-emerald-800 font-semibold mt-1">
                        {service.pricePerSession}
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => onSelectProgramForBooking(service.title)}
                      className="mt-4 w-full py-2.5 px-4 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>이 과정 예약 신청</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-b border-stone-100 text-xs sm:text-sm">
                  <div className="p-4 bg-stone-50 rounded-xl space-y-1">
                    <div className="font-bold text-stone-900 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-emerald-700" />
                      레슨 기간 및 횟수
                    </div>
                    <div className="text-stone-700 font-semibold">{service.duration}</div>
                    <div className="text-stone-500 text-xs">{service.sessions}</div>
                  </div>

                  <div className="p-4 bg-stone-50 rounded-xl space-y-1">
                    <div className="font-bold text-stone-900 flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-emerald-700" />
                      레슨 시간표 및 요일
                    </div>
                    <div className="text-stone-700 font-semibold">{service.schedule}</div>
                    <div className="text-stone-500 text-xs">평일/주말 자율 선택 가능</div>
                  </div>

                  <div className="p-4 bg-stone-50 rounded-xl space-y-1">
                    <div className="font-bold text-stone-900 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-700" />
                      추천 대상
                    </div>
                    <div className="text-stone-700">{service.target}</div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="pt-6">
                  <div className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3">
                    핵심 교육 내용 및 혜택
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {service.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                        <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Syllabus breakdown accordion */}
                {service.weeklyPlan && service.weeklyPlan.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-stone-100">
                    <button
                      type="button"
                      onClick={() => toggleSyllabus(service.id)}
                      className="text-xs font-semibold text-stone-700 hover:text-emerald-800 flex items-center gap-1.5 cursor-pointer py-1"
                    >
                      <span>{isExpanded ? '주차별 세부 강의 계획서 접기' : '주차별 세부 강의 계획서(Syllabus) 열람하기'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {isExpanded && (
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 animate-fade-in">
                        {service.weeklyPlan.map((wp, i) => (
                          <div key={i} className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/60 text-xs">
                            <div className="font-bold text-stone-900 mb-1 flex items-center justify-between">
                              <span>{wp.week}</span>
                              <span className="text-emerald-800 font-semibold">{wp.topic}</span>
                            </div>
                            <p className="text-stone-600 leading-relaxed">{wp.drill}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Transparent Policy & Guarantee Banner */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>수강생 안심 보장 규정</span>
          </div>
          <h3 className="text-xl font-bold text-stone-900 mb-3">
            미스터리 골프스쿨의 투명한 운영 및 환불 원칙
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-stone-600 pt-2">
            <div>
              <div className="font-bold text-stone-900 mb-1">첫 수업 불만족 시 100% 환불</div>
              <p className="leading-relaxed">
                정규 코스 1회 수강 후 코치 배정이나 레슨 방식이 맞지 않을 경우 잔여 회차를 위약금 없이 전액 환불해 드립니다.
              </p>
            </div>
            <div>
              <div className="font-bold text-stone-900 mb-1">레슨 유효기간 및 홀딩(일시 정지)</div>
              <p className="leading-relaxed">
                출장, 부상, 개인 사정 시 패키지별 최대 30일간 무료 홀딩(일시 정지)이 가능하여 수업 횟수를 보존해 드립니다.
              </p>
            </div>
            <div>
              <div className="font-bold text-stone-900 mb-1">숨겨진 추가 요금 Zero</div>
              <p className="leading-relaxed">
                수강료에 TrackMan 4 장비료, 락커 이용료, 연습 타석 비용이 모두 포함되어 있어 추가 지출이 발생하지 않습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
