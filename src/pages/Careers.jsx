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

  .page-header {
    background: var(--primary);
    padding: 60px 5%;
    text-align: left;
    color: var(--white);
    margin-top: 80px;
  }

  .page-header h1 {
    font-family: 'Nunito', sans-serif;
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    margin-bottom: 12px;
    line-height: 1.1;
  }

  .page-header p {
    font-size: 1.2rem;
    font-weight: 600;
    opacity: 0.95;
  }

  .careers-wrapper {
    display: grid;
    grid-template-columns: 1.2fr 1.8fr;
    gap: 60px;
    max-width: 1300px;
    margin: 0 auto;
    align-items: start;
  }

  .careers-info {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .hiring-intro {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 32px;
    box-shadow: var(--shadow);
  }

  .hiring-intro h3 {
    font-family: 'Nunito', sans-serif;
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 16px;
  }

  .hiring-intro p {
    font-size: 0.95rem;
    line-height: 1.8;
    color: var(--text-mid);
    margin-bottom: 12px;
  }

  .hiring-intro a {
    color: var(--teal-dark);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.25s;
  }

  .hiring-intro a:hover {
    color: var(--teal-light);
  }

  .hiring-intro .note {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid var(--border);
    font-size: 0.9rem;
    color: var(--text-mid);
    font-style: italic;
  }

  .jobs-section {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .job-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: all 0.3s ease;
  }

  .job-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: var(--teal-light);
  }

  .job-header {
    background: linear-gradient(135deg, var(--teal-dark), var(--teal-light));
    color: var(--white);
    padding: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  .job-title-section h3 {
    font-family: 'Nunito', sans-serif;
    font-size: 1.35rem;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .job-title-section p {
    font-size: 0.9rem;
    opacity: 0.9;
  }

  .job-details {
    padding: 28px;
  }

  .details-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  .detail-item {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .detail-label {
    font-family: 'Nunito', sans-serif;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--teal-dark);
  }

  .detail-value {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--primary);
    line-height: 1.4;
  }

  .job-actions {
    display: flex;
    gap: 12px;
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid var(--border);
  }

  .btn-apply {
    padding: 12px 28px;
    background: var(--teal-dark);
    color: var(--white);
    border: none;
    border-radius: 10px;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.25s;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .btn-apply:hover {
    background: var(--primary);
    transform: translateY(-2px);
  }

  @media (max-width: 1100px) {
    .careers-wrapper {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .details-grid {
      grid-template-columns: 1fr;
    }

    .page-header {
      padding: 50px 5%;
    }

    .page-header h1 {
      font-size: clamp(2rem, 4vw, 3rem);
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 80px 5%;
    }

    .page-header {
      padding: 40px 5%;
      margin-top: 80px;
    }

    .page-header h1 {
      font-size: 2rem;
    }

    .careers-wrapper {
      gap: 32px;
    }

    .job-header {
      flex-direction: column;
      align-items: flex-start;
      padding: 24px;
    }

    .job-details {
      padding: 20px;
    }

    .details-grid {
      gap: 16px;
    }
  }

  @media (max-width: 480px) {
    section {
      padding: 60px 5%;
    }

    .page-header {
      padding: 30px 5%;
    }

    .page-header h1 {
      font-size: 1.5rem;
      margin-bottom: 8px;
    }

    .page-header p {
      font-size: 1rem;
    }

    .careers-info {
      gap: 24px;
    }

    .hiring-intro {
      padding: 20px;
    }

    .job-header {
      padding: 20px;
    }

    .job-title-section h3 {
      font-size: 1.05rem;
    }

    .job-details {
      padding: 16px;
    }

    .details-grid {
      grid-template-columns: 1fr;
      gap: 12px;
    }

    .detail-label {
      font-size: 0.75rem;
    }

    .detail-value {
      font-size: 0.9rem;
    }
  }
`;

export default function Careers() {
  const jobPostings = [
    {
      title: 'Marketing Specialist',
      level: 'Experienced Professional',
      available: true,
      details: {
        industry: 'Information Technology / Healthcare',
        domain: 'Marketing',
        positions: '1',
        shift: 'Third Shift (Night)',
        type: 'Full Time / Permanent',
        gender: 'Male / Female',
        education: 'Inter (USA Accent Required)',
        experience: 'More than 1 year'
      }
    }
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap" rel="stylesheet"/>
      <style>{styles}</style>
      <Header />

      {/* PAGE HEADER */}
      <div className="page-header">
        <h1>Careers</h1>
        <p>We are hiring!</p>
      </div>

      {/* CAREERS SECTION */}
      <section style={{ background: 'var(--white)' }}>
        <div className="careers-wrapper">
          {/* LEFT SIDE - HIRING INFO */}
          <div className="careers-info">
            <div className="hiring-intro">
              <h3>Join Our Team</h3>
              <p>Are you interested in joining Efficore Group? We're looking for talented professionals to help us deliver exceptional billing and healthcare services.</p>
              <p><strong>Ready to apply?</strong></p>
              <p>Send your resume to: <a href="mailto:hr@efficoregroup.com">hr@efficoregroup.com</a></p>
              <div className="note">
                 Don't forget to mention the job title in the subject line!
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - JOB POSTINGS */}
          <div className="jobs-section">
            {jobPostings.map((job, idx) => (
              <div key={idx} className="job-card">
                <div className="job-header">
                  <div className="job-title-section">
                    <h3>{job.title}</h3>
                    <p>{job.level}</p>
                  </div>
                </div>

                <div className="job-details">
                  <div className="details-grid">
                    <div className="detail-item">
                      <span className="detail-label">Industry</span>
                      <span className="detail-value">{job.details.industry}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Domain</span>
                      <span className="detail-value">{job.details.domain}</span>
                    </div>

                    <div className="detail-item">
                      <span className="detail-label">Total Positions</span>
                      <span className="detail-value">{job.details.positions}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Job Shift</span>
                      <span className="detail-value">{job.details.shift}</span>
                    </div>

                    <div className="detail-item">
                      <span className="detail-label">Job Type</span>
                      <span className="detail-value">{job.details.type}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Gender</span>
                      <span className="detail-value">{job.details.gender}</span>
                    </div>

                    <div className="detail-item">
                      <span className="detail-label">Minimum Education</span>
                      <span className="detail-value">{job.details.education}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Minimum Experience</span>
                      <span className="detail-value">{job.details.experience}</span>
                    </div>
                  </div>

                  <div className="job-actions">
                    <a href="mailto:hr@efficoregroup.com" className="btn-apply">Apply Now</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
