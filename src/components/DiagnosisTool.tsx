import React, { useState } from 'react';
import { Target, ArrowRight, Sparkles, Check, RefreshCw } from 'lucide-react';

interface DiagnosisToolProps {
  onSelectForBooking: (data: { experience: string; score: string; trouble: string }) => void;
}

export const DiagnosisTool: React.FC<DiagnosisToolProps> = ({ onSelectForBooking }) => {
  const [experience, setExperience] = useState('0-6m');
  const [score, setScore] = useState('over-100');
  const [trouble, setTrouble] = useState('slice');

  const experienceOptions = [
    { id: '0-6m', label: '입문 ~ 6개월 미만', desc: '기본기 및 첫 필드 준비' },
    { id: '1-3y', label: '1년 ~ 3년차', desc: '100타 안팎 정체기' },
    { id: '3-5y', label: '3년 ~ 5년차', desc: '안정적인 90타/80타대 도전' },
    { id: '5y+', label: '5년 이상 상급자', desc: '싱글 플레이어 및 클럽 챔피언' },
  ];

  const scoreOptions = [
    { id: 'over-100', label: '100타 이상 (백돌이)', desc: 'OB와 미스샷 다발' },
    { id: '90-99', label: '90 ~ 99타 (보기 플레이어)', desc: '파와 더블보기가 공존' },
    { id: '80-89', label: '80 ~ 89타 (안정권 진입)', desc: '숏게임 미세 오차' },
    { id: '70s', label: '70타대 (싱글 유지)', desc: '버디 찬스 및 멘탈 관리' },
  ];

  const troubleOptions = [
    { id: 'slice', label: '슬라이스 / 와이파이 구질', tag: '드라이버' },
    { id: 'distance', label: '비거리 부족 (200m 미만)', tag: '파워 & 지면반력' },
    { id: 'iron', label: '아이언 뒷땅 / 탑핑', tag: '임팩트 & 체중이동' },
    { id: 'shortgame', label: '어프로치 쌩크 & 3퍼트', tag: '숏게임 & 퍼팅' },
    { id: 'mental', label: '연습장과 다른 필드 공포증', tag: '코스 매니지먼트' },
  ];

  // Prescription calculation
  const getPrescription = () => {
    if (experience === '0-6m') {
      return {
        title: '3개월 필드 데뷔 올인원 코스',
        targetScore: '첫 라운드 90타대 목표 (100타 이내)',
        targetDistance: '드라이버 200m 안정 캐리 확보',
        keyMetrics: 'TrackMan 어택앵글 +2° (어퍼블로), 정타율 85% 이상',
        duration: '10~12주 (총 24회)',
        prescribedDrills: [
          '신체 골격에 맞는 1:1 뉴트럴 그립 & 어드레스 얼라인먼트',
          '몸통 코어 회전 하프스윙 → 풀스윙 시퀀스 단계별 완성',
          '아이언 다운블로 핸드퍼스트 임팩트 감각 체화',
        ],
      };
    }

    if (trouble === 'slice') {
      return {
        title: '슬라이스 완전 박멸 & 클럽패스 인-아웃 교정',
        targetScore: '평균 -10타 단축 (OB 전면 방지)',
        targetDistance: '드라이버 즉각적인 +20m~30m 비거리 회복',
        keyMetrics: 'Club Path +2.5° (인-아웃) 전환, Face-to-Path 0° 스퀘어',
        duration: '6~8주 (총 16회)',
        prescribedDrills: [
          '오버 더 탑(상체 덤빔) 방지를 위한 하체 선행 골반 턴 드릴',
          '스윙 궤적 인-아웃 3도 확보를 위한 장애물 타격 연습',
          '클럽 페이스 조기 회전을 돕는 릴리즈 로테이션 훈련',
        ],
      };
    }

    if (trouble === 'distance') {
      return {
        title: '파워 지면반력 & 스윙 스피드 부스터 코스',
        targetScore: '파4 세컨드 숏아이언 공략 가능',
        targetDistance: '볼 스피드 62m/s → 69m/s (+25m 증가)',
        keyMetrics: 'Smash Factor 1.48 달성, 지면 수직 반력 180% 활용',
        duration: '8주 (총 16회)',
        prescribedDrills: [
          '지면을 강하게 차주는 수직 점프 토크(Vertical Force) 훈련',
          '백스윙 톱에서 골반-어깨 꼬임(X-Factor) 극대화',
          '초고속 스피드 스틱을 활용한 신경계 반응 속도 튜닝',
        ],
      };
    }

    if (trouble === 'iron') {
      return {
        title: '정밀 아이언 다운블로 & 컴프레션 임팩트',
        targetScore: '그린 적중률(GIR) 35% → 65% 향상',
        targetDistance: '클럽별 정확한 캐리 거리 5m 단위 확립',
        keyMetrics: 'Dynamic Loft 22°, 최저점(Low Point) 공 앞 7cm 형성',
        duration: '6주 (총 12회)',
        prescribedDrills: [
          '임팩트 시 왼발 체중 85% 지지 및 힙 오픈 40° 드릴',
          '핸드퍼스트 자세 유지를 위한 보우(Bowed) 레프트 리스트 훈련',
          '잔디 디봇 매트에서 일정한 터프 컨택 만들기',
        ],
      };
    }

    // Default shortgame or advanced
    return {
      title: '싱글 메이커스 숏게임 & 코스 매니지먼트',
      targetScore: '70타대 진입 (라운드당 퍼트수 30개 미만)',
      targetDistance: '웨지 30m / 50m / 70m 오차 2m 이내 안착',
      keyMetrics: 'SAM PuttLab 페이스 로테이션 0.3° 정렬, 런닝 어프로치 90%',
      duration: '8주 (총 16회 + 9홀 필드)',
      prescribedDrills: [
        '시계 바늘 스윙 크기별 웨지 거리 매트릭스 공식 정립',
        '그린 주변 다양한 경사면(오르막/내리막/러프) 런닝 피치샷',
        'SAM 퍼팅 랩 분석을 통한 볼 구름(True Roll) 라인 형성',
      ],
    };
  };

  const prescription = getPrescription();

  const handleApply = () => {
    const expLabel = experienceOptions.find((o) => o.id === experience)?.label || experience;
    const scoreLabel = scoreOptions.find((o) => o.id === score)?.label || score;
    const troubleLabel = troubleOptions.find((o) => o.id === trouble)?.label || trouble;
    onSelectForBooking({
      experience: expLabel,
      score: scoreLabel,
      trouble: troubleLabel,
    });
  };

  return (
    <section id="diagnosis" className="py-20 bg-stone-50 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold text-emerald-800 tracking-wider uppercase mb-2">
            INTERACTIVE TROUBLE DIAGNOSTIC
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 mb-3" style={{ textWrap: 'balance' }}>
            내 구력 & 스윙 고민 맞춤 솔루션 진단기
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            현재 상태를 3초 만에 선택해 보세요. 트랙맨 데이터 기준 개선 가능 수치와 헤드프로의 1:1 처방 커리큘럼을 즉시 계산해 드립니다.
          </p>
        </div>

        {/* 3 Step Selectors */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left inputs: 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Experience */}
            <div className="bg-white p-5 sm:p-6 rounded-xl border border-stone-200 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  STEP 01
                </span>
                <span className="text-xs text-stone-400">골프 구력</span>
              </div>
              <h3 className="text-base font-bold text-stone-900 mb-3">
                현재 골프를 치신 지 얼마나 되셨나요?
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                {experienceOptions.map((opt) => {
                  const isSelected = experience === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setExperience(opt.id)}
                      className={`text-left p-3 rounded-lg border text-sm transition-all cursor-pointer ${
                        isSelected
                          ? 'border-emerald-700 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-700'
                          : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="whitespace-nowrap">{opt.label}</span>
                        {isSelected && <Check className="w-4 h-4 text-emerald-700 shrink-0" />}
                      </div>
                      <div className="text-xs text-stone-500 mt-0.5">{opt.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Score */}
            <div className="bg-white p-5 sm:p-6 rounded-xl border border-stone-200 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  STEP 02
                </span>
                <span className="text-xs text-stone-400">평균 타수</span>
              </div>
              <h3 className="text-base font-bold text-stone-900 mb-3">
                필드 라운드 시 평균 스코어는 어느 정도인가요?
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                {scoreOptions.map((opt) => {
                  const isSelected = score === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setScore(opt.id)}
                      className={`text-left p-3 rounded-lg border text-sm transition-all cursor-pointer ${
                        isSelected
                          ? 'border-emerald-700 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-700'
                          : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="whitespace-nowrap">{opt.label}</span>
                        {isSelected && <Check className="w-4 h-4 text-emerald-700 shrink-0" />}
                      </div>
                      <div className="text-xs text-stone-500 mt-0.5">{opt.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Trouble */}
            <div className="bg-white p-5 sm:p-6 rounded-xl border border-stone-200 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  STEP 03
                </span>
                <span className="text-xs text-stone-400">주요 고민</span>
              </div>
              <h3 className="text-base font-bold text-stone-900 mb-3">
                가장 시급하게 해결하고 싶은 스윙 문제점은?
              </h3>
              <div className="space-y-2">
                {troubleOptions.map((opt) => {
                  const isSelected = trouble === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setTrouble(opt.id)}
                      className={`w-full text-left p-3 rounded-lg border text-sm transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'border-emerald-700 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-700'
                          : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-white'
                      }`}
                    >
                      <span className="font-medium">{opt.label}</span>
                      <span className="text-xs text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                        {opt.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Result Card: 5 cols */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-7 border border-stone-800 shadow-xl">
              <div className="flex items-center justify-between border-b border-stone-800 pb-4 mb-5">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <Target className="w-4 h-4" />
                  <span>진단 결과 & 맞춤 처방전</span>
                </div>
                <div className="text-xs text-stone-400 flex items-center gap-1 font-mono">
                  <RefreshCw className="w-3 h-3 text-emerald-400" />
                  실시간 연산 완료
                </div>
              </div>

              <div className="text-xs text-emerald-400 font-semibold mb-1">
                권장 커리큘럼 코스
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {prescription.title}
              </h4>

              {/* Target Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-5 p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                <div>
                  <div className="text-xs text-stone-400">목표 개선 타수</div>
                  <div className="text-sm font-bold text-white font-mono mt-0.5">
                    {prescription.targetScore}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-stone-400">목표 비거리</div>
                  <div className="text-sm font-bold text-emerald-400 font-mono mt-0.5">
                    {prescription.targetDistance}
                  </div>
                </div>
                <div className="col-span-2 pt-2 border-t border-stone-700/60">
                  <div className="text-xs text-stone-400">권장 기간 및 횟수</div>
                  <div className="text-sm font-semibold text-stone-200 mt-0.5">
                    {prescription.duration}
                  </div>
                </div>
              </div>

              {/* Key drills */}
              <div className="mb-6">
                <div className="text-xs font-bold text-stone-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  헤드프로 1:1 맞춤 집중 훈련 과제
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
                  {prescription.prescribedDrills.map((drill, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono font-bold shrink-0">
                        0{idx + 1}.
                      </span>
                      <span>{drill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleApply}
                className="w-full py-3.5 px-4 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md text-sm"
              >
                <span>이 진단 내용으로 무료 체험 레슨 신청</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-stone-400 text-center mt-2.5">
                * 신청 시 위 진단 데이터가 헤드프로에게 사전 전달됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
