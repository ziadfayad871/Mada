import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Sparkles } from 'lucide-react';
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

  // Quick 5 services for hero strip
  const quickServices = SERVICES.filter((s) => s.isQuick).slice(0, 5);

  // Top 5 videos for homepage showcase
  const featuredVideos = VIDEOS.slice(0, 6);

  return (
    <div>
      {/* ==================================================
          1. HERO SECTION (Split layout matching design-reference.png)
      ================================================== */}
      <section
        style={{
          position: 'relative',
          paddingTop: '2.5rem',
          paddingBottom: '4.5rem',
          overflow: 'hidden',
          backgroundColor: 'var(--bg-primary)'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(300px, 1fr) 1.1fr minmax(280px, 0.9fr)',
              gap: '2rem',
              alignItems: 'center'
            }}
            className="hero-grid"
          >
            {/* Hero Right Column in RTL: Copy & Headlines */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="badge-pill" style={{ width: 'fit-content' }}>
                <span className="badge-pill-dot" />
                <span>وكالة تسويق رقمية وإنتائج محتوى</span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em'
                }}
              >
                نحول أفكارك إلى قصص <span style={{ color: 'var(--accent-warm)' }}>تترك أثراً</span>
              </h1>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '440px' }}>
                نقدم حلولاً تسويقية متكاملة تجمع بين الإبداع، التقنية، والإنتائج المرئي لنصنع لك حضوراً قوياً في عالم المنافسة.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                <Link to="/works" className="btn-primary">
                  <span>اكتشف أعمالنا</span>
                  <ArrowLeft size={18} />
                </Link>

                <Link to="/contact" className="btn-secondary">
                  <span>تواصل معنا</span>
                </Link>
              </div>
            </div>

            {/* Hero Center Column: High Quality Camera & Studio Photography */}
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-hover)',
                border: '1px solid var(--border-color)',
                aspectRatio: '4/5',
                maxHeight: '480px',
                backgroundColor: 'var(--bg-secondary)'
              }}
              className="hero-center-img"
            >
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"
                alt="MADA Studio Camera Production"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              {/* Gradient Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(44, 31, 23, 0.4) 0%, rgba(0,0,0,0) 60%)'
                }}
              />

              {/* Floating Arabic Calligraphic Overlay Text matching reference */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  writingMode: 'vertical-rl',
                  textTransform: 'uppercase'
                }}
              >
                أفكار · محتوى · تسويق · إبداع
              </div>
            </div>

            {/* Hero Left Column in RTL: "بعض من عملائنا" Card overlay matching design-reference.png */}
            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.8rem 1.5rem',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                  بعض من عملائنا
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  شركات وعلامات تجارية وثقت بنا
                </p>
              </div>

              {/* 2x3 Grid of Brand Logos */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.85rem'
                }}
              >
                {BRANDS.slice(0, 5).map((b) => (
                  <Link
                    key={b.id}
                    to={`/brands/${b.slug}`}
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.85rem 0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--border-color-light)',
                      transition: 'transform 0.2s, border-color 0.2s'
                    }}
                    className="hero-brand-box"
                  >
                    <BrandLogoImage brandId={b.id} name={b.name} size={36} />
                  </Link>
                ))}

                {/* "+ and more..." Box */}
                <Link
                  to="/brands"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.85rem 0.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px dashed var(--border-color)',
                    color: 'var(--text-secondary)',
                    fontSize: '0.8rem',
                    fontWeight: 700
                  }}
                  className="hero-brand-box"
                >
                  <span style={{ fontSize: '1.1rem' }}>+</span>
                  <span>and more...</span>
                </Link>
              </div>

              <Link
                to="/brands"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginTop: '0.4rem'
                }}
              >
                <span>جميع العلامات التجارية</span>
                <ArrowLeft size={16} />
              </Link>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .hero-grid {
              gridTemplateColumns: 1fr !important;
            }
          }
          .hero-brand-box:hover {
            transform: translateY(-2px);
            border-color: var(--text-primary);
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
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.75rem' }}>
              حلول تسويقية تصنع الفارق
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {quickServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/services" className="btn-secondary" style={{ fontSize: '0.88rem' }}>
              <span>اكتشف جميع الخدمات</span>
              <ArrowLeft size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================
          3. ABOUT SECTION TEASER (Matching design-reference.png screen 6)
      ================================================== */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center'
            }}
          >
            {/* Left Image in RTL: Studio Office Space with Play Icon */}
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

              <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                من نحن
              </h2>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                مدى هي وكالة تسويق رقمي متخصصة في تقديم حلول متكاملة تساعد العلامات التجارية على الوصول إلى جمهورها وتحقيق نتائج ملموسة من خلال استراتيجيات إبداعية ومحتوى احترافي وحملات إعلانية فعالة.
              </p>

              {/* Quick stats numbers matching reference screen 6 */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-color)'
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
          4. BRAND PORTFOLIO SHOWCASE (Interactive Grid)
      ================================================== */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="badge-pill" style={{ marginBottom: '0.75rem' }}>
              <span className="badge-pill-dot" />
              <span>معرض الأعمال</span>
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
              أعمالنا وشركاؤنا
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              اضغط على أي براند لاستكشاف الحملات والفيديوهات المخصصة له.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
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
          5. 21 CAMPAIGN VIDEOS TEASER SHOWCASE
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
              <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
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

          {/* Featured 6 Videos Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {featuredVideos.map((vid) => (
              <VideoCard key={vid.id} video={vid} onClick={(v) => setSelectedVideo(v)} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          6. ACHIEVEMENTS SECTION (Strictly user-supplied numbers)
      ================================================== */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="badge-pill" style={{ marginBottom: '0.75rem' }}>
              <span className="badge-pill-dot" />
              <span>أرقام تتحدث</span>
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              التحديات والإنجازات
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
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
