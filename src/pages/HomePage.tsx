import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpLeft, BarChart3, Camera, ChevronLeft, ChevronRight, Clapperboard, Lightbulb, Palette, Play, Send, Share2, TrendingUp } from 'lucide-react';
import { BRANDS } from '../data/brands';

const services = [['التسويق الرقمي', TrendingUp], ['إدارة السوشيال ميديا', Share2], ['التصميم الإبداعي', Palette], ['إنتاج الفيديوهات', Clapperboard], ['تصوير فوتوغرافي', Camera], ['صناعة المحتوى', Lightbulb]] as const;

// صور احترافية تطابق التصميم المرجعي
const photos = [
  'https://images.unsplash.com/photo-1585644198527-05f654868f94?auto=format&fit=crop&w=1400&q=85', // كاميرا فيديو احترافية على سبورة
  'https://images.unsplash.com/photo-1616530940355-351fabd9524b?auto=format&fit=crop&w=1400&q=85', // استوديو تصوير
  'https://images.unsplash.com/photo-1636955779321-b2c9d7a9d3ec?auto=format&fit=crop&w=1400&q=85', // معدات إنتاج
  'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1400&q=85'  // كاميرا بأضواء
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
        <button className="play-large" aria-label="تشغيل الفيديو">
          <Play fill="currentColor" size={30}/>
        </button>
        <span className="image-note">أفكار · محتوى · تسويق · إبداع</span>
      </div>
      
      <aside className="clients-panel reveal delay-2">
        <div>
          <span className="eyebrow">بعض من عملائنا</span>
          <h2>بعض من عملائنا</h2>
          <p>شركات وعلامات تجارية وثقتمونا</p>
        </div>
        <div className="mini-brand-grid">
          {BRANDS.slice(0,5).map((brand,i)=>(
            <Link 
              to={`/brands/${brand.slug}`} 
              key={brand.id} 
              className={i===0?'mini-brand featured':'mini-brand'}
            >
              <span>{brand.englishName || brand.name}</span>
            </Link>
          ))}
          <Link to="/brands" className="mini-brand">
            <b>+</b><small>and more...</small>
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
        <button className="play-large small">
          <Play fill="currentColor" size={25}/>
        </button>
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
        <h2>فيديوهات هذا المشروع</h2>
      </div>
      <div className="work-layout">
        <div className="work-main">
          <img src={photos[active]} alt="من أعمال مدى"/>
          <button className="play-large">
            <Play fill="currentColor" size={30}/>
          </button>
        </div>
        <div className="work-text">
          <span className="eyebrow">مشروع مختار</span>
          <h3>{['سلطان الفيصل','Hermatech','TO FITNESS','Lulu Glass'][active]}</h3>
          <p>حملة متكاملة من الهوية البصرية حتى صناعة المحتوى والإنتاج المرئي، أُعدت لتظهر العلامة بصورتها الأقوى وتحقق أهدافها التسويقية.</p>
          <Link to="/works" className="text-link">
            شاهد المشروع <ArrowLeft size={17}/>
          </Link>
        </div>
      </div>
      <div className="thumb-row">
        {photos.map((photo,i)=>(
          <button 
            onClick={()=>setActive(i)} 
            className={active===i?'thumb active':'thumb'} 
            key={photo}
          >
            <img src={photo} alt=""/>
            <span><Play fill="currentColor" size={13}/></span>
          </button>
        ))}
      </div>
      <div className="slider-controls">
        <button onClick={()=>setActive((active+3)%4)}>
          <ChevronRight/>
        </button>
        <span>{active+1} / 4</span>
        <button onClick={()=>setActive((active+1)%4)}>
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
      <form className="quick-form" onSubmit={e=>e.preventDefault()}>
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
