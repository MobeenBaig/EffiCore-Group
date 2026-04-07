import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const styles = `
  :root {
    --primary:   #2D3B4E;
    --teal-dark: #1A5C5C;
    --teal-mid:  #2A7A72;
    --teal-light:#4ECDC4;
    --teal-pale: #A8E6E1;
    --cream:     #F4EEE4;
    --cream-soft:#FAF7F2;
    --white:     #FFFFFF;
    --text-dark: #1C2B3A;
    --text-mid:  #4A5568;
    --text-light:#718096;
    --border:    #E2DDD5;
    --shadow:    0 4px 32px rgba(45,59,78,0.10);
    --shadow-lg: 0 12px 56px rgba(45,59,78,0.16);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { 
    scroll-behavior: smooth; 
    font-size: 16px; 
    overflow-x: hidden;
    width: 100%;
    height: 100%;
  }

  body {
    font-family: 'Nunito', sans-serif;
    background: var(--cream-soft);
    color: var(--text-dark);
    overflow-x: hidden;
    width: 100%;
    max-width: 100%;
  }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: var(--cream); }
  ::-webkit-scrollbar-thumb { background: var(--teal-mid); border-radius: 3px; }

  section { 
    padding: 100px 5%; 
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  .section-tag {
    font-family: 'Nunito', sans-serif; font-size: 0.75rem;
    font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
    color: var(--teal-dark);
    display: inline-flex; align-items: center; gap: 8px;
    margin-bottom: 16px;
  }

  .section-tag::before {
    content: ''; width: 28px; height: 2px;
    background: var(--teal-light); border-radius: 1px;
  }

  .section-title {
    font-family: 'Nunito', sans-serif;
    font-size: clamp(2rem, 3.5vw, 2.8rem);
    font-weight: 700; color: var(--primary);
    line-height: 1.2; margin-bottom: 20px;
  }

  .section-title em { font-style: italic; color: var(--teal-dark); }

  .section-sub {
    font-size: 1rem; color: var(--text-mid); line-height: 1.7;
    max-width: 540px;
  }

  .hero-about {
    min-height: 100vh;
    display: flex; align-items: center;
    padding: 120px 5% 80px;
    gap: 60px;
    position: relative; overflow: hidden;
  }

  .hero-bg {
    position: absolute; inset: 0; z-index: 0;
    background: linear-gradient(135deg, var(--cream-soft) 0%, var(--cream) 60%, #D6EDEA 100%);
  }

  .hero-content { position: relative; z-index: 1; max-width: 600px; }

  .hero-tag {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(78,205,196,0.15); border: 1px solid rgba(78,205,196,0.4);
    color: var(--teal-dark); padding: 7px 16px; border-radius: 50px;
    font-family: 'Nunito', sans-serif; font-size: 0.78rem;
    font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
    margin-bottom: 28px;
    animation: fadeUp 0.7s ease both;
  }

  .hero-tag span { width: 6px; height: 6px; border-radius: 50%; background: var(--teal-light); display: block; }

  .hero-about h1 {
    font-family: 'Nunito', sans-serif;
    font-size: clamp(2.8rem, 5vw, 4.2rem);
    font-weight: 700; line-height: 1.15;
    color: var(--primary);
    margin-bottom: 24px;
    animation: fadeUp 0.7s 0.1s ease both;
  }

  .hero-about h1 em {
    font-style: italic; color: var(--teal-dark);
    display: block;
  }

  .hero-about p {
    font-size: 1.1rem; line-height: 1.75;
    color: var(--text-mid);
    margin-bottom: 40px;
    animation: fadeUp 0.7s 0.2s ease both;
  }

  .hero-actions {
    display: flex; gap: 16px; flex-wrap: wrap;
    animation: fadeUp 0.7s 0.3s ease both;
  }

  .btn-primary {
    background: var(--teal-dark); color: var(--white);
    padding: 14px 32px; border-radius: 10px;
    font-family: 'Nunito', sans-serif; font-weight: 700;
    font-size: 0.9rem; letter-spacing: 0.04em;
    text-decoration: none; border: 2px solid var(--teal-dark);
    transition: all 0.25s; display: inline-flex; align-items: center; gap: 8px;
    box-shadow: 0 4px 20px rgba(26,92,92,0.3);
  }

  .btn-primary:hover { background: var(--primary); border-color: var(--primary); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(45,59,78,0.25); }

  .btn-outline {
    background: transparent; color: var(--primary);
    padding: 14px 32px; border-radius: 10px;
    font-family: 'Nunito', sans-serif; font-weight: 700;
    font-size: 0.9rem; letter-spacing: 0.04em;
    text-decoration: none; border: 2px solid var(--primary);
    transition: all 0.25s; display: inline-flex; align-items: center; gap: 8px;
  }

  .btn-outline:hover { background: var(--primary); color: var(--white); transform: translateY(-2px); }

  .services-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
  }

  .service-item {
    background: var(--cream-soft); border: 1px solid var(--border);
    border-radius: 20px; padding: 32px;
    transition: all 0.3s ease;
    display: flex; flex-direction: column; gap: 16px;
  }

  .service-item:hover {
    transform: translateY(-4px); box-shadow: var(--shadow-lg);
    border-color: var(--teal-light);
  }

  .service-number {
    font-family: 'Nunito', sans-serif;
    font-size: 2.4rem; font-weight: 800;
    color: var(--teal-dark); line-height: 1;
  }

  .service-title {
    font-family: 'Nunito', sans-serif;
    font-size: 1.15rem; font-weight: 700;
    color: var(--primary);
  }

  .service-desc {
    font-size: 0.9rem; color: var(--text-mid);
    line-height: 1.65;
  }

  .industries-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
  }

  .industry-item {
    background: var(--white); border: 1px solid var(--border);
    border-radius: 16px; padding: 28px;
    text-align: center; transition: all 0.3s;
    display: flex; flex-direction: column; gap: 14px; justify-content: center;
    align-items: center; min-height: 100px;
  }

  .industry-item:hover {
    transform: translateY(-4px); box-shadow: var(--shadow);
    border-color: var(--teal-light);
  }

  .industry-name {
    font-family: 'Nunito', sans-serif;
    font-size: 0.95rem; font-weight: 700;
    color: var(--primary);
  }

  .why-grid {
    display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px;
  }

  .why-card {
    padding: 28px; background: var(--cream-soft);
    border: 1px solid var(--border); border-radius: 16px;
    display: flex; gap: 16px; transition: all 0.3s;
    align-items: flex-start;
  }

  .why-card:hover {
    transform: translateY(-4px); box-shadow: var(--shadow);
    border-color: var(--teal-light);
  }

  .why-title {
    font-family: 'Nunito', sans-serif;
    font-size: 1rem; font-weight: 700;
    color: var(--primary); margin-bottom: 4px;
  }

  .why-desc {
    font-size: 0.9rem; color: var(--text-mid); line-height: 1.6;
  }

  .process-grid {
    display: grid; grid-template-columns: repeat(5, 1fr); gap: 24px;
  }

  .process-item {
    text-align: center;
  }

  .process-title {
    font-family: 'Nunito', sans-serif;
    font-size: 0.95rem; font-weight: 700;
    color: var(--primary); margin-bottom: 8px;
  }

  .process-desc {
    font-size: 0.82rem; color: var(--text-mid); line-height: 1.6;
  }

  .results-grid {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
  }

  .result-item {
    background: linear-gradient(135deg, var(--teal-dark), var(--teal-light));
    border-radius: 16px; padding: 36px;
    text-align: center; color: var(--white);
    transition: all 0.3s;
  }

  .result-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(26,92,92,0.3);
  }

  .result-metric {
    font-family: 'Nunito', sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800; margin-bottom: 12px; line-height: 1;
  }

  .result-label {
    font-size: 1.1rem; color: rgba(255,255,255,0.85);
    letter-spacing: 0.01em;
  }

  .benefits-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
  }

  .benefit-item {
    padding: 32px;
    background: var(--cream-soft);
    border: 1px solid var(--border);
    border-radius: 16px;
    text-align: center;
    transition: all 0.3s;
  }

  .benefit-item:hover {
    transform: translateY(-4px); box-shadow: var(--shadow);
    border-color: var(--teal-light);
  }

  .benefit-title {
    font-family: 'Nunito', sans-serif;
    font-size: 1.05rem; font-weight: 700;
    color: var(--primary);
  }

  .reveal {
    opacity: 0; transform: translateY(32px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .reveal.visible { opacity: 1; transform: translateY(0); }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 1100px) {
    .services-grid { grid-template-columns: 1fr 1fr; }
    .industries-grid { grid-template-columns: 1fr 1fr; }
    .why-grid { grid-template-columns: 1fr; }
    .results-grid { grid-template-columns: repeat(2, 1fr); }
    .process-grid { grid-template-columns: repeat(3, 1fr); }
    .benefits-grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 768px) {
    section { 
      padding: 80px 5%; 
      width: 100%;
      max-width: 100%;
      overflow-x: hidden;
    }

    .hero-about {
      padding: 80px 5% 50px;
      gap: 40px;
    }

    .hero-about h1 {
      font-size: clamp(2rem, 4vw, 3rem);
    }

    .hero-about p {
      font-size: 0.95rem;
      max-width: 100%;
    }

    .hero-actions {
      flex-direction: column;
      gap: 12px;
    }

    .hero-actions a {
      width: 100%;
      text-align: center;
    }

    .services-grid { grid-template-columns: 1fr; gap: 16px; }
    .industries-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
    .why-grid { grid-template-columns: 1fr; }
    .results-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
    .process-grid { grid-template-columns: 1fr 1fr; }
    .benefits-grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 480px) {
    section { 
      padding: 60px 5%; 
      width: 100%;
      max-width: 100%;
      overflow-x: hidden;
    }

    .hero-about {
      padding: 60px 5% 40px;
    }

    .hero-about h1 {
      font-size: clamp(1.5rem, 3.5vw, 2.2rem);
      margin-bottom: 16px;
    }

    .hero-about p {
      font-size: 0.9rem;
      margin-bottom: 24px;
    }

    .hero-actions {
      flex-direction: column;
      gap: 10px;
    }

    .hero-actions a {
      width: 100%;
      padding: 12px 20px;
      font-size: 0.85rem;
    }

    .services-grid { grid-template-columns: 1fr; }
    .industries-grid { grid-template-columns: 1fr; }
    .results-grid { grid-template-columns: 1fr; }
    .process-grid { grid-template-columns: 1fr; }
    .benefits-grid { grid-template-columns: 1fr; }

    .service-number {
      font-size: 2rem;
    }

    .result-metric {
      font-size: clamp(1.4rem, 2.5vw, 1.8rem);
    }
  }
`;

