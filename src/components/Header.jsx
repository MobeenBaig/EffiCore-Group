import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoTrimmed from '../assets/companylogo.png';

const servicesList = [
  { label: 'Medical Billing & Coding', href: '/medical-billing' },
  { label: 'Dental Billing & Coding', href: '/dental-billing' },
  { label: 'Credentialing', href: '/credentialing' },
  { label: 'AR Recovery', href: '/ar-recovery' },
  {
    label: 'Practice Development',
    href: '/practice-development',
    submenu: [
      { label: 'HEDIS', href: '/hedis' },
      { label: 'PCMH', href: '/pcmh' },
      { label: 'CCM', href: '/ccm' },
    ],
  },
  { label: 'Patient Scheduling', href: '/patient-scheduling' },
  { label: 'Document Management', href: '/document-management' },
  { label: 'Practice Operations Audit', href: '/practice-operations-audit' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMobileOpen(false);
        setServicesOpen(false);
        setSubmenuOpen(false);
      }
    };
    if (mobileOpen || servicesOpen) {
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      }, 0);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileOpen, servicesOpen]);

  // Dropdown menu for desktop
  const renderServicesDropdown = () => (
    <ul className="dropdown-menu">
      {servicesList.map((item, idx) =>
        item.submenu ? (
          <li
            key={item.label}
            className="has-submenu"
            onMouseEnter={() => setSubmenuOpen(true)}
            onMouseLeave={() => setSubmenuOpen(false)}
          >
            <Link
              to={item.href}
              className="dropdown-link"
              style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}
              onClick={() => setMobileOpen(false)}
            >
              {item.label} <ChevronRight size={14} style={{marginLeft: 4}} />
            </Link>
            {submenuOpen && (
              <ul className="submenu">
                {item.submenu.map((sub, i) => (
                  <li key={sub.label}>
                    {sub.href.startsWith('/') ? (
                      <Link to={sub.href} className="dropdown-link" onClick={() => setMobileOpen(false)}>
                        {sub.label}
                      </Link>
                    ) : (
                      <a href={sub.href}>{sub.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ) : (
          item.href.startsWith('/') ?
            <li key={item.label}>
              <Link
                to={item.href}
                style={{
                  background: location.pathname === item.href ? '#90EE90' : 'transparent',
                  borderLeft: location.pathname === item.href ? '3px solid #ffd700' : '3px solid transparent',
                  padding: '10px 22px 10px 18px',
                  display: 'block',
                  color: '#2D3B4E',
                  textDecoration: 'none'
                }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            </li> :
            <li key={item.label}><a href={item.href}>{item.label}</a></li>
        )
      )}
    </ul>
  );

  return (
    <nav ref={navbarRef} className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="nav-logo" onClick={e => { e.preventDefault(); setMobileOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
        <img src={logoTrimmed} alt="EffiCore Group Logo" />
      </a>
      <ul className={`nav-links ${mobileOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setMobileOpen(false)}>Home</Link></li>
        <li
          className="nav-dropdown"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <a
            href="#services"
            onClick={e => { e.preventDefault(); setServicesOpen(v => !v); }}
            style={{display: 'flex', alignItems: 'center', gap: 4}}
          >
            Services <ChevronDown size={16} />
          </a>
          {servicesOpen && renderServicesDropdown()}
        </li>
        <li><Link to="/about" onClick={() => setMobileOpen(false)}>About</Link></li>
        <li><a href="#process" onClick={() => setMobileOpen(false)}>Process</a></li>
        <li><a href="#industries" onClick={() => setMobileOpen(false)}>Industries</a></li>
        <li><a href="#team" onClick={() => setMobileOpen(false)}>Team</a></li>
        <li><a href="#contact" className="nav-cta" onClick={() => setMobileOpen(false)}>Get Started</a></li>
      </ul>
      <button
        className="hamburger"
        aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={e => {
          e.stopPropagation();
          setMobileOpen(prev => !prev);
        }}
      >
        {mobileOpen ? <X size={24} color="#1A5C5C" /> : <Menu size={24} color="#1A5C5C" />}
      </button>
      <style>{`
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: #fff;
          border: 1px solid #e2ddd5;
          border-radius: 8px;
          box-shadow: 0 4px 24px rgba(45,59,78,0.10);
          min-width: 220px;
          z-index: 1002;
          padding: 10px 0;
        }
        .dropdown-menu li {
          position: relative;
        }
        .dropdown-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 22px 10px 18px;
          color: #2D3B4E;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
        }
        .dropdown-menu a {
          display: block;
          padding: 10px 22px 10px 18px;
          color: #2D3B4E;
          text-decoration: none;
          font-weight: 500;
          white-space: nowrap;
        }
        .dropdown-menu a:hover, .dropdown-link:hover {
          background: #f4eee4;
          color: #1A5C5C;
        }
        .has-submenu:hover > .submenu {
          display: block;
        }
        .submenu {
          display: none;
          position: absolute;
          top: 0;
          left: 100%;
          background: #fff;
          border: 1px solid #e2ddd5;
          border-radius: 8px;
          box-shadow: 0 4px 24px rgba(45,59,78,0.10);
          min-width: 220px;
          z-index: 1003;
        }
        .submenu li a {
          padding: 10px 22px 10px 18px;
        }
        .submenu li a:hover {
          background: #e6f7f5;
          color: #2A7A72;
        }
        .nav-dropdown {
          position: relative;
        }
        
        /* MOBILE RESPONSIVE MENUS */
        @media (max-width: 768px) {
          .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            margin-top: 8px;
            right: auto;
            width: auto;
            min-width: 200px;
            max-width: 250px;
          }
          
          .submenu {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            margin-top: 4px;
            right: auto;
            width: auto;
            min-width: 180px;
            max-width: 200px;
          }
          
          .has-submenu {
            position: static;
          }
          
          .has-submenu:hover > .submenu {
            display: block;
          }
          
          .dropdown-link {
            padding: 10px 16px 10px 14px;
            font-size: 0.9rem;
          }
          
          .dropdown-menu a,
          .submenu li a {
            padding: 10px 16px 10px 14px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </nav>
  );
}
