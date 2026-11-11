export type PageView = 'home' | 'about' | 'services' | 'gallery' | 'reviews' | 'reservation';

export interface Program {
  id: string;
  category: 'beginner' | 'breaker' | 'single' | 'custom' | 'field' | 'junior';
  categoryLabel: string;
  title: string;
  subtitle: string;
  duration: string;
  schedule: string;
  sessions: string;
  price: string;
  pricePerSession?: string;
  target: string;
  highlights: string[];
  weeklyPlan: { week: string; topic: string; drill: string }[];
  tag: string;
  recommendedFor: string;
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  association: string;
  image: string;
  quote: string;
  career: string[];
  certifications: string[];
  specialty: string;
}

export interface HistoryMilestone {
  year: string;
  title: string;
  description: string;
}

export interface PhilosophyPillar {
  title: string;
  sub: string;
  desc: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  category: 'lesson' | 'swing' | 'facility' | 'field';
  categoryLabel: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  date: string;
}

export interface ReviewItem {
  id: string;
  type: 'video' | 'text';
  author: string;
  ageGroup: string;
  occupation: string;
  experience: string;
  scoreBefore: string;
  scoreAfter: string;
  distanceGain?: string;
  program: string;
  coach: string;
  title: string;
  content: string;
  videoDuration?: string;
  date: string;
  rating: number;
}

export interface ReservationSubmission {
  id: string;
  timestamp: string;
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  preferredCoach: string;
  preferredDate: string;
  preferredTime: string;
  experience: string;
  score: string;
  trouble: string;
  message?: string;
  adminEmailSentTo: string;
  status: '접수완료' | '상담확정' | '레슨진행중';
}

export interface InquirySubmission {
  id: string;
  timestamp: string;
  name: string;
  phone: string;
  email: string;
  inquiryType: string;
  subject: string;
  content: string;
  adminEmailSentTo: string;
  status: '접수' | '답변완료';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricePlan {
  id: string;
  name: string;
  period: string;
  price: string;
  pricePerSession?: string;
  badge?: string;
  isPopular?: boolean;
  features: string[];
  targetUser: string;
}

export interface Review {
  id: string;
  author: string;
  experience: string;
  scoreBefore: string;
  scoreAfter: string;
  distanceGain?: string;
  program: string;
  content: string;
  date: string;
}

export interface BeforeAfterCase {
  id: string;
  studentName: string;
  ageAndType: string;
  duration: string;
  targetGoal: string;
  troubleSummary: string;
  solutionSummary: string;
  beforeImage: string;
  afterImage: string;
  beforeStats: {
    clubPath: string;
    faceAngle: string;
    carry: string;
    ballSpeed: string;
    smashFactor: string;
    score: string;
  };
  afterStats: {
    clubPath: string;
    faceAngle: string;
    carry: string;
    ballSpeed: string;
    smashFactor: string;
    score: string;
  };
  keyDrills: string[];
  coachComment: string;
}


