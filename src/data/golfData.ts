import {
  Program,
  Coach,
  HistoryMilestone,
  PhilosophyPillar,
  GalleryItem,
  ReviewItem,
  FAQItem,
  ReservationSubmission,
  InquirySubmission,
  BeforeAfterCase,
} from '../types/golf';

export const ADMIN_EMAIL = 'leesanghan7656@gmail.com';
export const ACADEMY_ADDRESS = '충남 천안시 동남구 쌍용대로 66';
export const ACADEMY_ADDRESS_DETAIL = '충남 천안시 동남구 쌍용대로 66 (미스터리 골프빌딩 1~2F)';
export const ACADEMY_PHONE = '041-578-7656';
export const ACADEMY_MOBILE = '010-8921-7656';

export const GOLF_IMAGES = {
  hero: '/src/assets/images/golf_hero_studio_1794375137866.jpg',
  headCoach: '/src/assets/images/golf_pro_coach_male_1794376068061.jpg',
  facilityPutting: '/src/assets/images/golf_facility_putting_1794375137939.jpg',
  swingTech: '/src/assets/images/gallery_swing_tech_1794375934654.jpg',
  fieldCourse: '/src/assets/images/gallery_field_course_1794375935416.jpg',
  proLesson: '/src/assets/images/gallery_pro_lesson_1794375937107.jpg',
  swingBeforeAmateur: '/src/assets/images/swing_before_amateur_1794376625544.jpg',
};

// 1. History Milestones (역사)
export const ACADEMY_HISTORY: HistoryMilestone[] = [
  {
    year: '2019',
    title: '미스터리 골프스쿨 천안 본원 설립',
    description: 'KPGA 투어 프로 이상한 대표원장의 1:1 맞춤 스윙 연구소로 천안 쌍용대로에 개원. 프리미엄 스튜디오 4타석 및 TrackMan 3 시스템 도입.',
  },
  {
    year: '2021',
    title: 'TrackMan 4 전 타석 도입 & TPI 바이오메카닉 센터 구축',
    description: '전 타석 최신 TrackMan 4 레이더 및 240fps 듀얼 고속 카메라 완비. 체형 맞춤형 골프 피지컬(TPI) 트레이닝 프로그램 정식 런칭.',
  },
  {
    year: '2023',
    title: '누적 수강생 1,500명 돌파 & 천안 우수 체육시설 표창',
    description: '충남 골프협회 우수 지도자 인증 및 초보자 100타 격파 성공률 94% 달성. 실내 10m 천연잔디 촉감 퍼팅 훈련장 확장.',
  },
  {
    year: '2025~2026',
    title: '미스터리 골프빌딩 신관 리뉴얼 & 실시간 데이터 아카데미 도약',
    description: 'VIP 1인 전용 룸 증설, 주니어 투어 엘리트 코스 신설, 누적 수강생 1,850명 돌파 및 온라인 통합 예약 시스템 가동.',
  },
];

// 2. Educational Philosophy (교육 철학 3원칙)
export const PHILOSOPHY_PILLARS: PhilosophyPillar[] = [
  {
    title: '데이터 기반 정밀성 (Data Precision)',
    sub: 'TrackMan 4 Radar Technology',
    desc: '감(Feel)이나 주관적인 감각에 의존하지 않습니다. 클럽 패스, 페이스 앵글, 어택 앵글 등 28개 도플러 레이더 데이터를 눈으로 직접 보며 오차 0.1도 단위로 정밀하게 궤도를 교정합니다.',
    iconName: 'Activity',
  },
  {
    title: '인체역학과 신체 맞춤 (Biomechanics & TPI)',
    sub: 'Injury-Free Natural Swing',
    desc: '모든 사람의 척추 유연성과 근력, 관절 가동 범위는 다릅니다. 타이거 우즈의 폼을 억지로 흉내 내는 것이 아니라, 수강생 신체에 무리를 주지 않고 평생 부상 없이 즐기는 자연스러운 바디턴 스윙을 설계합니다.',
    iconName: 'Shield',
  },
  {
    title: '실전 코스 멘탈과 루틴 (Course Mastery)',
    sub: 'Field Mindset & Pre-Shot Routine',
    desc: '연습장에서만 잘 맞는 스윙은 의미가 없습니다. 타겟 에이밍, 바람과 경사지 대처법, 멘탈 호흡 루틴까지 필드에서 100% 발현될 수 있도록 실전 시뮬레이션과 18홀 동반 레슨을 병행합니다.',
    iconName: 'Compass',
  },
];

// 3. Vision (비전)
export const ACADEMY_VISION = {
  headline: '골프를 사랑하는 모든 이에게 평생의 즐거움과 명쾌한 스윙을 선사합니다.',
  description:
    '미스터리 골프스쿨은 단순히 공을 맞추는 법을 가르치는 곳이 아닙니다. 비기너에게는 부끄러움 없는 자신감 있는 필드 데뷔를, 중상급자에게는 평생의 숙원인 싱글 스코어의 짜릿한 성취감을 제공하는 충청권 최고의 명문 골프 아카데미가 되겠습니다.',
  coreValues: [
    '100% KPGA/KLPGA 투어 공인 프로의 책임 직강',
    '데이터 기반의 객관적이고 군더더기 없는 원포인트 처방',
    '클럽 및 연습 타석 무제한 지원을 통한 진정성 있는 성장 동반',
  ],
};

