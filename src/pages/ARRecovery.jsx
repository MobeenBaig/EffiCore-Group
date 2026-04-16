import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import '../styles/header.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import doctorImage from '../assets/Doctor.png';
import ServiceSidebar from '../components/ServiceSidebar';
import meetingImg from '../assets/meeting.jpg';

const steps = [
  {
    title: 'Aged A/R Analysis',
    desc: 'We analyze outstanding accounts receivable to identify aging claims and prioritize recovery efforts for maximum impact.',
  },
  {
    title: 'Claim Follow-up & Resolution',
    desc: 'Our team actively follows up on unpaid and underpaid claims, communicating directly with payers to resolve issues swiftly.',
  },
  {
    title: 'Denial Investigation & Appeals',
    desc: 'Denied or underpaid claims are thoroughly investigated and appealed to secure the reimbursement your practice deserves.',
  },
  {
    title: 'Payment Posting & Reconciliation',
    desc: 'We manage all incoming payments, adjustments, and denials while reconciling them with provider claims for accurate revenue posting.',
  },
  {
    title: 'Collection Strategy Optimization',
    desc: 'We enhance collection workflows through claim validation and strategic recovery efforts from both payers and patients.',
  },
  {
    title: 'A/R Reporting & Analytics',
    desc: 'We provide detailed aging reports, recovery metrics, and actionable insights to improve financial performance.',
  },
];

const stepColors = ['#E9FFF2', '#F2FFF7', '#E3FFEC', '#EEFFF6', '#E7FFEF'];

