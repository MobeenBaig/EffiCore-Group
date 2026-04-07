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

  .faq-container {
    max-width: 900px;
    margin: 0 auto;
  }

  .faq-category {
    margin-bottom: 56px;
  }

  .faq-category-title {
    font-family: 'Nunito', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 32px;
    padding-bottom: 16px;
    border-bottom: 3px solid var(--teal-light);
  }

  .faq-item {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 28px;
    margin-bottom: 20px;
    transition: all 0.3s ease;
    box-shadow: var(--shadow);
  }

  .faq-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 48px rgba(45,59,78,0.16);
    border-color: var(--teal-light);
  }

  .faq-question {
    font-family: 'Nunito', sans-serif;
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 12px;
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }

  .faq-question::before {
    content: 'Q';
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background: linear-gradient(135deg, var(--teal-dark), var(--teal-light));
    color: var(--white);
    border-radius: 50%;
    font-weight: 700;
    font-size: 0.9rem;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .faq-answer {
    font-size: 0.95rem;
    line-height: 1.8;
    color: var(--text-mid);
    margin-left: 40px;
  }

  .faq-answer ul {
    margin: 12px 0 12px 24px;
    list-style: disc;
  }

  .faq-answer li {
    margin-bottom: 8px;
    line-height: 1.7;
  }

  .faq-answer strong {
    color: var(--primary);
    font-weight: 700;
  }

  @media (max-width: 768px) {
    section {
      padding: 80px 5%;
    }

    .faq-category-title {
      font-size: 1.2rem;
      margin-bottom: 24px;
    }

    .faq-item {
      padding: 20px;
      margin-bottom: 16px;
    }

    .faq-question {
      font-size: 0.95rem;
    }

    .faq-answer {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    section {
      padding: 60px 5%;
    }

    .faq-category {
      margin-bottom: 40px;
    }

    .faq-item {
      padding: 16px;
      margin-bottom: 12px;
    }

    .faq-question {
      font-size: 0.9rem;
      gap: 8px;
    }

    .faq-question::before {
      width: 24px;
      height: 24px;
      font-size: 0.8rem;
    }

    .faq-answer {
      margin-left: 32px;
      font-size: 0.85rem;
    }
  }
`;

export default function FAQ() {
  const faqData = [
    {
      category: 'General Questions',
      questions: [
        {
          q: 'What is medical billing and revenue cycle management (RCM)?',
          a: 'Medical billing is the process of submitting and following up on claims with insurance companies to receive payment for healthcare services rendered. It includes patient registration, coding, claims submission, tracking, payment posting, and denial management.'
        },
        {
          q: 'Why should a healthcare practice outsource medical billing?',
          a: 'Outsourcing improves cash flow, reduces overhead, decreases denied claims, and allows providers to focus more on patient care rather than back-office billing tasks.'
        },
        {
          q: 'Can medical billing integrate with our current EHR/software system?',
          a: 'Yes — most billing companies work with a wide range of Electronic Health Record (EHR) and practice management systems so your team doesn\'t have to change platforms.'
        }
      ]
    },
    {
      category: 'Service & Process',
      questions: [
        {
          q: 'What services are included in full medical billing outsourcing?',
          a: 'Services typically include: Insurance verification, Charge entry and coding support, Claims submission, Payment posting, Denial management and appeals, and Patient billing and follow-up. This ensures a complete revenue cycle solution.'
        },
        {
          q: 'How does denial management work?',
          a: 'Denials are analyzed to determine causes (coding errors, missing authorizations, etc.), then corrected and resubmitted. Patterns are tracked to prevent repeated denials.'
        },
        {
          q: 'How fast are claims usually submitted?',
          a: 'Once documentation is complete, claims are typically submitted the same or next business day to maximize timely reimbursement.'
        }
      ]
    },
    {
      category: 'Pricing & Cost',
      questions: [
        {
          q: 'How are medical billing services priced?',
          a: 'Most companies charge as a percentage of collected revenue (often between ~4–10%) or sometimes a flat fee based on practice size and claim volume.'
        },
        {
          q: 'Are there additional fees for add-on services?',
          a: 'Some services like credentialing, advanced reporting, or patient statement management may be priced separately depending on the arrangement.'
        }
      ]
    },
    {
      category: 'Security & Compliance',
      questions: [
        {
          q: 'Is my patient data secure? Are you HIPAA-compliant?',
          a: 'Yes — reputable billing services maintain strict HIPAA compliance, including data encryption, secure access controls, and Business Associate Agreements (BAAs) for all protected health information.'
        },
        {
          q: 'Do you sign a Business Associate Agreement (BAA)?',
          a: 'Yes. A BAA is required and ensures that all sensitive patient data is handled according to legal and industry standards.'
        }
      ]
    },
    {
      category: 'Reports & Communication',
      questions: [
        {
          q: 'What reporting do we receive?',
          a: 'You\'ll get regular reports showing revenue summaries, aging of accounts receivable (AR), claim status, denial trends, and performance metrics.'
        },
        {
          q: 'Will we have a dedicated contact person?',
          a: 'Yes — you will usually have a dedicated account manager or lead who handles communication and escalates any issues that arise.'
        }
      ]
    },
    {
      category: 'Getting Started',
      questions: [
        {
          q: 'What information do you need to start?',
          a: 'Typically needed are your EHR access or system exports, patient demographics, insurance details, provider credentials, fee schedules, and any historical billing data.'
        },
        {
          q: 'How long does onboarding take?',
          a: 'Onboarding and system setup often take a few weeks, after which regular claim submission and reconciliation begin. Visible improvements in billing often appear within 60–90 days.'
        }
      ]
    }
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap" rel="stylesheet"/>
      <style>{styles}</style>
      <Header />

      {/* PAGE HEADING */}
      <section style={{ background: 'var(--primary)', padding: '40px 5%', textAlign: 'center', marginTop: '80px' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--white)', margin: 0 }}>Frequently Asked Questions</h1>
      </section>

      {/* FAQ CONTENT */}
      <section style={{ background: 'var(--cream-soft)' }}>
        <div className="faq-container">
          {faqData.map((section, idx) => (
            <div key={idx} className="faq-category">
              <h2 className="faq-category-title">{section.category}</h2>
              {section.questions.map((item, qIdx) => (
                <div key={qIdx} className="faq-item">
                  <div className="faq-question">{item.q}</div>
                  <div className="faq-answer">{item.a}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