// 4. Coaches (강사진 상세)
export const COACHES: Coach[] = [
  {
    id: 'mr-lee',
    name: '이 상한 (Mr. Lee)',
    role: '대표 원장 / 헤드 프로',
    association: 'KPGA 정회원 (Tour Pro)',
    image: GOLF_IMAGES.headCoach,
    quote: '골프 스윙은 감각이 아닌 역학입니다. 트랙맨 데이터로 납득되는 가장 명쾌한 스윙을 만들어 드립니다.',
    career: [
      'KPGA 코리안투어 정규 투어 활동 12년',
      '전 국가대표 골프 상비군 전문 지도 코치',
      '충남 골프협회 우수 지도자 표창 수상',
      '천안 미스터리 골프스쿨 대표원장 (누적 레슨 5,000+ 시간)',
      'JTBC/SBS 골프 아마추어 스윙 분석 패널 출연',
    ],
    certifications: [
      'KPGA Tour Pro 정회원 자격',
      'TrackMan Certified Professional Level 2 (최고 등급)',
      'TPI (Titleist Performance Institute) Certified Level 2',
      '생활스포츠지도사 1급 (골프 종목)',
      'KGA 공인 룰 & 에티켓 마스터',
    ],
    specialty: '스윙 메커니즘 정밀 교정, 드라이버 비거리 특화(+30m), 만성 슬라이스/훅 원포인트 완전 박멸',
  },
  {
    id: 'coach-kim',
    name: '김 민우 코치',
    role: '수석 프로',
    association: 'KPGA 프로 (Tour Member)',
    image: GOLF_IMAGES.swingTech,
    quote: '무리한 스윙이 아닌, 내 몸에 가장 편안하고 일관된 스윙 궤도를 찾아드립니다.',
    career: [
      'KPGA 챌린지 투어 다수 입상 및 우승 경력',
      '호주 PGA Advanced Coaching Academy 연수 수료',
      '아마추어 100타 격파 전담 클래스 600여 명 수료 지도',
      '전 서울 강남 명문 골프스쿨 수석 인스트럭터',
    ],
    certifications: [
      'KPGA 정회원 / 프로',
      'TrackMan Certified Professional Level 1',
      'USGTF Class-A 티칭프로',
      'KGA 경기위원 자격 취득',
    ],
    specialty: '비기너 3개월 완성 기본기, 편안한 바디턴 스윙, 여성 골퍼 맞춤 템포 코칭, 아이언 정타율 향상',
  },
  {
    id: 'coach-park',
    name: '박 서연 코치',
    role: '인스트럭터 프로',
    association: 'KLPGA 정회원 (Class-A)',
    image: GOLF_IMAGES.proLesson,
    quote: '골프 스코어의 65%는 100미터 안에서 결정됩니다. 정교한 숏게임으로 80타대를 만들어 드립니다.',
    career: [
      'KLPGA 점프투어 & 드림투어 활동 경력',
      '주니어 엘리트 선수 퍼팅 & 숏게임 클리닉 진행',
      '골프 피트니스 및 필라테스 연계 지도 전문',
      '수강생 숏게임 평균 타수 8.4타 감량 지도 기록',
    ],
    certifications: [
      'KLPGA 정회원 자격',
      'SAM PuttLab Certified Level 2 Master',
      'TPI Golf Level 1',
      '골프 필라테스 지도자 자격',
    ],
    specialty: '웨지 시스템 거리 조절(30m~80m), 퍼팅 라인 분석 & 스트로크, 그린 주변 트러블샷 & 벙커 세이브',
  },
];

