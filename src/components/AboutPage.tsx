import React from 'react';
import {
  ACADEMY_HISTORY,
  PHILOSOPHY_PILLARS,
  ACADEMY_VISION,
  COACHES,
  ACADEMY_ADDRESS,
  ACADEMY_ADDRESS_DETAIL,
  GOLF_IMAGES,
} from '../data/golfData';
import { Award, CheckCircle2, Quote, Activity, Shield, Compass, Sparkles, MapPin } from 'lucide-react';

interface AboutPageProps {
  onGoToReservation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onGoToReservation }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-5 h-5 text-emerald-700" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-emerald-700" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-emerald-700" />;
      default:
        return <Sparkles className="w-5 h-5 text-emerald-700" />;
    }
  };

  return (
    <div className="py-12 lg:py-16 bg-white animate-fade-in">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 tracking-wider uppercase mb-3">
            <span>ABOUT MR. LEE GOLF SCHOOL</span>
            <span aria-hidden="true">·</span>
            <span>CHEONAN</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 mb-6 leading-tight">
            데이터로 증명하고 몸으로 체득하는
            <br />
            <span className="text-emerald-800">미스터리 골프스쿨의 이야기</span>
          </h1>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            충남 천안시 동남구 쌍용대로 66에 위치한 미스터리 골프스쿨은 KPGA 투어 프로 출신 헤드프로와 스포츠 바이오메카닉 전문가들이 함께 설립한 프리미엄 데이터 골프 아카데미입니다.
          </p>
        </div>
      </div>

      {/* Vision & Core Philosophy */}
      <section className="bg-stone-50 py-16 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                OUR VISION
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
                {ACADEMY_VISION.headline}
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                {ACADEMY_VISION.description}
              </p>
              <div className="space-y-3 pt-2">
                {ACADEMY_VISION.coreValues.map((val, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-stone-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-stone-200 shadow-md relative min-h-[300px]">
              <img
                src={GOLF_IMAGES.hero}
                alt="미스터리 골프스쿨 전경"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white text-xs">
                <div className="font-bold text-sm">미스터리 골프스쿨 천안 본원</div>
                <div className="text-stone-300 mt-0.5">{ACADEMY_ADDRESS_DETAIL}</div>
              </div>
            </div>
          </div>

          {/* 3 Pillars of Philosophy */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
                EDUCATIONAL PHILOSOPHY
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-stone-900">
                미스터리 골프스쿨 3대 교육 철학
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PHILOSOPHY_PILLARS.map((p, i) => (
                <div
                  key={i}
                  className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                      {getIcon(p.iconName)}
                    </div>
                    <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
                      {p.sub}
                    </div>
                    <h4 className="text-lg font-bold text-stone-900 mb-3">{p.title}</h4>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-stone-100 text-xs font-mono font-semibold text-stone-400">
                    PILLAR 0{i + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
            ACADEMY HISTORY & MILESTONES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 mb-3">
            성장의 발자취 (2019 ~ 2026)
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            천안 지역 골퍼들의 스윙 고민을 과학적으로 해결하며 누적 1,850여 명의 골퍼와 함께해 온 역사입니다.
          </p>
        </div>

        <div className="relative border-l-2 border-emerald-800/20 pl-6 sm:pl-10 space-y-10 ml-2">
          {ACADEMY_HISTORY.map((h, idx) => (
            <div key={idx} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-emerald-800 border-4 border-white shadow-sm" />
              <div className="font-mono text-sm font-extrabold text-emerald-800 mb-1">
                {h.year}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">{h.title}</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl">
                {h.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-16 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
              TOUR PRO INSTRUCTION TEAM
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 mb-3">
              전문 코치진 및 약력 소개
            </h2>
            <p className="text-stone-600 text-sm">
              정규 투어 라이센스와 TrackMan/TPI 자격을 공식 보유한 검증된 코치진이 1:1로 책임 지도합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {COACHES.map((coach) => (
              <div
                key={coach.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="h-64 relative bg-stone-900 overflow-hidden">
                    <img
                      src={coach.image}
                      alt={coach.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-xs text-emerald-400 font-semibold">{coach.association}</div>
                      <div className="text-xl font-bold mt-0.5">{coach.name}</div>
                      <div className="text-xs text-stone-300">{coach.role}</div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="relative pl-4 py-1.5 border-l-2 border-emerald-700 text-stone-700 italic text-xs sm:text-sm leading-relaxed mb-4 bg-stone-50/70 rounded-r-lg">
                      <Quote className="w-3.5 h-3.5 text-emerald-600 absolute -top-1 left-1 opacity-60" />
                      &ldquo;{coach.quote}&rdquo;
                    </div>

                    <div className="mb-4 p-2.5 bg-emerald-50 rounded-lg text-xs text-emerald-950">
                      <span className="font-bold text-emerald-900">전문 분야: </span>
                      {coach.specialty}
                    </div>

                    <div className="space-y-4 text-xs text-stone-600">
                      <div>
                        <div className="font-bold text-stone-900 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                          <Award className="w-3.5 h-3.5 text-emerald-700" />
                          주요 이력
                        </div>
                        <ul className="space-y-1">
                          {coach.career.map((c, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-emerald-700 font-bold">·</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="font-bold text-stone-900 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                          자격 및 인증
                        </div>
                        <ul className="space-y-1">
                          {coach.certifications.map((cert, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-emerald-700 font-bold">·</span>
                              <span>{cert}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={onGoToReservation}
                    className="w-full py-2.5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors cursor-pointer text-center"
                  >
                    {coach.name} 코치로 예약 상담하기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Banner */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
              <MapPin className="w-4 h-4" />
              <span>본원 위치 안내</span>
            </div>
            <h3 className="text-2xl font-bold">{ACADEMY_ADDRESS}</h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-1">
              쌍용대로변 대로변 위치 · 건물 전용 50대 무료 주차(2시간 지원) · 봉명역/쌍용역 인근
            </p>
          </div>
          <button
            type="button"
            onClick={onGoToReservation}
            className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-sm rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            방문 상담 및 무료 체험 신청
          </button>
        </div>
      </section>
    </div>
  );
};
