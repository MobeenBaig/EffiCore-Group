import { Link, useLocation } from 'react-router-dom';
import questionIcon from '../assets/questionicon.png';

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

export default function ServiceSidebar() {
  const location = useLocation();

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .sidebar-wrapper {
            max-width: 420px !important;
            margin: 0 auto !important;
            align-self: center !important;
            position: static !important;
            top: auto !important;
          }
          .sidebar-wrapper > div {
            width: 280px !important;
          }
        }
      `}</style>

      <div className="sidebar-wrapper" style={{
        flex: '0 0 280px',
        position: 'sticky',
        top: '100px',
        alignSelf: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}>
      {/* All Services Card */}
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
            {allServices.map((service) => (
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
        }}>+1(512) 920-6338</div>
        <div style={{
          fontSize: '0.9rem',
          color: 'white',
          fontWeight: 500,
          marginBottom: '16px',
        }}>Info@efficoregroup.com</div>
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
    </>
  );
  
}