// 5. Detailed Programs / Services (서비스 페이지 상세)
export const DETAILED_SERVICES: Program[] = [
  {
    id: 'service-beginner',
    category: 'beginner',
    categoryLabel: '초급반 / 입문 코스',
    title: '3개월 필드 데뷔 속성 초급반',
    subtitle: '골프를 처음 시작하는 분을 위해 그립부터 풀스윙, 필드 라운드 에티켓까지 한번에 마스터',
    duration: '3개월 (12주 과정)',
    schedule: '주 2회 (화·목 또는 수·금 / 토·일 주말반 택1), 회당 50분 집중 지도',
    sessions: '총 24회 1:1 레슨 + 3개월 전 타석 무제한 연습 무료',
    price: '2,190,000원',
    pricePerSession: '회당 약 9.1만원 (타석료 완전 포함)',
    target: '골프 입문자, 첫 라운드(머리 올리기)를 앞둔 비기너, 기본기 없는 스윙으로 폼이 무너진 분',
    highlights: [
      '신체 골격에 최적화된 1:1 뉴트럴 그립 & 어드레스 셋업 정립',
      '하프스윙 → 코킹/힌지 → 풀스윙 3단계 메커니즘 체화',
      '아이언 정타율 80% 달성을 위한 체중 이동 드릴',
      '드라이버 티샷 안정화 및 비거리 180m~200m 기본 확보',
      '실전 라운드 룰, 매너 교육 및 9홀 파3 필드 동반 레슨 1회 포함',
    ],
    weeklyPlan: [
      { week: '1~2주차', topic: '기초 그립 및 셋업, 7번 아이언 똑딱이', drill: '페이스 스퀘어 감각, 척추각 고정 훈련' },
      { week: '3~4주차', topic: '하프스윙 및 L to L 바디 턴', drill: '손목 코킹 타이밍, 골반 45도 회전 시퀀스' },
      { week: '5~6주차', topic: '풀스윙 연결 및 아이언 다운블로 임팩트', drill: '트랙맨 임팩트 스매시팩터 1.35 달성 훈련' },
      { week: '7~8주차', topic: '드라이버 티샷 메커니즘 (어퍼블로)', drill: '티 높이 설정, 상향 타격각 +3도 형성' },
      { week: '9~10주차', topic: '유틸리티, 우드 및 숏아이언 거리 맞추기', drill: '클럽별 셋업 위치와 볼 포지션 튜닝' },
      { week: '11~12주차', topic: '웨지 어프로치, 퍼팅 스트로크 & 필드 시뮬레이션', drill: '런닝/피치샷, 2퍼트 마무리 실전 연습' },
    ],
    tag: '입문자 등록률 1위',
    recommendedFor: '구력 0~6개월차 비기너',
  },
  {
    id: 'service-breaker',
    category: 'breaker',
    categoryLabel: '중급반 / 100타 격파',
    title: '슬라이스 박멸 & 100타/90타 브레이커 중급반',
    subtitle: '잦은 슬라이스와 OB로 100타 안팎에서 방황하는 골퍼를 위한 정밀 궤도 교정 솔루션',
    duration: '2개월 (8주 과정)',
    schedule: '주 2회 자율 예약제 (평일 06:30~22:30 / 주말 08:00~20:30 중 선택)',
    sessions: '총 16회 1:1 레슨 + 2개월 타석 무료 + 스윙 데이터 포트폴리오',
    price: '1,590,000원',
    pricePerSession: '회당 약 9.9만원',
    target: '100타 안팎에서 스코어가 정체된 분, 드라이버 슬라이스로 공을 자주 잃어버리는 분',
    highlights: [
      'TrackMan 4 클럽 패스(Club Path) 인-아웃(+2~4°) 전환 드릴',
      '상체가 먼저 덤비는 오버 더 탑(Over the Top) 결함 완전 교정',
      '골반 하체 리드 분리를 통한 래깅(Lagging) 임팩트 압축감 체득',
      '드라이버 비거리 즉각적인 +20m~30m 증가 및 OB 제로화',
      '아이언 뒷땅/탑핑 없는 깨끗한 다운블로 디봇 형성',
    ],
    weeklyPlan: [
      { week: '1~2주차', topic: '스윙 데이터 정밀 분석 & 클럽패스 교정', drill: '아웃-인 궤도를 인-아웃으로 바꾸는 가이드 드릴' },
      { week: '3~4주차', topic: '상체 덤빔 방지 및 척추각 유지(스파인 앵글)', drill: '다운스윙 트랜지션 하체 선행 타이밍 잡기' },
      { week: '5~6주차', topic: '지면 반력 활용 및 볼스피드 증대', drill: '스쿼트 모션 및 임팩트 직전 익스텐션 드릴' },
      { week: '7~8주차', topic: '트러블 상황별 샷 & 코스 매니지먼트', drill: '트랙맨 가상 18홀 라운드로 스코어 메이킹' },
    ],
    tag: '단기 개선율 94%',
    recommendedFor: '타수 98~110타 사이 골퍼',
  },
  {
    id: 'service-single',
    category: 'single',
    categoryLabel: '고급반 / 싱글 마스터',
    title: '80타대 안착 & 싱글 플레이어 고급반',
    subtitle: '정교한 아이언 샷과 숏게임 매트릭스로 어떤 골프장에서도 70~80타대를 지키는 상급자 마스터 코스',
    duration: '2개월 (8주 과정)',
    schedule: '주 2회 집중 세션 (회당 50분 전담 레슨)',
    sessions: '총 16회 1:1 레슨 + TPI 골프 피지컬 정밀 진단 1회 + 타석 무제한',
    price: '1,790,000원',
    pricePerSession: '회당 약 11.1만원',
    target: '80타대 후반에서 70타대 싱글의 벽을 넘지 못하는 분, 클럽 챔피언 및 고수 골퍼',
    highlights: [
      '핀 위치와 바람에 대응하는 컨트롤 페이드 & 드로우 구질 구사',
      '웨지 시스템 30m, 50m, 70m, 90m 오차 2m 이내 캐리 세분화',
      '그린 주변 런닝/플롭/로브샷 및 벙커 세이브 확률 70% 이상 달성',
      'SAM PuttLab을 활용한 0.1도 단위 퍼팅 페이스 얼라인먼트',
      '티샷 코스 매니지먼트 및 위기 탈출 멘탈 루틴 정립',
    ],
    weeklyPlan: [
      { week: '1~2주차', topic: '3D 모션 정밀 스윙 피팅 & 탄도 제어', drill: '다이내믹 로프트 조절 및 스핀량 최적화' },
      { week: '3~4주차', topic: '웨지 4단계 거리 매트릭스 완성', drill: '시계 바늘 스윙 크기별 캐리 2m 단위 세분화' },
      { week: '5~6주차', topic: '다양한 잔디 라이 & 그린 주변 트러블샷', drill: '디봇, 젖은 모래, 역결 러프 탈출 테크닉' },
      { week: '7~8주차', topic: '프리샷 루틴 & 실전 멘탈 코칭', drill: '위기 시 파 세이브 전략 및 시뮬레이션' },
    ],
    tag: '상급자 프리미엄',
    recommendedFor: '평균 82~92타 상급 골퍼',
  },
  {
    id: 'service-custom',
    category: 'custom',
    categoryLabel: '맞춤 레슨 / 원포인트',
    title: '1:1 VIP 원포인트 & 취약점 집중 클리닉',
    subtitle: '급한 라운드를 앞두고 있거나 특정 클럽(드라이버/아이언/퍼터)의 고질병을 당일 해결하는 맞춤형 세션',
    duration: '1회 (60분 집중) 또는 4회/8회 쿠폰제',
    schedule: '원하는 날짜와 시간 100% 자율 예약 (1:1 프라이빗 룸)',
    sessions: '1회 60분 (쿠폰 등록 시 유효기간 6개월)',
    price: '1회 110,000원 / 4회 400,000원 / 8회 760,000원',
    pricePerSession: '회당 9.5만~11만원',
    target: '주말 중요한 라운드가 임박한 골퍼, 특정 클럽 하나만 유독 안 맞는 골퍼, 시간 여유가 불규칙한 바쁜 직장인',
    highlights: [
      'TrackMan 4 정밀 론치 모니터 60분 집중 측정',
      '초고속 듀얼 카메라로 문제 원인 3분 만에 정확히 규명',
      '당일 레슨 전후 비교 분석 영상 및 홈 트레이닝 처방 노트 카톡 발송',
      '레슨 당일 타석 연습 30분 무료 이용',
    ],
    weeklyPlan: [
      { week: '세션 1', topic: '문제 클럽 정밀 진단 & 원인 파악', drill: '원포인트 즉시 교정 드릴 3종 집중 체화' },
      { week: '세션 2', topic: '스윙 재현성 및 실전 적용', drill: '타겟 얼라인먼트 훈련 및 필드 감각 조율' },
    ],
    tag: '예약 선호도 1위',
    recommendedFor: '모든 구력 (시간 효율 극대화)',
  },
  {
    id: 'service-field',
    category: 'field',
    categoryLabel: '필드 레슨',
    title: '정규 18홀 프로 동반 실전 필드 레슨',
    subtitle: '연습장 실력을 실제 골프장 코스에서 100% 발휘할 수 있도록 코스 매니지먼트와 라이 적응력 전수',
    duration: '1일 집중 (정규 18홀 라운드)',
    schedule: '매주 월/화/목 충청권 명문 골프장(우정힐스, 천안상록, 마론뉴데이 등) 진행',
    sessions: '사전 트랙맨 거리 세팅 1회 + 18홀 밀착 동반 + 사후 영상 피드백 1회',
    price: '1인 450,000원 (그린피/카트비/캐디피 별도)',
    pricePerSession: '18홀 프로 전담 동반 코칭',
    target: '연습장에서는 싱글 수준인데 필드만 가면 무너지는 골퍼, 코스 에이밍과 경사지 샷이 어려운 분',
    highlights: [
      '발끝 오르막/내리막, 좌우 경사면 상황별 셋업과 에이밍 현장 교정',
      '잔디 결(순결/역결) 읽기 및 실전 그린 브레이크 분석 요령',
      '바람 세기와 고저차에 따른 현명한 클럽 선택법 전수',
      '전 라운드 샷별 문제점 분석 리포트 및 약점 보완 과제 제공',
    ],
    weeklyPlan: [
      { week: '사전 세션', topic: '클럽별 실측 캐리 거리 데이터 카드 작성', drill: '실제 거리 오차 측정' },
      { week: '필드 세션', topic: '18홀 실전 코스 동반 매니지먼트', drill: '경사면 타격 및 에이밍 실전 훈련' },
      { week: '사후 세션', topic: '촬영 영상 분석 및 4주 개인 과제 부여', drill: '피드백 리포트 제공' },
    ],
    tag: '스코어 즉시 -5타',
    recommendedFor: '필드 울렁증 극복 희망자',
  },
];

