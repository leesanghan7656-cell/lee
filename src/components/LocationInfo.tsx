import React, { useState } from 'react';
import {
  FAQS,
  ACADEMY_ADDRESS,
  ACADEMY_ADDRESS_DETAIL,
  ACADEMY_PHONE,
  ACADEMY_MOBILE,
  ADMIN_EMAIL,
} from '../data/golfData';
import { MapPin, Clock, Phone, Car, Train, ChevronDown, ChevronUp, HelpCircle, Mail } from 'lucide-react';

export const LocationInfo: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="location" className="py-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Location & Hours (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="text-xs font-semibold text-emerald-800 tracking-wider uppercase mb-2">
                STUDIO VISIT & HOURS
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 mb-3">
                오시는 길 및 운영 시간 안내
              </h2>
              <p className="text-stone-600 text-sm">
                충남 천안시 동남구 쌍용대로 66 대로변에 위치해 접근성이 뛰어나며, 50대 규모의 넓은 전용 주차장을 완비하고 있습니다.
              </p>
            </div>

            {/* Address & Transport Cards */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-500 uppercase tracking-wider">주소</div>
                  <div className="text-sm font-bold text-stone-900 mt-0.5">
                    {ACADEMY_ADDRESS}
                  </div>
                  <div className="text-xs text-stone-500 mt-0.5">
                    {ACADEMY_ADDRESS_DETAIL}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-500 uppercase tracking-wider">운영 시간</div>
                  <div className="text-sm font-semibold text-stone-900 mt-0.5">
                    평일: 06:30 ~ 23:00 (모닝 출근 전 레슨 가능)
                  </div>
                  <div className="text-xs text-stone-600 mt-0.5">
                    주말 및 공휴일: 08:00 ~ 21:00 (연중무휴, 설/추석 당일 제외)
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-500 uppercase tracking-wider">유선 상담 및 문의</div>
                  <div className="text-sm font-bold text-stone-900 mt-0.5">
                    {ACADEMY_PHONE} / {ACADEMY_MOBILE}
                  </div>
                  <div className="text-xs text-stone-500 mt-0.5">
                    관리자 이메일: {ADMIN_EMAIL}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 bg-stone-50 rounded-xl">
                  <div className="flex items-center gap-1.5 font-bold text-stone-800 mb-1">
                    <Train className="w-3.5 h-3.5 text-emerald-800" />
                    지하철 & 대중교통
                  </div>
                  <p className="text-stone-600 text-[11px] leading-relaxed">
                    1호선 봉명역 1번 출구 도보 7분, 쌍용역(나사렛대) 차량 3분 거리
                  </p>
                </div>
                <div className="p-3.5 bg-stone-50 rounded-xl">
                  <div className="flex items-center gap-1.5 font-bold text-stone-800 mb-1">
                    <Car className="w-3.5 h-3.5 text-emerald-800" />
                    자가용 & 주차 안내
                  </div>
                  <p className="text-stone-600 text-[11px] leading-relaxed">
                    쌍용대로변 전용 지상/지하 주차장 50대 완비 (수강생 2시간 무료 지원)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Accordion (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-semibold text-emerald-800 tracking-wider uppercase mb-2 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4" />
                FREQUENTLY ASKED QUESTIONS
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-stone-900 mb-3">
                자주 묻는 질문 (FAQ)
              </h3>
              <p className="text-stone-600 text-sm">
                골프스쿨 등록 전 수강생분들이 자주 질문하시는 사항입니다.
              </p>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-4.5 sm:p-5 flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="text-sm font-bold text-stone-900">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-stone-500 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-stone-500 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
