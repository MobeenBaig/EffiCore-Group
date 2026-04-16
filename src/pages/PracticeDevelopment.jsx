import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import '../styles/header.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceSidebar from '../components/ServiceSidebar';
import doctorImage from '../assets/Doctor.png';
import meetingImg from '../assets/practicedevelopment.png';

const steps = [
  {
    title: 'HEDIS',
    desc: 'Improve quality scores and compliance with accurate HEDIS data collection and reporting.',
    route: '/hedis',
  },
  {
    title: 'PCMH (Patient-Centered Medical Home)',
    desc: 'Streamline care coordination and achieve recognition with expert PCMH support.',
    route: '/pcmh',
  },
  {
    title: 'CCM (Chronic Care Management)',
    desc: 'Enhance patient outcomes and revenue with proactive chronic care management services.',
    route: '/ccm',
  },
];

const stepColors = ['#E9FFF2', '#F2FFF7', '#E3FFEC', '#EEFFF6', '#E7FFEF'];

export default function PracticeDevelopment() {
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
            <h1 className="section-title" style={{fontSize: 'clamp(2rem, 6vw, 4.5rem)', fontWeight: '800', marginBottom: 12, color: 'white', animation: 'fadeUp 0.7s 0.1s ease both'}}>Practice Development</h1>
           
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
          <div className="content-grid" style={{ width: '100%', height: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
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
              <h2 className="section-title" style={{fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 800, color: 'var(--teal-dark)', marginBottom: 18}}>Practice Development</h2>
              <p style={{fontSize: 'clamp(0.95rem, 3vw, 1.08rem)', color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: 0}}>
Growing a successful healthcare practice requires more than excellent patient care—it demands strategic planning, efficient operations, and a strong focus on revenue optimization. Many practices face challenges such as underutilized opportunities, inconsistent patient flow, and operational inefficiencies that limit their growth. Our practice development services identify these gaps and implement tailored strategies to drive sustainable success. We take a comprehensive approach by analyzing your workflows, patient acquisition channels, and financial performance, ensuring every aspect of your practice is aligned for maximum efficiency and growth.

From improving front-desk operations and optimizing scheduling to enhancing billing processes and increasing patient retention, we create a streamlined, patient-centered system that boosts both productivity and profitability. With ongoing support and performance tracking, we provide clear insights into progress and areas for improvement. Our data-driven approach ensures every decision is backed by measurable results, helping you scale confidently in a competitive healthcare landscape.          </p>
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
            {/* Sidebar Menu - Left side on desktop */}
            <ServiceSidebar />

            {/* Cards Section - Right side on desktop */}
            <div style={{
              flex: 1,
              minWidth: 0,
            }}>
              <div className="section-header" style={{marginBottom: 64, position: 'relative', zIndex: 1}}>
                <div className="section-tag" style={{color: 'var(--teal-dark)', fontSize: 'clamp(1.25rem, 3vw, 1.65rem)', fontWeight: 800, letterSpacing: '0.4px', marginBottom: 16, display: 'inline-block'}}>We cover HEDIS, PCMH and CCM (Chronic Care management) as part of practice development. 
</div>
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
                  <Link key={step.title} to={step.route} style={{ textDecoration: 'none' }}>
                    <div className="step-card reveal" style={{
                      background: stepColors[idx % stepColors.length],
                      borderRadius: 18,
                      boxShadow: '0 4px 24px rgba(45,59,78,0.08)',
                      border: '1.5px solid var(--border)',
                      padding: '32px 24px',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      flex: '1 1 auto',
                      minWidth: '180px',
                      maxWidth: '240px',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = '0 12px 36px rgba(45,59,78,0.15)';
                      e.currentTarget.style.borderColor = 'var(--teal-light)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 24px rgba(45,59,78,0.08)';
                      e.currentTarget.style.borderColor = 'var(--border)';
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
                  </Link>
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
                <div className="section-tag" style={{color: 'var(--teal-dark)', fontSize: 'clamp(1.25rem, 3vw, 1.65rem)', fontWeight: 800, letterSpacing: '0.4px', marginBottom: 16, display: 'inline-block'}}>We cover HEDIS, PCMH and CCM (Chronic Care management) as part of practice development. 
</div>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                width: '100%',
              }}>
                {steps.map((step, idx) => {
                  return (
                  <Link key={step.title} to={step.route} style={{ textDecoration: 'none' }}>
                    <div style={{
                      background: stepColors[idx % stepColors.length],
                      borderRadius: 18,
                      boxShadow: '0 4px 24px rgba(45,59,78,0.08)',
                      border: '1.5px solid var(--border)',
                      padding: '24px 20px',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      width: '100%',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.boxShadow = '0 10px 32px rgba(45,59,78,0.12)';
                      e.currentTarget.style.borderColor = 'var(--teal-light)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 24px rgba(45,59,78,0.08)';
                      e.currentTarget.style.borderColor = 'var(--border)';
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
                  </Link>
                );
                })}
              </div>
            </div>

            {/* Sidebar Menu - Below cards on mobile */}
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
            min-height: 300px !important;
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
          
          .content-image {
            min-height: 250px !important;
          }
          
          /* Ensure mobile layout sections are full width */
          .mobile-layout > div {
            width: 100%;
          }
          
          /* Make sidebar menu stack vertically on mobile */
          .mobile-layout .sidebar-wrapper {
            flex-direction: column;
            gap: 16px;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}