// 5.5 Before & After Comparison Cases (스윙 발전 과정 비포 & 애프터)
export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'case-1',
    studentName: '김*수 회원님 (40대)',
    ageAndType: '구력 2년차 / 직장인 골퍼',
    duration: '4주 집중 교정 (총 8회 수강)',
    targetGoal: '만성 슬라이스 완전 박멸 및 클럽패스 인-아웃 전환',
    troubleSummary: '백스윙 톱에서 상체가 앞으로 덤비는 오버 더 탑(Over-the-Top)으로 인해 -6.4°의 극심한 아웃-인 궤도와 치킨윙 발생, 라운드당 OB 5~7개 발생',
    solutionSummary: '트랙맨 클럽패스 +2.3° 인-아웃 전환, 하체 선행 골반 회전 분리 드릴 및 릴리즈 롤오버 교정으로 페이드/스트레이트 탄도 정착',
    beforeImage: GOLF_IMAGES.swingBeforeAmateur,
    afterImage: GOLF_IMAGES.headCoach,
    beforeStats: {
      clubPath: '-6.4° (아웃-인 깎아치기)',
      faceAngle: '+4.2° (열림)',
      carry: '182m',
      ballSpeed: '58.2 m/s',
      smashFactor: '1.34',
      score: '106타',
    },
    afterStats: {
      clubPath: '+2.3° (인-아웃 드로우)',
      faceAngle: '-0.3° (스퀘어)',
      carry: '228m (+46m 증가)',
      ballSpeed: '67.5 m/s',
      smashFactor: '1.49',
      score: '88타 (라베 달성)',
    },
    keyDrills: [
      '오른쪽 어깨 덤빔 방지 벽(Wall) 지지 드릴',
      '다운스윙 트랜지션 시 골반 45° 선행 래깅 유도',
      '임팩트 직후 팔꿈치 접힘(치킨윙) 방지 익스텐션 훈련',
    ],
    coachComment: '“김*수 회원님은 전형적인 상체 위주 덤빔 스윙이었으나, 지면을 밟는 하체 시퀀스만 정렬해 주자 트랙맨 수치가 4주 만에 프로급 인-아웃 드로우 궤적으로 완벽히 변신했습니다.” - 이상한 헤드프로',
  },
  {
    id: 'case-2',
    studentName: '박*진 회원님 (30대)',
    ageAndType: '구력 1년차 / 비기너 탈출',
    duration: '6주 속성 완성 (총 12회 수강)',
    targetGoal: '아이언 캐스팅·뒷땅 방지 & 다운블로 컴프레션 임팩트',
    troubleSummary: '손목 코킹이 일찍 풀리는 스쿱핑(Scooping)으로 인해 공 뒤 5cm를 치는 뒷땅 및 얇게 맞는 탑핑 빈발, 아이언 7번 비거리 110m 정체',
    solutionSummary: '핸드퍼스트 임팩트 포지션과 보우드(Bowed) 레프트 리스트 교정, 공 앞 5cm에 디봇을 형성하는 다운블로 타격각 체화',
    beforeImage: GOLF_IMAGES.proLesson,
    afterImage: GOLF_IMAGES.swingTech,
    beforeStats: {
      clubPath: '-2.8° (불안정)',
      faceAngle: '+3.1° (스쿱핑)',
      carry: '112m (7번 아이언)',
      ballSpeed: '46.8 m/s',
      smashFactor: '1.28',
      score: '112타',
    },
    afterStats: {
      clubPath: '+1.5° (안정적)',
      faceAngle: '-0.2° (스퀘어)',
      carry: '148m (+36m 증가)',
      ballSpeed: '56.4 m/s',
      smashFactor: '1.42',
      score: '91타 (100타 격파)',
    },
    keyDrills: [
      '왼손목 꺾임 방지 앵글 가이드 스틱 임팩트 훈련',
      '체중 80% 왼발 이동 후 눌러 치는 디봇 매트 드릴',
      '저탄도 펀치샷 드릴을 통한 다이내믹 로프트 21° 안정화',
    ],
    coachComment: '“손목으로만 공을 걷어 올리던 습관을 없애고 몸통 회전과 핸드퍼스트 임팩트가 정착되면서 맑은 타구음과 함께 그린 적중률이 70%로 올라갔습니다.” - 김민우 수석프로',
  },
  {
    id: 'case-3',
    studentName: '최*영 회원님 (50대)',
    ageAndType: '구력 8년차 / 싱글 플레이어 도전',
    duration: '8주 마스터 코스 (총 16회 수강)',
    targetGoal: '드라이버 비거리 회복(+35m) 및 70타대 싱글 진입',
    troubleSummary: '노화로 인한 유연성 저하로 백스윙 아크가 줄어들고 비거리가 190m로 감소, 무리하게 힘을 주며 리버스 피봇(역척추각) 발생',
    solutionSummary: 'TPI 골프 피지컬 가동성 회복 트레이닝과 지면 반력(수직 토크) 활용, 척추각 유지하며 X-Factor 꼬임 극대화',
    beforeImage: GOLF_IMAGES.swingBeforeAmateur,
    afterImage: GOLF_IMAGES.headCoach,
    beforeStats: {
      clubPath: '+0.5° (플랫)',
      faceAngle: '+2.0° (푸시성)',
      carry: '192m',
      ballSpeed: '59.5 m/s',
      smashFactor: '1.38',
      score: '89타',
    },
    afterStats: {
      clubPath: '+2.0° (파워 드로우)',
      faceAngle: '0.0° (완벽한 스퀘어)',
      carry: '235m (+43m 폭발)',
      ballSpeed: '69.1 m/s',
      smashFactor: '1.49',
      score: '78타 (생애 첫 싱글)',
    },
    keyDrills: [
      'TPI 흉추 가동성 및 고관절 회전 스트레칭',
      '지면 수직 반력을 이용한 발바닥 스프링 임팩트',
      '하이 티(High Tee) 상향 타격각 +4.5° 어퍼블로 드릴',
    ],
    coachComment: '“힘이 아닌 지면 반력과 올바른 운동 사슬(Kinematic Sequence)을 이해하셨기에 50대 나이에도 젊은 골퍼를 능가하는 235m 캐리를 안정적으로 기록하게 되었습니다.” - 이상한 헤드프로',
  },
];

