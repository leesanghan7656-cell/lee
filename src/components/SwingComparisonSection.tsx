import React, { useState } from 'react';
import { BEFORE_AFTER_CASES } from '../data/golfData';
import { BeforeAfterCase } from '../types/golf';
import {
  Play,
  TrendingUp,
  Activity,
  Sliders,
  Sparkles,
  CheckCircle2,
  Calendar,
  Layers,
  ChevronRight,
  Maximize2,
} from 'lucide-react';

interface SwingComparisonSectionProps {
  onGoToReservation?: () => void;
}

export const SwingComparisonSection: React.FC<SwingComparisonSectionProps> = ({
  onGoToReservation,
}) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>('case-1');
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0 to 100
  const [activePhase, setActivePhase] = useState<'all' | 'top' | 'impact' | 'finish'>('impact');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<string>('0.5x');

  const currentCase =
    BEFORE_AFTER_CASES.find((c) => c.id === selectedCaseId) || BEFORE_AFTER_CASES[0];

  const handleSliderMove = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  const swingPhases = [
    { id: 'top', label: '1. 백스윙 톱 (Top of Swing)' },
    { id: 'impact', label: '2. 임팩트 (Impact Zone)' },
    { id: 'finish', label: '3. 팔로우스루 & 피니시 (Finish)' },
  ];

  return (
    <section className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-xl mb-16 overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-stone-800 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 tracking-wider uppercase mb-2">
            <Activity className="w-4 h-4 text-emerald-400" />
            <span>INTERACTIVE SWING DEVELOPMENT LAB</span>
            <span aria-hidden="true">·</span>
            <span>BEFORE & AFTER</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            수강생 스윙 발전 과정 ‘비포 & 애프터’ 정밀 비교
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
            TrackMan 4 초고속 240fps 카메라로 촬영된 실제 수강생의 스윙 교정 전후 영상 및 레이더 궤적 데이터를 슬라이더를 드래그하여 직접 비교해 보세요.
          </p>
        </div>

        {/* Case Switcher Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-800/90 rounded-xl overflow-x-auto max-w-full shrink-0">
          {BEFORE_AFTER_CASES.map((item: BeforeAfterCase, index: number) => {
            const isSelected = item.id === selectedCaseId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setSelectedCaseId(item.id);
                  setSliderPos(50);
                }}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                사례 0{index + 1}: {item.studentName.split(' ')[0]} ({item.duration.split(' ')[0]})
              </button>
            );
          })}
        </div>
      </div>

      {/* Case Overview Banner */}
      <div className="bg-stone-800/60 p-4 sm:p-5 rounded-2xl border border-stone-700/60 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold mb-1">
            <span>{currentCase.studentName}</span>
            <span aria-hidden="true">·</span>
            <span>{currentCase.ageAndType}</span>
            <span aria-hidden="true">·</span>
            <span className="text-stone-400">{currentCase.duration}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white">
            {currentCase.targetGoal}
          </h3>
          <p className="text-xs text-stone-300 mt-1">
            <strong className="text-rose-400">[레슨 전 결함]</strong> {currentCase.troubleSummary}
          </p>
          <p className="text-xs text-emerald-300 mt-0.5">
            <strong className="text-emerald-400">[처방 후 변화]</strong> {currentCase.solutionSummary}
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-2">
          <div className="bg-stone-900/90 px-4 py-2 rounded-xl border border-stone-700 text-center">
            <div className="text-[10px] text-stone-400 font-mono">타수 변화</div>
            <div className="text-sm font-bold text-white font-mono">
              <span className="line-through text-stone-500 mr-1.5">{currentCase.beforeStats.score}</span>
              <span className="text-emerald-400">{currentCase.afterStats.score}</span>
            </div>
          </div>
          <div className="bg-stone-900/90 px-4 py-2 rounded-xl border border-stone-700 text-center">
            <div className="text-[10px] text-stone-400 font-mono">캐리 비거리</div>
            <div className="text-sm font-bold text-emerald-400 font-mono">
              {currentCase.afterStats.carry}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Split Comparison Viewport */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
        {/* Left: The Interactive Video / Frame Scrub Slider (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-4/3 sm:aspect-16/10 bg-black rounded-2xl overflow-hidden border border-stone-700 select-none shadow-2xl">
            {/* Background Image: AFTER Image (Full View) */}
            <img
              src={currentCase.afterImage}
              alt="애프터 스윙"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* AFTER Overlay Badges */}
            <div className="absolute top-4 right-4 z-10 bg-emerald-950/85 backdrop-blur-md border border-emerald-500/50 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>AFTER (교정 4주 후)</span>
            </div>
            <div className="absolute bottom-4 right-4 z-10 bg-stone-900/80 backdrop-blur-md text-[11px] font-mono text-emerald-400 px-3 py-1 rounded-md border border-stone-700">
              클럽패스 {currentCase.afterStats.clubPath}
            </div>

            {/* Foreground Clipped Image: BEFORE Image */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={currentCase.beforeImage}
                alt="비포 스윙"
                className="absolute inset-y-0 left-0 max-w-none h-full object-cover"
                style={{ width: '100%', minWidth: '100%', objectPosition: 'left center' }}
                referrerPolicy="no-referrer"
              />
              {/* BEFORE Overlay Badges */}
              <div className="absolute top-4 left-4 z-10 bg-rose-950/85 backdrop-blur-md border border-rose-500/50 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                <span>BEFORE (레슨 전)</span>
              </div>
              <div className="absolute bottom-4 left-4 z-10 bg-stone-900/80 backdrop-blur-md text-[11px] font-mono text-rose-400 px-3 py-1 rounded-md border border-stone-700">
                클럽패스 {currentCase.beforeStats.clubPath}
              </div>
            </div>

            {/* Split Divider Line & Handle */}
            <div
              className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-stone-900 font-bold text-xs flex items-center justify-center shadow-xl border-2 border-emerald-600">
                ↔
              </div>
            </div>

            {/* Simulated Slow Motion Telemetry HUD Line */}
            <div className="absolute bottom-0 inset-x-0 h-1 bg-stone-800">
              <div
                className="h-full bg-emerald-500 transition-all duration-300"
                style={{ width: `${sliderPos}%` }}
              />
            </div>
          </div>

          {/* Slider Control Bar */}
          <div className="bg-stone-800/90 p-4 rounded-xl border border-stone-700 space-y-2">
            <div className="flex items-center justify-between text-xs text-stone-300">
              <span className="flex items-center gap-1 font-bold text-rose-400">
                ◀ 레슨 전 (BEFORE)
              </span>
              <span className="text-[11px] text-stone-400 font-mono">
                슬라이더를 좌우로 드래그하여 프레임 비교 ({sliderPos}%)
              </span>
              <span className="flex items-center gap-1 font-bold text-emerald-400">
                교정 후 (AFTER) ▶
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={handleSliderMove}
              className="w-full accent-emerald-500 cursor-pointer h-2 bg-stone-700 rounded-lg"
            />

            {/* Swing Position Phase Selector */}
            <div className="flex items-center justify-between pt-2 border-t border-stone-700/70 text-xs">
              <span className="text-stone-400 text-[11px] flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                분석 포지션 단계:
              </span>
              <div className="flex items-center gap-1.5">
                {swingPhases.map((phase) => (
                  <button
                    key={phase.id}
                    type="button"
                    onClick={() => setActivePhase(phase.id as any)}
                    className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                      activePhase === phase.id
                        ? 'bg-emerald-600 text-white font-bold'
                        : 'bg-stone-700 text-stone-300 hover:text-white'
                    }`}
                  >
                    {phase.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: TrackMan 4 Telemetry Comparison Matrix (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          <div className="bg-stone-800/90 rounded-2xl p-5 border border-stone-700">
            <div className="flex items-center justify-between pb-3 border-b border-stone-700 mb-4">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sliders className="w-4 h-4" />
                <span>TrackMan 4 정밀 레이더 데이터 비교</span>
              </div>
              <span className="text-[10px] text-stone-400 font-mono">0.1° 단위 실측</span>
            </div>

            <div className="space-y-2.5 text-xs">
              {/* Metric 1: Club Path */}
              <div className="bg-stone-900/90 p-3 rounded-xl border border-stone-700/70">
                <div className="flex justify-between text-stone-400 mb-1">
                  <span>클럽 궤적 (Club Path)</span>
                  <span className="text-emerald-400 font-semibold">+8.7° 인-아웃 전환</span>
                </div>
                <div className="flex items-center justify-between font-mono">
                  <span className="text-rose-400 font-bold">{currentCase.beforeStats.clubPath}</span>
                  <span className="text-stone-500">➔</span>
                  <span className="text-emerald-400 font-bold">{currentCase.afterStats.clubPath}</span>
                </div>
              </div>

              {/* Metric 2: Face Angle */}
              <div className="bg-stone-900/90 p-3 rounded-xl border border-stone-700/70">
                <div className="flex justify-between text-stone-400 mb-1">
                  <span>임팩트 페이스 각 (Face Angle)</span>
                  <span className="text-emerald-400 font-semibold">스퀘어 정렬 달성</span>
                </div>
                <div className="flex items-center justify-between font-mono">
                  <span className="text-rose-400 font-bold">{currentCase.beforeStats.faceAngle}</span>
                  <span className="text-stone-500">➔</span>
                  <span className="text-emerald-400 font-bold">{currentCase.afterStats.faceAngle}</span>
                </div>
              </div>

              {/* Metric 3: Carry Distance */}
              <div className="bg-stone-900/90 p-3 rounded-xl border border-stone-700/70">
                <div className="flex justify-between text-stone-400 mb-1">
                  <span>캐리 비거리 (Carry Distance)</span>
                  <span className="text-emerald-400 font-semibold">비거리 폭발</span>
                </div>
                <div className="flex items-center justify-between font-mono">
                  <span className="text-rose-400 font-bold">{currentCase.beforeStats.carry}</span>
                  <span className="text-stone-500">➔</span>
                  <span className="text-emerald-400 font-bold text-sm">{currentCase.afterStats.carry}</span>
                </div>
              </div>

              {/* Metric 4: Ball Speed & Smash Factor */}
              <div className="bg-stone-900/90 p-3 rounded-xl border border-stone-700/70">
                <div className="flex justify-between text-stone-400 mb-1">
                  <span>볼 스피드 & 정타율 (Smash Factor)</span>
                  <span className="text-emerald-400 font-semibold">에너지 효율 극대화</span>
                </div>
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span className="text-rose-400">{currentCase.beforeStats.ballSpeed} (SF {currentCase.beforeStats.smashFactor})</span>
                  <span className="text-stone-500">➔</span>
                  <span className="text-emerald-400 font-bold">{currentCase.afterStats.ballSpeed} (SF {currentCase.afterStats.smashFactor})</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Drills & Coach Diagnosis Comment */}
          <div className="bg-stone-800/80 p-5 rounded-2xl border border-stone-700/80 text-xs">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>헤드프로의 핵심 처방 드릴 3종</span>
            </div>
            <ul className="space-y-1.5 text-stone-300 mb-4">
              {currentCase.keyDrills.map((drill: string, idx: number) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-emerald-400 font-mono font-bold">0{idx + 1}.</span>
                  <span>{drill}</span>
                </li>
              ))}
            </ul>

            <div className="p-3 bg-stone-900 rounded-xl text-stone-300 italic text-[11px] leading-relaxed border-l-2 border-emerald-500">
              {currentCase.coachComment}
            </div>
          </div>

          {/* Call to action */}
          {onGoToReservation && (
            <button
              type="button"
              onClick={onGoToReservation}
              className="w-full py-3.5 px-4 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md text-xs sm:text-sm"
            >
              <span>나도 내 스윙 비포&애프터 정밀 진단 받기</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
