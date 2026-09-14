import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpLeft, BarChart3, Camera, ChevronLeft, ChevronRight, Clapperboard, Lightbulb, Palette, Play, Send, Share2, TrendingUp } from 'lucide-react';
import { BRANDS } from '../data/brands';
import { VIDEOS } from '../data/videos';
import { BrandLogoImage } from '../components/brand/BrandLogoImage';

const services = [['التسويق الرقمي', TrendingUp], ['إدارة السوشيال ميديا', Share2], ['التصميم الإبداعي', Palette], ['إنتاج الفيديوهات', Clapperboard], ['تصوير فوتوغرافي', Camera], ['صناعة المحتوى', Lightbulb]] as const;

const photos = [
  '/assets/camera.jpg'
];

export const HomePage: React.FC = () => {
  const [active, setActive] = useState(0);
  return <div className="mada-home">
    <section className="mada-hero section-shell">
      <div className="hero-copy reveal">
        <span className="eyebrow">وكالة تسويق رقمية وإنتاج محتوى</span>
        <h1>نحوّل أفكارك إلى قصص <em>تترك أثراً</em></h1>
        <p>نقدّم حلولاً تسويقية متكاملة تجمع بين الإبداع والتقنية والإنتاج المرئي، لنصنع لعلامتك حضوراً قوياً في عالم التسويق الرقمي.</p>
        <Link className="btn-primary" to="/works">
          اكتشف أعمالنا <ArrowLeft size={18}/>
        </Link>
      </div>
      
      <div className="hero-visual reveal delay-1">
        <img src={photos[0]} alt="كاميرا تصوير احترافية"/>
        <div className="image-glow"/>
        <span className="image-note">أفكار · محتوى · تسويق · إبداع</span>
      </div>
      
      <aside className="clients-panel reveal delay-2">
        <div>
          <span className="eyebrow">بعض من عملائنا</span>
          <h2>بعض من عملائنا</h2>
          <p>شركات وعلامات تجارية وثقتمونا</p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem',
          width: '100%'
        }}>
          {BRANDS.slice(0, 5).map((brand) => {
            const brandVideo = VIDEOS.find(v => v.brandId === brand.id);
            return (
              <Link
                to={`/brands/${brand.slug}`}
                key={brand.id}
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-card)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                  {brandVideo ? (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      background: `linear-gradient(135deg, #2a1f15 0%, #1a1410 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <BrandLogoImage brandId={brand.id} name={brand.name} size={60} color="#C4993B" />
                    </div>
                  ) : (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, #2a1f15 0%, #1a1410 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <BrandLogoImage brandId={brand.id} name={brand.name} size={60} color="#C4993B" />
                    </div>
                  )}

                  {/* Dark overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%)'
                  }} />

                  {/* Play button */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                    }}>
                      <Play size={18} style={{ marginLeft: '2px' }} fill="var(--text-primary)" color="var(--text-primary)" />
                    </div>
                  </div>

                  {/* Duration badge */}
                  {brandVideo?.duration && (
                    <div style={{
                      position: 'absolute',
                      top: '8px',
                      left: '8px',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      color: '#fff',
                      fontSize: '0.72rem',
                      fontWeight: 600
                    }}>
                      {brandVideo.duration}
                    </div>
                  )}

                  {/* Brand logo overlay */}
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    opacity: 0.8
                  }}>
                    <BrandLogoImage brandId={brand.id} name={brand.name} size={28} color="#FFFFFF" />
                  </div>
                </div>

                <div style={{ padding: '0.75rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {brand.name}
                  </div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-muted)', marginTop: '0.15rem', letterSpacing: '0.05em' }}>
                    {brand.englishName}
                  </div>
                </div>
              </Link>
            );
          })}
          <Link
            to="/brands"
            style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-card)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              aspectRatio: '16/9',
              transition: 'all 0.3s ease'
            }}
          >
            <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>...and more+</div>
            </div>
          </Link>
        </div>
        <Link to="/brands" className="text-link">
          جميع العلامات التجارية <ArrowLeft size={16}/>
        </Link>
      </aside>
    </section>

    <section className="about-strip section-shell">
      <div className="about-media">
        <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85" alt="استوديو مدى"/>
      </div>
      <div className="about-content">
        <span className="eyebrow">من نحن</span>
        <h2>نصنع الحضور الذي <em>يُرى ويُتذكر</em></h2>
        <p>فريق من المصممين والمسوقين وصنّاع المحتوى، نشتغل بشغف لنحوّل رؤية العلامة التجارية إلى تجربة تلمس جمهورها وتترك أثراً مميزاً.</p>
        <div className="stats">
          <div><b>+50</b><span>مشروع ناجح</span></div>
          <div><b>+120</b><span>حملة إبداعية</span></div>
          <div><b>+8</b><span>سنوات خبرة</span></div>
        </div>
        <Link to="/about" className="btn-primary">
          اعرف أكثر <ArrowLeft size={18}/>
        </Link>
      </div>
    </section>

    <section className="services-section section-shell">
      <div className="section-heading">
        <span className="eyebrow">من الفكرة إلى التنفيذ</span>
        <h2>خدماتنا</h2>
        <p>كل ما تحتاجه لبناء علامة تجارية لها صوت وأثر قوي في السوق.</p>
      </div>
      <div className="services-grid">
        {services.map(([name,Icon],i)=>(
          <Link to="/services" className="service-tile" key={name}>
            <span className="service-index">0{i+1}</span>
            <Icon size={30}/>
            <h3>{name}</h3>
            <ArrowUpLeft className="tile-arrow" size={19}/>
          </Link>
        ))}
      </div>
      <div className="center-action">
        <Link to="/services" className="btn-primary">
          اكتشف خدماتنا <ArrowLeft size={18}/>
        </Link>
      </div>
    </section>

    <section className="work-section section-shell">
      <div className="section-heading">
        <span className="eyebrow">أحدث الإنتاجات</span>
        <h2>من أعمالنا</h2>
      </div>
      <div className="work-layout">
        <div className="work-main">
          <img
            src={`/assets/brands/${BRANDS[active].id}.jpeg`}
            alt={BRANDS[active].name}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain'
            }}
          />
        </div>
        <div className="work-text">
          <span className="eyebrow">مشروع مختار</span>
          <h3><BrandLogoImage brandId={BRANDS[active].id} name={BRANDS[active].name} size={50} /></h3>
          <p>حملة متكاملة من الهوية البصرية حتى صناعة المحتوى والإنتاج المرئي، أُعدت لتظهر العلامة بصورتها الأقوى وتحقق أهدافها التسويقية.</p>
          <Link to={`/brands/${BRANDS[active].slug}`} className="text-link">
            شاهد المشروع <ArrowLeft size={17}/>
          </Link>
        </div>
      </div>
      <div className="thumb-row">
        {BRANDS.map((brand,i)=>(
          <button 
            onClick={()=>setActive(i)} 
            className={active===i?'thumb active':'thumb'} 
            key={brand.id}
          >
            <BrandLogoImage brandId={brand.id} name={brand.name} size={40} />
          </button>
        ))}
      </div>
      <div className="slider-controls">
        <button onClick={()=>setActive((active + BRANDS.length - 1) % BRANDS.length)}>
          <ChevronRight/>
        </button>
        <span>{active+1} / {BRANDS.length}</span>
        <button onClick={()=>setActive((active+1) % BRANDS.length)}>
          <ChevronLeft/>
        </button>
      </div>
    </section>

    <section className="contact-band section-shell">
      <div className="contact-copy">
        <span className="eyebrow">لنبدأ معاً</span>
        <h2>لديك مشروع قادم؟<br/><em>خلّينا نصنعه.</em></h2>
        <p>شاركنا فكرتك ورؤيتك، وسيتواصل معك فريق مدى في أقرب وقت لمناقشة مشروعك وتحويله إلى واقع.</p>
      </div>
      <form className="quick-form" onSubmit={e=>{
        e.preventDefault();
        const f = e.target as HTMLFormElement;
        const inputs = f.elements;
        const name = (inputs[0] as HTMLInputElement).value;
        const email = (inputs[1] as HTMLInputElement).value;
        const phone = (inputs[2] as HTMLInputElement).value;
        const msg = (inputs[3] as HTMLTextAreaElement).value;
        const subject = encodeURIComponent(`رسالة من ${name}`);
        const body = encodeURIComponent(`الاسم: ${name}\nالبريد: ${email}\nالهاتف: ${phone}\nالتفاصيل:\n${msg}`);
        window.location.href = `mailto:madamarking@gmail.com?subject=${subject}&body=${body}`;
      }}>
        <input placeholder="الاسم" required/>
        <input placeholder="البريد الإلكتروني" type="email" required/>
        <input placeholder="رقم الهاتف" type="tel"/>
        <textarea placeholder="أخبرنا عن مشروعك وأهدافك" rows={3}/>
        <button className="btn-primary" type="submit">
          إرسال الرسالة <Send size={17}/>
        </button>
      </form>
    </section>
  </div>;
};
