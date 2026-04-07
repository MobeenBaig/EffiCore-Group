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

  .policy-container {
    max-width: 900px;
    margin: 0 auto;
  }

  .policy-section {
    margin-bottom: 48px;
    background: var(--white);
    padding: 32px;
    border-radius: 12px;
    border: 1px solid var(--border);
    box-shadow: var(--shadow);
  }

  .policy-section h2 {
    font-family: 'Nunito', sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 2px solid var(--teal-light);
  }

  .policy-section h3 {
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--teal-dark);
    margin-top: 16px;
    margin-bottom: 12px;
  }

  .policy-section p {
    font-size: 0.95rem;
    line-height: 1.8;
    color: var(--text-mid);
    margin-bottom: 16px;
  }

  .policy-section ul {
    margin-left: 24px;
    margin-bottom: 16px;
  }

  .policy-section li {
    font-size: 0.95rem;
    line-height: 1.8;
    color: var(--text-mid);
    margin-bottom: 10px;
    list-style: disc;
  }

  .policy-section strong {
    color: var(--primary);
    font-weight: 700;
  }

  .contact-info {
    background: linear-gradient(135deg, var(--teal-dark), var(--teal-light));
    color: var(--white);
    padding: 24px;
    border-radius: 10px;
    margin-top: 20px;
  }

  .contact-info p {
    color: var(--white);
    margin-bottom: 8px;
  }

  .contact-info strong {
    color: var(--white);
  }

  @media (max-width: 768px) {
    section {
      padding: 80px 5%;
    }

    .policy-section {
      padding: 24px;
      margin-bottom: 32px;
    }

    .policy-section h2 {
      font-size: 1.3rem;
    }

    .policy-section h3 {
      font-size: 1rem;
    }

    .policy-section p,
    .policy-section li {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    section {
      padding: 60px 5%;
    }

    .policy-section {
      padding: 16px;
      margin-bottom: 24px;
    }

    .policy-section h2 {
      font-size: 1.1rem;
    }

    .policy-section h3 {
      font-size: 0.95rem;
    }
  }
`;

export default function PrivacyPolicy() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap" rel="stylesheet"/>
      <style>{styles}</style>
      <Header />

      {/* PAGE HEADING */}
      <section style={{ background: 'var(--primary)', padding: '40px 5%', textAlign: 'center', marginTop: '80px' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--white)', margin: 0 }}>Privacy Policy</h1>
      </section>

      {/* PRIVACY POLICY CONTENT */}
      <section style={{ background: 'var(--cream-soft)' }}>
        <div className="policy-container">
          {/* Section 1 */}
          <div className="policy-section">
            <h2>1. Introduction</h2>
            <p>
              At Efficore Group, we are committed to protecting the privacy and security of our clients, patients, and website visitors. As a provider of medical billing and coding services, we handle sensitive healthcare and financial information with the highest level of confidentiality and compliance.
            </p>
          </div>

          {/* Section 2 */}
          <div className="policy-section">
            <h2>2. Information We Collect</h2>
            <p>We may collect and process the following types of information:</p>
            
            <h3>a. Personal Information</h3>
            <ul>
              <li>Name, email address, phone number</li>
              <li>Business/practice details</li>
            </ul>

            <h3>b. Healthcare Information (PHI)</h3>
            <ul>
              <li>Patient demographics</li>
              <li>Insurance details</li>
              <li>Medical records required for billing and coding</li>
            </ul>

            <h3>c. Financial Information</h3>
            <ul>
              <li>Payment details</li>
              <li>Billing records</li>
            </ul>

            <h3>d. Technical Information</h3>
            <ul>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Website usage data (via cookies)</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="policy-section">
            <h2>3. How We Use Information</h2>
            <p>We use collected information for:</p>
            <ul>
              <li>Providing medical billing and coding services</li>
              <li>Processing claims and payments</li>
              <li>Communicating with clients and insurance providers</li>
              <li>Improving our services and website</li>
              <li>Ensuring compliance with legal and regulatory requirements</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="policy-section">
            <h2>4. HIPAA Compliance</h2>
            <p>We strictly adhere to the standards set by the Health Insurance Portability and Accountability Act (HIPAA) to ensure the protection of Protected Health Information (PHI).</p>
            <ul>
              <li>All data is handled securely and confidentially</li>
              <li>Access is restricted to authorized personnel only</li>
              <li>We implement administrative, physical, and technical safeguards</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="policy-section">
            <h2>5. Data Sharing & Disclosure</h2>
            <p><strong>We do not sell or rent your information.</strong></p>
            <p>We may share information only with:</p>
            <ul>
              <li>Insurance companies for claim processing</li>
              <li>Healthcare providers (our clients)</li>
              <li>Authorized third-party service providers (under strict confidentiality agreements)</li>
              <li>Legal authorities if required by law</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="policy-section">
            <h2>6. Data Security</h2>
            <p>We implement industry-standard security measures, including:</p>
            <ul>
              <li>Encryption of sensitive data</li>
              <li>Secure servers and firewalls</li>
              <li>Regular system monitoring and audits</li>
            </ul>
            <p><em>Despite our efforts, no method of transmission over the internet is 100% secure.</em></p>
          </div>

          {/* Section 7 */}
          <div className="policy-section">
            <h2>7. Cookies & Tracking Technologies</h2>
            <p>Our website may use cookies to:</p>
            <ul>
              <li>Enhance user experience</li>
              <li>Analyze website traffic</li>
              <li>Improve performance</li>
            </ul>
            <p>You can disable cookies through your browser settings.</p>
          </div>

          {/* Section 8 */}
          <div className="policy-section">
            <h2>8. Data Retention</h2>
            <p>We retain information only as long as necessary to:</p>
            <ul>
              <li>Fulfill service obligations</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
          </div>

          {/* Section 9 */}
          <div className="policy-section">
            <h2>9. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Request corrections</li>
              <li>Request deletion (subject to legal obligations)</li>
            </ul>
          </div>

          {/* Section 10 */}
          <div className="policy-section">
            <h2>10. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices.</p>
          </div>

          {/* Section 11 */}
          <div className="policy-section">
            <h2>11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>
          </div>

          {/* Section 12 */}
          <div className="policy-section">
            <h2>12. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <div className="contact-info">
              <p><strong>Efficore Group</strong></p>
              <p>Email: <strong>Info@efficoregroup.com</strong></p>
              <p>Phone: <strong>+1(512) 920-6338</strong></p>
              <p>Address: <strong>5900 Balcones Dr Ste 14282 Austin Texas, 78731</strong></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
