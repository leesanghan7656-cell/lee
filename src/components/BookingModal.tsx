import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, CheckCircle, Clock } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    program?: string;
    experience?: string;
    score?: string;
    trouble?: string;
  };
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('0~6개월 (입문)');
  const [score, setScore] = useState('100타 이상');
  const [trouble, setTrouble] = useState('슬라이스 / 와이파이 구질');
  const [preferredDay, setPreferredDay] = useState('평일 저녁 (19:00~22:00)');
  const [preferredCoach, setPreferredCoach] = useState('이상한 대표원장 (헤드프로)');
  const [memo, setMemo] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingCode, setBookingCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialData) {
      if (initialData.experience) setExperience(initialData.experience);
      if (initialData.score) setScore(initialData.score);
      if (initialData.trouble) setTrouble(initialData.trouble);
      if (initialData.program) {
        setMemo(`[희망 과정]: ${initialData.program}`);
      }
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('이름을 입력해 주세요.');
      return;
    }
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('올바른 휴대전화 번호를 입력해 주세요.');
      return;
    }

    // Generate random booking code
    const code = `ML-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingCode(code);
    setIsSubmitted(true);
    setErrorMsg('');
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative my-8">
        <button
          type="button"
          onClick={resetAndClose}
          className="absolute top-5 right-5 text-stone-400 hover:text-stone-700 transition-colors p-1"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                1:1 TRIAL LESSON RESERVATION
              </span>
              <h3 className="text-2xl font-bold text-stone-900 mt-1">
                무료 1:1 체험 레슨 & 스윙 진단 예약
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed">
                TrackMan 4 정밀 분석과 투어 프로의 40분 1:1 맞춤 진단을 무료로 체험해 보세요. 클럽과 장갑은 스튜디오에서 무료 제공됩니다.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200 font-medium">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">
                    성함 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="홍길동"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">
                    휴대전화 번호 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="010-1234-5678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">
                    골프 구력
                  </label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  >
                    <option value="입문 ~ 6개월 미만">입문 ~ 6개월 미만</option>
                    <option value="6개월 ~ 1년차">6개월 ~ 1년차</option>
                    <option value="1년 ~ 3년차">1년 ~ 3년차</option>
                    <option value="3년 ~ 5년차">3년 ~ 5년차</option>
                    <option value="5년 이상 (상급자)">5년 이상 (상급자)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">
                    평균 스코어
                  </label>
                  <select
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  >
                    <option value="미입문 / 라운드 경험 없음">미입문 / 라운드 없음</option>
                    <option value="100타 이상 (백돌이)">100타 이상</option>
                    <option value="90 ~ 99타 (보기 플레이어)">90 ~ 99타</option>
                    <option value="80 ~ 89타 (안정권)">80 ~ 89타</option>
                    <option value="70타대 (싱글)">70타대 싱글</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  가장 교정하고 싶은 고민
                </label>
                <select
                  value={trouble}
                  onChange={(e) => setTrouble(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                >
                  <option value="슬라이스 / 와이파이 구질">드라이버 슬라이스 / 잦은 OB</option>
                  <option value="비거리 부족 (200m 미만)">드라이버 비거리 부족 (스피드 증대)</option>
                  <option value="아이언 뒷땅 / 탑핑">아이언 다운블로 컨택 불량 / 뒷땅</option>
                  <option value="어프로치 쌩크 & 3퍼트">그린 주변 숏게임 & 3퍼트 불안</option>
                  <option value="스윙 폼 전체 재정립">스윙 폼 전체 기본기 리빌딩</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">
                    희망 방문 시간대
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <select
                      value={preferredDay}
                      onChange={(e) => setPreferredDay(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    >
                      <option value="평일 오전 (07:00~12:00)">평일 오전 (07:00~12:00)</option>
                      <option value="평일 오후 (12:00~18:00)">평일 오후 (12:00~18:00)</option>
                      <option value="평일 저녁 (18:00~22:00)">평일 저녁 (18:00~22:00)</option>
                      <option value="주말 오전 (08:00~13:00)">주말 오전 (08:00~13:00)</option>
                      <option value="주말 오후 (13:00~20:00)">주말 오후 (13:00~20:00)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">
                    희망 코치 선택
                  </label>
                  <select
                    value={preferredCoach}
                    onChange={(e) => setPreferredCoach(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  >
                    <option value="이상한 대표원장 (헤드프로)">이상한 대표원장 (헤드프로)</option>
                    <option value="김민우 수석프로 (KPGA)">김민우 수석프로 (KPGA)</option>
                    <option value="박서연 프로 (KLPGA 숏게임)">박서연 프로 (KLPGA 숏게임)</option>
                    <option value="코치 무관 (가장 빠른 시간)">코치 무관 (가장 빠른 시간)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  추가 전달 사항 (선택)
                </label>
                <textarea
                  rows={2}
                  placeholder="예: 왼손잡이입니다 / 지난주 라운드에서 엘보 통증이 약간 있었습니다"
                  value={memo}
                  onChange={(e) => setMemo(e.target.value)}
                  className="w-full p-2.5 text-xs sm:text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-xl transition-colors text-sm shadow-md cursor-pointer"
                >
                  무료 체험 레슨 예약 확정하기
                </button>
                <p className="text-[11px] text-stone-400 text-center mt-2">
                  * 예약 접수 즉시 담당 매니저가 유선 또는 카카오톡으로 일정 확정 연락을 드립니다.
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Success State */
          <div className="py-6 text-center">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-stone-900 mb-2">
              체험 레슨 예약 접수가 완료되었습니다!
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-6 max-w-sm mx-auto leading-relaxed">
              <strong className="text-stone-900">{name}</strong> 님의 스윙 진단 요청이 <strong>{preferredCoach}</strong>님께 안전하게 전달되었습니다.
            </p>

            <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 text-left text-xs space-y-2 mb-6">
              <div className="flex justify-between border-b border-stone-200/60 pb-2">
                <span className="text-stone-500">예약 접수 번호</span>
                <span className="font-mono font-bold text-emerald-800">{bookingCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">연락처</span>
                <span className="font-medium text-stone-800">{phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">희망 시간대</span>
                <span className="font-medium text-stone-800">{preferredDay}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">주요 고민</span>
                <span className="font-medium text-stone-800">{trouble}</span>
              </div>
            </div>

            <div className="p-3 bg-emerald-50 rounded-lg text-xs text-emerald-900 mb-6">
              📍 방문처: 충남 천안시 동남구 쌍용대로 66 (전용 50대 무료 주차 지원, 클럽·장갑 무료 대여)
            </div>

            <button
              type="button"
              onClick={resetAndClose}
              className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white font-semibold rounded-lg text-sm transition-colors cursor-pointer"
            >
              확인 및 닫기
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
