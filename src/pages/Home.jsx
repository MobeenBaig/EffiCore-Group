import { useEffect, useState } from "react";
import Header from "../components/Header";
import heroDoctor from "../assets/hero1-crop20.jpg";
import hero2Image from "../assets/hero2.jpg";
import hero3Image from "../assets/hero3.jpg";
import hero4Image from "../assets/hero4.jpg";
import hero5Image from "../assets/hero5.jpg";
import hero6Image from "../assets/hero6.jpg";

const waterFlowStyle = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .animate-fade-in-down {
    animation: fadeInDown 0.8s ease-out forwards;
  }

  .animate-fade-in-left {
    animation: fadeInLeft 0.8s ease-out forwards;
  }

  .animate-fade-in-right {
    animation: fadeInRight 0.8s ease-out forwards;
  }

  .animate-scale-in {
    animation: scaleIn 0.6s ease-out forwards;
  }

  .animate-slide-in-up {
    animation: slideInUp 0.8s ease-out forwards;
  }

  .stagger-1 { animation-delay: 0.1s; }
  .stagger-2 { animation-delay: 0.2s; }
  .stagger-3 { animation-delay: 0.3s; }
  .stagger-4 { animation-delay: 0.4s; }
  .stagger-5 { animation-delay: 0.5s; }

  .card-hover {
    transition: all 0.3s ease;
  }

  .card-hover:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  .text-hover {
    transition: all 0.3s ease;
  }

  .text-hover:hover {
    text-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
    transform: scale(1.05);
  }

  /* Scroll Trigger Animations */
  [data-animate] {
    opacity: 0;
    transform: translateY(30px);
  }

  [data-animate="fade-up"].animate-in {
    animation: fadeInUp 0.8s ease-out forwards;
  }

  [data-animate="fade-down"].animate-in {
    animation: fadeInDown 0.8s ease-out forwards;
  }

  [data-animate="fade-left"].animate-in {
    animation: fadeInLeft 0.8s ease-out forwards;
  }

  [data-animate="fade-right"].animate-in {
    animation: fadeInRight 0.8s ease-out forwards;
  }

  [data-animate="scale"].animate-in {
    animation: scaleIn 0.6s ease-out forwards;
  }

  [data-animate="slide-up"].animate-in {
    animation: slideInUp 0.8s ease-out forwards;
  }

  /* Staggered delays for scroll animations */
  [data-animate][data-delay="1"].animate-in {
    animation-delay: 0.1s;
  }

  [data-animate][data-delay="2"].animate-in {
    animation-delay: 0.2s;
  }

  [data-animate][data-delay="3"].animate-in {
    animation-delay: 0.3s;
  }

  [data-animate][data-delay="4"].animate-in {
    animation-delay: 0.4s;
  }

  [data-animate][data-delay="5"].animate-in {
    animation-delay: 0.5s;
  }

  .water-flow-button {
    position: relative;
    overflow: hidden;
    display: inline-block;
  }
  
  .water-flow-button::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: rgba(255, 255, 255, 0.4);
    pointer-events: none;
    transition: width 0.6s ease-out;
    z-index: 1;
  }
  
  .water-flow-button:hover::after {
    width: 100%;
  }
  
  .water-flow-button span {
    position: relative;
    z-index: 2;
    display: inline-block;
  }

  /* Minimum Font Size: 20px (1.25rem), Maximum 18px on small screens */
  h1, h2, h3, h4, h5, h6 { font-size: clamp(1.25rem, 3vw, 1.125rem); }
  p { font-size: clamp(1.25rem, 2vw, 1.125rem); }
  span, a, button, label, input, textarea { font-size: clamp(1.25rem, 1.5vw, 1.125rem); }
  .text-sm { font-size: 1.25rem !important; }
  .text-base { font-size: clamp(1.25rem, 1.5vw, 1.125rem) !important; }
  .text-lg { font-size: clamp(1.25rem, 2vw, 1.125rem) !important; }
  .text-xl { font-size: clamp(1.25rem, 2.2vw, 1.125rem) !important; }
  .text-2xl { font-size: clamp(1.25rem, 2.5vw, 1.125rem) !important; }
  .text-3xl { font-size: clamp(1.25rem, 3vw, 1.125rem) !important; }
  .text-4xl { font-size: clamp(1.25rem, 3.5vw, 1.125rem) !important; }
  .text-5xl { font-size: clamp(1.25rem, 4vw, 1.125rem) !important; }
  .text-6xl { font-size: clamp(1.25rem, 5vw, 1.125rem) !important; }

  /* Flexible Text Sizing for Large Screens (2560px+, 3000px+, 4000px+) */
  
  /* Extra Large Screens - 2560px and above */
  @media (min-width: 2560px) {
    h1 { font-size: clamp(2.5rem, 5vw, 5rem); }
    h2 { font-size: clamp(2rem, 4vw, 4rem); }
    h3 { font-size: clamp(1.5rem, 3vw, 3.5rem); }
    p { font-size: clamp(1.25rem, 1.5vw, 1.5rem); }
    button, a { font-size: clamp(1.25rem, 1.2vw, 1.25rem); }
    .text-4xl { font-size: clamp(2rem, 4vw, 4rem); }
    .text-5xl { font-size: clamp(2.5rem, 5vw, 5rem); }
    .text-6xl { font-size: clamp(3rem, 6vw, 6rem); }
    .text-3xl { font-size: clamp(1.875rem, 3.5vw, 3.5rem); }
    .text-2xl { font-size: clamp(1.5rem, 2.5vw, 2.5rem); }
    .text-xl { font-size: clamp(1.25rem, 2vw, 2rem); }
    .text-lg { font-size: clamp(1.25rem, 1.8vw, 1.8rem); }
    .text-base { font-size: clamp(1.25rem, 1.5vw, 1.5rem); }
    .text-sm { font-size: clamp(1.25rem, 1.2vw, 1.25rem); }
  }

  /* Ultra Large Screens - 3000px and above */
  @media (min-width: 3000px) {
    h1 { font-size: clamp(3rem, 5.5vw, 6rem); }
    h2 { font-size: clamp(2.25rem, 4.5vw, 5rem); }
    h3 { font-size: clamp(1.75rem, 3.5vw, 4rem); }
    p { font-size: clamp(1.25rem, 1.8vw, 1.75rem); }
    button, a { font-size: clamp(1.25rem, 1.3vw, 1.4rem); }
    .text-5xl { font-size: clamp(3rem, 5.5vw, 6rem); }
    .text-6xl { font-size: clamp(3.5rem, 6.5vw, 7rem); }
    .text-4xl { font-size: clamp(2.25rem, 4.5vw, 5rem); }
    .text-3xl { font-size: clamp(2rem, 3.8vw, 4rem); }
    .text-2xl { font-size: clamp(1.75rem, 2.8vw, 3rem); }
    .text-xl { font-size: clamp(1.25rem, 2.2vw, 2.2rem); }
    .text-lg { font-size: clamp(1.25rem, 2vw, 2rem); }
    .text-base { font-size: clamp(1.25rem, 1.5vw, 1.5rem); }
    .text-sm { font-size: clamp(1.25rem, 1.2vw, 1.25rem); }
  }

  /* Massive Screens - 4000px and above */
  @media (min-width: 4000px) {
    h1 { font-size: clamp(3.5rem, 6vw, 7rem); }
    h2 { font-size: clamp(2.5rem, 5vw, 6rem); }
    h3 { font-size: clamp(2rem, 4vw, 5rem); }
    p { font-size: clamp(1.25rem, 2vw, 2rem); }
    .text-6xl { font-size: clamp(4rem, 7vw, 8rem); }
    .text-5xl { font-size: clamp(3.5rem, 6vw, 7rem); }
    .text-4xl { font-size: clamp(2.75rem, 5vw, 6rem); }
    .text-3xl { font-size: clamp(2.25rem, 4vw, 5rem); }
    .text-2xl { font-size: clamp(1.75rem, 2.8vw, 3rem); }
    .text-xl { font-size: clamp(1.25rem, 2.2vw, 2.2rem); }
    .text-lg { font-size: clamp(1.25rem, 2vw, 2rem); }
    .text-base { font-size: clamp(1.25rem, 1.5vw, 1.5rem); }
    .text-sm { font-size: clamp(1.25rem, 1.2vw, 1.25rem); }
  }

  /* Responsive Spacing for Large Screens */
  @media (min-width: 2560px) {
    .max-w-7xl { max-width: clamp(100%, 90vw, 1600px); }
  }
