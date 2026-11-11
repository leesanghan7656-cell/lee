import React from 'react';
import { PRICING_PLANS } from '../data/golfData';
import { PricePlan } from '../types/golf';
import { Check, ShieldAlert } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold text-emerald-800 tracking-wider uppercase mb-2">
            TRANSPARENT TUITION & MEMBERSHIP
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 mb-3" style={{ textWrap: 'balance' }}>
            투명하고 합리적인 1:1 맞춤 레슨 요금제
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            불투명한 추가 비용이나 숨겨진 타석 이용료가 없습니다. 전 플랜에 TrackMan 4 장비 이용료와 개인 락커, 레슨 당일 연습 타석 혜택이 정직하게 포함되어 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-10">
          {PRICING_PLANS.map((plan: PricePlan) => {
            const isPopular = plan.isPopular;
            return (
              <div
                key={plan.id}
                className={`bg-white rounded-2xl p-6 flex flex-col justify-between transition-all relative ${
                  isPopular
                    ? 'border-2 border-emerald-700 shadow-md ring-1 ring-emerald-700/20'
                    : 'border border-stone-200 shadow-sm hover:border-stone-300'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-800 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {plan.badge || 'BEST SELLER'}
                  </div>
                )}

                <div>
                  <div className="text-xs font-semibold text-stone-500 mb-1">{plan.period}</div>
                  <h3 className="text-lg font-bold text-stone-900 mb-3">{plan.name}</h3>

                  <div className="mb-4">
                    <span className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight font-mono">
                      {plan.price}
                    </span>
                    {plan.pricePerSession && (
                      <div className="text-xs text-emerald-800 font-medium mt-1">
                        {plan.pricePerSession}
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-stone-600 bg-stone-50 p-2.5 rounded-lg mb-5 leading-relaxed">
                    {plan.targetUser}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    <div className="text-[11px] font-bold text-stone-900 uppercase tracking-wider">
                      포함 혜택
                    </div>
                    {plan.features.map((feat: string, i: number) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-stone-700 leading-normal">
                        <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-2.5 px-4 text-xs font-semibold rounded-lg transition-colors cursor-pointer text-center ${
                    isPopular
                      ? 'bg-emerald-800 hover:bg-emerald-900 text-white shadow-sm'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-800'
                  }`}
                >
                  {plan.name} 상담 신청
                </button>
              </div>
            );
          })}
        </div>

        {/* Assurance Box */}
        <div className="p-4 bg-stone-100/80 rounded-xl border border-stone-200 text-xs text-stone-600 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-stone-500 shrink-0" />
            <span>
              <strong>레슨 만족 보장제:</strong> 첫 정규 레슨 수강 후 불만족 시 잔여 회차를 위약금 없이 100% 전액 환불해 드립니다.
            </span>
          </div>
          <span className="text-stone-500 whitespace-nowrap">
            * 카드 무이자 최대 12개월 할부 지원
          </span>
        </div>
      </div>
    </section>
  );
};
