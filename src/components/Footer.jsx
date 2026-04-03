import { useState } from 'react';
import '../styles/footer.css';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState({ status: '', message: '' });

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) {
      setNewsletterStatus({ status: 'error', message: 'Please provide your email address.' });
      return;
    }

    setNewsletterStatus({ status: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail.trim() })
      });
      const data = await response.json();

      if (response.ok) {
        setNewsletterStatus({ status: 'success', message: data.message || 'Subscribed successfully! You will receive updates soon.' });
        setNewsletterEmail('');
      } else {
        setNewsletterStatus({ status: 'error', message: data.message || 'Subscription failed. Please try again.' });
      }
    } catch (error) {
      console.error('Newsletter subscribe error:', error);
      setNewsletterStatus({ status: 'error', message: 'Network error. Please try again later.' });
    }

    setTimeout(() => setNewsletterStatus({ status: '', message: '' }), 6000);
  };

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <a href="#home" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <img src="/src/assets/companylogo.png" alt="Company Logo" />
            </a>
          </div>
          <p className="footer-tagline">Efficiency at the Core — we help organisations build the operational foundations needed to grow, compete and sustain performance at scale.</p>
          <div className="footer-socials">
            <a className="footer-social" href="#">in</a>
            <a className="footer-social" href="#">𝕏</a>
            <a className="footer-social" href="#">f</a>
            <a className="footer-social" href="#">▶</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul className="footer-links">
            <li><a href="#">Process Optimisation</a></li>
            <li><a href="#">Organisational Design</a></li>
            <li><a href="#">Performance Management</a></li>
            <li><a href="#">Digital Transformation</a></li>
            <li><a href="#">Due Diligence</a></li>
            <li><a href="#">Change Management</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul className="footer-links">
            <li><a href="#">About EffiCore</a></li>
            <li><a href="#">Leadership Team</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Insights & Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-col footer-newsletter">
          <h4>Stay Informed</h4>
          <p>Receive our latest insights on operational excellence, strategy and performance direct to your inbox.</p>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder="your@email.com"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          {newsletterStatus.message && (
            <p style={{ marginTop: '8px', color: newsletterStatus.status === 'success' ? '#1A7F37' : '#C53030' }}>
              {newsletterStatus.message}
            </p>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 EffiCore Group. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
