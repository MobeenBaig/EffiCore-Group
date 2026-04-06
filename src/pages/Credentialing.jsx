import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import '../styles/header.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import doctorImage from '../assets/Doctor.png';
import questionIcon from '../assets/questionicon.png';
import meetingImg from '../assets/meeting.jpg';

const steps = [
 {
    title: 'Online Profile Maintenance',
    desc: 'Keep your provider profiles up-to-date across all platforms for seamless operations.',
  },
  {
    title: 'Credentialing & Provider Tracking',
    desc: 'Ensure timely credentialing and continuous tracking for all providers with every payer.',
  },
  {
    title: 'Certification & License Expiry Reminders',
    desc: 'Stay compliant with automated reminders for upcoming license and certification renewals.',
  },
  {
    title: 'Payer Enrollment ERA/EFT/Submission' ,
    desc: 'Simplify payer enrollment for electronic remittance, payments, and claims submissions.',
  },
  {
    title: 'Contract Management',
    desc: 'Efficiently manage, review, and track all payer contracts to optimize terms and reimbursements.',
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

export default function Credentialing() {
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
  }, []);

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
            <h1 className="section-title" style={{fontSize: 'clamp(2rem, 6vw, 4.5rem)', fontWeight: '800', marginBottom: 12, color: 'white', animation: 'fadeUp 0.7s 0.1s ease both'}}>Credentialing</h1>
            <div className="section-tag" style={{marginBottom: 18, color: '#4ECDC4', fontSize: 'clamp(1rem, 3.2vw, 1.25rem)', animation: 'fadeUp 0.7s 0s ease both'}}>
              <Link to="/" style={{color: 'inherit', textDecoration: 'none', cursor: 'pointer', transition: 'opacity 0.2s'}}>Home</Link> &gt; Credentialing
            </div>
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
          <div style={{ width: '100%', height: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            {/* Left section - Medical Billing text */}
            <div style={{
              opacity: 0,
              transform: 'translateY(32px)',
              animation: 'fadeUp 0.7s 0.3s ease both',
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingLeft: '70px',
              
            }}>
              <h2 className="section-title" style={{fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 800, color: 'var(--teal-dark)', marginBottom: 18}}>Dental Billing</h2>
              <p style={{fontSize: 'clamp(0.95rem, 3vw, 1.08rem)', color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: 0}}>
Medical credentialing is a critical process used to assess a provider’s qualifications, experience, 
and professional history to ensure competency and compliance. It involves a thorough review of 
education, training, residency, licenses, and board certifications within the provider’s specialty. 
Hospitals, insurance companies, Medicare, and Medicaid rely on credentialing to determine 
whether a physician meets their standards before allowing participation in their networks. This 
process is not one-time—it requires ongoing monitoring and periodic revalidation in accordance 
with state regulations, accrediting bodies, and payer requirements. 
Managing credentialing in-house can be complex, time-intensive, and prone to delays. At HQ 
Analytics, we take this burden oA your shoulders by handling the entire credentialing process with 
accuracy and eAiciency. From initial enrollment to ongoing follow-ups with carriers, we ensure 
everything is completed correctly and on time. You’ll also receive regular updates, giving you full 
visibility into the progress at every stage.              </p>
            </div>

            {/* Right section - blob with meeting background image */}
            <div style={{
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
                <div className="section-tag" style={{color: 'var(--teal-dark)', fontSize: 'clamp(1.25rem, 3vw, 1.65rem)', fontWeight: 800, letterSpacing: '0.4px', marginBottom: 16, display: 'inline-block'}}>Key Features</div>
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
                <div className="section-tag" style={{color: 'var(--teal-dark)', fontSize: 'clamp(1.25rem, 3vw, 1.65rem)', fontWeight: 800, letterSpacing: '0.4px', marginBottom: 16, display: 'inline-block'}}>Key Features</div>
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
                          to={service === 'Dental Billing & Coding' ? '/dental-billing' : service === 'Medical Billing & Coding' ? '/medical-billing' : service === 'Credentialing' ? '/credentialing' : `/services/${service.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'')}`}
                          style={{
                            display: 'block',
                            padding: '12px 16px',
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: '16px',
                            fontWeight: 600,
                            transition: 'all 0.2s ease',
                            background: service === 'Dental Billing & Coding' ? '#90EE90' : 'transparent',
                            borderLeft: service === 'Dental Billing & Coding' ? '3px solid #ffd700' : '3px solid transparent',
                            textAlign: 'left',
                          }}

                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#90EE90';
                            e.currentTarget.style.paddingLeft = '20px';
                          }}
                          onMouseLeave={(e) => {
                            if (service !== 'Medical Billing & Coding') {
                              e.currentTarget.style.background = 'transparent';
                            } else {
                              e.currentTarget.style.background = '#90EE90';
                            }
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
        }
      `}</style>
    </>
  );
}