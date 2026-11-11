import React, { useState } from 'react';
import { REVIEWS_DATA } from '../data/golfData';
import { ReviewItem } from '../types/golf';
import { Star, Play, TrendingUp, Quote, CheckCircle2, MessageSquarePlus, X, Check } from 'lucide-react';

export const ReviewsPage: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(REVIEWS_DATA);
  const [filterType, setFilterType] = useState<'all' | 'video' | 'text'>('all');
  const [activeVideoModal, setActiveVideoModal] = useState<ReviewItem | null>(null);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);

  // New review state
  const [authorName, setAuthorName] = useState('');
  const [ageGroup, setAgeGroup] = useState('40대 남성');
  const [experience, setExperience] = useState('구력 2년차');
  const [scoreBefore, setScoreBefore] = useState('105타');
  const [scoreAfter, setScoreAfter] = useState('90타');
  const [distanceGain, setDistanceGain] = useState('+20m');
  const [program, setProgram] = useState('슬라이스 박멸 & 100타 브레이커');
  const [coach, setCoach] = useState('이상한 헤드프로');
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewContent, setReviewContent] = useState('');
  const [rating, setRating] = useState(5);
  const [successToast, setSuccessToast] = useState(false);

  const filteredReviews =
    filterType === 'all'
      ? reviews
      : reviews.filter((r) => r.type === filterType);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !reviewContent.trim()) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      type: 'text',
      author: `${authorName.trim()} 님`,
      ageGroup,
      occupation: '회원',
      experience,
      scoreBefore,
      scoreAfter,
      distanceGain: distanceGain.trim() ? `비거리 ${distanceGain.trim()} 증가` : undefined,
      program,
      coach,
      title: reviewTitle.trim() || `${program} 솔직 수강 후기`,
      content: reviewContent.trim(),
      date: '2026. 03 (방금 등록)',
      rating,
    };

    setReviews([newRev, ...reviews]);
    setIsWriteModalOpen(false);
    setAuthorName('');
    setReviewTitle('');
    setReviewContent('');
    setSuccessToast(true);
    setTimeout(() => setSuccessToast(false), 4000);
  };

  return (
    <div className="py-12 lg:py-16 bg-white animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 tracking-wider uppercase mb-2">
              <span>REAL STUDENT REVIEWS & TESTIMONIALS</span>
              <span aria-hidden="true">·</span>
              <span>OUTCOMES</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              실제 수강생이 증명하는 스윙 변화
            </h1>
            <p className="text-stone-600 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
              만성 슬라이스 교정, 생애 첫 100타 돌파, 80타대 안착과 싱글 달성까지. 미스터리 골프스쿨 천안 본원에서 직접 레슨을 경험한 회원들의 생생한 후기를 확인하세요.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsWriteModalOpen(true)}
              className="px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs rounded-xl transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>수강 후기 작성하기</span>
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 mt-8 p-1 bg-stone-100 rounded-lg w-fit">
          <button
            type="button"
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              filterType === 'all' ? 'bg-white text-stone-950 shadow-sm' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            전체 후기 ({reviews.length})
          </button>
          <button
            type="button"
            onClick={() => setFilterType('video')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              filterType === 'video' ? 'bg-white text-stone-950 shadow-sm' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            영상 인터뷰 ({reviews.filter((r) => r.type === 'video').length})
          </button>
          <button
            type="button"
            onClick={() => setFilterType('text')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              filterType === 'text' ? 'bg-white text-stone-950 shadow-sm' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            텍스트 후기 ({reviews.filter((r) => r.type === 'text').length})
          </button>
        </div>
      </div>

      {successToast && (
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm rounded-xl flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
            <span>수강 후기가 성공적으로 등록되었습니다. 진솔한 후기 작성에 감사드립니다!</span>
          </div>
        </div>
      )}

      {/* Reviews Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {filteredReviews.map((rev: ReviewItem) => (
          <div
            key={rev.id}
            className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-stone-300 transition-colors"
          >
            <div>
              {/* Top rating & type */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
                  {rev.type === 'video' ? (
                    <span className="flex items-center gap-1 bg-red-50 text-red-700 px-2 py-0.5 rounded font-semibold text-[11px]">
                      <Play className="w-3 h-3 fill-red-700" /> 영상 인터뷰 {rev.videoDuration}
                    </span>
                  ) : (
                    <span className="bg-stone-100 text-stone-600 px-2 py-0.5 rounded text-[11px]">
                      수강생 후기
                    </span>
                  )}
                  <span>{rev.date}</span>
                </div>
              </div>

              {/* Score transformation metric banner */}
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/80 mb-5">
                <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
                  <span className="font-semibold text-stone-700">실제 스코어 개선치</span>
                  <span className="text-emerald-800 font-bold flex items-center gap-1 font-mono">
                    <TrendingUp className="w-3.5 h-3.5" />
                    성과 검증
                  </span>
                </div>
                <div className="flex items-baseline gap-2.5">
                  <span className="text-sm line-through text-stone-400 font-mono">
                    {rev.scoreBefore}
                  </span>
                  <span className="text-xs text-stone-400">→</span>
                  <span className="text-xl font-bold text-emerald-800 font-mono">
                    {rev.scoreAfter}
                  </span>
                </div>
                {rev.distanceGain && (
                  <div className="text-xs text-stone-700 font-medium mt-2 pt-2 border-t border-stone-200/60 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{rev.distanceGain}</span>
                  </div>
                )}
              </div>

              <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-3 leading-snug">
                {rev.title}
              </h3>

              <div className="relative mb-5">
                <Quote className="w-4 h-4 text-stone-300 absolute -top-1 left-0" />
                <p className="text-xs sm:text-sm text-stone-600 pl-5 leading-relaxed">
                  {rev.content}
                </p>
              </div>

              {rev.type === 'video' && (
                <button
                  type="button"
                  onClick={() => setActiveVideoModal(rev)}
                  className="mb-4 inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-red-600" />
                  <span>인터뷰 영상 보기 ({rev.videoDuration})</span>
                </button>
              )}
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
              <div>
                <div className="font-bold text-stone-900">{rev.author}</div>
                <div className="text-[11px] text-stone-500">
                  {rev.experience} · {rev.ageGroup}
                </div>
              </div>
              <div className="text-right">
                <div className="text-emerald-800 font-semibold">{rev.program}</div>
                <div className="text-[11px] text-stone-400">담당: {rev.coach}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal Simulation */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-stone-900 rounded-2xl max-w-xl w-full p-6 text-white border border-stone-800 relative">
            <button
              type="button"
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-white p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs text-red-400 font-bold uppercase mb-2 flex items-center gap-1.5">
              <Play className="w-3.5 h-3.5 fill-red-400" />
              <span>STUDENT VIDEO INTERVIEW</span>
            </div>
            <h3 className="text-lg font-bold mb-4">{activeVideoModal.title}</h3>

            <div className="relative aspect-video bg-black rounded-xl overflow-hidden mb-4 flex items-center justify-center">
              <div className="text-center p-6 space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-lg animate-pulse">
                  <Play className="w-6 h-6 fill-white ml-1" />
                </div>
                <div className="text-sm font-semibold">{activeVideoModal.author} 인터뷰 영상 재생 중</div>
                <div className="text-xs text-stone-400">
                  &ldquo;{activeVideoModal.scoreBefore}에서 {activeVideoModal.scoreAfter}로 변화한 실제 레슨 비하인드 스토리&rdquo;
                </div>
              </div>
            </div>

            <div className="p-3 bg-stone-800 rounded-lg text-xs text-stone-300">
              수강 과정: <strong className="text-white">{activeVideoModal.program}</strong> | 지도 코치: <strong className="text-emerald-400">{activeVideoModal.coach}</strong>
            </div>
          </div>
        </div>
      )}

      {/* Write Review Modal */}
      {isWriteModalOpen && (
        <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative my-8">
            <button
              type="button"
              onClick={() => setIsWriteModalOpen(false)}
              className="absolute top-5 right-5 text-stone-400 hover:text-stone-700 p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-5">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                WRITE A REVIEW
              </span>
              <h3 className="text-xl font-bold text-stone-900 mt-1">
                수강생 솔직 후기 작성하기
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                회원님의 소중한 후기는 새로운 골퍼들에게 큰 용기와 도움이 됩니다.
              </p>
            </div>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">
                    작성자명 (예: 김*현) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="이름"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">
                    골프 구력
                  </label>
                  <input
                    type="text"
                    placeholder="예: 구력 1년차"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">
                    레슨 전 타수
                  </label>
                  <input
                    type="text"
                    placeholder="105타"
                    value={scoreBefore}
                    onChange={(e) => setScoreBefore(e.target.value)}
                    className="w-full px-2.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">
                    레슨 후 타수
                  </label>
                  <input
                    type="text"
                    placeholder="89타"
                    value={scoreAfter}
                    onChange={(e) => setScoreAfter(e.target.value)}
                    className="w-full px-2.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">
                    비거리 증가 (선택)
                  </label>
                  <input
                    type="text"
                    placeholder="+25m"
                    value={distanceGain}
                    onChange={(e) => setDistanceGain(e.target.value)}
                    className="w-full px-2.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">
                    수강 프로그램
                  </label>
                  <select
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    className="w-full px-2.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  >
                    <option value="3개월 필드 데뷔 속성 초급반">3개월 초급반</option>
                    <option value="슬라이스 박멸 & 100타 브레이커">100타/90타 브레이커</option>
                    <option value="80타대 안착 & 싱글 플레이어 고급반">싱글 마스터 고급반</option>
                    <option value="1:1 VIP 원포인트 & 취약점 집중">1:1 VIP 원포인트</option>
                    <option value="정규 18홀 프로 동반 실전 필드 레슨">18홀 필드 레슨</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">
                    담당 코치
                  </label>
                  <select
                    value={coach}
                    onChange={(e) => setCoach(e.target.value)}
                    className="w-full px-2.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  >
                    <option value="이상한 헤드프로">이상한 헤드프로</option>
                    <option value="김민우 수석프로">김민우 수석프로</option>
                    <option value="박서연 프로">박서연 프로</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  후기 제목 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="예: 4주 만에 슬라이스 고치고 인생 라베 찍었습니다"
                  value={reviewTitle}
                  onChange={(e) => setReviewTitle(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  후기 내용 <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="레슨 받기 전 고민과 레슨 후 스윙의 변화, 추천 이유 등을 솔직하게 남겨주세요."
                  value={reviewContent}
                  onChange={(e) => setReviewContent(e.target.value)}
                  className="w-full p-2.5 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-1">
                  <span className="text-xs text-stone-500 mr-1">만족도 별점:</span>
                  {[1, 2, 3, 4, 5].map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => setRating(st)}
                      className="p-0.5 cursor-pointer"
                    >
                      <Star
                        className={`w-4 h-4 ${
                          st <= rating ? 'fill-amber-400 text-amber-400' : 'text-stone-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <button
                  type="submit"
                  className="py-2.5 px-5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  후기 등록하기
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
