import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const styles = `
  :root {
    --primary:   #2D3B4E;
    --teal-dark: #1A5C5C;
    --teal-mid:  #2A7A72;
    --teal-light:#4ECDC4;
    --cream:     #F4EEE4;
    --cream-soft:#FAF7F2;
    --white:     #FFFFFF;
    --text-dark: #1C2B3A;
    --text-mid:  #4A5568;
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

  section { 
    padding: 100px 5%; 
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  .contact-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    max-width: 1200px;
    margin: 0 auto;
    align-items: start;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .contact-heading {
    margin-bottom: 20px;
  }

  .contact-heading h2 {
    font-family: 'Nunito', sans-serif;
    font-size: clamp(2rem, 3.5vw, 2.8rem);
    font-weight: 700;
    color: var(--primary);
    line-height: 1.2;
    margin-bottom: 12px;
  }

  .contact-heading p {
    font-size: 1rem;
    color: var(--text-mid);
    line-height: 1.6;
  }

  .info-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 28px;
    display: flex;
    gap: 20px;
    align-items: flex-start;
    transition: all 0.3s ease;
    box-shadow: var(--shadow);
  }

  .info-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: var(--teal-light);
  }

  .info-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--teal-dark), var(--teal-light));
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    flex-shrink: 0;
  }

  .info-content h3 {
    font-family: 'Nunito', sans-serif;
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 8px;
  }

  .info-content p {
    font-size: 0.9rem;
    color: var(--text-mid);
    line-height: 1.6;
    margin: 0;
  }

  .info-content a {
    color: var(--teal-dark);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.25s;
  }

  .info-content a:hover {
    color: var(--teal-light);
  }

  .contact-form-wrapper {
    background: linear-gradient(135deg, var(--teal-dark), var(--teal-light));
    border-radius: 20px;
    padding: 48px;
    box-shadow: var(--shadow-lg);
  }

  .form-title {
    font-family: 'Nunito', sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 8px;
  }

  .form-subtitle {
    font-size: 0.95rem;
    color: rgba(255,255,255,0.85);
    margin-bottom: 32px;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 16px;
  }

  .form-row.full {
    grid-template-columns: 1fr;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  .form-group label {
    font-size: 0.85rem;
    font-weight: 600;
    color: rgba(255,255,255,0.9);
    margin-bottom: 8px;
    letter-spacing: 0.02em;
  }

  .form-group input,
  .form-group textarea {
    padding: 14px 16px;
    border: none;
    border-radius: 10px;
    font-family: 'Nunito', sans-serif;
    font-size: 0.9rem;
    background: rgba(255,255,255,0.95);
    color: var(--text-dark);
    transition: all 0.25s;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    background: var(--white);
    box-shadow: 0 0 0 3px rgba(78,205,196,0.2);
  }

  .form-group textarea {
    resize: vertical;
    min-height: 120px;
    grid-column: 1 / -1;
  }

  .form-actions {
    display: flex;
    gap: 12px;
    margin-top: 32px;
    grid-column: 1 / -1;
  }

  .btn-submit {
    background: var(--white);
    color: var(--teal-dark);
    padding: 14px 36px;
    border: none;
    border-radius: 10px;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: 0.9rem;
    letter-spacing: 0.04em;
    cursor: pointer;
    transition: all 0.25s;
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  }

  .btn-submit:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  }

  .btn-submit:active {
    transform: translateY(0);
  }

  .form-message {
    padding: 14px 16px;
    border-radius: 10px;
    font-size: 0.9rem;
    margin-top: 16px;
    text-align: center;
    font-weight: 600;
  }

  .form-message.success {
    background: rgba(26,127,55,0.2);
    color: #1A7F37;
    border: 1px solid #1A7F37;
  }

  .form-message.error {
    background: rgba(197,48,48,0.2);
    color: #C53030;
    border: 1px solid #C53030;
  }

  @media (max-width: 1100px) {
    .contact-wrapper {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .contact-form-wrapper {
      padding: 40px;
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 80px 5%;
    }

    .contact-wrapper {
      gap: 32px;
    }

    .contact-heading h2 {
      font-size: 1.8rem;
    }

    .info-card {
      padding: 20px;
      gap: 16px;
    }

    .info-icon {
      width: 50px;
      height: 50px;
      font-size: 1.5rem;
    }

    .contact-form-wrapper {
      padding: 32px;
    }

    .form-title {
      font-size: 1.5rem;
    }

    .form-row {
      grid-template-columns: 1fr;
      gap: 14px;
    }
  }

  @media (max-width: 480px) {
    section {
      padding: 60px 5%;
    }

    .contact-heading h2 {
      font-size: 1.4rem;
    }

    .info-card {
      padding: 16px;
    }

    .contact-form-wrapper {
      padding: 24px;
      border-radius: 16px;
    }

    .form-title {
      font-size: 1.2rem;
    }

    .form-subtitle {
      font-size: 0.85rem;
      margin-bottom: 24px;
    }

    .form-group input,
    .form-group textarea {
      padding: 12px 14px;
      font-size: 0.85rem;
    }

    .btn-submit {
      padding: 12px 28px;
      font-size: 0.85rem;
    }
  }
`;

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    try {
      const apiUrl = import.meta.env.DEV ? 'http://localhost:5000/api/contact' : '/api/contact';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Thank you! We\'ll get back to you soon.' });
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus({ type: 'error', message: 'Network error. Please try again later.' });
    }

    setTimeout(() => setStatus({ type: '', message: '' }), 6000);
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap" rel="stylesheet"/>
      <style>{styles}</style>
      <Header />

      {/* PAGE HEADING */}
      <section style={{ background: 'var(--primary)', padding: '40px 5%', textAlign: 'center', marginTop: '80px' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--white)', margin: 0 }}>Contact Us</h1>
      </section>

      {/* CONTACT SECTION */}
      <section style={{ background: 'var(--white)' }}>
        <div className="contact-wrapper">
          {/* LEFT SIDE - INFO CARDS */}
          <div className="contact-info">
            <div className="contact-heading">
              <h2>Get In Touch</h2>
              <p>Have questions? Reach out and let us know how we can help your practice succeed.</p>
            </div>

            <div className="info-card">
              <div className="info-icon"><MapPin size={32} color="white" strokeWidth={1.5} /></div>
              <div className="info-content">
                <h3>Address</h3>
                <p>5900 Balcones Dr Ste 14282<br />Austin Texas, 78731</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon"><Phone size={32} color="white" strokeWidth={1.5} /></div>
              <div className="info-content">
                <h3>Call Us</h3>
                <p><a href="tel:+15129206338">+1(512) 920-6338</a></p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon"><Mail size={32} color="white" strokeWidth={1.5} /></div>
              <div className="info-content">
                <h3>Send us a Mail</h3>
                <p><a href="mailto:info@efficoregroup.com">Info@efficoregroup.com</a></p>
              </div>
            </div>

            {/* <div className="info-card">
              <div className="info-icon"><Clock size={32} color="white" strokeWidth={1.5} /></div>
              <div className="info-content">
                <h3>Opening Time</h3>
                <p>Mon-Fri: 8:00am–5:00pm<br />Sat-Sun: Closed</p>
              </div>
            </div> */}
          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <div className="contact-form-wrapper">
            <h2 className="form-title">Get In Touch</h2>
            <p className="form-subtitle">You can reach us anytime</p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Your first name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (512) 000-0000"
                  />
                </div>
              </div>

              <div className="form-row full">
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your needs..."
                  />
                </div>
              </div>

              <div className="form-row full">
                <div className="form-actions">
                  <button type="submit" className="btn-submit">Send Message</button>
                </div>
              </div>

              {status.message && (
                <div className={`form-message ${status.type}`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
