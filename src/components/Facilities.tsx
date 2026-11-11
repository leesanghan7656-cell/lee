import React, { useState } from 'react';
import { GOLF_IMAGES } from '../data/golfData';
import { Eye, Activity, Shield, Sparkles, Sliders } from 'lucide-react';

export const Facilities: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState(0);

  const radarMetrics = [
    {
      name: 'Club Path (클럽 패스)',
      ideal: '+1.5° ~ +3.0° (In-to-Out)',
      desc: '클럽 헤드가 공으로 진입하는 수평 궤적. 슬라이스를 유발하는 아웃-인의 깎아치기 궤적을 완벽한 드로우 궤적으로 교정합니다.',
    },
    {
      name: 'Face Angle (페이스 앵글)',
      ideal: '0.0° ± 0.5° (Square)',
      desc: '임팩트 순간 클럽 페이스가 타겟 라인과 이루는 각도. 출발 방향의 80% 이상을 결정하는 핵심 지표입니다.',
    },
    {
      name: 'Attack Angle (어택 앵글)',
      ideal: '드라이버 +3.0° / 아이언 -3.5°',
      desc: '드라이버는 상향 타격(어퍼블로)으로 스핀을 낮추고 비거리를 늘리며, 아이언은 정교한 다운블로 디봇을 형성합니다.',
    },
    {
      name: 'Smash Factor (스매시 팩터)',
      ideal: '1.48 ~ 1.50 (Max Efficiency)',
      desc: '헤드 스피드 대비 볼 스피드의 전달 효율(정타율). 동일한 힘으로도 20m 이상의 비거리 차이를 만듭니다.',
    },
  ];

  const features = [
    {
      title: 'TrackMan 4 전 타석 도입',
      desc: 'PGA 투어 프로들이 사용하는 듀얼 도플러 레이더 론치 모니터로 볼 궤적 28개 파라미터를 0.1도 단위로 정밀 측정합니다.',
      icon: Activity,
    },
    {
      title: '240fps 초고속 듀얼 카메라',
      desc: '정면과 측면에서 임팩트 순간 손목 각도(Release)와 척추각(Spine Angle)을 프레임 단위로 슬로우 모션 재생합니다.',
      icon: Eye,
    },
    {
      title: '프라이빗 1인 전용 VIP 룸',
      desc: '주변 시선 없이 오직 나와 코치만 집중할 수 있는 완벽 방음 독립 스튜디오에서 편안하게 스윙을 교정받으실 수 있습니다.',
      icon: Shield,
    },
    {
      title: '천연잔디 촉감 퍼팅 & 숏게임 존',
      desc: '다양한 브레이크와 언듈레이션이 구현된 실내 퍼팅 그린에서 SAM 퍼팅 랩 레이저 라인 훈련을 제공합니다.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold text-emerald-800 tracking-wider uppercase mb-2">
            PREMIUM TECH STUDIO & FACILITY
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 mb-3" style={{ textWrap: 'balance' }}>
            투어 대회 수준의 데이터 랩 & 프라이빗 환경
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            최신 TrackMan 4 장비와 초고속 광학 센서, 최고급 천연 잔디 감각의 퍼팅 존까지. 미스터리 골프스쿨의 모든 공간은 학생의 집중도와 실력 향상만을 위해 설계되었습니다.
          </p>
        </div>

        {/* Feature Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          {/* Left Visual: 6 cols */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-stone-200 relative group min-h-[360px] bg-stone-900">
            <img
              src={GOLF_IMAGES.facilityPutting}
              alt="미스터리 골프스쿨 실내 언듈레이션 퍼팅 그린"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                INDOOR SHORT GAME COMPLEX
              </span>
              <h3 className="text-xl font-bold mt-1">실내 언듈레이션 퍼팅 그린 & 숏게임 훈련장</h3>
              <p className="text-xs text-stone-300 mt-1">
                실제 필드 그린 스피드(2.8~3.1m)와 레이저 얼라인먼트로 쓰리펏을 방지하는 실전 퍼팅 훈련
              </p>
            </div>
          </div>

          {/* Right 4 Key Points: 6 cols */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="bg-stone-50 p-5 rounded-xl border border-stone-200/80 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-emerald-800 text-white flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-bold text-stone-900 mb-1.5">{f.title}</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* TrackMan Radar Data Metrics Interactive Panel */}
        <div className="bg-stone-950 text-white rounded-2xl p-6 sm:p-8 border border-stone-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-800">
            <div className="flex items-center gap-2">
              <Sliders className="w-5 h-5 text-emerald-400" />
              <div>
                <h3 className="text-lg font-bold text-white">TrackMan 4 정밀 스윙 분석 핵심 4대 지표</h3>
                <p className="text-xs text-stone-400">레슨 시 헤드프로와 함께 실시간 모니터링하는 핵심 수치</p>
              </div>
            </div>
            <div className="text-xs text-stone-400 font-mono">
              PRECISION RADAR TELEMETRY
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
            {radarMetrics.map((m, index) => {
              const isSelected = selectedMetric === index;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedMetric(index)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'border-emerald-500 bg-emerald-950/40 text-white'
                      : 'border-stone-800 hover:border-stone-700 bg-stone-900 text-stone-300'
                  }`}
                >
                  <div className="text-xs font-semibold">{m.name}</div>
                  <div className="text-xs text-emerald-400 font-mono mt-1">{m.ideal}</div>
                </button>
              );
            })}
          </div>

          <div className="p-4 bg-stone-900/90 rounded-xl border border-stone-800 text-sm">
            <div className="text-xs font-bold text-emerald-400 mb-1">
              [분석 가이드] {radarMetrics[selectedMetric].name}
            </div>
            <div className="text-stone-300 leading-relaxed text-xs sm:text-sm">
              {radarMetrics[selectedMetric].desc}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
