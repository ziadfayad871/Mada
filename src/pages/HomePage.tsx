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

  const quickServices = SERVICES.filter((s) => s.isQuick).slice(0, 5);
  const featuredVideos = VIDEOS.slice(0, 6);

  return (
    <div>
      {/* ==================================================
          1. HERO SECTION (Stunning Mobile & Desktop Layout)
      ================================================== */}
      <section
        style={{
          position: 'relative',
          paddingTop: '2rem',
          paddingBottom: '3.5rem',
          overflow: 'hidden',
          backgroundColor: 'var(--bg-primary)'
        }}
      >
        <div className="container">
          <div className="hero-grid-container">
            {/* Hero Copy Column */}
            <div className="hero-copy-col">
              <div className="badge-pill" style={{ width: 'fit-content' }}>
                <span className="badge-pill-dot" />
                <span>وكالة تسويق رقمية وإنتائج محتوى</span>
              </div>

              <h1 className="hero-headline">
                نحول أفكارك إلى قصص <span style={{ color: 'var(--accent-warm)' }}>تترك أثراً</span>
              </h1>

              <p className="hero-description">
                نقدم حلولاً تسويقية متكاملة تجمع بين الإبداع، التقنية، والإنتائج المرئي لنصنع لك حضوراً قوياً في عالم المنافسة.
              </p>

              <div className="hero-cta-group">
                <Link to="/works" className="btn-primary" style={{ padding: '0.85rem 1.8rem' }}>
                  <span>اكتشف أعمالنا</span>
                  <ArrowLeft size={18} />
                </Link>

                <Link to="/contact" className="btn-secondary" style={{ padding: '0.85rem 1.8rem' }}>
                  <span>تواصل معنا</span>
                </Link>
              </div>
            </div>

            {/* Hero Center Visual: Camera Photography Container */}
            <div className="hero-camera-container">
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80"
                alt="MADA Studio Camera Production"
                className="hero-camera-img"
              />

              {/* Gradient Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(44, 31, 23, 0.5) 0%, rgba(0,0,0,0) 65%)'
                }}
              />

              {/* Calligraphic Badge Tag */}
              <div className="hero-camera-badge">
                أفكار · محتوى · تسويق · إبداع
              </div>
            </div>

            {/* Hero Brand Showcase Card */}
            <div className="hero-brand-card">
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                  بعض من عملائنا
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  شركات وعلامات تجارية وثقت بنا
                </p>
              </div>

              {/* Brands Grid */}
              <div className="hero-brands-grid">
                {BRANDS.slice(0, 5).map((b) => (
                  <Link
                    key={b.id}
                    to={`/brands/${b.slug}`}
                    className="hero-brand-box"
                  >
                    <BrandLogoImage brandId={b.id} name={b.name} size={38} />
                  </Link>
                ))}

                {/* "+ and more..." Box */}
                <Link
                  to="/brands"
                  className="hero-brand-box hero-more-box"
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
          .hero-grid-container {
            display: grid;
            grid-template-columns: minmax(300px, 1fr) 1.1fr minmax(280px, 0.9fr);
            gap: 2rem;
            align-items: center;
          }
          .hero-copy-col {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
          }
          .hero-headline {
            font-size: clamp(2.2rem, 4vw, 3.2rem);
            font-weight: 800;
            color: var(--text-primary);
            line-height: 1.2;
            letter-spacing: -0.02em;
          }
          .hero-description {
            font-size: 1.05rem;
            color: var(--text-secondary);
            line-height: 1.7;
            max-width: 440px;
          }
          .hero-cta-group {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-top: 0.5rem;
            flex-wrap: wrap;
          }
          .hero-camera-container {
            position: relative;
            border-radius: var(--radius-xl);
            overflow: hidden;
            box-shadow: var(--shadow-hover);
            border: 1px solid var(--border-color);
            aspect-ratio: 4/5;
            max-height: 480px;
            background-color: var(--bg-secondary);
            width: 100%;
          }
          .hero-camera-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .hero-camera-badge {
            position: absolute;
            bottom: 1.5rem;
            left: 1.5rem;
            color: rgba(255, 255, 255, 0.95);
            font-size: 0.85rem;
            font-weight: 600;
            letter-spacing: 0.1em;
            writing-mode: vertical-rl;
            text-transform: uppercase;
          }
          .hero-brand-card {
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
          .hero-brand-box {
            background-color: var(--bg-primary);
            border-radius: var(--radius-sm);
            padding: 0.85rem 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--border-color-light);
            transition: transform 0.2s, border-color 0.2s;
            text-decoration: none;
          }
          .hero-brand-box:hover {
            transform: translateY(-2px);
            border-color: var(--text-primary);
          }
          .hero-more-box {
            background-color: var(--bg-secondary);
            border: 1px dashed var(--border-color);
            color: var(--text-secondary);
            font-size: 0.8rem;
            font-weight: 700;
            flex-direction: column;
          }

          /* Responsive Styles for Tablet & Mobile */
          @media (max-width: 1024px) {
            .hero-grid-container {
              grid-template-columns: 1fr;
              gap: 2.5rem;
            }
            .hero-camera-container {
              aspect-ratio: 16/10;
              max-height: 400px;
              order: 2;
            }
            .hero-copy-col {
              order: 1;
            }
            .hero-brand-card {
              order: 3;
            }
            .hero-camera-badge {
              writing-mode: horizontal-tb;
              left: 1.25rem;
              bottom: 1.25rem;
            }
            .hero-headline {
              font-size: clamp(1.8rem, 6vw, 2.5rem);
            }
            .hero-brands-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          @media (max-width: 600px) {
            .hero-camera-container {
              aspect-ratio: 4/3;
              max-height: 280px;
              border-radius: var(--radius-lg);
            }
            .hero-brands-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .hero-cta-group {
              width: 100%;
            }
            .hero-cta-group a {
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
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.75rem' }}>
              حلول تسويقية تصنع الفارق
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
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
          3. ABOUT SECTION TEASER
      ================================================== */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '3rem',
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
                    width: '60px',
                    height: '60px',
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

            {/* Right Text Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="badge-pill" style={{ width: 'fit-content' }}>
                <span className="badge-pill-dot" />
                <span>عن وكالة مدى</span>
              </div>

              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 700, color: 'var(--text-primary)' }}>
                من نحن
              </h2>

              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                مدى هي وكالة تسويق رقمي متخصصة في تقديم حلول متكاملة تساعد العلامات التجارية على الوصول إلى جمهورها وتحقيق نتائج ملموسة من خلال استراتيجيات إبداعية ومحتوى احترافي وحملات إعلانية فعالة.
              </p>

              {/* Quick stats numbers */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-color)',
                  flexWrap: 'wrap'
                }}
              >
                <div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)' }}>+50</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>مشروع ناجح</div>
                </div>

                <div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)' }}>+120</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>محتوى إبداعي</div>
                </div>

                <div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)' }}>+8</div>
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
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              اضغط على أي براند لاستكشاف الحملات والفيديوهات المخصصة له.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '1.25rem'
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
              marginBottom: '2.5rem',
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
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: '520px' }}>
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
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
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
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '1.25rem'
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
