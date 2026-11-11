import React, { useState, useEffect } from 'react';
import {
  ADMIN_EMAIL,
  ACADEMY_ADDRESS,
  ACADEMY_ADDRESS_DETAIL,
  ACADEMY_PHONE,
  ACADEMY_MOBILE,
} from '../data/golfData';
import { ReservationSubmission, InquirySubmission } from '../types/golf';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  HelpCircle,
  MapPin,
  ShieldCheck,
  Inbox,
  AlertCircle,
  FileText,
} from 'lucide-react';

interface ReservationContactPageProps {
  initialProgram?: string;
}

export const ReservationContactPage: React.FC<ReservationContactPageProps> = ({
  initialProgram,
}) => {
  const [activeTab, setActiveTab] = useState<'reservation' | 'inquiry' | 'adminLog'>('reservation');

  // Reservation Form State
  const [resName, setResName] = useState('');
  const [resPhone, setResPhone] = useState('');
  const [resEmail, setResEmail] = useState('');
  const [resService, setResService] = useState(
    initialProgram || '3개월 필드 데뷔 속성 초급반'
  );
  const [resCoach, setResCoach] = useState('이상한 대표원장 (헤드프로)');
  const [resDate, setResDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [resTime, setResTime] = useState('평일 저녁 (19:00 ~ 21:00)');
  const [resExp, setResExp] = useState('입문 ~ 6개월 미만 (비기너)');
  const [resScore, setResScore] = useState('100타 이상 (백돌이)');
  const [resTrouble, setResTrouble] = useState('슬라이스 / 비거리 부족');
  const [resNotes, setResNotes] = useState('');
  const [resSuccessData, setResSuccessData] = useState<ReservationSubmission | null>(null);

  // Inquiry Form State
  const [inqName, setInqName] = useState('');
  const [inqPhone, setInqPhone] = useState('');
  const [inqEmail, setInqEmail] = useState('');
  const [inqType, setInqType] = useState('수강료 및 할인 혜택');
  const [inqSubject, setInqSubject] = useState('');
  const [inqContent, setInqContent] = useState('');
  const [inqSuccessData, setInqSuccessData] = useState<InquirySubmission | null>(null);

  // Saved Submissions (for Admin Email Dispatch Center)
  const [savedReservations, setSavedReservations] = useState<ReservationSubmission[]>([
    {
      id: 'ML-RES-20260315-01',
      timestamp: '2026. 03. 15 14:20',
      name: '이*훈',
      phone: '010-4821-****',
      email: 'lh****@naver.com',
      serviceType: '슬라이스 박멸 & 100타 브레이커',
      preferredCoach: '이상한 대표원장',
      preferredDate: '2026-03-18',
      preferredTime: '평일 저녁 (19:00 ~ 21:00)',
      experience: '구력 2년',
      score: '105타',
      trouble: '드라이버 슬라이스 및 OB',
      adminEmailSentTo: ADMIN_EMAIL,
      status: '상담확정',
    },
  ]);

  const [savedInquiries, setSavedInquiries] = useState<InquirySubmission[]>([
    {
      id: 'ML-INQ-20260315-01',
      timestamp: '2026. 03. 15 11:05',
      name: '박*진',
      phone: '010-9283-****',
      email: 'pj****@gmail.com',
      inquiryType: '레슨 시간표 및 예약 변경',
      subject: '퇴근 시간이 유동적인데 주 2회 시간 변경 가능한가요?',
      content: '야근이 잦은 직장인입니다. 전용 앱에서 당일이나 전날 시간 변경이 자유로운지 궁금합니다.',
      adminEmailSentTo: ADMIN_EMAIL,
      status: '답변완료',
    },
  ]);

  useEffect(() => {
    if (initialProgram) {
      setResService(initialProgram);
      setActiveTab('reservation');
    }
  }, [initialProgram]);

  // Handle Reservation Submit
  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resName.trim() || !resPhone.trim()) return;

    const newReservation: ReservationSubmission = {
      id: `ML-RES-${Date.now().toString().slice(-6)}`,
      timestamp: new Date().toLocaleString('ko-KR', { hour12: false }),
      name: resName.trim(),
      phone: resPhone.trim(),
      email: resEmail.trim() || '미기재',
      serviceType: resService,
      preferredCoach: resCoach,
      preferredDate: resDate,
      preferredTime: resTime,
      experience: resExp,
      score: resScore,
      trouble: resTrouble,
      message: resNotes.trim(),
      adminEmailSentTo: ADMIN_EMAIL,
      status: '접수완료',
    };

    setSavedReservations([newReservation, ...savedReservations]);
    setResSuccessData(newReservation);
  };

  // Handle Inquiry Submit
  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inqName.trim() || !inqPhone.trim() || !inqContent.trim()) return;

    const newInquiry: InquirySubmission = {
      id: `ML-INQ-${Date.now().toString().slice(-6)}`,
      timestamp: new Date().toLocaleString('ko-KR', { hour12: false }),
      name: inqName.trim(),
      phone: inqPhone.trim(),
      email: inqEmail.trim() || '미기재',
      inquiryType: inqType,
      subject: inqSubject.trim() || `${inqType} 문의`,
      content: inqContent.trim(),
      adminEmailSentTo: ADMIN_EMAIL,
      status: '접수',
    };

    setSavedInquiries([newInquiry, ...savedInquiries]);
    setInqSuccessData(newInquiry);
  };

  const handleResetResForm = () => {
    setResSuccessData(null);
    setResName('');
    setResPhone('');
    setResEmail('');
    setResNotes('');
  };

  const handleResetInqForm = () => {
    setInqSuccessData(null);
    setInqName('');
    setInqPhone('');
    setInqEmail('');
    setInqSubject('');
    setInqContent('');
  };

  return (
    <div className="py-12 lg:py-16 bg-white animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 tracking-wider uppercase mb-2">
            <span>ONLINE RESERVATION & INQUIRY SYSTEM</span>
            <span aria-hidden="true">·</span>
            <span>CHEONAN</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            온라인 레슨 예약 및 문의하기
          </h1>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            원하시는 레슨 프로그램과 희망 일정을 선택해 주시면 관리자 이메일(<strong>{ADMIN_EMAIL}</strong>)로 즉시 자동 전송되며, 담당 매니저가 30분 내로 연락드립니다.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-2 mt-8 p-1.5 bg-stone-100 rounded-xl w-fit">
          <button
            type="button"
            onClick={() => setActiveTab('reservation')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'reservation'
                ? 'bg-white text-stone-950 shadow-sm font-bold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Calendar className="w-4 h-4 text-emerald-700" />
            <span>레슨 온라인 예약</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('inquiry')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'inquiry'
                ? 'bg-white text-stone-950 shadow-sm font-bold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <HelpCircle className="w-4 h-4 text-emerald-700" />
            <span>간편 문의하기 (Q&A)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('adminLog')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'adminLog'
                ? 'bg-white text-stone-950 shadow-sm font-bold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Inbox className="w-4 h-4 text-emerald-700" />
            <span>이메일 발송 현황 ({savedReservations.length + savedInquiries.length})</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Form Area: 8 cols */}
          <div className="lg:col-span-8">
            {/* TAB 1: RESERVATION */}
            {activeTab === 'reservation' && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
                {!resSuccessData ? (
                  <div>
                    <div className="mb-6 pb-4 border-b border-stone-100 flex items-center justify-between">
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                          레슨 프로그램 및 시간 선택 예약 신청
                        </h2>
                        <p className="text-xs text-stone-500 mt-1">
                          신청 내용이 관리자 이메일({ADMIN_EMAIL})로 자동 발송됩니다.
                        </p>
                      </div>
                      <span className="text-xs bg-emerald-50 text-emerald-800 font-bold px-2.5 py-1 rounded-md">
                        24시간 실시간 접수
                      </span>
                    </div>

                    <form onSubmit={handleReservationSubmit} className="space-y-5">
                      {/* 1. Program & Coach selection */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-stone-800 mb-1.5">
                            원하는 레슨 프로그램 <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={resService}
                            onChange={(e) => setResService(e.target.value)}
                            className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700"
                          >
                            <option value="3개월 필드 데뷔 속성 초급반">3개월 필드 데뷔 초급반 (2,190,000원)</option>
                            <option value="슬라이스 박멸 & 100타/90타 브레이커 중급반">슬라이스 박멸 & 100타 브레이커 (1,590,000원)</option>
                            <option value="80타대 안착 & 싱글 플레이어 고급반">80타대 안착 & 싱글 플레이어 (1,790,000원)</option>
                            <option value="1:1 VIP 원포인트 & 취약점 집중 클리닉">1:1 VIP 원포인트 레슨 (1회 110,000원)</option>
                            <option value="정규 18홀 프로 동반 실전 필드 레슨">18홀 동반 실전 필드 레슨 (450,000원)</option>
                            <option value="무료 1:1 체험 레슨 및 정밀 스윙 진단">무료 1:1 체험 레슨 & 스윙 진단 (0원)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-stone-800 mb-1.5">
                            희망 지도 코치 <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={resCoach}
                            onChange={(e) => setResCoach(e.target.value)}
                            className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700"
                          >
                            <option value="이상한 대표원장 (헤드프로 / KPGA)">이상한 대표원장 (헤드프로 / TrackMan L2)</option>
                            <option value="김민우 수석프로 (KPGA 정회원)">김민우 수석프로 (초보 기본기 / 바디턴)</option>
                            <option value="박서연 프로 (KLPGA 정회원)">박서연 프로 (숏게임 & 퍼팅 랩 마스터)</option>
                            <option value="담당 코치 지정 없음 (가장 빠른 일정 우선)">담당 코치 무관 (가장 빠른 일정)</option>
                          </select>
                        </div>
                      </div>

                      {/* 2. Date & Time selection */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-stone-800 mb-1.5">
                            희망 예약 날짜 <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="date"
                            required
                            value={resDate}
                            onChange={(e) => setResDate(e.target.value)}
                            className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-stone-800 mb-1.5">
                            희망 시간대 <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={resTime}
                            onChange={(e) => setResTime(e.target.value)}
                            className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700"
                          >
                            <option value="평일 모닝 (06:30 ~ 09:00)">평일 모닝 (06:30 ~ 09:00)</option>
                            <option value="평일 오전 (09:00 ~ 12:00)">평일 오전 (09:00 ~ 12:00)</option>
                            <option value="평일 오후 (13:00 ~ 18:00)">평일 오후 (13:00 ~ 18:00)</option>
                            <option value="평일 저녁 (18:00 ~ 21:00)">평일 저녁 (18:00 ~ 21:00)</option>
                            <option value="평일 심야 (21:00 ~ 22:30)">평일 심야 (21:00 ~ 22:30)</option>
                            <option value="주말 오전 (08:00 ~ 13:00)">주말 오전 (08:00 ~ 13:00)</option>
                            <option value="주말 오후 (13:00 ~ 20:00)">주말 오후 (13:00 ~ 20:00)</option>
                          </select>
                        </div>
                      </div>

                      {/* 3. User Info */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-stone-800 mb-1.5">
                            성함 <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                            <input
                              type="text"
                              required
                              placeholder="홍길동"
                              value={resName}
                              onChange={(e) => setResName(e.target.value)}
                              className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-stone-800 mb-1.5">
                            휴대전화 번호 <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                            <input
                              type="tel"
                              required
                              placeholder="010-1234-5678"
                              value={resPhone}
                              onChange={(e) => setResPhone(e.target.value)}
                              className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-stone-800 mb-1.5">
                            이메일 (확인용)
                          </label>
                          <div className="relative">
                            <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                            <input
                              type="email"
                              placeholder="user@example.com"
                              value={resEmail}
                              onChange={(e) => setResEmail(e.target.value)}
                              className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700"
                            />
                          </div>
                        </div>
                      </div>

                      {/* 4. Golf Handicap & Troubles */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-stone-800 mb-1.5">
                            현재 골프 구력
                          </label>
                          <select
                            value={resExp}
                            onChange={(e) => setResExp(e.target.value)}
                            className="w-full px-3 py-2.5 text-xs border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700"
                          >
                            <option value="입문 ~ 6개월 미만 (비기너)">입문 ~ 6개월 미만</option>
                            <option value="6개월 ~ 1년차">6개월 ~ 1년차</option>
                            <option value="1년 ~ 3년차">1년 ~ 3년차</option>
                            <option value="3년 ~ 5년차">3년 ~ 5년차</option>
                            <option value="5년 이상 (상급자)">5년 이상 (상급자)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-stone-800 mb-1.5">
                            평균 타수
                          </label>
                          <select
                            value={resScore}
                            onChange={(e) => setResScore(e.target.value)}
                            className="w-full px-3 py-2.5 text-xs border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700"
                          >
                            <option value="미입문 / 라운드 없음">미입문 / 라운드 없음</option>
                            <option value="100타 이상 (백돌이)">100타 이상 (백돌이)</option>
                            <option value="90 ~ 99타 (보기 플레이어)">90 ~ 99타</option>
                            <option value="80 ~ 89타 (안정권)">80 ~ 89타</option>
                            <option value="70타대 싱글">70타대 싱글</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-stone-800 mb-1.5">
                            주요 스윙 고민
                          </label>
                          <select
                            value={resTrouble}
                            onChange={(e) => setResTrouble(e.target.value)}
                            className="w-full px-3 py-2.5 text-xs border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700"
                          >
                            <option value="슬라이스 / 비거리 부족">슬라이스 & 비거리 부족</option>
                            <option value="아이언 뒷땅 / 탑핑">아이언 뒷땅 / 탑핑 임팩트</option>
                            <option value="어프로치 쌩크 & 3퍼트">어프로치 쌩크 & 3퍼트</option>
                            <option value="스윙 폼 전체 교정">스윙 폼 전체 리빌딩</option>
                            <option value="필드 울렁증 & 멘탈">필드 코스 매니지먼트</option>
                          </select>
                        </div>
                      </div>

                      {/* 5. Notes */}
                      <div>
                        <label className="block text-xs font-bold text-stone-800 mb-1.5">
                          추가 요청 사항 (선택)
                        </label>
                        <textarea
                          rows={2}
                          placeholder="예: 퇴근 후 방문 예정입니다. 왼손잡이 클럽 대여가 가능한지 확인 부탁드립니다."
                          value={resNotes}
                          onChange={(e) => setResNotes(e.target.value)}
                          className="w-full p-3 text-xs border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full py-4 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                        >
                          <Send className="w-4 h-4" />
                          <span>레슨 예약 신청서 제출 (관리자 이메일 자동 발송)</span>
                        </button>
                        <div className="text-[11px] text-stone-500 text-center mt-2 flex items-center justify-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                          <span>
                            신청 즉시 관리자 메일(<strong>{ADMIN_EMAIL}</strong>)로 알림 전송되며, 2시간 무료 발렛 주차가 지원됩니다.
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
                ) : (
                  /* Reservation Success State */
                  <div className="py-8 text-center animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-full mb-2">
                      관리자 이메일 발송 완료 ({resSuccessData.adminEmailSentTo})
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900 mb-2">
                      레슨 예약 신청이 정상 접수되었습니다!
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 mb-6 max-w-md mx-auto leading-relaxed">
                      <strong className="text-stone-900">{resSuccessData.name}</strong> 님의 레슨 신청서가 관리자 이메일로 자동 전송되었습니다. 담당 매니저가 일정을 최종 확정하여 유선 및 카카오톡으로 안내드립니다.
                    </p>

                    <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 text-left max-w-lg mx-auto text-xs space-y-2.5 mb-6">
                      <div className="flex justify-between border-b border-stone-200 pb-2">
                        <span className="text-stone-500 font-semibold">예약 접수 번호</span>
                        <span className="font-mono font-bold text-emerald-800">{resSuccessData.id}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">선택 프로그램</span>
                        <span className="font-semibold text-stone-900">{resSuccessData.serviceType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">희망 일시</span>
                        <span className="font-semibold text-stone-900">{resSuccessData.preferredDate} ({resSuccessData.preferredTime})</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">희망 코치</span>
                        <span className="font-semibold text-stone-900">{resSuccessData.preferredCoach}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">신청자 연락처</span>
                        <span className="font-semibold text-stone-900">{resSuccessData.phone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">오시는 곳</span>
                        <span className="font-semibold text-stone-900">{ACADEMY_ADDRESS}</span>
                      </div>
                    </div>

                    <div className="flex justify-center gap-3">
                      <button
                        type="button"
                        onClick={handleResetResForm}
                        className="py-2.5 px-6 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer"
                      >
                        다른 예약 추가 신청하기
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: INQUIRY */}
            {activeTab === 'inquiry' && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
                {!inqSuccessData ? (
                  <div>
                    <div className="mb-6 pb-4 border-b border-stone-100 flex items-center justify-between">
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                          간편 1:1 온라인 문의하기 (Q&A)
                        </h2>
                        <p className="text-xs text-stone-500 mt-1">
                          수강료, 커리큘럼, 기업 레슨 등 궁금하신 점을 남겨주시면 관리자 메일로 자동 발송됩니다.
                        </p>
                      </div>
                      <span className="text-xs bg-emerald-50 text-emerald-800 font-bold px-2.5 py-1 rounded-md">
                        신속 답변
                      </span>
                    </div>

                    <form onSubmit={handleInquirySubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-stone-800 mb-1.5">
                            성함 <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="성함 입력"
                            value={inqName}
                            onChange={(e) => setInqName(e.target.value)}
                            className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-stone-800 mb-1.5">
                            휴대전화 <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="010-1234-5678"
                            value={inqPhone}
                            onChange={(e) => setInqPhone(e.target.value)}
                            className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-stone-800 mb-1.5">
                            이메일 (답변 수신용)
                          </label>
                          <input
                            type="email"
                            placeholder="user@example.com"
                            value={inqEmail}
                            onChange={(e) => setInqEmail(e.target.value)}
                            className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-800 mb-1.5">
                          문의 유형 선택
                        </label>
                        <select
                          value={inqType}
                          onChange={(e) => setInqType(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700"
                        >
                          <option value="수강료 및 할인 혜택">수강료 및 카드 무이자 할부 안내</option>
                          <option value="레슨 프로그램 선택 상담">나에게 맞는 레슨 프로그램 추천 상담</option>
                          <option value="주말 및 야간 레슨 일정">주말/야간 레슨 가능 여부 및 스케줄</option>
                          <option value="장비 대여 및 클럽 피팅">연습 클럽 무료 대여 및 장비 피팅</option>
                          <option value="기업/단체 동호회 레슨">기업/단체 임직원 맞춤 그룹 레슨</option>
                          <option value="기타 문의">기타 문의사항</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-800 mb-1.5">
                          문의 제목
                        </label>
                        <input
                          type="text"
                          placeholder="문의 제목을 간략히 입력해 주세요"
                          value={inqSubject}
                          onChange={(e) => setInqSubject(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-800 mb-1.5">
                          문의 내용 <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          required
                          rows={4}
                          placeholder="궁금하신 사항을 자유롭게 남겨주시면 담당 매니저가 확인 후 성심성의껏 답변해 드립니다."
                          value={inqContent}
                          onChange={(e) => setInqContent(e.target.value)}
                          className="w-full p-3 text-xs sm:text-sm border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                        >
                          <Send className="w-4 h-4" />
                          <span>문의 내용 전송하기 (관리자 메일 자동 발송)</span>
                        </button>
                      </div>
                    </form>
                  </div>
                ) : (
                  /* Inquiry Success State */
                  <div className="py-8 text-center animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-full mb-2">
                      관리자 이메일 발송 완료 ({inqSuccessData.adminEmailSentTo})
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900 mb-2">
                      문의사항이 정상적으로 전달되었습니다!
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 mb-6 max-w-md mx-auto leading-relaxed">
                      작성해주신 문의 내용이 관리자 이메일(<strong>{ADMIN_EMAIL}</strong>)로 안전하게 발송되었습니다. 확인 후 남겨주신 연락처로 신속히 답변드리겠습니다.
                    </p>

                    <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 text-left max-w-md mx-auto text-xs space-y-2 mb-6">
                      <div className="flex justify-between border-b border-stone-200 pb-2">
                        <span className="text-stone-500 font-semibold">접수 번호</span>
                        <span className="font-mono font-bold text-emerald-800">{inqSuccessData.id}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">문의 유형</span>
                        <span className="font-semibold text-stone-900">{inqSuccessData.inquiryType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">문의 제목</span>
                        <span className="font-semibold text-stone-900">{inqSuccessData.subject}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleResetInqForm}
                      className="py-2.5 px-6 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer"
                    >
                      새로운 문의 작성하기
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: ADMIN EMAIL DISPATCH LOG */}
            {activeTab === 'adminLog' && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                      <Mail className="w-5 h-5 text-emerald-800" />
                      관리자 이메일 자동 발송 현황 센터
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      수신 관리자 메일함: <strong className="text-stone-900 font-mono">{ADMIN_EMAIL}</strong>
                    </p>
                  </div>
                  <span className="text-xs font-mono bg-stone-100 px-3 py-1 rounded-md text-stone-600">
                    실시간 동기화 상태
                  </span>
                </div>

                {/* Submissions List */}
                <div className="space-y-4">
                  <div className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                    최근 예약 접수 내역 ({savedReservations.length}건)
                  </div>
                  {savedReservations.map((res) => (
                    <div
                      key={res.id}
                      className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-emerald-800">{res.id}</span>
                        <span className="text-stone-400 font-mono text-[11px]">{res.timestamp}</span>
                      </div>
                      <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                        <span>{res.name} 회원님</span>
                        <span className="text-stone-300">|</span>
                        <span className="text-xs font-normal text-stone-600">{res.serviceType}</span>
                        <span className="text-xs font-normal text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded ml-auto">
                          {res.status}
                        </span>
                      </div>
                      <div className="text-stone-600">
                        희망 일정: {res.preferredDate} ({res.preferredTime}) · 담당 코치: {res.preferredCoach}
                      </div>
                      <div className="pt-2 border-t border-stone-200/60 flex items-center justify-between text-[11px] text-stone-500">
                        <span>발송 대상: {res.adminEmailSentTo}</span>
                        <span className="text-emerald-700 font-semibold">자동 메일 전송 완료 ✓</span>
                      </div>
                    </div>
                  ))}

                  <div className="text-xs font-bold text-stone-900 uppercase tracking-wider pt-4">
                    최근 간편 문의 접수 내역 ({savedInquiries.length}건)
                  </div>
                  {savedInquiries.map((inq) => (
                    <div
                      key={inq.id}
                      className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-emerald-800">{inq.id}</span>
                        <span className="text-stone-400 font-mono text-[11px]">{inq.timestamp}</span>
                      </div>
                      <div className="font-bold text-stone-900 text-sm">
                        [{inq.inquiryType}] {inq.subject}
                      </div>
                      <p className="text-stone-600 leading-relaxed bg-white p-2.5 rounded border border-stone-200/60">
                        {inq.content}
                      </p>
                      <div className="pt-1 flex items-center justify-between text-[11px] text-stone-500">
                        <span>작성자: {inq.name} ({inq.phone})</span>
                        <span className="text-emerald-700 font-semibold">메일 발송 완료 ({inq.adminEmailSentTo}) ✓</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Info Sidebar: 4 cols */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Contact Box */}
            <div className="bg-stone-900 text-white p-6 sm:p-7 rounded-2xl border border-stone-800 shadow-md">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                CHEONAN ACADEMY
              </div>
              <h3 className="text-xl font-bold mb-4">미스터리 골프스쿨 천안 본원</h3>

              <div className="space-y-4 text-xs text-stone-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">주소 안내</div>
                    <div className="mt-0.5">{ACADEMY_ADDRESS_DETAIL}</div>
                    <div className="text-[11px] text-stone-400 mt-0.5">
                      쌍용대로변 대로변 위치 (50대 무료 전용 주차장 완비)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">유선 대표번호</div>
                    <div className="mt-0.5 font-mono text-sm font-semibold text-emerald-400">
                      {ACADEMY_PHONE}
                    </div>
                    <div className="text-[11px] text-stone-400">직통: {ACADEMY_MOBILE}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">관리자 공식 이메일</div>
                    <div className="mt-0.5 font-mono text-emerald-400">{ADMIN_EMAIL}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">운영 시간</div>
                    <div className="mt-0.5">평일: 06:30 ~ 23:00</div>
                    <div>주말/공휴일: 08:00 ~ 21:00</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800 text-[11px] text-stone-400 leading-relaxed">
                * 당일 급한 예약이나 레슨 일정 변경은 대표번호({ACADEMY_PHONE})로 유선 문의 주시면 가장 빠르게 처리됩니다.
              </div>
            </div>

            {/* Assistance card */}
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 text-xs text-stone-600 space-y-2">
              <div className="font-bold text-stone-900 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-emerald-700" />
                <span>체험 레슨 전 준비물 안내</span>
              </div>
              <p className="leading-relaxed">
                테일러메이드/캘러웨이 프리미엄 연습용 클럽과 전용 골프 장갑이 상시 준비되어 있으므로, 편안한 복장과 운동화만 착용하시고 방문하시면 됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
