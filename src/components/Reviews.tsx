import React from 'react';
import { REVIEWS } from '../data/golfData';
import { Review } from '../types/golf';
import { TrendingUp, Quote, CheckCircle2 } from 'lucide-react';

export const Reviews: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold text-emerald-800 tracking-wider uppercase mb-2">
            STUDENT SUCCESS STORIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 mb-3" style={{ textWrap: 'balance' }}>
            스코어와 비거리로 증명된 실제 수강생 변화
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            미스터리 골프스쿨과 함께한 수강생 1,800여 명의 실제 타수 변화와 리얼 라운드 후기를 확인해보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev: Review) => (
            <div
              key={rev.id}
              className="bg-stone-50 rounded-2xl border border-stone-200/80 p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                {/* Score change badge block */}
                <div className="bg-white p-3.5 rounded-xl border border-stone-200 mb-5 shadow-xs">
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                    <span>스코어 변화</span>
                    <span className="text-emerald-800 font-bold flex items-center gap-1 font-mono">
                      <TrendingUp className="w-3.5 h-3.5" />
                      급상승
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm line-through text-stone-400 font-mono">
                      {rev.scoreBefore}
                    </span>
                    <span className="text-xs text-stone-400">→</span>
                    <span className="text-lg font-bold text-emerald-800 font-mono">
                      {rev.scoreAfter}
                    </span>
                  </div>
                  {rev.distanceGain && (
                    <div className="text-[11px] text-stone-600 mt-1 pt-1 border-t border-stone-100 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                      <span>{rev.distanceGain}</span>
                    </div>
                  )}
                </div>

                <div className="relative mb-4">
                  <Quote className="w-4 h-4 text-stone-300 absolute -top-1 left-0" />
                  <p className="text-xs sm:text-sm text-stone-700 pl-5 leading-relaxed">
                    &ldquo;{rev.content}&rdquo;
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200/60 flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-stone-900">{rev.author}</div>
                  <div className="text-[11px] text-stone-500">{rev.experience} · {rev.program}</div>
                </div>
                <div className="text-[11px] text-stone-400 font-mono">{rev.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
