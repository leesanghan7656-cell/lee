import React from 'react';
import { COACHES } from '../data/golfData';
import { Award, CheckCircle, Quote } from 'lucide-react';

interface CoachesProps {
  onOpenBooking: () => void;
}

export const Coaches: React.FC<CoachesProps> = ({ onOpenBooking }) => {
  const headCoach = COACHES[0];
  const otherCoaches = COACHES.slice(1);

  return (
    <section id="coaches" className="py-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold text-emerald-800 tracking-wider uppercase mb-2">
            TOUR PRO INSTRUCTION TEAM
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 mb-3" style={{ textWrap: 'balance' }}>
            검증된 KPGA / KLPGA 공인 정회원 직강
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            미스터리 골프스쿨의 모든 코치는 정식 투어 라이센스와 TrackMan/TPI 자격을 공식 보유하고 있습니다. 비자격 강사의 무분별한 레슨이 아닌, 인체 역학에 근거한 정통 골프를 지도합니다.
          </p>
        </div>

        {/* Head Coach Featured Showcase */}
        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Coach Photo: 5 cols */}
            <div className="lg:col-span-5 relative min-h-[380px] bg-stone-900">
              <img
                src={headCoach.image}
                alt={headCoach.name}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 lg:hidden text-white">
                <div className="text-lg font-bold">{headCoach.name}</div>
                <div className="text-xs text-emerald-300">{headCoach.role} · {headCoach.association}</div>
              </div>
            </div>

            {/* Coach Details: 7 cols */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="hidden lg:flex items-center gap-2 text-xs font-medium text-emerald-800 mb-2">
                  <span>{headCoach.association}</span>
                  <span aria-hidden="true">·</span>
                  <span>{headCoach.role}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-3">
                  {headCoach.name}
                </h3>

                {/* Quote */}
                <div className="relative pl-6 py-2 border-l-2 border-emerald-700 text-stone-700 italic text-sm sm:text-base leading-relaxed mb-6 bg-stone-50/60 rounded-r-lg">
                  <Quote className="w-4 h-4 text-emerald-600 absolute -top-1 left-1.5 opacity-60" />
                  &ldquo;{headCoach.quote}&rdquo;
                </div>

                {/* Specialty */}
                <div className="mb-6 p-3 bg-emerald-50/80 rounded-xl border border-emerald-100 text-xs text-emerald-950">
                  <span className="font-bold text-emerald-900">전문 코칭 분야: </span>
                  {headCoach.specialty}
                </div>

                {/* Career & Certifications split */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 text-xs text-stone-600">
                  <div>
                    <div className="font-bold text-stone-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-emerald-700" />
                      주요 경력 및 이력
                    </div>
                    <ul className="space-y-1.5">
                      {headCoach.career.map((c, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-700 font-bold">·</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="font-bold text-stone-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-emerald-700" />
                      공인 자격 & 라이센스
                    </div>
                    <ul className="space-y-1.5">
                      {headCoach.certifications.map((cert, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-700 font-bold">·</span>
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-500">
                  * 대표원장 직강 1:1 레슨은 주간 한정 수강생만 배정됩니다.
                </span>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  원장 1:1 체험 레슨 예약
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Other Coaching Staff */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherCoaches.map((coach) => (
            <div
              key={coach.id}
              className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                  <span className="font-semibold text-emerald-800">{coach.association}</span>
                  <span>{coach.role}</span>
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-2">{coach.name}</h4>
                <p className="text-xs text-stone-600 italic mb-4 leading-relaxed">
                  &ldquo;{coach.quote}&rdquo;
                </p>

                <div className="text-xs text-stone-700 bg-stone-50 p-2.5 rounded-lg mb-4">
                  <span className="font-semibold text-stone-900">전문: </span>
                  {coach.specialty}
                </div>

                <div className="space-y-1 text-xs text-stone-600 mb-4">
                  {coach.career.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span className="text-emerald-700 font-bold">·</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full py-2 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
              >
                {coach.name} 프로 배정 상담
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
