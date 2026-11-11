import { useState } from 'react';
import { PageView } from './types/golf';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DiagnosisTool } from './components/DiagnosisTool';
import { Curriculum } from './components/Curriculum';
import { Coaches } from './components/Coaches';
import { Facilities } from './components/Facilities';
import { Pricing } from './components/Pricing';
import { Reviews } from './components/Reviews';
import { LocationInfo } from './components/LocationInfo';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { GalleryPage } from './components/GalleryPage';
import { ReviewsPage } from './components/ReviewsPage';
import { ReservationContactPage } from './components/ReservationContactPage';
import { Calendar, ArrowRight, ShieldCheck, Sparkles, Image, Star } from 'lucide-react';
import { ACADEMY_ADDRESS } from './data/golfData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedProgram, setSelectedProgram] = useState<string | undefined>(undefined);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState<{
    program?: string;
    experience?: string;
    score?: string;
    trouble?: string;
  }>({});

  const handleOpenBookingModal = (initialData?: {
    program?: string;
    experience?: string;
    score?: string;
    trouble?: string;
  }) => {
    if (initialData) {
      setBookingInitialData(initialData);
    } else {
      setBookingInitialData({});
    }
    setBookingModalOpen(true);
  };

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProgramFromHome = (programTitle: string) => {
    setSelectedProgram(programTitle);
    setCurrentPage('reservation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDiagnosisForBooking = (data: {
    experience: string;
    score: string;
    trouble: string;
  }) => {
    setBookingInitialData(data);
    setCurrentPage('reservation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900 flex flex-col justify-between">
      {/* Top Bar Navigation Contract */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBookingModal={() => handleOpenBookingModal()}
      />

      {/* Main Content Router */}
      <div className="flex-1">
        {currentPage === 'home' && (
          <main>
            {/* 1. Hero */}
            <Hero
              onOpenBooking={() => handleNavigate('reservation')}
              onScrollToDiagnosis={() => {
                const el = document.getElementById('diagnosis');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Quick Navigation Cards Banner */}
            <section className="bg-stone-50 py-10 border-b border-stone-200">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <button
                    type="button"
                    onClick={() => handleNavigate('about')}
                    className="p-5 bg-white rounded-xl border border-stone-200 text-left hover:border-emerald-800 transition-colors shadow-xs group cursor-pointer"
                  >
                    <div className="text-emerald-800 mb-2">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="font-bold text-sm text-stone-900 group-hover:text-emerald-800 flex items-center justify-between">
                      <span>스쿨 소개</span>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-emerald-800 transition-transform group-hover:translate-x-1" />
                    </div>
                    <div className="text-[11px] text-stone-500 mt-1">
                      역사 · 교육철학 · 강사진
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleNavigate('services')}
                    className="p-5 bg-white rounded-xl border border-stone-200 text-left hover:border-emerald-800 transition-colors shadow-xs group cursor-pointer"
                  >
                    <div className="text-emerald-800 mb-2">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div className="font-bold text-sm text-stone-900 group-hover:text-emerald-800 flex items-center justify-between">
                      <span>레슨 서비스</span>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-emerald-800 transition-transform group-hover:translate-x-1" />
                    </div>
                    <div className="text-[11px] text-stone-500 mt-1">
                      초·중·고급반 · 수강료
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleNavigate('gallery')}
                    className="p-5 bg-white rounded-xl border border-stone-200 text-left hover:border-emerald-800 transition-colors shadow-xs group cursor-pointer"
                  >
                    <div className="text-emerald-800 mb-2">
                      <Image className="w-5 h-5" />
                    </div>
                    <div className="font-bold text-sm text-stone-900 group-hover:text-emerald-800 flex items-center justify-between">
                      <span>갤러리</span>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-emerald-800 transition-transform group-hover:translate-x-1" />
                    </div>
                    <div className="text-[11px] text-stone-500 mt-1">
                      스윙 분석 · 레슨 현장
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleNavigate('reviews')}
                    className="p-5 bg-white rounded-xl border border-stone-200 text-left hover:border-emerald-800 transition-colors shadow-xs group cursor-pointer"
                  >
                    <div className="text-emerald-800 mb-2">
                      <Star className="w-5 h-5" />
                    </div>
                    <div className="font-bold text-sm text-stone-900 group-hover:text-emerald-800 flex items-center justify-between">
                      <span>수강생 후기</span>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-emerald-800 transition-transform group-hover:translate-x-1" />
                    </div>
                    <div className="text-[11px] text-stone-500 mt-1">
                      타수 감량 · 비포 & 애프터
                    </div>
                  </button>
                </div>
              </div>
            </section>

            {/* 2. Interactive Trouble & Handicap Diagnosis */}
            <DiagnosisTool onSelectForBooking={handleDiagnosisForBooking} />

            {/* 3. Program & Curriculum Preview */}
            <Curriculum onSelectProgram={handleSelectProgramFromHome} />

            {/* 4. Head Pro (Male Tour Pro Coach) & Team */}
            <Coaches onOpenBooking={() => handleNavigate('reservation')} />

            {/* 5. TrackMan 4 Facility & Technology */}
            <Facilities />

            {/* 6. Pricing Overview */}
            <Pricing
              onSelectPlan={(plan) => {
                setSelectedProgram(plan);
                handleNavigate('reservation');
              }}
            />

            {/* 7. Reviews Preview */}
            <Reviews />

            {/* 8. Studio Location & FAQ */}
            <LocationInfo />
          </main>
        )}

        {currentPage === 'about' && (
          <AboutPage onGoToReservation={() => handleNavigate('reservation')} />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onSelectProgramForBooking={(prog) => {
              setSelectedProgram(prog);
              handleNavigate('reservation');
            }}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage onGoToReservation={() => handleNavigate('reservation')} />
        )}

        {currentPage === 'reviews' && <ReviewsPage />}

        {currentPage === 'reservation' && (
          <ReservationContactPage initialProgram={selectedProgram} />
        )}
      </div>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleNavigate('reservation')}
      />

      {/* Booking Quick Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialData={bookingInitialData}
      />

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => handleNavigate('reservation')}
          className="flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs sm:text-sm py-3 px-5 rounded-full shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
          aria-label="온라인 예약 및 문의"
        >
          <Calendar className="w-4 h-4 text-emerald-300" />
          <span className="whitespace-nowrap">온라인 예약 & 문의</span>
        </button>
      </div>
    </div>
  );
}