// 6. Gallery Items (갤러리)
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    category: 'swing',
    categoryLabel: '스윙 분석 & 테크',
    title: '초고속 카메라 임팩트 순간 바이오메카닉 분석',
    description: '240fps 초고속 카메라와 론치 모니터로 드라이버 임팩트 순간의 볼 압축 및 스핀 축을 정밀 분석하는 현장입니다.',
    image: GOLF_IMAGES.swingTech,
    tag: 'TrackMan 4',
    date: '2026. 03',
  },
  {
    id: 'gal-2',
    category: 'lesson',
    categoryLabel: '1:1 레슨 현장',
    title: '헤드프로와 1:1 그립 및 숄더 턴 밀착 레슨',
    description: '무리한 힘을 빼고 자연스러운 체중 이동을 유도하는 프로 코치의 세심한 원포인트 핸즈온 레슨 모습입니다.',
    image: GOLF_IMAGES.proLesson,
    tag: '1:1 코칭',
    date: '2026. 03',
  },
  {
    id: 'gal-3',
    category: 'facility',
    categoryLabel: '스튜디오 & 시설',
    title: '실내 10m 언듈레이션 퍼팅 그린 & 숏게임 존',
    description: '레이저 얼라인먼트 훈련 선과 다양한 그린 라이를 실내에서 완벽히 재현한 최고급 퍼팅 연습장입니다.',
    image: GOLF_IMAGES.facilityPutting,
    tag: '시설 안내',
    date: '2026. 02',
  },
  {
    id: 'gal-4',
    category: 'swing',
    categoryLabel: '스윙 분석 & 테크',
    title: '투어 프로의 드라이버 피니시 밸런스 시연',
    description: '흔들림 없는 체중 이동과 완벽한 밸런스의 피니시 동작을 모니터링 시스템을 통해 실시간 대조 피드백합니다.',
    image: GOLF_IMAGES.headCoach,
    tag: '스윙 폼',
    date: '2026. 02',
  },
  {
    id: 'gal-5',
    category: 'facility',
    categoryLabel: '스튜디오 & 시설',
    title: '최신 TrackMan 4 프리미엄 프라이빗 VIP 룸',
    description: '외부 방해 없이 온전히 나만의 스윙에만 몰입할 수 있는 완벽 방음 독립 VIP 스튜디오 부스입니다.',
    image: GOLF_IMAGES.hero,
    tag: 'VIP 룸',
    date: '2026. 01',
  },
  {
    id: 'gal-6',
    category: 'field',
    categoryLabel: '필드 라운드',
    title: '수강생 정규 18홀 필드 레슨 동반 라운드',
    description: '천안 인근 명문 골프장에서 이상한 대표원장과 함께 진행된 실전 코스 공략 및 에이밍 필드 레슨 현장입니다.',
    image: GOLF_IMAGES.fieldCourse,
    tag: '필드 레슨',
    date: '2026. 01',
  },
];

