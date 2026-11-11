import React from 'react';
import { ChevronRight, ArrowDownRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { GOLF_IMAGES } from '../data/golfData';

interface HeroProps {
  onOpenBooking: () => void;
  onScrollToDiagnosis: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onScrollToDiagnosis }) => {
  return (
    <section className="relative bg-stone-900 text-white overflow-hidden">
      {/* Background with measured contrast overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={GOLF_IMAGES.hero}
          alt="미스터리 골프스쿨 프리미엄 트랙맨 스튜디오"
          className="w-full h-full object-cover object-center brightness-60 contrast-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="max-w-2xl">
          {/* Natural clean editorial kicker without pill wrappers */}
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-4">
            <span>KPGA TOUR PRO ACADEMY</span>
            <span aria-hidden="true">·</span>
            <span>TRACKMAN 4 RADAR LAB</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6"
            style={{ textWrap: 'balance' }}
          >
            기본기부터 싱글까지,
            <br />
            <span className="text-emerald-400">데이터로 증명하는</span> 정밀 스윙 솔루션
          </h1>

          <p className="text-base sm:text-lg text-stone-300 leading-relaxed mb-8 max-w-xl">
            감(Feel)에 의존하던 모호한 레슨은 이제 그만. 미스터리 골프스쿨은 전 타석 TrackMan 4 레이더 분석과 KPGA 투어 프로의 1:1 맞춤형 처방으로 가장 빠르고 부상 없는 골프 성장을 이끌어냅니다.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 text-base font-semibold text-stone-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>1:1 무료 체험 레슨 신청</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={onScrollToDiagnosis}
              className="px-6 py-3.5 text-base font-medium text-stone-200 hover:text-white bg-stone-800/80 hover:bg-stone-800 border border-stone-700 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>내 스윙 & 고민 셀프 진단</span>
              <ArrowDownRight className="w-4 h-4 text-emerald-400" />
            </button>
          </div>

          {/* Value points */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-stone-300 pt-2 border-t border-stone-800">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              KPGA / KLPGA 정회원 100% 직강
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              클럽·장갑 무료 대여 (몸만 오셔도 환영)
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              천안 쌍용대로 50대 전용 무료 주차
            </span>
          </div>
        </div>
      </div>

      {/* Proof KPI Strip below hero split */}
      <div className="relative z-10 border-t border-stone-800 bg-stone-950/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-stone-200">
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-white tabular-nums">
              1,850+
            </div>
            <div className="text-xs text-stone-400 mt-0.5">누적 아마추어 수강생 배출</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-emerald-400 tabular-nums">
              +25.4m
            </div>
            <div className="text-xs text-stone-400 mt-0.5">드라이버 평균 비거리 증대</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-white tabular-nums">
              98.7%
            </div>
            <div className="text-xs text-stone-400 mt-0.5">레슨 수강생 재등록 및 추천율</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-emerald-400 tabular-nums">
              TrackMan 4
            </div>
            <div className="text-xs text-stone-400 mt-0.5">전 타석 정밀 레이더 센서 완비</div>
          </div>
        </div>
      </div>
    </section>
  );
};
