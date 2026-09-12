import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'تسويق رقمي',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`رسالة من ${formData.name} - ${formData.projectType}`);
    const body = encodeURIComponent(
      `الاسم: ${formData.name}\n` +
      `البريد: ${formData.email}\n` +
      `الهاتف: ${formData.phone}\n` +
      `نوع المشروع: ${formData.projectType}\n` +
      `التفاصيل:\n${formData.message}`
    );
    window.location.href = `mailto:madamarking@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-card)',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--border-color)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-hover)'
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
        }}
      >
        {/* Form Container (Right Side in RTL) */}
        <div style={{ padding: '3rem 2.5rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span className="badge-pill-dot" />
            <span>تواصل معنا</span>
          </div>

          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            لنبدأ مشروعك القادم
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
            تواصل معنا الآن لنحول فكرتك إلى حملة ناجحة تصنع الفرق.
          </p>

          {submitted ? (
            <div
              style={{
                backgroundColor: 'var(--accent-gold-light)',
                padding: '2.5rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center',
                color: 'var(--text-primary)',
                animation: 'fadeIn 0.3s ease'
              }}
            >
              <CheckCircle2 size={48} color="var(--accent-warm)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                تم إرسال رسالتك بنجاح!
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                شكراً لتواصلك مع مدى. سيقوم فريقنا بالرد عليك في أسرع وقت.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-secondary"
                style={{ marginTop: '1.5rem' }}
              >
                إرسال رسالة أخرى
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  required
                  placeholder="أدخل اسمك الكريم"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-primary)',
                    fontFamily: 'var(--font-family)',
                    fontSize: '0.95rem',
                    color: 'var(--text-primary)',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-color)',
                      backgroundColor: 'var(--bg-primary)',
                      fontFamily: 'var(--font-family)',
                      fontSize: '0.95rem',
                      color: 'var(--text-primary)',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="05X XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-color)',
                      backgroundColor: 'var(--bg-primary)',
                      fontFamily: 'var(--font-family)',
                      fontSize: '0.95rem',
                      color: 'var(--text-primary)',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                  نوع المشروع
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-primary)',
                    fontFamily: 'var(--font-family)',
                    fontSize: '0.95rem',
                    color: 'var(--text-primary)',
                    outline: 'none'
                  }}
                >
                  <option value="تسويق رقمي">تسويق رقمي وإدارة حملات</option>
                  <option value="إنتاج فيديوهات">إنتاج فيديوهات وتصوير سينمائي</option>
                  <option value="هوية بصرية">تطوير وتصميم هوية بصرية</option>
                  <option value="صناعة محتوى">صناعة محتوى وتواصل الاجتماعي</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                  تفاصيل المشروع
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="أخبرنا المزيد عن رؤيتك وأهداف مشروعك..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-primary)',
                    fontFamily: 'var(--font-family)',
                    fontSize: '0.95rem',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem', width: '100%' }}>
                <span>إرسال الرسالة</span>
                <Send size={18} />
              </button>
            </form>
          )}
        </div>

        {/* Visual & Info Side (Left Side in RTL matching design-reference.png screen 4) */}
        <div
          style={{
            position: 'relative',
            backgroundColor: 'var(--bg-secondary)',
            backgroundImage: `url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '3rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            color: 'var(--text-primary)'
          }}
        >
          {/* Overlay gradient to keep text readable */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(251, 248, 243, 0.88)',
              backdropFilter: 'blur(4px)'
            }}
          />

          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '2rem', color: 'var(--text-primary)' }}>
              معلومات التواصل المباشر
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: 'var(--bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)' }}>
                  <Mail size={20} color="var(--accent-warm)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>البريد الإلكتروني</div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    madamarking@gmail.com
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: 'var(--bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)' }}>
                  <Phone size={20} color="var(--accent-warm)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>أرقام التواصل</div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)', direction: 'ltr', textAlign: 'right' }}>
                    055 750 3280 / 053 113 4919
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: 'var(--bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)' }}>
                  <MapPin size={20} color="var(--accent-warm)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>الموقع الرئيسي</div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    الرياض، المملكة العربية السعودية
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stylized Handwritten text overlay from design reference */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              marginTop: '3rem',
              textAlign: 'center',
              padding: '1.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              borderRadius: 'var(--radius-md)',
              border: '1px dashed var(--border-color)'
            }}
          >
            <div style={{ fontFamily: 'sans-serif', fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-secondary)', fontStyle: 'italic', letterSpacing: '0.05em' }}>
              Let's Create Together
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
              نصنع المستحيل بشغف وإبداع
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
