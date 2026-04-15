import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import '../styles/header.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import doctorImage from '../assets/Doctor.png';
import questionIcon from '../assets/questionicon.png';
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

const allServices = [
  'Medical Billing & Coding',
  'Dental Billing & Coding',
  'Credentialing',
  'AR Recovery',
  'Practice Development',
  'HEDIS',
  'PCMH',
  'CCM',
  'Patient Scheduling',
  'Document Management',
  'Practice Operations Audit'
];

export default function PracticeDevelopment() {
  const location = useLocation();
  const serviceRoutes = {
    'Medical Billing & Coding': '/medical-billing',
    'Dental Billing & Coding': '/dental-billing',
    'Credentialing': '/credentialing',
    'AR Recovery': '/ar-recovery',
    'Practice Development': '/practice-development',
    'HEDIS': '/hedis',
    'PCMH': '/pcmh',
    'CCM': '/ccm',
    'Patient Scheduling': '/patient-scheduling',
    'Document Management': '/document-management',
    'Practice Operations Audit': '/practice-operations-audit',
  };
  const getServiceRoute = (service) => serviceRoutes[service];

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
            <div className="sidebar-wrapper" style={{
              flex: '0 0 280px',
              position: 'sticky',
              top: '100px',
              alignSelf: 'flex-start',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}>
              <div style={{
                background: 'linear-gradient(to bottom, #064e3b, #134e4a, #064e3b)',
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                overflow: 'hidden',
              }}>
                <div style={{
                  background: 'linear-gradient(to bottom, #064e3b, #134e4a, #064e3b)',
                  padding: '24px 20px',
                  textAlign: 'left',
                  borderBottom: '1px solid rgba(255,255,255,0.15)',
                }}>
                  <h3 style={{
                    color: 'white',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    margin: 0,
                    fontFamily: "'Nunito', sans-serif",
                    letterSpacing: '0px',
                    textTransform: 'uppercase',
                  }}>All Services</h3>
                </div>
                <div>
                  <ul style={{
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                  }}>
                    {allServices.map((service, idx) => (
                      <li key={service} style={{
                        borderBottom: '1px solid rgba(255,255,255,0.08)',
                        padding: '0',
                      }}>
                        <Link 
                          to={getServiceRoute(service)}
                          style={(() => {
                            const route = getServiceRoute(service);
                            const isActive = location.pathname === route;
                            return {
                              display: 'block',
                              padding: '12px 20px',
                              color: 'white',
                              textDecoration: 'none',
                              fontSize: '16px',
                              fontWeight: 600,
                              transition: 'all 0.2s ease',
                              background: isActive ? '#90EE90' : 'transparent',
                              borderLeft: isActive ? '3px solid #ffd700' : '3px solid transparent',
                              textAlign: 'left',
                            };
                          })()}

                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#90EE90';
                            e.currentTarget.style.paddingLeft = '24px';
                          }}
                          onMouseLeave={(e) => {
                            const route = getServiceRoute(service);
                            const isActive = location.pathname === route;
                            e.currentTarget.style.background = isActive ? '#90EE90' : 'transparent';
                            e.currentTarget.style.paddingLeft = '20px';
                          }}
                        >
                          {service}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Help Card */}
              <div style={{
                background: 'linear-gradient(135deg, #0f766e, #14b8a6)',
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                overflow: 'hidden',
                padding: '28px 20px',
                textAlign: 'center',
                border: '1px solid #14b8a6',
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  marginBottom: '16px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid rgba(255,255,255,0.3)',
                }}>
                  <img src={questionIcon} alt="Help" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'white',
                    margin: 0,
                    fontFamily: "'Nunito', sans-serif",
                  }}>Do you need any help?</h4>
                </div>
                <div style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: '8px',
                  fontFamily: "'Nunito', sans-serif",
                }}>512-920-6338</div>
                <div style={{
                  fontSize: '0.9rem',
                  color: 'white',
                  fontWeight: 500,
                  marginBottom: '16px',
                }}>mark@medhealer360.org</div>
                <Link 
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'white',
                    color: '#0f766e',
                    padding: '10px 20px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #064e3b, #0d9488)';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.color = '#0f766e';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Contact Us →
                </Link>
              </div>
            </div>

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
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #0f766e, #14b8a6)',
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                overflow: 'hidden',
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #0f766e, #14b8a6)',
                  padding: '20px 16px',
                  textAlign: 'left',
                  borderBottom: '1px solid rgba(255,255,255,0.15)',
                }}>
                  <h3 style={{
                    color: 'white',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    margin: 0,
                    fontFamily: "'Nunito', sans-serif",
                    letterSpacing: '0px',
                    textTransform: 'uppercase',
                  }}>All Services</h3>
                </div>
                <div>
                  <ul style={{
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                  }}>
                    {allServices.map((service, idx) => (
                      <li key={service} style={{
                        borderBottom: '1px solid rgba(255,255,255,0.08)',
                        padding: '0',
                      }}>
                        <Link 
                          to={getServiceRoute(service)}
                          style={(() => {
                            const route = getServiceRoute(service);
                            const isActive = location.pathname === route;
                            return {
                              display: 'block',
                              padding: '12px 16px',
                              color: 'white',
                              textDecoration: 'none',
                              fontSize: '16px',
                              fontWeight: 600,
                              transition: 'all 0.2s ease',
                              background: isActive ? '#90EE90' : 'transparent',
                              borderLeft: isActive ? '3px solid #ffd700' : '3px solid transparent',
                              textAlign: 'left',
                            };
                          })()}

                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#90EE90';
                            e.currentTarget.style.paddingLeft = '20px';
                          }}
                          onMouseLeave={(e) => {
                            const route = getServiceRoute(service);
                            const isActive = location.pathname === route;
                            e.currentTarget.style.background = isActive ? '#90EE90' : 'transparent';
                            e.currentTarget.style.paddingLeft = '16px';
                          }}
                        >
                          {service}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Help Card */}
              <div style={{
                background: 'linear-gradient(135deg, #0f766e, #14b8a6)',
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                overflow: 'hidden',
                padding: '24px 16px',
                textAlign: 'center',
                border: '1px solid #14b8a6',
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  marginBottom: '14px',
                  paddingBottom: '14px',
                  borderBottom: '1px solid rgba(255,255,255,0.3)',
                }}>
                  <img src={questionIcon} alt="Help" style={{ width: '35px', height: '35px', objectFit: 'contain' }} />
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'white',
                    margin: 0,
                    fontFamily: "'Nunito', sans-serif",
                  }}>Do you need any help?</h4>
                </div>
                <div style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: '6px',
                  fontFamily: "'Nunito', sans-serif",
                }}>512-920-6338</div>
                <div style={{
                  fontSize: '0.85rem',
                  color: 'white',
                  fontWeight: 500,
                  marginBottom: '14px',
                }}>mark@medhealer360.org</div>
                <Link 
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'white',
                    color: '#0f766e',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Contact Us →
                </Link>
              </div>
            </div>
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
            minHeight: auto !important;
            paddingLeft: 0 !important;
            paddingRight: 20px !important;
            padding: 40px 20px !important;
          }
          
          .content-image {
            minHeight: 300px !important;
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
            minHeight: 250px !important;
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