// 7. Student Reviews (수강생 후기: 텍스트 및 영상 후기)
export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    type: 'video',
    author: '김*현 님 (40대, 천안 불당동 사업가)',
    ageGroup: '40대 남성',
    occupation: '자영업',
    experience: '구력 3년차',
    scoreBefore: '106타',
    scoreAfter: '88타 (라베 달성)',
    distanceGain: '+32m (195m → 227m)',
    program: '슬라이스 박멸 & 100타 브레이커',
    coach: '이상한 헤드프로',
    title: '“3년 동안 안 고쳐지던 슬라이스가 4주 만에 페이드로 바뀌었습니다”',
    content:
      '라운드 나갈 때마다 공을 한 더즌씩 잃어버려서 골프를 접을까 진지하게 고민했습니다. 다른 연습장에서는 맨날 힘 빼라는 말만 반복했는데, 이상한 원장님은 트랙맨 화면에서 클럽 패스가 왜 -6도(아웃인)로 깎여 들어오는지 인체 역학으로 짚어주시더군요. 하체 리드와 릴리즈 드릴을 배우고 난 뒤 첫 필드에서 OB가 단 1개도 안 났습니다. 지난주 88타로 첫 80타대 진입했습니다!',
    videoDuration: '02:45',
    date: '2026. 03. 14',
    rating: 5,
  },
  {
    id: 'rev-2',
    type: 'text',
    author: '이*정 님 (30대, 아산 탕정 연구원)',
    ageGroup: '30대 여성',
    occupation: '연구원',
    experience: '입문 (완전 초보)',
    scoreBefore: '미입문',
    scoreAfter: '첫 라운드 98타',
    distanceGain: '드라이버 190m 달성',
    program: '3개월 필드 데뷔 속성 초급반',
    coach: '김민우 수석프로',
    title: '“몸치 소리 듣던 제가 3개월 만에 100타 깨고 머리 올렸어요”',
    content:
      '운동 신경이 전혀 없어서 등록할 때도 망설였습니다. 김민우 프로님이 초보자 눈높이에 맞춰서 그립부터 차근차근 알려주셨고, 무엇보다 초고속 카메라로 제 스윙 모습을 보면서 교정하니 감각이 빠르게 잡혔습니다. 연습 타석도 3개월 내내 무제한으로 쓸 수 있어서 퇴근하고 매일 1시간씩 연습했더니 첫 라운드에서 98타를 쳤습니다. 동반자 분들이 폼이 너무 예쁘다고 난리였습니다.',
    date: '2026. 02. 28',
    rating: 5,
  },
  {
    id: 'rev-3',
    type: 'video',
    author: '박*수 님 (50대, 천안 신부동 병원장)',
    ageGroup: '50대 남성',
    occupation: '의사',
    experience: '구력 9년차',
    scoreBefore: '89타',
    scoreAfter: '78타 (생애 첫 싱글 패 수여)',
    distanceGain: '웨지 50m 캐리 오차 1.5m 이내',
    program: '80타대 안착 & 싱글 플레이어 고급반',
    coach: '이상한 헤드프로 & 박서연 프로',
    title: '“숏게임과 퍼팅 랩 레슨으로 평생의 소원인 싱글을 달성했습니다”',
    content:
      '80대 후반에서 10년 가까이 정체되어 있었습니다. 드라이버는 괜찮은데 그린 주변에서 번번이 어프로치 실수와 3퍼트가 발목을 잡았죠. 박서연 프로님의 SAM 퍼팅 랩 정밀 분석과 웨지 거리 매트릭스 레슨을 받으며 스코어가 극적으로 줄었습니다. 지난 주말 우정힐스CC에서 78타를 기록하고 골프 동호회에서 싱글 패를 받았습니다. 미스터리 골프스쿨의 체계적인 데이터 분석 덕분입니다.',
    videoDuration: '03:10',
    date: '2026. 01. 22',
    rating: 5,
  },
  {
    id: 'rev-4',
    type: 'text',
    author: '정*우 님 (20대, 대학생 골프 동아리)',
    ageGroup: '20대 남성',
    occupation: '대학생',
    experience: '구력 1년차',
    scoreBefore: '115타',
    scoreAfter: '92타',
    distanceGain: '+25m (아이언 7번 120m → 150m)',
    program: '1:1 VIP 원포인트 & 취약점 집중',
    coach: '김민우 프로',
    title: '“아이언 뒷땅으로 손목 아프던 게 핸드퍼스트 임팩트로 완전히 잡혔습니다”',
    content:
      '아이언만 잡으면 뒷땅이 심해서 손목 엘보까지 올 뻔했습니다. 원포인트 레슨 4회 만에 체중 이동과 핸드퍼스트 임팩트의 원리를 깨달았습니다. 디봇 매트에서 딱 소리 나며 공이 묵직하게 뻗어나가는 손맛을 잊을 수 없습니다. 친절하고 열정적인 지도 감사드립니다.',
    date: '2026. 01. 10',
    rating: 5,
  },
];