export default function ARRecovery() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Reveal animation for all elements with reveal class
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Make visible immediately without staggered delay
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));
  }, [location.pathname]);

  return (
    <>
      {/* Load Nunito font for entire page */}
      <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap" rel="stylesheet" />
      <Header />
      <div style={{ fontFamily: "'Nunito', sans-serif", overflowX: 'hidden' }}>
        <div className="page-hero" style={{
          position: 'relative',
          background: 'linear-gradient(to bottom, #064e3b, #134e4a, #064e3b)',
          padding: '90px 0 20px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          boxShadow: '0 4px 32px rgba(45,59,78,0.10)',
          overflow: 'hidden'
        }}>
          {/* Decorative blob background */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-10%',
            width: '60%',
            height: '200%',
            borderRadius: '50%',
            background: 'rgba(78,205,196,0.06)',
            pointerEvents: 'none',
            zIndex: 0
          }} />
          <div className="container" style={{position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
            <h1 className="section-title" style={{fontSize: 'clamp(2rem, 6vw, 4.5rem)', fontWeight: '800', marginBottom: 12, color: 'white', animation: 'fadeUp 0.7s 0.1s ease both'}}>AR Recovery</h1>
           
            <p style={{fontSize: 'clamp(0.95rem, 3vw, 1.2rem)', color: 'rgba(255,255,255,0.8)', fontWeight: 600, marginBottom: 0, animation: 'fadeUp 0.7s 0.2s ease both'}}>
              Leave the Billing to Us — Focus on Saving Lives!
            </p>
          </div>
        </div>

        <section style={{
          width: '100%',
          position: 'relative',
          background: 'linear-gradient(135deg, var(--cream-soft) 0%, var(--cream) 60%, #D6EDEA 100%)',
          overflow: 'hidden',
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}>
          <div style={{ width: '100%', height: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="content-grid">
            {/* Left section - Medical Billing text */}
            <div className="content-text" style={{
              opacity: 0,
              transform: 'translateY(32px)',
              animation: 'fadeUp 0.7s 0.3s ease both',
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingLeft: '70px',
              
            }}>
              <h2 className="section-title" style={{fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 800, color: 'var(--teal-dark)', marginBottom: 18}}>AR Recovery</h2>
              <p style={{fontSize: 'clamp(0.95rem, 3vw, 1.08rem)', color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: 0}}>
Effective Accounts Receivable (A/R) management is essential for maintaining a healthy cash flow 
and ensuring the financial stability of your practice. Unpaid or delayed claims can quickly 
accumulate, impacting your revenue cycle and overall performance. Our A/R management services 
are designed to identify bottlenecks, reduce outstanding balances, and accelerate 
reimbursements—helping you maintain consistent cash flow without added stress. 
Our team takes a proactive approach by closely monitoring aging reports, prioritizing high-value 
claims, and conducting timely follow-ups with insurance companies. We focus on resolving 
denials, reprocessing claims, and addressing payment discrepancies with precision and 
persistence. By combining industry expertise with data-driven insights, we ensure that no revenue 
opportunity is overlooked. 
With our transparent reporting and regular performance updates, you gain full visibility into your 
receivables and collection trends. We keep you informed at every stage, empowering you to make 
strategic decisions for your practice’s growth. While we handle the complexities of A/R 
management, you can stay focused on delivering quality patient care with confidence.               </p>
            </div>

            {/* Right section - blob with meeting background image */}
            <div className="content-image" style={{
              position: 'relative',
              width: '100%',
              minHeight: '100vh',
              borderRadius: '15% 0 0 20%',
              backgroundImage: `url(${meetingImg})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              opacity: 0,
              animation: 'fadeUp 0.8s 0.2s ease both',
              paddingLeft: '20px',
              paddingRight: '20px'
            }}>
            </div>
          </div>
        </section>

        <section style={{
          width: '100%',
          position: 'relative',
          background: 'linear-gradient(115deg, #f5fbf9 0%, #dff4f0 50%, #ffffff 100%)',
          overflow: 'hidden',
          padding: '80px 0 60px 0',
          margin: 0,
        }}>
          {/* Desktop Layout: Sidebar left, Cards right */}
          <div className="desktop-layout" style={{
            maxWidth: '1250px',
            margin: '0 auto',
            padding: '0 40px',
            display: 'flex',
            gap: '120px',
            alignItems: 'flex-start',
          }}>
            <ServiceSidebar />

            {/* Cards Section - Right side on desktop */}
            <div style={{
              flex: 1,
              minWidth: 0,
            }}>
              <div className="section-header" style={{marginBottom: 64, position: 'relative', zIndex: 1}}>
                <div className="section-tag" style={{color: 'var(--teal-dark)', fontSize: 'clamp(1.25rem, 3vw, 1.65rem)', fontWeight: 800, letterSpacing: '0.4px', marginBottom: 16, display: 'inline-block'}}>Our Methodology To AR</div>
              </div>
              <div className="billing-steps" style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '24px',
                justifyContent: 'flex-start',
                position: 'relative',
                zIndex: 1,
                alignItems: 'stretch',
                width: '100%',
              }}>
                {steps.map((step, idx) => {
                  return (
                  <div key={step.title} className="step-card reveal" style={{
                    background: stepColors[idx % stepColors.length],
                    borderRadius: 18,
                    boxShadow: '0 4px 24px rgba(45,59,78,0.08)',
                    border: '1.5px solid var(--border)',
                    padding: '32px 24px',
                    textAlign: 'center',
                    transition: 'box-shadow 0.2s',
                    flex: '1 1 auto',
                    minWidth: '180px',
                    maxWidth: '240px',
                  }}>
                    <div style={{
                      fontSize: 'clamp(1.05rem, 2.3vw, 1.25rem)',
                      fontWeight: 700,
                      color: 'var(--teal-dark)',
                      marginBottom: 10,
                      letterSpacing: 0.5,
                    }}>{step.title}</div>
                    <div style={{
                      fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                      color: 'var(--text-mid)',
                      lineHeight: 1.6,
                    }}>{step.desc}</div>
                  </div>
                );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Layout: Cards first, then Sidebar below */}
          <div className="mobile-layout" style={{
            maxWidth: '1250px',
            margin: '0 auto',
            padding: '0 20px',
            display: 'none',
            flexDirection: 'column',
            gap: '40px',
          }}>
            {/* Cards Section - First on mobile */}
            <div>
              <div className="section-header" style={{marginBottom: 40, position: 'relative', zIndex: 1}}>
                <div className="section-tag" style={{color: 'var(--teal-dark)', fontSize: 'clamp(1.25rem, 3vw, 1.65rem)', fontWeight: 800, letterSpacing: '0.4px', marginBottom: 16, display: 'inline-block'}}>Our Methodology To AR</div>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                width: '100%',
              }}>
                {steps.map((step, idx) => {
                  return (
                  <div key={step.title} style={{
                    background: stepColors[idx % stepColors.length],
                    borderRadius: 18,
                    boxShadow: '0 4px 24px rgba(45,59,78,0.08)',
                    border: '1.5px solid var(--border)',
                    padding: '24px 20px',
                    textAlign: 'center',
                    transition: 'box-shadow 0.2s',
                    width: '100%',
                  }}>
                    <div style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'var(--teal-dark)',
                      marginBottom: 10,
                      letterSpacing: 0.5,
                    }}>{step.title}</div>
                    <div style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-mid)',
                      lineHeight: 1.6,
                    }}>{step.desc}</div>
                  </div>
                );
                })}
              </div>
            </div>

            <ServiceSidebar />
          </div>
        </section>
        <Footer />
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (min-width: 769px) {
          .desktop-layout {
            display: flex !important;
          }
          .mobile-layout {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .desktop-layout {
            display: none !important;
          }
          .mobile-layout {
            display: flex !important;
          }
          
          /* Responsive Grid Layout for Content Section */
          .content-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            align-items: stretch !important;
            padding: 0 20px !important;
          }
          
          .content-text {
            min-height: auto !important;
            paddingLeft: 0 !important;
            paddingRight: 20px !important;
            padding: 40px 20px !important;
          }
          
          .content-image {
            min-height: 400px !important;
          }
        }
        
        @media (max-width: 480px) {
          .content-text {
            paddingLeft: 0 !important;
            paddingRight: 0 !important;
            padding: 30px 16px !important;
          }
          
          .content-text h2 {
            fontSize: 1.5rem !important;
            marginBottom: 12px !important;
          }
          
          .content-text p {
            fontSize: 0.9rem !important;
            lineHeight: 1.6 !important;
          }
          
          .content-grid {
            gap: 20px !important;
          }
          
          .content-image {
            min-height: 250px !important;
          }
        }
      `}</style>
    </>
  );
}