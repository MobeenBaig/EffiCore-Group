import { useEffect } from 'react';
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

  .section-title {
    font-family: 'Nunito', sans-serif;
    font-size: clamp(2rem, 3.5vw, 2.8rem);
    font-weight: 700; color: var(--primary);
    line-height: 1.2; margin-bottom: 20px;
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .team-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 40px 32px;
    text-align: center;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow);
  }

  .team-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
    border-color: var(--teal-light);
  }

  .team-avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--teal-dark), var(--teal-light));
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .team-name {
    font-family: 'Nunito', sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    color: #1C2B3A;
    margin-bottom: 8px;
  }

  .team-title {
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: #2D3B4E;
    margin-bottom: 12px;
  }

  .team-position {
    font-size: 0.9rem;
    color: var(--text-mid);
    line-height: 1.6;
  }

  .reveal {
    opacity: 0;
    transform: translateY(32px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 1100px) {
    .team-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 80px 5%;
    }

    .team-grid {
      grid-template-columns: 1fr;
      gap: 24px;
    }

    .team-card {
      padding: 32px 24px;
    }

    .team-avatar {
      width: 100px;
      height: 100px;
      font-size: 2.5rem;
    }

    .team-name {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    section {
      padding: 60px 5%;
    }

    .team-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .team-card {
      padding: 24px 16px;
    }

    .team-avatar {
      width: 80px;
      height: 80px;
      font-size: 2rem;
      margin-bottom: 16px;
    }

    .team-name {
      font-size: 1rem;
    }

    .team-title {
      font-size: 0.85rem;
    }
  }
`;

export default function LeadershipTeam() {
  const teamMembers = [
    {
      name: 'Jason Cain',
      title: 'Founder / Director - CFO',
      initials: 'JC'
    },
    {
      name: 'Mark Williams',
      title: 'Co-founder / Operations Manager',
      initials: 'MW'
    },
    {
      name: 'Tedd Fox',
      title: 'Co-Founder / CEO',
      initials: 'TF'
    }
  ];

  // Scroll reveal animation effect
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const checkReveal = () => {
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (elementTop < windowHeight - revealPoint) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Initial check for elements already in view
    
    return () => window.removeEventListener('scroll', checkReveal);
  }, []);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap" rel="stylesheet"/>
      <style>{styles}</style>
      <Header />

      {/* PAGE HEADING */}
      <section style={{ background: 'var(--primary)', padding: '40px 5%', textAlign: 'center', marginTop: '80px' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--white)', margin: 0 }}>Leadership Team</h1>
      </section>

      {/* LEADERSHIP SECTION */}
      <section style={{ background: 'var(--white)' }}>
        <div className="reveal">
          <h2 className="section-title">Meet Our Leadership</h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-mid)', textAlign: 'center', marginBottom: 60, maxWidth: 600, margin: '0 auto 60px' }}>
            Experienced professionals driving excellence in healthcare revenue cycle management
          </p>
        </div>

        <div className="team-grid reveal">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-avatar">{member.initials}</div>
              <div className="team-name">{member.name}</div>
              <div className="team-title">{member.title}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}