export default function AboutEfficore() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));
  }, []);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap" rel="stylesheet"/>
      <style>{styles}</style>
      <Header />

      {/* PAGE HEADING */}
      <section style={{ background: 'var(--primary)', padding: '40px 5%', textAlign: 'center', marginTop: '80px' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--white)', margin: 0 }}>About Efficore</h1>
      </section>

      {/* HERO SECTION */}
      <section className="hero-about">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <h1>Where <em>Efficiency Meets Revenue Excellence</em></h1>
          <p>At Efficore Group, we transform complex billing processes into seamless revenue streams. From eligibility verification to final payment posting, our end-to-end solutions are designed to reduce denials, accelerate cash flow, and unlock the full financial potential of your practice.</p>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section style={{ background: 'linear-gradient(to bottom, #064e3b, #134e4a, #064e3b)', padding: '100px 5%' }}>
        <div className="reveal" style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', color: 'white' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 700, marginBottom: 28, lineHeight: 1.2 }}>Driving Revenue. Delivering Precision. Powering Healthcare.</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.85)' }}>Efficore Group provides expert medical and dental billing solutions designed to streamline your operations, reduce claim denials, and maximize reimbursements — so you can focus on patient care while we handle the rest.</p>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ background: 'var(--white)' }}>
        <div className="benefits-grid reveal">
          {[
            { title: 'End-to-End Revenue Cycle Management' },
            { title: 'Faster Payments & Reduced Denials' },
            { title: 'HIPAA-Compliant & Secure Processes' }
          ].map((benefit, i) => (
            <div key={i} className="benefit-item">
              <div className="benefit-title">{benefit.title}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 40 }} className="reveal">
          <a href="#contact" className="btn-primary">Get Started</a>
          <a href="#contact" className="btn-outline">Request Free Audit</a>
        </div>
      </section>

      {/* ABOUT US */}
      <section style={{ background: 'var(--cream-soft)' }}>
        <div className="reveal" style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 className="section-title">About Us</h2>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary)', marginBottom: 24, marginTop: 20 }}>Efficiency at the Core of Your Revenue</h3>
          <p className="section-sub" style={{ maxWidth: '100%', marginBottom: 20 }}>At Efficore Group, we specialize in delivering reliable and results-driven billing solutions for healthcare providers. Our goal is simple: reduce your administrative burden while increasing your revenue.</p>
          <p className="section-sub" style={{ maxWidth: '100%' }}>From patient eligibility verification to payment posting, we ensure accuracy, compliance, and efficiency at every step of the revenue cycle. With a dedicated team and advanced systems, we help practices achieve consistent cash flow and operational excellence.</p>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: 'var(--white)' }}>
        <div className="reveal" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 className="section-title">Our Services</h2>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary)', marginBottom: 40, marginTop: 20 }}>Complete Medical & Dental Billing Solutions</h3>
        </div>
        <div className="services-grid reveal">
          {[
            { num: '1', title: 'Eligibility & Verification', desc: 'We verify patient insurance coverage, benefits, and authorizations to prevent claim rejections before they occur.' },
            { num: '2', title: 'Medical Coding', desc: 'Accurate CPT, ICD-10, and CDT coding to ensure compliance and maximize reimbursements.' },
            { num: '3', title: 'Claim Submission', desc: 'Fast and clean claim submissions within 24–48 hours to accelerate payment cycles.' },
            { num: '4', title: 'Denial Management', desc: 'We identify, correct, and resubmit denied claims to recover lost revenue efficiently.' },
            { num: '5', title: 'Payment Posting', desc: 'Accurate posting of ERA/EOB with detailed reconciliation and reporting.' },
            { num: '6', title: 'Accounts Receivable (A/R) Management', desc: 'Aggressive follow-ups on outstanding claims to improve cash flow and reduce aging.' }
          ].map((service) => (
            <div key={service.num} className="service-item">
              <div className="service-number">{service.num}</div>
              <div className="service-title">{service.title}</div>
              <div className="service-desc">{service.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section style={{ background: 'var(--cream-soft)' }}>
        <div className="reveal" style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center', marginBottom: 64 }}>
          <h2 className="section-title">Industries We Serve</h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-mid)', marginTop: 20 }}>Specialized Expertise Across Healthcare Segments</p>
        </div>
        <div className="industries-grid reveal">
          {[
            { name: 'Primary Care & Family Practices' },
            { name: 'Dental Clinics & DSO Groups' },
            { name: 'Specialty Practices (Cardiology, Orthopedics, etc.)' },
            { name: 'Mental Health & Behavioral Health' },
            { name: 'Urgent Care Centers' },
            { name: 'Hospitals & Large Healthcare Facilities' }
          ].map((industry, i) => (
            <div key={i} className="industry-item">
              <div className="industry-name">{industry.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ background: 'var(--white)' }}>
        <div className="reveal" style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center', marginBottom: 64 }}>
          <h2 className="section-title">Why Choose Efficore Group</h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-mid)', marginTop: 20 }}>Your Growth Partner in Revenue Cycle Management</p>
        </div>
        <div className="why-grid reveal" style={{ maxWidth: 1200, margin: '0 auto' }}>
          {[
            { title: 'Higher Clean Claim Rate', desc: 'Reduced errors and faster approvals' },
            { title: 'Faster Reimbursements', desc: 'Improved cash flow cycles' },
            { title: 'Reduced Denial Rates', desc: 'Proactive issue resolution' },
            { title: 'Transparent Reporting', desc: 'Real-time insights into your revenue' },
            { title: 'Dedicated Support', desc: 'We work as an extension of your team' }
          ].map((item, i) => (
            <div key={i} className="why-card">
              <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--teal-dark)', marginRight: 8, flexShrink: 0 }}>✔</div>
              <div>
                <div className="why-title">{item.title}</div>
                <div className="why-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: 'var(--cream-soft)' }}>
        <div className="reveal" style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center', marginBottom: 64 }}>
          <h2 className="section-title">Our Process</h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-mid)', marginTop: 20 }}>Simple. Efficient. Result-Driven.</p>
        </div>
        <div className="process-grid reveal" style={{ maxWidth: 1200, margin: '0 auto' }}>
          {[
            { title: 'Onboarding & Analysis', desc: 'Understand your current billing challenges' },
            { title: 'System Integration', desc: 'Seamless setup with your existing workflow' },
            { title: 'Execution', desc: 'End-to-end billing and coding services' },
            { title: 'Monitoring & Reporting', desc: 'Continuous performance tracking' },
            { title: 'Optimization', desc: 'Ongoing improvements for maximum revenue' }
          ].map((step, i) => (
            <div key={i} className="process-item">
              <div className="process-title">{step.title}</div>
              <div className="process-desc">{step.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* RESULTS */}
      <section style={{ background: 'var(--white)' }}>
        <div className="reveal" style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center', marginBottom: 64 }}>
          <h2 className="section-title">Results That Matter</h2>
        </div>
        <div className="results-grid reveal" style={{ maxWidth: 1200, margin: '0 auto' }}>
          {[
            { label: 'Increase in Revenue Collection' },
            {  label: 'Reduction in Claim Denials' },
            { label: 'Faster Payment Turnaround' },
            {  label: 'Improved Financial Visibility' }
          ].map((result, i) => (
            <div key={i} className="result-item">
              <div className="result-metric">{result.metric}</div>
              <div className="result-label">{result.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