`;

export default function Home() {
  const impactImages = [hero4Image, hero5Image, hero6Image];
  const impactQuotes = [
    "They handled everything professionally and saved me so much time. Highly recommended!",
    "The service was smooth and efficient. I finally feel confident about my healthcare support.",
    "Their billing support reduced my stress and improved my experience. Truly reliable service.",
  ];
  const [impactIndex, setImpactIndex] = useState(0);
  const [impactAnimating, setImpactAnimating] = useState(false);
  const [impactDirection, setImpactDirection] = useState("next");
  const [expandedFAQ, setExpandedFAQ] = useState(0);

  const faqItems = [
    {
      question: "What is a Medical Billing Company and How Can It Help My Practice?",
      answer: "A medical billing company manages the complete process of submitting and following up on insurance claims, ensuring your practice gets paid efficiently and accurately. These services handle everything from coding and claim submission to follow-ups and payment posting. By partnering with a medical billing company, healthcare providers can reduce administrative costs, minimize claim denials, and improve overall cash flow. Most importantly, it allows you and your team to focus on delivering quality patient care—while experts handle the complexities of billing and insurance."
    },
    {
      question: "What is a Medical Billing Service?",
      answer: "A medical billing service handles the entire financial process that follows a patient visit. This includes verifying insurance coverage, accurately coding procedures, submitting claims, managing denials and appeals, and ensuring timely payment. Their goal is to help healthcare providers receive full, compliant reimbursement—quickly and efficiently."
    },
    {
      question: "What Services Does Your Medical Billing Company Offer?",
      answer: "We provide a comprehensive suite of medical billing services designed to support every stage of the revenue cycle. Our services include provider enrollment and credentialing, insurance eligibility and benefits verification, accurate charge entry and coding, timely claim submission, payment posting and reconciliation, accounts receivable (A/R) management, denial management and resolution, appeals processing, patient billing and support, reimbursement tracking, and collections and follow-up. Our goal is to streamline your practice's financial operations while maximizing revenue and minimizing administrative burden."
    },
    {
      question: "How Do You Manage Medical Claims Reimbursement and Denials?",
      answer: "Accurate claim submission is just the beginning. We take ownership of each claim, tracking its status closely and communicating directly with payers to resolve any issues swiftly. Denied or underpaid claims are rigorously investigated and appealed when appropriate. With years of experience and a deep understanding of payer requirements, our team ensures your practice receives full, timely reimbursement—without the stress."
    },
    {
      question: "Can I Track the Performance of Your Billing Services?",
      answer: "Absolutely. At MedHealer360, transparency and performance tracking are key pillars of our service. We provide detailed reports covering daily invoicing, claim status, reimbursements, and key revenue cycle indicators. Our insights help you monitor billing performance and make informed decisions for ongoing improvement."
    },
    {
      question: "Do You Offer Independent and Advanced Billing for Medicaid and Medicare?",
      answer: "Yes. We specialize in providing advanced, independent billing services for Medicare and Medicaid patients. Our team stays up to date with state-specific regulations, codes, and forms to ensure accurate, compliant submissions. Every claim is monitored until payment is received. In the event of a denial, we handle the appeals process to secure the reimbursement your practice deserves."
    }
  ];

  const changeImpactSlide = (direction) => {
    if (impactAnimating) return;

    setImpactDirection(direction);
    setImpactAnimating(true);

    setTimeout(() => {
      setImpactIndex((prev) =>
        direction === "next"
          ? (prev + 1) % impactImages.length
          : (prev - 1 + impactImages.length) % impactImages.length
      );
      setImpactAnimating(false);
    }, 220);
  };

  const showPrevImpact = () => {
    changeImpactSlide("prev");
  };

  const showNextImpact = () => {
    changeImpactSlide("next");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!impactAnimating) {
        changeImpactSlide("next");
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [impactAnimating]);

  // Scroll Animation Hook - Trigger animations when elements come into view
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation class when element comes into view
          entry.target.classList.add("animate-in");
          // Optionally unobserve after animation
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with data-animate attribute
    const animatedElements = document.querySelectorAll("[data-animate]");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{waterFlowStyle}</style>
      <Header />
{/* bg-gradient-to-b from-teal-950 via-teal-900 to-cyan-900 */}
      <section className="w-full bg-gradient-to-b from-green-950 via-teal-950 to-green-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white animate-fade-in-left">
              Medical &
              <br />
              Billing Services
            </h1>

            <p className="mt-6 text-base md:text-lg text-white max-w-xl leading-relaxed animate-fade-in-up stagger-1">
              MedHealer360 is a leading U.S. medical billing company, specializing in expert billing and coding services for healthcare providers. Our certified professionals help recover aged receivables and resolve insurance claim denials efficiently.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="water-flow-button inline-flex items-center justify-center rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white no-underline animate-fade-in-up stagger-2"
              >
                <span>REQUEST DEMO!</span>
              </a>
             
            </div>

            <div className="mt-6 inline-flex flex-col rounded-xl border border-cyan-200/70 bg-cyan-50/70 px-5 py-3 animate-pulse">
              <span className="text-sm font-semibold text-slate-800">Have a Question?</span>
              <a href="mailto:mark@medhealer360.org" className="mt-1 text-sm text-cyan-700 no-underline hover:text-cyan-800">
                mark@medhealer360.org
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[440px] md:max-w-[520px]">
              <div className="absolute -top-6 -right-4 h-32 w-32 rounded-full bg-cyan-200/50 blur-3xl" />
              <div className="absolute -bottom-4 -left-4 h-36 w-36 rounded-full bg-blue-200/50 blur-3xl" />

              <div className="relative rounded-[30px] bg-[#eef3f7] p-4 md:p-6 shadow-[0_20px_50px_rgba(15,23,42,0.16)]">
                <img
                  src={heroDoctor}
                  alt="Doctor"
                  className="w-full h-[560px] md:h-[660px] rounded-[22px] object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <section className="w-full pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Dr. Natali jackson</h3>
              <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed">
                "It is a well-known fact that inaccuracies in medical billing can distract providers from focusing on patient care."
              </p>
            </div>

            <div className="shrink-0">
             
            </div>
          </div>
        </div>
      </section>
        

       <section className="w-full py-4 md:py-7 bg-gradient-to-b from-teal-950 via-teal-900 to-cyan-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-3 md:mb-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Trusted by Healthcare Leaders</h2>
            <p className="mt-3 text-teal-200/70 text-base md:text-lg max-w-2xl mx-auto">Our proven track record speaks to the quality and reliability of our services</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 p-8 md:p-10 border border-orange-500/20 transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]">
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-orange-500/20 mb-4">
                  <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm6-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                  </svg>
                </div>
                <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">1500+</h3>
                <p className="mt-3 text-slate-300 font-medium text-sm md:text-base">Happy Clients and Growing</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 md:p-10 border border-cyan-500/20 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
              <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-cyan-500/20 mb-4">
                  <svg className="w-7 h-7 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                  </svg>
                </div>
                <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">200+</h3>
                <p className="mt-3 text-slate-300 font-medium text-sm md:text-base">Specialists</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-8 md:p-10 border border-emerald-500/20 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-500/20 mb-4">
                  <svg className="w-7 h-7 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                </div>
                <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">45K</h3>
                <p className="mt-3 text-slate-300 font-medium text-sm md:text-base">Happy Patients</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 p-8 md:p-10 border border-violet-500/20 transition-all duration-300 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
              <div className="absolute top-0 right-0 w-20 h-20 bg-violet-500/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-violet-500/20 mb-4">
                  <svg className="w-7 h-7 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z"/>
                  </svg>
                </div>
                <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">150+</h3>
                <p className="mt-3 text-slate-300 font-medium text-sm md:text-base">Coding Experts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-20 bg-gradient-to-b from-blue-200 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Medical Claims Billing Services
              </h2>
              <p className="mt-4 text-slate-600 text-base md:text-lg font-medium">
                We ensure faster reimbursements and smooth claim processing.
              </p>
              
              <p className="mt-6 text-slate-600 text-sm md:text-base leading-relaxed">
                At MedHealer360, we maximize your reimbursements with round-the-clock billing oversight and deep expertise in both commercial and government payers—including Aetna, Blue Cross, Medicare, and Medicaid. Our team ensures your CMS-1500, UB-04, and other claim forms are accurate and compliant, so you get paid faster, with fewer denials. Partner with us for smooth, reliable claims and repayment processing.
              </p>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  <span className="text-slate-700 font-medium">Verification</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  <span className="text-slate-700 font-medium">Transcription</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  <span className="text-slate-700 font-medium">Coding</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  <span className="text-slate-700 font-medium">Submission</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  <span className="text-slate-700 font-medium">Payment</span>
                </div>
              </div>

              <div className="mt-10 rounded-2xl bg-gradient-to-br from-blue-900 to-blue-400 p-6 md:p-8 text-white">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                  Open Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm md:text-base">
                    <span className="font-medium">Monday</span>
                    <span className="text-blue-100">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm md:text-base">
                    <span className="font-medium">Tuesday</span>
                    <span className="text-blue-100">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm md:text-base">
                    <span className="font-medium">Wednesday</span>
                    <span className="text-blue-100">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm md:text-base">
                    <span className="font-medium">Thursday</span>
                    <span className="text-blue-100">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm md:text-base">
                    <span className="font-medium">Friday</span>
                    <span className="text-blue-100">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm md:text-base">
                    <span className="font-medium">Saturday</span>
                    <span className="text-blue-100">09:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm md:text-base">
                    <span className="font-medium">Sunday</span>
                    <span className="text-blue-100">Closed</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-8">
                <div className="flex flex-col gap-1">
                  <span className="text-slate-600 text-sm font-medium">
                    Contact us
                  </span>
                  <a
                    href="tel:512-920-6338"
                    className="text-orange-500 text-base font-semibold no-underline hover:text-orange-600 transition-colors duration-200"
                  >
                    512-920-6338
                  </a>
                </div>
                <a
                  href="#"
                  className="water-flow-button inline-flex items-center justify-center rounded-md bg-purple-500 text-white px-8 py-3 text-sm font-semibold no-underline gap-2 mt-6 lg:mt-0"
                >
                  <span>Appointment</span>
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[440px] md:max-w-[520px]">
                <div className="absolute -top-6 -right-4 h-32 w-32 rounded-full bg-orange-200/50 blur-3xl" />
                <div className="absolute -bottom-4 -left-4 h-36 w-36 rounded-full bg-amber-200/50 blur-3xl" />

                <div className="relative rounded-[30px] bg-slate-100 p-4 md:p-6 shadow-[0_20px_50px_rgba(15,23,42,0.16)]">
                  <img
                    src={hero2Image}
                    alt="Medical Claims Billing"
                    className="w-full h-[560px] md:h-[660px] rounded-[22px] object-cover object-center"
                  />
                  
                  <div className="absolute bottom-4 left-0 right-0 mx-auto w-full max-w-xs sm:left-6 sm:w-1/2 sm:max-w-none rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 p-3 sm:p-5 border-2 border-blue-300 shadow-lg">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-500 text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                            <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-blue-900">Get a Live Demo</h3>
                        <p className="mt-1 text-slate-700 text-xs md:text-sm">
                          See our billing solutions in action. Book your personalized demo now.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="w-full py-12 md:py-20 bg-gradient-to-br from-gray-300 to-white-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              MedHealer360 delivers seamless electronic medical billing solutions.
            </h2>
            <p className="mt-5 text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              MedHealer360 transforms traditional, error-prone billing with smart, electronic solutions tailored for all specialties. Our HIPAA-compliant services ensure faster reimbursements, accurate claims, improved patient care, and a smoother cash flow—making us the ideal partner for complete medical billing and accounts management.
            </p>
          </div>

          <div className="relative mx-auto max-w-6xl rounded-3xl border border-cyan-100 bg-gradient-to-b from-gray-200 via-gray to-teal-50/60 p-5 md:p-8 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-50" style={{ backgroundImage: "linear-gradient(to right, rgba(6,182,212,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(6,182,212,0.10) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
            <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-300 to-transparent" />
            <div className="pointer-events-none absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />

            <div className="relative grid grid-cols-1 md:grid-cols-2  gap-5 md:gap-6">
              <div className="group rounded-2xl border border-slate-200 bg-gradient-to-b from-green-200 via-gray to-teal-50/60 backdrop-blur-sm p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br hover:from-teal-500 hover:to-teal-800 hover:border-teal-700 transition-all duration-300 card-hover" data-animate="fade-up" data-delay="1">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100 text-blue-700 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 2h9l5 5v15H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1v5h5M9 12h6v2H9zm0 4h6v2H9zm0-8h4v2H9z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-bold tracking-[0.18em] text-cyan-500 group-hover:text-white/80">A1</span>
                </div>
                <h3 className="mt-4 text-xl font-bold  text-slate-900 group-hover:text-white">Medical Billing Services</h3>
                <p className="mt-2 text-slate-600 text-sm md:text-base leading-relaxed group-hover:text-white/90">
                  Our expert billing team delivers comprehensive medical billing services-managing everything from patient check-in and check-out to claims processing, payments, and denial management for healthcare providers.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-teal-700 group-hover:bg-white/20 group-hover:text-white">
                  <span>25+ Doctor</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.34 13.17 11.75 8.59 7.16 10 5.75l6 6-6 6z"/>
                  </svg>
                </div>
              </div>

              <div className="group rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-sm p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br hover:from-teal-500 hover:to-teal-800 hover:border-teal-700 transition-all duration-300 card-hover" data-animate="fade-up" data-delay="2">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-teal-100 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.7 5 3 10.7 8.7 16.4l1.4-1.4-4.3-4.3 4.3-4.3L8.7 5zm6.6 0-1.4 1.4 4.3 4.3-4.3 4.3 1.4 1.4 5.7-5.7L15.3 5zM11 3h2v4h4v2h-4v4h-2V9H7V7h4V3z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-bold tracking-[0.18em] text-cyan-500 group-hover:text-white/80">A2</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-white">Medical Coding Service</h3>
                <p className="mt-2 text-slate-600 text-sm md:text-base leading-relaxed group-hover:text-white/90">
                  Clinical coding specialists accurately translate patient services into ICD-10 and CPT codes, creating a clean and compliant super-bill. This ensures smooth claim submission, faster reimbursements, and fewer denials from insurance payers.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-teal-700 group-hover:bg-white/20 group-hover:text-white">
                  <span>25+ Doctor</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.34 13.17 11.75 8.59 7.16 10 5.75l6 6-6 6z"/>
                  </svg>
                </div>
              </div>

              <div className="group rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-sm p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br hover:from-teal-500 hover:to-teal-800 hover:border-teal-700 transition-all duration-300 card-hover" data-animate="fade-up" data-delay="3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 4h18v16H3V4zm2 2v12h14V6H5zm2 10h4v2H7v-2zm8-7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-6.5 7c.4-1.7 2-3 3.5-3s3.1 1.3 3.5 3h-7z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-bold tracking-[0.18em] text-cyan-500 group-hover:text-white/80">B1</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-white">Credentialing Services</h3>
                <p className="mt-2 text-slate-600 text-sm md:text-base leading-relaxed group-hover:text-white/90">
                  Our credentialing specialists provide provider enrollment services that help healthcare professionals join high-value payer networks, ensuring faster approvals, full privileges, and smoother reimbursement processes.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-teal-700 group-hover:bg-white/20 group-hover:text-white">
                  <span>25+ Doctor</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.34 13.17 11.75 8.59 7.16 10 5.75l6 6-6 6z"/>
                  </svg>
                </div>
              </div>

              <div className="group rounded-2xl border border-slate-200 bg-gradient-to-b from-green-200 via-gray to-teal-50/60 backdrop-blur-sm p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br hover:from-teal-500 hover:to-teal-800 hover:border-teal-700 transition-all duration-300 card-hover" data-animate="fade-up" data-delay="4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-cyan-100 text-cyan-700 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 5h18v14H3V5zm2 2v10h14V7H5zm1 5h3l2-3 2 6 1.5-3H18v2h-2.5L13 19l-2-6-1.2 1.8H6v-2z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-bold tracking-[0.18em] text-cyan-500 group-hover:text-white/80">B2</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-white">Healthcare RCM Services</h3>
                <p className="mt-2 text-slate-600 text-sm md:text-base leading-relaxed group-hover:text-white/90">
                  Revenue cycle management services are tailored to each specialty, ensuring that every physician's unique needs are handled by a dedicated and experienced medical billing professional.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-teal-700 group-hover:bg-white/20 group-hover:text-white">
                  <span>25+ Doctor</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.34 13.17 11.75 8.59 7.16 10 5.75l6 6-6 6z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-14 md:py-20 bg-gradient-to-b from-gray-500 via-gray to-teal-50/60">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="relative overflow-hidden rounded-3xl border border-cyan-100 bg-gradient-to-b from-black to-gray-300 p-6 md:p-10 shadow-[0_20px_60px_rgba(14,116,144,0.18)]">
              <div className="absolute -top-24 -right-20 h-56 w-56 rounded-full bg-cyan-200/40 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-teal-200/40 blur-3xl" />

              <div className="relative z-10">
                <div className="text-center">
                  <p className="text-cyan-700 text-sm font-semibold tracking-[0.34em] uppercase">Schedule a Consultation</p>
                  <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Optimize Your Billing Now!</h2>
                </div>

                <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all duration-200"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all duration-200"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all duration-200"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all duration-200"
                  />

                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="md:col-span-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all duration-200 resize-none"
                  />

                  <div className="md:col-span-2 pt-2">
                    <button
                      type="button"
                      className="water-flow-button w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-purple-500 px-8 py-3 text-white text-sm md:text-base font-semibold shadow-lg"
                    >
                      Schedule
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

      <section className="w-full py-14 md:py-20 bg-gradient-to-b from-white via-cyan-50/40 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Why Choose Us for Your Medical Billing Needs
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-5 md:space-y-6">
              <div className="group relative overflow-hidden max-w-xl rounded-2xl border border-cyan-100 bg-white p-6 md:p-7 shadow-[0_16px_40px_rgba(2,132,199,0.12)] hover:shadow-[0_24px_60px_rgba(13,148,136,0.3)] hover:-translate-y-2 hover:border-teal-500 hover:bg-gradient-to-br hover:from-teal-500 hover:to-cyan-600 transition-all duration-500">
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-cyan-200/40 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-white/20" />
                <h3 className="relative z-10 text-xl font-bold text-slate-900 group-hover:text-white transition-colors duration-300">Specialty Focused</h3>
                <p className="relative z-10 mt-3 text-slate-600 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  We tailor every billing solution to your specialty, ensuring accuracy and efficient claim handling.
                </p>
              </div>

              <div className="group relative overflow-hidden md:ml-10 max-w-xl rounded-2xl border border-cyan-100 bg-white p-6 md:p-7 shadow-[0_16px_40px_rgba(2,132,199,0.12)] hover:shadow-[0_24px_60px_rgba(13,148,136,0.3)] hover:-translate-y-2 hover:border-teal-500 hover:bg-gradient-to-br hover:from-teal-500 hover:to-cyan-600 transition-all duration-500">
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-teal-200/40 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-white/20" />
                <h3 className="relative z-10 text-xl font-bold text-slate-900 group-hover:text-white transition-colors duration-300">Data Security</h3>
                <p className="relative z-10 mt-3 text-slate-600 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  Our billing processes are HIPAA-compliant and built to protect sensitive patient and claim data.
                </p>
              </div>

              <div className="group relative overflow-hidden md:ml-20 max-w-xl rounded-2xl border border-cyan-100 bg-white p-6 md:p-7 shadow-[0_16px_40px_rgba(2,132,199,0.12)] hover:shadow-[0_24px_60px_rgba(13,148,136,0.3)] hover:-translate-y-2 hover:border-teal-500 hover:bg-gradient-to-br hover:from-teal-500 hover:to-cyan-600 transition-all duration-500">
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-cyan-200/40 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-white/20" />
                <h3 className="relative z-10 text-xl font-bold text-slate-900 group-hover:text-white transition-colors duration-300">Proven Results</h3>
                <p className="relative z-10 mt-3 text-slate-600 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  We help you achieve faster reimbursements, fewer denials, and stronger overall revenue performance.
                </p>
              </div>

              <div className="group relative overflow-hidden md:ml-28 max-w-xl rounded-2xl border border-cyan-100 bg-white p-6 md:p-7 shadow-[0_16px_40px_rgba(2,132,199,0.12)] hover:shadow-[0_24px_60px_rgba(13,148,136,0.3)] hover:-translate-y-2 hover:border-teal-500 hover:bg-gradient-to-br hover:from-teal-500 hover:to-cyan-600 transition-all duration-500">
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-teal-200/40 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-white/20" />
                <h3 className="relative z-10 text-xl font-bold text-slate-900 group-hover:text-white transition-colors duration-300">Expert Support</h3>
                <p className="relative z-10 mt-3 text-slate-600 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  Certified billers provide hands-on assistance to optimize workflow and ensure complete transparency.
                </p>
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="relative rounded-3xl bg-white p-4 md:p-5 border border-cyan-100 shadow-[0_24px_60px_rgba(2,132,199,0.16)]">
                <div className="absolute -top-6 -right-4 h-28 w-28 rounded-full bg-cyan-200/40 blur-3xl" />
                <div className="absolute -bottom-6 -left-4 h-28 w-28 rounded-full bg-teal-200/40 blur-3xl" />
                <img
                  src={hero3Image}
                  alt="Medical billing team"
                className="w-full  rounded-2xl object-contain"                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-14 md:py-20 bg-gradient-to-b from-blue-200 to-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center">
            <p className="text-cyan-700 text-sm font-semibold tracking-[0.14em] uppercase">How it work</p>
            <p className="mt-4 text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We streamline your billing process in a few simple, efficient steps — designed to boost revenue and reduce administrative stress.
            </p>
                        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">Streamllined billing process</h2>

          </div>

         

          <div className="mt-10 md:mt-14 space-y-4 md:space-y-5">
            <div className="group ml-auto max-w-xl rounded-2xl border border-teal-600 bg-gradient-to-r from-teal-500 to-cyan-600 px-6 py-5 shadow-[0_18px_44px_rgba(13,148,136,0.28)] hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(8,145,178,0.12)] hover:bg-none hover:bg-white hover:border-cyan-100 transition-all duration-300">
              <h3 className="inline-flex items-center gap-3 text-lg md:text-xl font-bold text-white group-hover:text-slate-900 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15 14c2.67 0 8 1.34 8 4v2h-8v-2c0-1.01.38-1.93 1-2.72V14zM9 12c2.76 0 5-2.24 5-5S11.76 2 9 2 4 4.24 4 7s2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h14v-3c0-3.33-6.67-5-10-5zm11-8V3h-2v3h-3v2h3v3h2V8h3V6h-3z"/>
                </svg>
                Onboard Your Practice
              </h3>
            </div>

            <div className="group ml-auto md:mr-12 max-w-xl rounded-2xl border border-teal-600 bg-gradient-to-r from-teal-500 to-cyan-600 px-6 py-5 shadow-[0_18px_44px_rgba(13,148,136,0.28)] hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(8,145,178,0.12)] hover:bg-none hover:bg-white hover:border-cyan-100 transition-all duration-300">
              <h3 className="inline-flex items-center gap-3 text-lg md:text-xl font-bold text-white group-hover:text-slate-900 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h9l7-7V5c0-1.1-.9-2-2-2zm-7 14H5V5h14v7h-7v5zm-5-6h10v2H7V11zm0-4h10v2H7V7zm0 8h5v2H7v-2z"/>
                </svg>
                Verify & Submit Claims
              </h3>
            </div>

            <div className="group ml-auto md:mr-24 max-w-xl rounded-2xl border border-teal-600 bg-gradient-to-r from-teal-500 to-cyan-600 px-6 py-5 shadow-[0_18px_44px_rgba(13,148,136,0.28)] hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(8,145,178,0.12)] hover:bg-none hover:bg-white hover:border-cyan-100 transition-all duration-300">
              <h3 className="inline-flex items-center gap-3 text-lg md:text-xl font-bold text-white group-hover:text-slate-900 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11 2a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9 2.2 0 4.22-.79 5.78-2.1l3.66 3.66 1.41-1.41-3.66-3.66A8.96 8.96 0 0 0 20 11c0-4.97-4.03-9-9-9zm1 13h-2v-2h2v2zm0-4h-2V6h2v5z"/>
                </svg>
                Track & Manage Denials
              </h3>
            </div>

            <div className="group ml-auto md:mr-36 max-w-xl rounded-2xl border border-teal-600 bg-gradient-to-r from-teal-500 to-cyan-600 px-6 py-5 shadow-[0_18px_44px_rgba(13,148,136,0.28)] hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(8,145,178,0.12)] hover:bg-none hover:bg-white hover:border-cyan-100 transition-all duration-300">
              <h3 className="inline-flex items-center gap-3 text-lg md:text-xl font-bold text-white group-hover:text-slate-900 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93V19h-2v-2.06c-1.71-.36-3-1.87-3-3.69h2c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-1A3.5 3.5 0 0 1 8 8.25c0-1.82 1.29-3.33 3-3.69V3h2v1.56c1.71.36 3 1.87 3 3.69h-2c0-.83-.67-1.5-1.5-1.5h-1c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h1A3.5 3.5 0 0 1 16 13.25c0 1.82-1.29 3.33-3 3.68z"/>
                </svg>
                Get Paid Faster
              </h3>
            </div>
          </div>
        </div>
         <div className="mt-8  flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <div className="rounded-2xl border border-cyan-100 bg-gradient-to-b from-white via-cyan-50/40 to-green-300 px-8 py-4 shadow-[0_12px_30px_rgba(8,145,178,0.12)] text-center min-w-[220px]">
              <p className="text-3xl font-bold text-teal-600">180+</p>
              <p className="mt-1 text-slate-700 font-medium">Specialists</p>
            </div>
            <div className="rounded-2xl border border-cyan-100 bg-gradient-to-b from-white via-cyan-50/40 to-green-300 px-8 py-4 shadow-[0_12px_30px_rgba(8,145,178,0.12)] text-center min-w-[220px]">
              <p className="text-3xl font-bold text-cyan-600">3K</p>
              <p className="mt-1 text-slate-700 font-medium">Happy Clients</p>
            </div>
          </div>
      </section>

      <section className="w-full py-14 md:py-20 bg-gradient-to-b from-blue-400 to-cyan-50/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 ">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Trusted Providers, Proven Results. See Our Impact</h2>
          </div>

          <div className="relative rounded-3xl border border-cyan-100 bg-gradient-to-b from-blue-600 to-cyan-50/60 p-6 md:p-8 shadow-[0_20px_60px_rgba(8,145,178,0.14)] animate-fade-in-up">
            <style>{`
              @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-12px); }
              }
              .animate-float { animation: float 3s ease-in-out infinite; }
            `}</style>

            <div className="absolute -top-8 -right-6 animate-float rounded-2xl border border-emerald-300/60 bg-gradient-to-br from-emerald-300 to-teal-400 px-4 py-3 shadow-lg">
              <p className="text-2xl font-bold text-white">150k</p>
              <p className="text-xs font-semibold text-white/90 whitespace-nowrap">Improved Clinical Status</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
              <div className="rounded-2xl bg-gradient-to-br from-cyan-50 to-teal-50 p-6 md:p-8 border border-cyan-100 overflow-hidden animate-fade-in-left">
                <p className={`text-xl md:text-2xl font-semibold text-slate-800 leading-relaxed transition-all duration-200 ease-out ${impactAnimating ? impactDirection === "next" ? "opacity-0 -translate-x-4" : "opacity-0 translate-x-4" : "opacity-100 translate-x-0"}`}>
                  "{impactQuotes[impactIndex]}"
                </p>
              </div>

              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={impactImages[impactIndex]}
                  alt="Client success"
                  className={`w-full h-[320px] md:h-[420px] rounded-2xl object-cover object-center transition-all duration-200 ease-out ${impactAnimating ? impactDirection === "next" ? "opacity-0 -translate-x-6 scale-[0.98]" : "opacity-0 translate-x-6 scale-[0.98]" : "opacity-100 translate-x-0 scale-100"}`}
                />

                <button
                  type="button"
                  onClick={showPrevImpact}
                  className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md hover:bg-white"
                  aria-label="Previous image"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={showNextImpact}
                  className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md hover:bg-white"
                  aria-label="Next image"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-14 md:py-20 bg-gradient-to-b from-cyan-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-hover">Frequently Asked Questions</h2>
            <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
              Get answers to common questions about our medical billing services
            </p>
          </div>

          <style>{`
            @keyframes slideDownAndFade {
              from {
                opacity: 0;
                transform: translateY(-10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .faq-answer {
              animation: slideDownAndFade 0.4s ease-out;
            }
            .faq-button {
              transition: all 0.3s ease;
            }
            .faq-button:hover {
              background-color: rgba(6, 182, 212, 0.05);
            }
          `}</style>

          <div className="space-y-3 md:space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="rounded-xl border border-cyan-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden card-hover" data-animate="fade-up" data-delay={index % 5 + 1}>
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? -1 : index)}
                  className="faq-button w-full px-6 md:px-8 py-4 md:py-5 flex items-center justify-between gap-4"
                >
                  <h3 className="text-left text-lg md:text-lg font-semibold text-slate-900">{item.question}</h3>
                  <div className={`flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-cyan-100 text-cyan-600 transition-all duration-400 ${expandedFAQ === index ? "rotate-180 bg-cyan-200" : ""}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </button>
                
                {expandedFAQ === index && (
                  <div className="faq-answer border-t border-cyan-50 px-6 md:px-8 py-4 md:py-5 bg-gradient-to-br from-cyan-50/50 to-teal-50/50">
                    <p className="text-slate-700 text-base md:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <p className="text-slate-600 text-base md:text-lg mb-6">Still have questions?</p>
            <a
              href="tel:512-920-6338"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-teal-600 to-cyan-600 px-8 py-3 text-white text-sm md:text-base font-semibold no-underline hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 gap-2 shadow-lg shadow-cyan-200"
            >
              Contact us 512-920-6338
            </a>
          </div>
        </div>
      </section>

      <section className="w-full py-14 md:py-20 bg-gradient-to-b from-white to-cyan-50/70">
        <div className=" mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-0 overflow-hidden rounded-3xl border border-cyan-100 bg-white shadow-[0_20px_60px_rgba(8,145,178,0.16)]">
            <div className="bg-gradient-to-r from-green-500 to-gray-400 text-white p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">Get in Touch with us</h2>

              <div className="mt-8 space-y-7">
                <div className="group flex items-start gap-4">
                  <div className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-cyan-100 transition-colors duration-300 group-hover:bg-white/25 group-hover:text-amber-300">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                      <circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Address</h3>
                    <p className="mt-2 text-cyan-100 text-base md:text-lg leading-relaxed">
                      181 skyline Dr, Staten Island, NY, 10304
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-4">
                  <div className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-cyan-100 transition-colors duration-300 group-hover:bg-white/25 group-hover:text-amber-300">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.128a11.042 11.042 0 005.516 5.516l1.128-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.95V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Call Us</h3>
                    <a
                      href="tel:512-920-6338"
                      className="mt-2 inline-block text-cyan-100 text-base md:text-lg no-underline hover:text-white transition-colors duration-200"
                    >
                      512-920-6338
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-4">
                  <div className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-cyan-100 transition-colors duration-300 group-hover:bg-white/25 group-hover:text-amber-300">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Send us a Mail</h3>
                    <a
                      href="mailto:mark@medhealer360.org"
                      className="mt-2 inline-block text-cyan-100 text-base md:text-lg no-underline hover:text-white transition-colors duration-200"
                    >
                      mark@medhealer360.org
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-4">
                  <div className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-cyan-100 transition-colors duration-300 group-hover:bg-white/25 group-hover:text-amber-300">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7v5l3 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Opening Time</h3>
                    <p className="mt-2 text-cyan-100 text-base md:text-lg leading-relaxed">
                      Mon-Thu: 8:00am-5:00pm
                      <br />
                      Fri: 8:00am-1:00pm
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="water-flow-button mt-10 inline-flex w-full items-center justify-center rounded-xl bg-purple-500 px-6 py-3 text-base font-semibold text-white no-underline shadow-md"
              >
                <span>Appointment</span>
              </a>
            </div>

            <iframe
              title="MedHealer360 Location Map"
              src="https://maps.google.com/maps?q=Chambal%20Riverfront%20Kota&z=14&output=embed"
              className="w-full h-[420px] md:h-[620px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="w-full pt-14 md:pt-20 pb-6 md:pb-8 bg-gradient-to-b from-slate-950 via-blue-550 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:w-fit md:mx-auto">
              <div className="animate-fade-in-up stagger-1">
                <h3 className="text-xl font-semibold text-hover">Our Services</h3>
                <ul className="mt-4 space-y-2 text-slate-300">
                  <li><a href="#" className="relative inline-block text-slate-300 no-underline transition-colors duration-300 hover:text-cyan-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full">Medical Billing</a></li>
                  <li><a href="#" className="relative inline-block text-slate-300 no-underline transition-colors duration-300 hover:text-cyan-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full">Medical Audit</a></li>
                  <li><a href="#" className="relative inline-block text-slate-300 no-underline transition-colors duration-300 hover:text-cyan-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full">Revenue Cycle Management</a></li>
                  <li><a href="#" className="relative inline-block text-slate-300 no-underline transition-colors duration-300 hover:text-cyan-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full">AR Recovery</a></li>
                  <li><a href="#" className="relative inline-block text-slate-300 no-underline transition-colors duration-300 hover:text-cyan-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full">Practice Development</a></li>
                </ul>
              </div>

              <div className="animate-fade-in-up stagger-2">
                <h3 className="text-xl font-semibold text-hover">Useful Links</h3>
                <ul className="mt-4 space-y-2 text-slate-300">
                  <li><a href="#" className="relative inline-block text-slate-300 no-underline transition-colors duration-300 hover:text-cyan-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full">Privacy Policy</a></li>
                  <li><a href="#" className="relative inline-block text-slate-300 no-underline transition-colors duration-300 hover:text-cyan-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full">Terms &amp; Conditions</a></li>
                  <li><a href="#" className="relative inline-block text-slate-300 no-underline transition-colors duration-300 hover:text-cyan-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full">Contact Us</a></li>
                </ul>
              </div>

              <div className="animate-fade-in-up stagger-3">
                <h3 className="text-xl font-semibold text-hover">Software</h3>
                <ul className="mt-4 space-y-2 text-slate-300">
                  <li><a href="#" className="relative inline-block text-slate-300 no-underline transition-colors duration-300 hover:text-cyan-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full">Medical Billing Software</a></li>
                </ul>
              </div>

              <div className="animate-fade-in-up stagger-4">
                <h3 className="text-xl font-semibold text-hover">Quick Links</h3>
                <ul className="mt-4 space-y-2 text-slate-300">
                  <li><a href="#" className="relative inline-block text-slate-300 no-underline transition-colors duration-300 hover:text-cyan-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full">About Us</a></li>
                  <li><a href="#" className="relative inline-block text-slate-300 no-underline transition-colors duration-300 hover:text-cyan-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full">Our Services</a></li>
                  <li><a href="#" className="relative inline-block text-slate-300 no-underline transition-colors duration-300 hover:text-cyan-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Important Updates Section */}
          <div className="mt-16 pt-16 border-t border-slate-700 animate-fade-in-up">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-hover">
                Important Updates Waiting for you
              </h2>
              <p className="text-slate-300 text-lg mb-8 animate-fade-in-up stagger-1">
                Get our latest and best contents right into your inbox
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full max-w-md mx-auto px-6 py-4 rounded-lg bg-slate-800 text-white placeholder-slate-500 border border-slate-700 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200"
                  />
                </div>
                <button
                  type="submit"
                  className="water-flow-button w-full sm:w-auto self-center sm:self-end h-auto px-8 py-3 rounded-lg bg-purple-500 text-white font-semibold no-underline max-w-xs mx-auto"
                >
                  <span>Subscribe</span>
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-700/80 pt-6">
            <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-center">
              <p className="text-sm text-slate-400">© 2026 EffiCore All Rights Reserved.</p>
              <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-slate-300">
                <span className="inline-flex items-center font-semibold tracking-tight" aria-label="Google">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </span>
                <span className="text-amber-300">(4.8)</span>
                <span className="text-amber-300" aria-hidden="true">★★★★★</span>
                <span className="text-slate-400">12k+ ratings on google</span>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
}
