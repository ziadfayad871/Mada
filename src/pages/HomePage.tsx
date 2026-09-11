import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play } from 'lucide-react';
import { SERVICES } from '../data/services';
import { BRANDS } from '../data/brands';
import { VIDEOS, VideoItem } from '../data/videos';
import { ACHIEVEMENTS } from '../data/achievements';
import { ServiceCard } from '../components/ui/ServiceCard';
import { BrandCard } from '../components/brand/BrandCard';
import { VideoCard } from '../components/media/VideoCard';
import { VideoModal } from '../components/media/VideoModal';
import { AchievementCard } from '../components/ui/AchievementCard';
import { ContactForm } from '../components/ui/ContactForm';
import { BrandLogoImage } from '../components/brand/BrandLogoImage';

export const HomePage: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const quickServices = SERVICES.filter((s) => s.isQuick).slice(0, 5);
  const featuredVideos = VIDEOS.slice(0, 6);

  return (
    <div>
      {/* ==================================================
          1. HERO SECTION (With exact requested camera photo)
      ================================================== */}
      <section
        style={{
          position: 'relative',
          paddingTop: '2.5rem',
          paddingBottom: '4rem',
          overflow: 'hidden',
          backgroundColor: 'var(--bg-primary)'
        }}
      >
        <div className="container">
          <div className="hero-grid">
            {/* Right Column in RTL: Copy & Headlines */}
            <div className="hero-copy">
              <div className="badge-pill" style={{ width: 'fit-content' }}>
                <span className="badge-pill-dot" />
                <span>وكالة تسويق رقمية وإنتائج محتوى</span>
              </div>

              <h1 className="hero-title">
                نحول أفكارك إلى قصص <span style={{ color: 'var(--accent-warm)' }}>تترك أثراً</span>
              </h1>

              <p className="hero-subtext">
                نقدم حلولاً تسويقية متكاملة تجمع بين الإبداع، التقنية، والإنتائج المرئي لنصنع لك حضوراً قوياً في عالم المنافسة.
              </p>

              <div className="hero-actions">
                <Link to="/works" className="btn-primary">
                  <span>اكتشف أعمالنا</span>
                  <ArrowLeft size={18} />
                </Link>

                <Link to="/contact" className="btn-secondary">
                  <span>تواصل معنا</span>
                </Link>
              </div>
            </div>

            {/* Center Column: Original Requested Camera Photo */}
            <div className="hero-camera-card">
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80"
                alt="MADA Studio Camera"
                className="hero-camera-photo"
              />

              {/* Subtle Warm Gradient Overlay */}
              <div className="hero-camera-overlay" />

              {/* Arabic Calligraphic Overlay Text */}
              <div className="hero-camera-calligraphy">
                أفكار · محتوى · تسويق · إبداع
              </div>
            </div>

            {/* Left Column in RTL: "بعض من عملائنا" Card */}
            <div className="hero-brands-card">
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                  بعض من عملائنا
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  شركات وعلامات تجارية وثقت بنا
                </p>
              </div>

              {/* 2x3 Grid of Brand Logos */}
              <div className="hero-brands-grid">
                {BRANDS.slice(0, 5).map((b) => (
                  <Link
                    key={b.id}
                    to={`/brands/${b.slug}`}
                    className="hero-brand-item"
                  >
                    <BrandLogoImage brandId={b.id} name={b.name} size={36} />
                  </Link>
                ))}

                {/* "+ and more..." Box */}
                <Link
                  to="/brands"
                  className="hero-brand-item hero-brand-more"
                >
                  <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>+</span>
                  <span>and more...</span>
                </Link>
              </div>

              <Link
                to="/brands"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginTop: '0.2rem'
                }}
              >
                <span>جميع العلامات التجارية</span>
                <ArrowLeft size={16} />
              </Link>
            </div>
          </div>
        </div>

        <style>{`
          .hero-grid {
            display: grid;
            grid-template-columns: 1fr 1.15fr 0.9fr;
            gap: 2rem;
            align-items: center;
          }
          .hero-copy {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
          }
          .hero-title {
            font-size: clamp(2.2rem, 4vw, 3.2rem);
            font-weight: 800;
            color: var(--text-primary);
            line-height: 1.25;
            letter-spacing: -0.02em;
          }
          .hero-subtext {
            font-size: 1.05rem;
            color: var(--text-secondary);
            line-height: 1.7;
            max-width: 440px;
          }
          .hero-actions {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-top: 0.5rem;
            flex-wrap: wrap;
          }
          .hero-camera-card {
            position: relative;
            border-radius: var(--radius-xl);
            overflow: hidden;
            box-shadow: var(--shadow-hover);
            border: 1px solid var(--border-color);
            aspect-ratio: 4/5;
            min-height: 440px;
            background-color: #120D09;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .hero-camera-photo {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center center;
            transition: transform 0.6s ease;
          }
          .hero-camera-card:hover .hero-camera-photo {
            transform: scale(1.05);
          }
          .hero-camera-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(18, 13, 9, 0.65) 0%, rgba(0,0,0,0) 60%);
            pointer-events: none;
          }
          .hero-camera-calligraphy {
            position: absolute;
            bottom: 1.75rem;
            left: 1.75rem;
            color: rgba(255, 255, 255, 0.95);
            font-size: 0.88rem;
            font-weight: 600;
            letter-spacing: 0.12em;
            writing-mode: vertical-rl;
            text-transform: uppercase;
            text-shadow: 0 2px 10px rgba(0,0,0,0.7);
          }
          .hero-brands-card {
            background-color: var(--bg-card);
            border-radius: var(--radius-lg);
            padding: 1.8rem 1.5rem;
            border: 1px solid var(--border-color);
            box-shadow: var(--shadow-subtle);
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
          }
          .hero-brands-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.85rem;
          }
          .hero-brand-item {
            background-color: var(--bg-primary);
            border-radius: var(--radius-sm);
            padding: 0.9rem 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--border-color-light);
            transition: all 0.25s ease;
            text-decoration: none;
          }
          .hero-brand-item:hover {
            transform: translateY(-3px);
            border-color: var(--text-primary);
            box-shadow: var(--shadow-subtle);
            background-color: var(--bg-card);
          }
          .hero-brand-more {
            background-color: var(--bg-secondary);
            border: 1px dashed var(--border-color);
            color: var(--text-secondary);
            font-size: 0.8rem;
            font-weight: 700;
            flex-direction: column;
          }

          /* Responsive Breakpoints for Tablet & Mobile */
          @media (max-width: 1024px) {
            .hero-grid {
              grid-template-columns: 1fr;
              gap: 2.25rem;
            }
            .hero-copy {
              order: 1;
            }
            .hero-camera-card {
              order: 2;
              aspect-ratio: 16/10;
              min-height: 320px;
              max-height: 420px;
            }
            .hero-brands-card {
              order: 3;
            }
            .hero-camera-calligraphy {
              writing-mode: horizontal-tb;
              left: 1.25rem;
              bottom: 1.25rem;
            }
            .hero-brands-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          @media (max-width: 600px) {
            .hero-camera-card {
              aspect-ratio: 4/3;
              min-height: 280px;
              max-height: 360px;
              border-radius: var(--radius-lg);
            }
            .hero-camera-photo {
              object-fit: cover;
              object-position: center center;
            }
            .hero-brands-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .hero-actions {
              width: 100%;
            }
            .hero-actions a {
              width: 100%;
              justify-content: center;
            }
          }
        `}</style>
      </section>

      {/* ==================================================
          2. QUICK SERVICES STRIP
      ================================================== */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="badge-pill">
              <span className="badge-pill-dot" />
              <span>خدمات متكاملة</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.75rem' }}>
              حلول تسويقية تصنع الفارق
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {quickServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/services" className="btn-secondary">
              <span>اكتشف جميع الخدمات</span>
              <ArrowLeft size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================
          3. ABOUT SECTION TEASER (Matching Screen 6)
      ================================================== */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center'
            }}
          >
            {/* Left Image in RTL: Studio Office Space */}
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-hover)',
                border: '1px solid var(--border-color)',
                aspectRatio: '16/10'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                alt="MADA Marketing Office Studio"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(44, 31, 23, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(251, 248, 243, 0.95)',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
                  }}
                >
                  <Play size={24} style={{ marginLeft: '3px' }} fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Right Text Content in RTL */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="badge-pill" style={{ width: 'fit-content' }}>
                <span className="badge-pill-dot" />
                <span>عن وكالة مدى</span>
              </div>

              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 700, color: 'var(--text-primary)' }}>
                من نحن
              </h2>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                مدى هي وكالة تسويق رقمي متخصصة في تقديم حلول متكاملة تساعد العلامات التجارية على الوصول إلى جمهورها وتحقيق نتائج ملموسة من خلال استراتيجيات إبداعية ومحتوى احترافي وحملات إعلانية فعالة.
              </p>

              {/* Quick stats numbers */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-color)',
                  flexWrap: 'wrap'
                }}
              >
                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>+50</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>مشروع ناجح</div>
                </div>

                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>+120</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>محتوى إبداعي</div>
                </div>

                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>+8</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>سنوات خبرة</div>
                </div>
              </div>

              <div style={{ marginTop: '0.5rem' }}>
                <Link to="/team" className="btn-primary">
                  <span>تعرف على فريق العمل</span>
                  <ArrowLeft size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          4. BRAND PORTFOLIO SHOWCASE
      ================================================== */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="badge-pill" style={{ marginBottom: '0.75rem' }}>
              <span className="badge-pill-dot" />
              <span>معرض الأعمال</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
              أعمالنا وشركاؤنا
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              اضغط على أي براند لاستكشاف الحملات والفيديوهات المخصصة له.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {BRANDS.slice(0, 5).map((b) => (
              <BrandCard key={b.id} brand={b} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/brands" className="btn-secondary">
              <span>عرض جميع العلامات التجارية</span>
              <ArrowLeft size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================
          5. 21 CAMPAIGN VIDEOS SHOWCASE
      ================================================== */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: '3rem',
              flexWrap: 'wrap',
              gap: '1.5rem'
            }}
          >
            <div>
              <div className="badge-pill" style={{ marginBottom: '0.75rem' }}>
                <span className="badge-pill-dot" />
                <span>الإنتاج المرئي</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                21 فيديو احترافي
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '520px' }}>
                مجموعة من الأعمال الإبداعية التي تعكس خبرتنا في صناعة المحتوى والإنتاج للعلامات التجارية.
              </p>
            </div>

            <Link to="/works" className="btn-secondary">
              <span>جميع الفيديوهات (21)</span>
              <ArrowLeft size={16} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
              gap: '1.8rem'
            }}
          >
            {featuredVideos.map((vid) => (
              <VideoCard key={vid.id} video={vid} onClick={(v) => setSelectedVideo(v)} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          6. ACHIEVEMENTS SECTION
      ================================================== */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="badge-pill" style={{ marginBottom: '0.75rem' }}>
              <span className="badge-pill-dot" />
              <span>أرقام تتحدث</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 700, color: 'var(--text-primary)' }}>
              التحديات والإنجازات
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {ACHIEVEMENTS.map((ach) => (
              <AchievementCard key={ach.id} achievement={ach} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          7. CONTACT FORM SECTION
      ================================================== */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <ContactForm />
        </div>
      </section>

      {/* Video Fullscreen Modal */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          videosList={VIDEOS}
          onClose={() => setSelectedVideo(null)}
          onSelectVideo={(v) => setSelectedVideo(v)}
        />
      )}
    </div>
  );
};
