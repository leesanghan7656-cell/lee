import React from 'react';
import { PageView } from '../types/golf';
import {
  ADMIN_EMAIL,
  ACADEMY_ADDRESS,
  ACADEMY_ADDRESS_DETAIL,
  ACADEMY_PHONE,
  ACADEMY_MOBILE,
} from '../data/golfData';
import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const handleNav = (page: PageView) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-400 text-xs border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center text-white font-bold text-xs tracking-wider">
                ML
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                미스터리 골프스쿨
              </span>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              인체 역학에 근거한 정밀 스윙 분석과 TrackMan 4 데이터를 통해 골퍼 개개인의 잠재력을 최대로 이끌어내는 충청권 프리미엄 골프 아카데미입니다.
            </p>
            <div className="pt-2 text-stone-500 space-y-1 text-[11px]">
              <div>상호명: 미스터리 골프 아카데미 | 대표자: 이 상한</div>
              <div>사업자등록번호: 214-88-92716 | 통신판매업신고: 제2024-충남천안-0521호</div>
              <div>소재지: {ACADEMY_ADDRESS_DETAIL}</div>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-white font-semibold tracking-wider uppercase text-xs">
              메뉴 바로가기
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  골프스쿨 소개 (역사·철학·강사진)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  제공 서비스 (프로그램 & 수강료)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('gallery')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  아카데미 갤러리 (사진 & 영상)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('reviews')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  수강생 후기 & 스코어 성과
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('reservation')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  온라인 예약 및 1:1 문의
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Consultation (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-white font-semibold tracking-wider uppercase text-xs">
              고객센터 & 예약 문의
            </div>
            <div className="space-y-2 text-stone-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-bold text-white font-mono">
                  {ACADEMY_PHONE}
                </span>
                <span className="text-xs text-stone-400 font-mono">({ACADEMY_MOBILE})</span>
              </div>
              <div className="flex items-center gap-2 text-stone-400">
                <Mail className="w-4 h-4 text-stone-500" />
                <span className="font-mono text-emerald-400">{ADMIN_EMAIL}</span>
              </div>
              <div className="flex items-start gap-2 text-stone-400">
                <MapPin className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                <span>{ACADEMY_ADDRESS} (50대 전용 무료 주차)</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => handleNav('reservation')}
                className="w-full py-2.5 px-4 bg-emerald-800 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors text-xs text-center cursor-pointer"
              >
                온라인 레슨 예약 신청하기
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} 미스터리 골프스쿨 (Mr. Lee Golf School Cheonan). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-stone-400 cursor-pointer">이용약관</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-stone-400 cursor-pointer">개인정보처리방침</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-stone-400 cursor-pointer">환불규정</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