// 8. FAQs
export const FAQS: FAQItem[] = [
  {
    question: '골프 클럽(골프채)이나 장비가 아예 없어도 레슨을 받을 수 있나요?',
    answer:
      '네, 전혀 걱정하지 마세요! 미스터리 골프스쿨 천안 본원에는 테일러메이드, 캘러웨이, 핑 등 최신 프리미엄 브랜드의 남성/여성용 연습 채와 장갑이 항시 완비되어 있습니다. 편안한 운동복과 운동화만 착용하시고 가볍게 방문하시면 됩니다. 클럽 구매는 1~2개월 레슨 후 수강생의 스윙 스피드와 체형 데이터를 분석하여 최적의 스펙으로 추천해 드립니다.',
  },
  {
    question: '레슨 일정 예약과 변경은 어떻게 이루어지나요?',
    answer:
      '온라인 홈페이지 예약 시스템 및 수강생 전용 모바일 앱을 통해 24시간 실시간으로 원하는 코치와 시간대를 간편하게 지정하실 수 있습니다. 레슨 시작 12시간 전까지는 페널티 없이 자유롭게 취소 및 일정 변경이 가능합니다.',
  },
  {
    question: '일반 스크린 골프장 센서와 미스터리 골프스쿨의 TrackMan 4는 어떤 차이가 있나요?',
    answer:
      '일반 연습장의 보급형 센서는 볼의 비행 궤적을 알고리즘으로 추정하지만, 전 세계 PGA 투어 프로 90% 이상이 사용하는 [TrackMan 4]는 군사용 듀얼 도플러 레이더를 통해 실제 볼의 딤플 회전과 클럽 궤적을 0.1도 단위로 정밀 추적합니다. 슬라이스, 훅의 정확한 원인을 데이터로 즉시 규명할 수 있습니다.',
  },
  {
    question: '주차 시설 및 대중교통 이용은 편리한가요?',
    answer:
      '충남 천안시 동남구 쌍용대로 66 대로변에 위치해 있으며, 미스터리 골프스쿨 전용 대형 지상 및 지하 주차장에 50대 이상 무료 주차가 가능합니다(2시간 무료 지원). 지하철 1호선 봉명역 및 쌍용역에서 차량으로 3~5분 거리입니다.',
  },
  {
    question: '온라인으로 예약 또는 문의를 남기면 어떻게 처리되나요?',
    answer:
      '예약 및 문의 사항을 홈페이지 폼으로 작성해 주시면 즉시 관리자 이메일(leesanghan7656@gmail.com) 및 전산 시스템으로 실시간 자동 전송됩니다. 담당 매니저가 30분 이내에 확인 후 유선 또는 카카오톡 알림톡으로 상세 일정과 안내 사항을 확정 연락드립니다.',
  },
];

