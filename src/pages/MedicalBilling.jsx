import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../styles/header.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import doctorImage from '../assets/Doctor.png';
import questionIcon from '../assets/questionicon.png';

const steps = [
  {
    title: 'Verification',
    desc: 'We verify the patient’s insurance coverage directly with the payer.',
  },
  {
    title: 'Transcription',
    desc: 'We accurately transcribe the physician’s notes and clinical documentation.',
  },
  {
    title: 'Coding',
    desc: 'We assign the correct diagnosis and procedure codes based on the provider’s notes.',
  },
  {
    title: 'Submission',
    desc: 'We prepare and submit clean medical claims to the appropriate payers.',
  },
  {
    title: 'Payment',
    desc: 'The healthcare provider receives timely reimbursement for their services.',
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

export default function MedicalBilling() {
  useEffect(() => {
    // Reveal animation for all elements with reveal class
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 2000);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));
  }, []);

  return (
    <>
      {/* Load home2 fonts: DM Sans body + Syne headers + Playfair Display */}
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Syne:wght@400;500;600;700;800&family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet" />
      <Header />
      <div style={{ fontFamily: "'DM Sans', sans-serif", overflowX: 'hidden' }}>
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
            <h1 className="section-title" style={{fontSize: 'clamp(2rem, 6vw, 4.5rem)', fontWeight: '800', marginBottom: 12, color: 'white', animation: 'fadeUp 0.7s 0.1s ease both'}}>Medical Billing & Coding</h1>
            <div className="section-tag" style={{marginBottom: 18, color: '#4ECDC4', fontSize: 'clamp(1rem, 3.2vw, 1.25rem)', animation: 'fadeUp 0.7s 0s ease both'}}>
              <Link to="/" style={{color: 'inherit', textDecoration: 'none', cursor: 'pointer', transition: 'opacity 0.2s'}}>Home</Link> &gt; Medical Billing
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
          padding: '80px 0 0 0',
          margin: 0,
        }}>
          <div style={{ maxWidth: '1250px', margin: '0 auto', padding: '0 40px' }}>
          {/* Decorative blob on right side - same as home2 */}
          <div style={{
            position: 'absolute',
            right: '-10%',
            top: '-15%',
            width: '50%',
            height: '130%',
            background: 'linear-gradient(160deg, #1A5C5C 0%, #2A7A72 45%, #4ECDC4 100%)',
            borderRadius: '40% 0 0 30%',
            opacity: 0.08,
            zIndex: 0,
            pointerEvents: 'none',
          }} />
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 80,
            position: 'relative',
            zIndex: 1,
            opacity: 0,
            transform: 'translateY(32px)',
            animation: 'fadeUp 0.7s 0.3s ease both'
          }}>
            <div style={{
              flex: '1 1 340px',
              minWidth: 280,
              maxWidth: 540,
            }}>
              <h2 className="section-title" style={{fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 800, color: 'var(--teal-dark)', marginBottom: 18}}>Medical Billing</h2>
              <p style={{fontSize: 'clamp(0.95rem, 3vw, 1.08rem)', color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: 0}}>
                MedHealer360 is your trusted partner for medical billing consulting. Our expert consultants work closely with healthcare providers to improve billing performance, reduce claim denials, and accelerate payments. We take the time to understand your practice, identify areas for improvement, and provide practical solutions that enhance your billing process, technology, and team efficiency. With our support, your practice can boost revenue, streamline operations, and achieve long-term success in medical billing.
              </p>
            </div>
            <div style={{
              flex: '1 1 340px',
              minWidth: 280,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <img
                src={doctorImage}
                alt="Doctor"
                style={{
                  width: '100%',
                  maxWidth: 380,
                  height: 'auto',
                  borderRadius: 0,
                  boxShadow: 'none',
                  background: 'transparent',
                  border: 'none',
                  objectFit: 'cover',
                }}
              />
            </div>
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
                background: 'linear-gradient(135deg, #0f766e, #14b8a6)',
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                overflow: 'hidden',
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #0f766e, #14b8a6)',
                  padding: '24px 20px',
                  textAlign: 'left',
                  borderBottom: '1px solid rgba(255,255,255,0.15)',
                }}>
                  <h3 style={{
                    color: 'white',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    margin: 0,
                    fontFamily: "'Syne', sans-serif",
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
                          to={`/${service.toLowerCase().replace(/ /g, '-').replace(/&/g, '')}`}
                          style={{
                            display: 'block',
                            padding: '12px 20px',
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            fontWeight: 500,
                            transition: 'all 0.2s ease',
                            background: service === 'Medical Billing & Coding' ? 'rgba(255,255,255,0.12)' : 'transparent',
                            borderLeft: service === 'Medical Billing & Coding' ? '3px solid #ffd700' : '3px solid transparent',
                            textAlign: 'left',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                            e.currentTarget.style.paddingLeft = '24px';
                          }}
                          onMouseLeave={(e) => {
                            if (service !== 'Medical Billing & Coding') {
                              e.currentTarget.style.background = 'transparent';
                            } else {
                              e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                            }
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
                    fontFamily: "'Syne', sans-serif",
                  }}>Do you need any help?</h4>
                </div>
                <div style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: '8px',
                  fontFamily: "'DM Sans', sans-serif",
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
                <div className="section-tag" style={{color: 'var(--teal-dark)', fontSize: 'clamp(1.25rem, 3vw, 1.65rem)', fontWeight: 800, letterSpacing: '0.4px', marginBottom: 16, display: 'inline-block'}}>How We Handle Your Billing, Step by Step</div>
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
                <div className="section-tag" style={{color: 'var(--teal-dark)', fontSize: 'clamp(1.25rem, 3vw, 1.65rem)', fontWeight: 800, letterSpacing: '0.4px', marginBottom: 16, display: 'inline-block'}}>How We Handle Your Billing, Step by Step</div>
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
                    fontFamily: "'Syne', sans-serif",
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
                          to={`/${service.toLowerCase().replace(/ /g, '-').replace(/&/g, '')}`}
                          style={{
                            display: 'block',
                            padding: '12px 16px',
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            fontWeight: 500,
                            transition: 'all 0.2s ease',
                            background: service === 'Medical Billing & Coding' ? 'rgba(255,255,255,0.12)' : 'transparent',
                            borderLeft: service === 'Medical Billing & Coding' ? '3px solid #ffd700' : '3px solid transparent',
                            textAlign: 'left',
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
                    fontFamily: "'Syne', sans-serif",
                  }}>Do you need any help?</h4>
                </div>
                <div style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: '6px',
                  fontFamily: "'DM Sans', sans-serif",
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