// Backward compatible aliases
export const PROGRAMS = DETAILED_SERVICES;
export const REVIEWS = REVIEWS_DATA;
export const PRICING_PLANS = [
  {
    id: 'one-point',
    name: '1:1 VIP 원포인트 정밀 레슨',
    period: '1회 (60분)',
    price: '110,000원',
    pricePerSession: '회당 11만원',
    targetUser: '특정 클럽(드라이버/아이언/퍼터)의 급한 미스샷 원포인트 교정이 필요한 분',
    features: [
      'TrackMan 4 론치 모니터 60분 정밀 데이터 측정',
      '초고속 고화질 듀얼 스윙 카메라 분석',
      '레슨 후 핵심 교정 영상 & 맞춤 처방 노트 발송',
      '당일 연습 타석 30분 무료 이용',
    ],
  },
  {
    id: 'starter-package',
    name: '1개월 속성 스윙 완성 패키지',
    period: '1개월 (4주)',
    price: '790,000원',
    pricePerSession: '회당 약 9.8만원',
    targetUser: '주 2회 꾸준한 레슨으로 스윙 틀을 확실히 잡고 싶은 입문자 및 중급자',
    features: [
      '1:1 프라이빗 레슨 총 8회 (회당 50분)',
      '1개월간 전 타석 연습 무제한 무료 (1일 1회)',
      '클럽별 스윙 데이터 성장 리포트 2회 제공',
      '개인 락커 & 연습용 프리미엄 클럽/장갑 무료 제공',
    ],
  },
  {
    id: 'master-package',
    name: '3개월 마스터 올인원 패키지',
    period: '3개월 (12주)',
    price: '2,190,000원',
    pricePerSession: '회당 약 9.1만원',
    badge: '수강생 74% 선택',
    isPopular: true,
    targetUser: '100타 깨기 or 싱글 플레이어로 완벽하게 변신하고 싶은 분',
    features: [
      '1:1 프라이빗 레슨 총 24회 (회당 50분)',
      '3개월간 전 타석 연습 무제한 무료 이용',
      '필드 레슨(9홀 파3) 1회 동반 무료 지원',
      'TPI 골프 피지컬 스윙 가동성 종합 진단 1회',
      '스윙 비포&애프터 4K 영상 및 종합 포트폴리오',
      'VIP 전용 프라이빗 룸 우선 예약권',
    ],
  },
  {
    id: 'vip-unlimited',
    name: 'VIP 연간 프리미엄 멤버십',
    period: '12개월 (연간)',
    price: '6,900,000원',
    pricePerSession: '상시 전담 코칭',
    targetUser: '시간에 구애받지 않고 원장 헤드프로의 상시 전담 케어를 원하는 VIP 골퍼',
    features: [
      '헤드 프로 1:1 전담 레슨 60회 (유효기간 1년)',
      '정규 18홀 필드 레슨 연 2회 전액 지원',
      'VIP 스튜디오 전용 프라이빗 룸 상시 배정',
      '최고급 락커룸 및 클럽 풀피팅 & 그립 교체 연 2회',
      '동반 가족/지인 1인 타석 무료 동반(월 2회)',
    ],
  },
];

