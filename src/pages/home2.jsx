import { useState, useEffect, useRef } from 'react';
import { TrendingUp, Target, CheckCircle, Settings, Hammer, BarChart3, Lightbulb, Search, Handshake, Map, PenTool, Rocket, Factory, Building2, Hospital, Package, Zap, Laptop, Beaker, Globe, MapPin, Phone, Mail, Clock, Menu, X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import meetingImg from '../assets/meeting.jpg';

const styles = `
  :root {
    --primary:   #2D3B4E;
    --teal-dark: #1A5C5C;
    --teal-mid:  #2A7A72;
    --teal-light:#4ECDC4;
    --teal-pale: #A8E6E1;
    --cream:     #F4EEE4;
    --cream-soft:#FAF7F2;
    --white:     #FFFFFF;
    --text-dark: #1C2B3A;
    --text-mid:  #4A5568;
    --text-light:#718096;
    --border:    #E2DDD5;
    --shadow:    0 4px 32px rgba(45,59,78,0.10);
    --shadow-lg: 0 12px 56px rgba(45,59,78,0.16);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; font-size: 16px; }

  body {
    font-family: 'Nunito', sans-serif;
    background: var(--cream-soft);
    color: var(--text-dark);
    overflow-x: hidden;
  }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: var(--cream); }
  ::-webkit-scrollbar-thumb { background: var(--teal-mid); border-radius: 3px; }

  .navbar {
    position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 5%;
    height: 78px;
    background: rgba(244,238,228,0.85);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border);
    transition: all 0.3s ease;
  }
  .navbar.scrolled {
    background: rgba(255,255,255,0.95);
    box-shadow: 0 2px 24px rgba(45,59,78,0.08);
    height: 66px;
  }
  .nav-logo {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 0; /* Remove extra padding */
  }
  .nav-logo img {
    height: 70px; /* Restored previous height */
    width: auto;
    object-fit: contain;
    transition: height 0.3s;
  }
  .navbar.scrolled .nav-logo img {
    height: 65px; /* Restored previous scrolled height */
  }

  .nav-links {
    display: flex; align-items: center; gap: 8px;
    list-style: none;
  }
  .nav-links a {
    font-family: 'Nunito', sans-serif;
    font-size: clamp(0.75rem, 1vw, 1.125rem);
    font-weight: 600;
    letter-spacing: 0.04em; text-transform: uppercase;
    color: var(--primary);
    text-decoration: none; padding: 8px 14px;
    border-radius: 6px;
    transition: all 0.2s;
    position: relative;
  }
  .nav-links a::after {
    content: ''; position: absolute; bottom: 4px; left: 14px; right: 14px;
    height: 2px; background: var(--teal-light);
    transform: scaleX(0); transform-origin: left;
    transition: transform 0.25s ease;
  }
  .nav-links a:hover::after { transform: scaleX(1); }
  .nav-links a:hover { color: var(--teal-dark); }

  .nav-cta {
    background: var(--teal-dark); color: var(--white) !important;
    padding: 10px 22px !important; border-radius: 8px !important;
    box-shadow: 0 2px 12px rgba(26,92,92,0.25);
    transition: all 0.25s ease !important;
  }
  .nav-cta:hover { background: var(--primary) !important; transform: translateY(-1px); }
  .nav-cta::after { display: none !important; }

  .hamburger {
    display: none; align-items: center; justify-content: center;
    cursor: pointer; padding: 8px;
    background: none; border: none;
    z-index: 1001;
    position: relative;
  }
  .hamburger svg {
    display: block;
  }
  .hamburger span {
    display: block; width: 24px; height: 2px;
    background: var(--primary); border-radius: 2px;
    transition: all 0.3s;
  }

  .hero {
    min-height: 100vh;
    display: grid; grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 120px 5% 80px;
    gap: 60px;
    position: relative; overflow: hidden;
  }
  .hero-bg {
    position: absolute; inset: 0; z-index: 0;
    background: linear-gradient(135deg, var(--cream-soft) 0%, var(--cream) 60%, #D6EDEA 100%);
  }
  .hero-bg-shape {
    position: absolute; right: -10%; top: -15%;
    width: 70%; height: 130%;
    border-radius: 40% 0 0 30%;
    opacity: 0.08;
    z-index: 0;
  }
  .hero-bg-dots {
    position: absolute; right: 5%; top: 20%;
    width: 320px; height: 320px;
    background-image: radial-gradient(circle, var(--teal-mid) 1.5px, transparent 1.5px);
    background-size: 28px 28px;
    opacity: 0.15; z-index: 0;
  }
  .hero-content { position: relative; z-index: 1; }
  .hero-tag {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(78,205,196,0.15); border: 1px solid rgba(78,205,196,0.4);
    color: var(--teal-dark); padding: 7px 16px; border-radius: 50px;
    font-family: 'Nunito', sans-serif; font-size: 0.78rem;
    font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
    margin-bottom: 28px;
    animation: fadeUp 0.7s ease both;
  }
  .hero-tag span { width: 6px; height: 6px; border-radius: 50%; background: var(--teal-light); display: block; }

  .hero h1 {
    font-family: 'Nunito', sans-serif;
    font-size: clamp(2.8rem, 5vw, 4.2rem);
    font-weight: 700; line-height: 1.15;
    color: var(--primary);
    margin-bottom: 24px;
    animation: fadeUp 0.7s 0.1s ease both;
  }
  .hero h1 em {
    font-style: italic; color: var(--teal-dark);
    display: block;
  }
  .hero p {
    font-size: 1.1rem; line-height: 1.75;
    color: var(--text-mid); max-width: 480px;
    margin-bottom: 40px;
    animation: fadeUp 0.7s 0.2s ease both;
  }
  .hero-actions {
    display: flex; gap: 16px; flex-wrap: wrap;
    animation: fadeUp 0.7s 0.3s ease both;
  }
  .btn-primary {
    background: var(--teal-dark); color: var(--white);
    padding: 14px 32px; border-radius: 10px;
    font-family: 'Nunito', sans-serif; font-weight: 700;
    font-size: 0.9rem; letter-spacing: 0.04em;
    text-decoration: none; border: 2px solid var(--teal-dark);
    transition: all 0.25s; display: inline-flex; align-items: center; gap: 8px;
    box-shadow: 0 4px 20px rgba(26,92,92,0.3);
  }
  .btn-primary:hover { background: var(--primary); border-color: var(--primary); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(45,59,78,0.25); }
  .btn-outline {
    background: transparent; color: var(--primary);
    padding: 14px 32px; border-radius: 10px;
    font-family: 'Nunito', sans-serif; font-weight: 700;
    font-size: 0.9rem; letter-spacing: 0.04em;
    text-decoration: none; border: 2px solid var(--primary);
    transition: all 0.25s; display: inline-flex; align-items: center; gap: 8px;
  }
  .btn-outline:hover { background: var(--primary); color: var(--white); transform: translateY(-2px); }

  .hero-visual { position: relative; z-index: 1; animation: fadeUp 0.8s 0.2s ease both; }
  .hero-card-stack {
    position: relative; width: 100%; max-width: 460px; margin: 0 auto;
  }
  .hero-main-card {
    background: transparent;
    border-radius: 24px; padding: 40px;
    box-shadow: none;
    border: none;
  }
  .hero-card-header {
    display: flex; align-items: center; gap: 16px; margin-bottom: 28px;
  }
  .hero-card-icon svg {
    color: var(--white);
    stroke: var(--white);
  }
  .hero-card-header div h3 {
    font-family: 'Nunito', sans-serif; font-weight: 700;
    font-size: 1.05rem; color: var(--primary);
  }
  .hero-card-header div p { font-size: 0.82rem; color: var(--text-light); margin-top: 2px; }

  .metric-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }
  .metric-item { text-align: center; }
  .metric-item .val {
    font-family: 'Nunito', sans-serif; font-size: 1.8rem;
    font-weight: 800; color: var(--teal-dark); display: block;
  }
  .metric-item .lbl { font-size: 0.72rem; color: var(--text-light); text-transform: uppercase; letter-spacing: 0.06em; margin-top: 2px; }

  .hero-mini-card {
    position: absolute; bottom: 12px; left: -20px;

    background: var(--white); border-radius: 16px;
    padding: 16px 20px; box-shadow: var(--shadow);
    border: 1px solid var(--border);
    display: flex; align-items: center; gap: 12px;
    min-width: 180px;
    animation: float 3.5s ease-in-out infinite;
  }
  .hero-mini-card2 {
    position: absolute; top: -20px; right: -20px;
    background: var(--teal-dark); border-radius: 16px;
    padding: 16px 20px; box-shadow: 0 8px 32px rgba(26,92,92,0.3);
    display: flex; align-items: center; gap: 10px;
    min-width: 160px;
    animation: float 4s 1s ease-in-out infinite;
  }
  .hero-mini-card2 * { color: var(--white); }
  .mini-icon { font-size: 1.4rem; display: flex; align-items: center; justify-content: center; }
  .hero-mini-card .mini-icon { color: var(--teal-dark); }
  .hero-mini-card .mini-icon svg { color: var(--teal-dark); stroke: var(--teal-dark); }
  .hero-mini-card2 .mini-icon { color: var(--white); }
  .hero-mini-card2 .mini-icon svg { color: var(--white); stroke: var(--white); }
  .mini-text .mt { font-family: 'Nunito', sans-serif; font-size: 0.8rem; font-weight: 700; color: var(--primary); }
  .mini-text .ms { font-size: 0.72rem; color: var(--text-light); }
  .hero-mini-card2 .mt { color: var(--white) !important; }
  .hero-mini-card2 .ms { color: rgba(255,255,255,0.7) !important; }

  .trust-bar {
    background: var(--primary); padding: 22px 5%;
    display: flex; align-items: center; gap: 40px;
    flex-wrap: wrap; justify-content: center;
  }
  .trust-label {
    font-family: 'Nunito', sans-serif; font-size: 0.75rem;
    color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.1em;
    white-space: nowrap;
  }
  .trust-clients {
    display: flex; gap: 36px; align-items: center; flex-wrap: wrap;
  }
  .trust-client {
    font-family: 'Nunito', sans-serif; font-size: 0.95rem; font-weight: 700;
    color: rgba(255,255,255,0.45); letter-spacing: 0.08em;
    text-transform: uppercase; white-space: nowrap;
    transition: color 0.2s;
  }
  .trust-client:hover { color: rgba(255,255,255,0.8); }

  section { padding: 100px 5%; }
  .section-tag {
    font-family: 'Nunito', sans-serif; font-size: 0.75rem;
    font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
    color: var(--teal-dark);
    display: inline-flex; align-items: center; gap: 8px;
    margin-bottom: 16px;
  }
  .section-tag::before {
    content: ''; width: 28px; height: 2px;
    background: var(--teal-light); border-radius: 1px;
  }
  .section-title {
    font-family: 'Nunito', sans-serif;
    font-size: clamp(2rem, 3.5vw, 2.8rem);
    font-weight: 700; color: var(--primary);
    line-height: 1.2; margin-bottom: 20px;
  }
  .section-title em { font-style: italic; color: var(--teal-dark); }
  .section-sub {
    font-size: 1rem; color: var(--text-mid); line-height: 1.7;
    max-width: 540px;
  }
  .section-header { margin-bottom: 64px; }
  .section-header.centered { text-align: center; }
  .section-header.centered .section-sub { margin: 0 auto; }
  .section-header.centered .section-tag { justify-content: center; }
  .section-header.centered .section-tag::before { display: none; }
  .section-header.centered .section-tag::after {
    content: ''; width: 28px; height: 2px;
    background: var(--teal-light); border-radius: 1px;
  }

  .stats-section {
    background: linear-gradient(to bottom, #064e3b, #134e4a, #064e3b);
    padding: 80px 5%; overflow: hidden; position: relative;
  }
  .stats-section::before {
    content: ''; position: absolute; top: -50%; right: -10%;
    width: 60%; height: 200%; border-radius: 50%;
    background: rgba(78,205,196,0.06); pointer-events: none;
  }
  .stats-grid {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 2px; position: relative; z-index: 1;
  }
  .stat-item {
    padding: 48px 32px; text-align: center; position: relative;
  }
  .stat-item:not(:last-child)::after {
    content: ''; position: absolute; right: 0; top: 20%; bottom: 20%;
    width: 1px; background: rgba(255,255,255,0.12);
  }
  .stat-num {
    font-family: 'Nunito', sans-serif;
    font-size: clamp(2.4rem, 4vw, 3.6rem); font-weight: 800;
    color: var(--teal-light); display: block; line-height: 1;
    margin-bottom: 8px;
  }
  .stat-label {
    font-size: 0.9rem; color: rgba(255,255,255,0.6);
    letter-spacing: 0.02em;
  }
  .stat-desc {
    font-size: 0.78rem; color: rgba(255,255,255,0.35);
    margin-top: 6px; font-style: italic;
  }

  .services-section { background: var(--white); }
  .services-layout { display: grid; grid-template-columns: 1fr 2fr; gap: 80px; align-items: start; }
  .services-intro .section-sub { margin-bottom: 32px; }
  .services-list { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .service-card {
    background: var(--cream-soft); border: 1px solid var(--border);
    border-radius: 20px; padding: 32px; position: relative; overflow: hidden;
    transition: all 0.3s ease; cursor: default;
  }
  .service-card::before {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, var(--teal-dark), var(--teal-light));
    opacity: 0; transition: opacity 0.3s;
  }
  .service-card:hover::before { opacity: 1; }
  .service-card:hover { border-color: transparent; transform: translateY(-4px); box-shadow: var(--shadow-lg); }
  .service-card > * { position: relative; z-index: 1; }
  .service-card:hover .service-icon { background: rgba(255,255,255,0.2); }
  .service-card:hover .service-title,
  .service-card:hover .service-desc,
  .service-card:hover .service-num { color: var(--white) !important; }

  .service-num {
    font-family: 'Nunito', sans-serif; font-size: 0.72rem;
    font-weight: 700; letter-spacing: 0.1em; color: var(--teal-light);
    margin-bottom: 16px; display: block;
    transition: color 0.3s;
  }
  .service-icon {
    width: 52px; height: 52px; border-radius: 14px;
    background: linear-gradient(135deg, var(--teal-dark), var(--teal-light));
    display: flex; align-items: center; justify-content: center;
    font-size: 1.4rem; margin-bottom: 20px;
    transition: background 0.3s;
    color: var(--white);
  }
  .service-icon svg {
    color: var(--white);
    stroke: var(--white);
  }
  .service-title {
    font-family: 'Nunito', sans-serif; font-size: 1.05rem;
    font-weight: 700; color: var(--primary);
    margin-bottom: 10px; transition: color 0.3s;
  }
  .service-desc {
    font-size: 0.88rem; line-height: 1.65;
    color: var(--text-mid); transition: color 0.3s;
  }

  .about-section { background: var(--cream-soft); }
  .about-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
  .about-visual-wrap { position: relative; }
  .about-img-main {
    border-radius: 24px; overflow: hidden; position: relative;
    background: linear-gradient(160deg, var(--teal-dark) 0%, var(--primary) 100%);
    min-height: 480px; display: flex; align-items: flex-end; padding: 40px;
  }
  .about-img-overlay {
    position: absolute; inset: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><circle cx="30" cy="30" r="1.5" fill="rgba(78,205,196,0.2)"/></svg>');
    background-size: 30px 30px;
  }
  .about-img-content { position: relative; z-index: 1; }
  .about-img-content h3 {
    font-family: 'Nunito', sans-serif;
    font-size: 1.8rem; color: var(--white);
    font-weight: 700; margin-bottom: 8px;
  }
  .about-img-content p { color: rgba(255,255,255,0.65); font-size: 0.9rem; }
  .about-badge {
    position: absolute; top: 28px; right: -20px;
    background: var(--white); border-radius: 16px;
    padding: 16px 20px; box-shadow: var(--shadow);
    text-align: center; min-width: 120px;
    border: 1px solid var(--border);
  }
  .about-badge .badge-num {
    font-family: 'Nunito', sans-serif; font-size: 2rem;
    font-weight: 800; color: var(--teal-dark); display: block;
  }
  .about-badge .badge-txt { font-size: 0.75rem; color: var(--text-light); }
  .about-content .section-sub { margin-bottom: 36px; }
  .about-features { display: flex; flex-direction: column; gap: 20px; margin-bottom: 40px; }
  .about-feature {
    display: flex; gap: 16px; align-items: flex-start;
    padding: 20px; background: var(--white); border-radius: 14px;
    border: 1px solid var(--border);
    transition: box-shadow 0.2s;
  }
  .about-feature:hover { box-shadow: var(--shadow); }
  .about-feature-icon {
    width: 44px; height: 44px; border-radius: 12px;
    background: linear-gradient(135deg, rgba(26,92,92,0.1), rgba(78,205,196,0.15));
    display: flex; align-items: center; justify-content: center;
    font-size: 1.2rem; flex-shrink: 0;
    color: var(--teal-dark);
  }
  .about-feature-icon svg {
    color: var(--teal-dark);
    stroke: var(--teal-dark);
  }
  .about-feature-text h4 {
    font-family: 'Nunito', sans-serif; font-size: 0.95rem;
    font-weight: 700; color: var(--primary); margin-bottom: 4px;
  }
  .about-feature-text p { font-size: 0.85rem; color: var(--text-mid); line-height: 1.6; }

  .process-section { background: var(--white); }
  .process-timeline {
    display: grid; grid-template-columns: repeat(5, 1fr);
    gap: 0; position: relative; margin-top: 64px;
  }
  .process-timeline::before {
    content: ''; position: absolute; top: 36px; left: 10%; right: 10%;
    height: 2px; background: linear-gradient(90deg, var(--teal-light), var(--teal-dark));
    z-index: 0;
  }
  .process-step { text-align: center; padding: 0 16px; position: relative; z-index: 1; }
  .process-num {
    width: 72px; height: 72px; border-radius: 50%;
    background: var(--white); border: 3px solid var(--teal-light);
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 24px;
    font-family: 'Nunito', sans-serif; font-size: 1.2rem;
    font-weight: 800; color: var(--teal-dark);
    position: relative; z-index: 1;
    box-shadow: 0 4px 16px rgba(78,205,196,0.25);
    transition: all 0.3s;
  }
  .process-step:hover .process-num {
    background: linear-gradient(135deg, var(--teal-dark), var(--teal-light));
    color: var(--white); border-color: transparent;
    transform: scale(1.1);
  }
  .process-icon { font-size: 1.5rem; margin-bottom: 14px; color: var(--teal-dark); display: flex; align-items: center; justify-content: center; }
  .process-icon svg {
    color: var(--teal-dark);
    stroke: var(--teal-dark);
  }
  .process-step h4 {
    font-family: 'Nunito', sans-serif; font-size: 0.95rem;
    font-weight: 700; color: var(--primary); margin-bottom: 8px;
  }
  .process-step p { font-size: 0.82rem; color: var(--text-mid); line-height: 1.6; }

  .industries-section { background: var(--cream-soft); }
  .industries-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
  }
  .industry-card {
    border-radius: 20px; overflow: hidden; position: relative;
    min-height: 240px; cursor: default;
    background: var(--white); border: 1px solid var(--border);
    transition: all 0.3s; display: flex; flex-direction: column;
    justify-content: flex-end; padding: 32px;
  }
  .industry-card-bg {
    position: absolute; inset: 0; z-index: 0;
    transition: opacity 0.3s;
  }
  .industry-card:nth-child(1) .industry-card-bg { background: linear-gradient(160deg, #1A5C5C 0%, #2A7A72 100%); }
  .industry-card:nth-child(2) .industry-card-bg { background: linear-gradient(160deg, #2D3B4E 0%, #1A5C5C 100%); }
  .industry-card:nth-child(3) .industry-card-bg { background: linear-gradient(160deg, #2A7A72 0%, #4ECDC4 100%); }
  .industry-card:nth-child(4) .industry-card-bg { background: linear-gradient(160deg, #2D3B4E 0%, #3D5A7A 100%); }
  .industry-card:nth-child(5) .industry-card-bg { background: linear-gradient(160deg, #1A5C5C 0%, #2D3B4E 100%); }
  .industry-card:nth-child(6) .industry-card-bg { background: linear-gradient(160deg, #2A7A72 0%, #2D3B4E 100%); }
  .industry-card-bg { opacity: 0.9; }
  .industry-card:hover .industry-card-bg { opacity: 1; }
  .industry-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
  .industry-icon {
    position: absolute; top: 28px; right: 28px; z-index: 1;
    font-size: 2.2rem; opacity: 0.4; transition: opacity 0.3s;
    color: rgba(255,255,255, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .industry-icon svg {
    color: rgba(255,255,255, 0.8);
    stroke: rgba(255,255,255, 0.8);
  }
  .industry-card:hover .industry-icon { opacity: 0.7; }
  .industry-content { position: relative; z-index: 1; }
  .industry-content h3 {
    font-family: 'Nunito', sans-serif; font-size: 1.05rem;
    font-weight: 700; color: var(--white); margin-bottom: 8px;
  }
  .industry-content p { font-size: 0.83rem; color: rgba(255,255,255,0.65); line-height: 1.6; }

  .testimonials-section {
    background: linear-gradient(135deg, var(--primary) 0%, var(--teal-dark) 100%);
    padding: 100px 5%; position: relative; overflow: hidden;
  }
  .testimonials-section::before {
    content: '"'; position: absolute; top: -60px; left: 5%;
    font-family: 'Nunito', sans-serif; font-size: 28rem;
    color: rgba(78,205,196,0.04); line-height: 1; pointer-events: none;
    z-index: 0;
  }
  .testimonials-section .section-title,
  .testimonials-section .section-sub,
  .testimonials-section .section-tag { color: var(--white) !important; }
  .testimonials-section .section-sub { color: rgba(255,255,255,0.65) !important; }
  .testimonials-section .section-tag { color: var(--teal-light) !important; }

  .testimonials-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 24px; position: relative; z-index: 1;
  }
  .testimonial-card {
    background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12);
    border-radius: 20px; padding: 36px;
    backdrop-filter: blur(8px);
    transition: all 0.3s;
  }
  .testimonial-card:hover {
    background: rgba(255,255,255,0.12); transform: translateY(-4px);
    border-color: rgba(78,205,196,0.3);
  }
  .testimonial-stars { color: var(--teal-light); font-size: 1rem; margin-bottom: 20px; letter-spacing: 2px; }
  .testimonial-text {
    font-family: 'Nunito', sans-serif; font-size: 0.95rem;
    color: rgba(255,255,255,0.85); line-height: 1.75;
    font-style: italic; margin-bottom: 28px;
  }
  .testimonial-author { display: flex; align-items: center; gap: 14px; }
  .testimonial-avatar {
    width: 46px; height: 46px; border-radius: 50%;
    background: linear-gradient(135deg, var(--teal-light), var(--teal-dark));
    display: flex; align-items: center; justify-content: center;
    font-family: 'Nunito', sans-serif; font-size: 1rem;
    font-weight: 700; color: var(--white); flex-shrink: 0;
  }
  .testimonial-author-info .name {
    font-family: 'Nunito', sans-serif; font-size: 0.9rem;
    font-weight: 700; color: var(--white);
  }
  .testimonial-author-info .role { font-size: 0.78rem; color: rgba(255,255,255,0.5); margin-top: 2px; }

  .team-section { background: var(--white); }
  .team-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; }
  .team-card {
    border-radius: 20px; overflow: hidden;
    border: 1px solid var(--border);
    transition: all 0.3s;
    background: var(--cream-soft);
  }
  .team-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); border-color: var(--teal-pale); }
  .team-photo {
    height: 220px; position: relative; overflow: hidden;
    background: linear-gradient(160deg, var(--teal-dark), var(--primary));
    display: flex; align-items: center; justify-content: center;
  }
  .team-avatar-large {
    width: 90px; height: 90px; border-radius: 50%;
    background: rgba(255,255,255,0.2); border: 3px solid rgba(255,255,255,0.4);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Nunito', sans-serif; font-size: 2rem;
    font-weight: 700; color: var(--white);
  }
  .team-photo-overlay {
    position: absolute; bottom: 0; left: 0; right: 0; height: 60px;
    background: linear-gradient(to top, rgba(45,59,78,0.4), transparent);
  }
  .team-info { padding: 24px; }
  .team-info h3 {
    font-family: 'Nunito', sans-serif; font-size: 1rem;
    font-weight: 700; color: var(--primary); margin-bottom: 4px;
  }
  .team-info .role-tag {
    font-size: 0.78rem; color: var(--teal-dark); font-weight: 600;
    margin-bottom: 12px; display: block;
  }
  .team-info p { font-size: 0.82rem; color: var(--text-mid); line-height: 1.6; }
  .team-socials { display: flex; gap: 8px; margin-top: 14px; }
  .team-social {
    width: 30px; height: 30px; border-radius: 8px;
    background: var(--cream); border: 1px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    font-size: 0.8rem; text-decoration: none; color: var(--primary);
    transition: all 0.2s;
  }
  .team-social:hover { background: var(--teal-dark); color: var(--white); border-color: var(--teal-dark); }

  .cta-section {
    background: var(--cream-soft); padding: 100px 5%;
  }
  .cta-inner {
    background: 'linear-gradient(to bottom, #064e3b, #134e4a, #064e3b)'
    border-radius: 32px; padding: 80px 60px;
    display: grid; grid-template-columns: 1fr auto;
    align-items: center; gap: 48px;
    position: relative; overflow: hidden;
  }
  .cta-inner::before {
    content: ''; position: absolute;
    width: 500px; height: 500px; border-radius: 50%;
    background: rgba(78,205,196,0.08);
    right: -150px; top: -200px;
    pointer-events: none;
  }
  .cta-inner::after {
    content: ''; position: absolute;
    width: 300px; height: 300px; border-radius: 50%;
    background: rgba(78,205,196,0.05);
    left: -100px; bottom: -100px;
    pointer-events: none;
  }
  .cta-text { position: relative; z-index: 1; }
  .cta-text h2 {
    font-family: 'Nunito', sans-serif;
    font-size: clamp(1.8rem, 3vw, 2.6rem); font-weight: 700;
    color: var(--white); margin-bottom: 16px; line-height: 1.2;
  }
  .cta-text p { font-size: 1rem; color: rgba(255,255,255,0.7); line-height: 1.7; max-width: 500px; }
  .cta-actions { display: flex; flex-direction: column; gap: 12px; position: relative; z-index: 1; white-space: nowrap; }
  .btn-white {
    background: var(--white); color: var(--primary);
    padding: 14px 32px; border-radius: 10px;
    font-family: 'Nunito', sans-serif; font-weight: 700;
    font-size: 0.9rem; letter-spacing: 0.04em;
    text-decoration: none; border: 2px solid var(--white);
    transition: all 0.25s; display: inline-block; text-align: center;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  }
  .btn-white:hover { background: var(--teal-light); border-color: var(--teal-light); color: var(--primary); transform: translateY(-2px); }
  .btn-ghost {
    background: transparent; color: rgba(255,255,255,0.8);
    padding: 14px 32px; border-radius: 10px;
    font-family: 'Nunito', sans-serif; font-weight: 600;
    font-size: 0.9rem; letter-spacing: 0.04em;
    text-decoration: none; border: 1.5px solid rgba(255,255,255,0.3);
    transition: all 0.25s; display: inline-block; text-align: center;
  }
  .btn-ghost:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.6); color: var(--white); }

  .contact-section { background: var(--white); }
  .contact-layout { display: grid; grid-template-columns: 1fr 1.4fr; gap: 80px; }
  .contact-info .section-sub { margin-bottom: 40px; }
  .contact-details { display: flex; flex-direction: column; gap: 20px; }
  .contact-item {
    display: flex; gap: 16px; align-items: flex-start;
    padding: 20px; background: var(--cream-soft); border-radius: 14px;
    border: 1px solid var(--border);
  }
  .contact-item-icon {
    width: 44px; height: 44px; border-radius: 12px;
    background: linear-gradient(135deg, var(--teal-dark), var(--teal-light));
    display: flex; align-items: center; justify-content: center;
    font-size: 1.2rem; flex-shrink: 0;
    color: var(--white);
  }
  .contact-item-icon svg {
    color: var(--white);
    stroke: var(--white);
  }
  .contact-item-text label {
    font-family: 'Nunito', sans-serif; font-size: 0.72rem;
    font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;
    color: var(--teal-dark); display: block; margin-bottom: 4px;
  }
  .contact-item-text span { font-size: 0.9rem; color: var(--text-dark); }

  .contact-form {
    background: var(--cream-soft); border: 1px solid var(--border);
    border-radius: 24px; padding: 48px;
  }
  .contact-form h3 {
    font-family: 'Nunito', sans-serif; font-size: 1.2rem;
    font-weight: 700; color: var(--primary); margin-bottom: 32px;
  }
  .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .form-group { display: flex; flex-direction: column; gap: 8px; }
  .form-group.full { grid-column: 1 / -1; }
  .form-group label {
    font-family: 'Nunito', sans-serif; font-size: 0.78rem;
    font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;
    color: var(--text-mid);
  }
  .form-group input, .form-group select, .form-group textarea {
    background: var(--white); border: 1.5px solid var(--border);
    border-radius: 10px; padding: 13px 16px;
    font-family: 'Nunito', sans-serif; font-size: 0.92rem;
    color: var(--text-dark); outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    width: 100%; appearance: none;
  }
  .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
    border-color: var(--teal-mid);
    box-shadow: 0 0 0 3px rgba(42,122,114,0.12);
  }
  .form-group textarea { resize: vertical; min-height: 120px; }
  .form-submit {
    margin-top: 24px;
    background: var(--teal-dark); color: var(--white);
    padding: 14px 36px; border-radius: 10px;
    font-family: 'Nunito', sans-serif; font-weight: 700;
    font-size: 0.9rem; letter-spacing: 0.04em;
    border: none; cursor: pointer;
    box-shadow: 0 4px 20px rgba(26,92,92,0.3);
    transition: all 0.25s; width: 100%;
  }
  .form-submit:hover { background: var(--primary); transform: translateY(-1px); box-shadow: 0 6px 28px rgba(45,59,78,0.25); }

  footer {
    background: var(--primary);
    padding: 72px 5% 32px;
  }
  .footer-grid {
    display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: 48px; margin-bottom: 56px;
  }
  .footer-brand { }
  .footer-logo { display: flex; align-items: center; gap: 14px; margin-bottom: 20px; }
  .footer-logo img { height: 44px; filter: brightness(0) invert(1) opacity(0.9); }
  .footer-tagline {
    font-size: 0.88rem; color: rgba(255,255,255,0.55);
    line-height: 1.7; max-width: 280px; margin-bottom: 28px;
  }
  .footer-socials { display: flex; gap: 10px; }
  .footer-social {
    width: 38px; height: 38px; border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.15);
    display: flex; align-items: center; justify-content: center;
    color: rgba(255,255,255,0.5); text-decoration: none;
    font-size: 0.95rem; transition: all 0.2s;
  }
  .footer-social:hover { background: var(--teal-dark); border-color: var(--teal-dark); color: var(--white); }
  .footer-col h4 {
    font-family: 'Nunito', sans-serif; font-size: 0.8rem;
    font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;
    color: rgba(255,255,255,0.9); margin-bottom: 20px;
  }
  .footer-links { display: flex; flex-direction: column; gap: 10px; list-style: none; }
  .footer-links a {
    font-size: 0.88rem; color: rgba(255,255,255,0.5);
    text-decoration: none; transition: color 0.2s;
  }
  .footer-links a:hover { color: var(--teal-light); }
  .footer-newsletter p { font-size: 0.85rem; color: rgba(255,255,255,0.5); line-height: 1.6; margin-bottom: 18px; }
  .newsletter-form { display: flex; gap: 0; border-radius: 10px; overflow: hidden; }
  .newsletter-form input {
    flex: 1; background: rgba(255,255,255,0.08);
    border: 1.5px solid rgba(255,255,255,0.15); border-right: none;
    color: var(--white); padding: 12px 16px;
    font-family: 'Nunito', sans-serif; font-size: 0.88rem;
    outline: none; border-radius: 10px 0 0 10px;
  }
  .newsletter-form input::placeholder { color: rgba(255,255,255,0.3); }
  .newsletter-form button {
    background: var(--teal-dark); color: var(--white);
    border: none; padding: 12px 20px;
    font-family: 'Nunito', sans-serif; font-weight: 700;
    font-size: 0.82rem; cursor: pointer;
    border-radius: 0 10px 10px 0;
    transition: background 0.2s;
  }
  .newsletter-form button:hover { background: var(--teal-light); color: var(--primary); }
  .footer-bottom {
    border-top: 1px solid rgba(255,255,255,0.08);
    padding-top: 28px; display: flex; justify-content: space-between;
    align-items: center; flex-wrap: wrap;
  }
  .footer-bottom p { font-size: 0.82rem; color: rgba(255,255,255,0.35); }
  .footer-bottom-links { display: flex; gap: 24px; }
  .footer-bottom-links a { font-size: 0.82rem; color: rgba(255,255,255,0.35); text-decoration: none; transition: color 0.2s; }
  .footer-bottom-links a:hover { color: var(--teal-light); }

  .reveal {
    opacity: 0; transform: translateY(32px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .reveal.visible { opacity: 1; transform: translateY(0); }

  .mobile-menu {
    display: none; position: fixed; inset: 0; z-index: 999;
    background: var(--white); flex-direction: column;
    align-items: center; justify-content: center; gap: 24px;
    padding: 40px;
  }
  .mobile-menu.open { display: flex; }
  .mobile-menu a {
    font-family: 'Nunito', sans-serif; font-size: 1.4rem;
    font-weight: 700; color: var(--primary); text-decoration: none;
    transition: color 0.2s;
  }
  .mobile-menu a:hover { color: var(--teal-dark); }
  .mobile-close {
    position: absolute; top: 24px; right: 24px;
    background: none; border: none; font-size: 1.5rem;
    cursor: pointer; color: var(--primary);
    width: 44px; height: 44px; border-radius: 12px;
    background: var(--cream); display: flex; align-items: center; justify-content: center;
  }









  /* ===== CTA SECTION MOBILE RESPONSIVENESS FIXES ===== */
  /* Target only the CTA section for mobile adjustments */
  @media (max-width: 768px) {
    .cta-section {
      padding: 60px 5% !important;
    }
    
    .cta-inner {
      padding: 40px 24px !important;
      gap: 32px !important;
    }
    
    .cta-text h2 {
      font-size: 1.6rem !important;
      line-height: 1.3 !important;
    }
    
    .cta-text p {
      font-size: 0.88rem !important;
      max-width: 100% !important;
    }
    
    /* Decrease button size for mobile */
    .btn-white, 
    .btn-ghost {
      padding: 10px 20px !important;
      font-size: 0.8rem !important;
      white-space: nowrap !important;
    }
    
    .cta-actions {
      flex-direction: row !important;
      flex-wrap: wrap !important;
      justify-content: center !important;
      gap: 12px !important;
    }
  }

  @media (max-width: 480px) {
    .cta-section {
      padding: 48px 4% !important;
    }
    
    .cta-inner {
      padding: 32px 20px !important;
    }
    
    .cta-text h2 {
      font-size: 1.4rem !important;
    }
    
    .cta-text p {
      font-size: 0.85rem !important;
    }
    
    /* Further decrease button size for small phones */
    .btn-white, 
    .btn-ghost {
      padding: 8px 16px !important;
      font-size: 0.75rem !important;
    }
  }












  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  @media (max-width: 1100px) {
    .services-layout { grid-template-columns: 1fr; gap: 48px; }
    .about-layout { grid-template-columns: 1fr; gap: 48px; }
    .about-visual-wrap { max-width: 560px; }
    .about-badge { right: 20px; }
    .team-grid { grid-template-columns: repeat(2, 1fr); }
    .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
    .process-timeline { grid-template-columns: repeat(3, 1fr); }
    .process-timeline::before { display: none; }
  }

  @media (max-width: 768px) {
    .navbar {
      background: linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,251,252,0.95) 100%);
      box-shadow: 0 8px 32px rgba(26, 92, 92, 0.12);
      border-bottom: 1px solid rgba(26, 92, 92, 0.15);
      position: fixed;
      z-index: 1000;
    }
    .navbar::before {
      content: '';
      position: absolute;
      top: 0;
      left: -50%;
      width: 200%;
      height: 100%;
      background: radial-gradient(circle at 20% 50%, rgba(26, 92, 92, 0.05) 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(122, 198, 198, 0.04) 0%, transparent 50%);
      pointer-events: none;
    }
    .navbar.scrolled {
      background: linear-gradient(180deg, rgba(255,255,255,0.99) 0%, rgba(250,252,253,0.98) 100%);
      box-shadow: 0 12px 40px rgba(26, 92, 92, 0.15);
    }
    .nav-links {
      display: none;
      position: fixed;
      top: 78px;
      left: 0;
      right: 0;
      flex-direction: column;
      background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,251,252,0.92) 100%);
      backdrop-filter: blur(8px);
      padding: 20px;
      gap: 8px;
      z-index: 1001;
      border-bottom: 2px solid rgba(26, 92, 92, 0.2);
      box-shadow: 0 12px 32px rgba(26, 92, 92, 0.1);
    }
    .nav-links.active {
      display: flex !important;
    }
    .nav-links a {
      padding: 8px 0;
      color: var(--primary);
      transition: color 0.3s;
    }
    .nav-links a:hover {
      color: var(--teal-dark);
    }
    .nav-cta {
      display: inline-flex !important;
      justify-content: center;
      width: 100%;
      margin-top: 8px;
    }
    .hamburger { display: flex; }
    .hero { grid-template-columns: 1fr; padding: 100px 5% 60px; }
    .hero-visual { display: none; }
    .stats-grid { grid-template-columns: repeat(2, 1fr); }
    .stat-item:nth-child(2)::after { display: none; }
    .services-list { grid-template-columns: 1fr; }
    .industries-grid { grid-template-columns: 1fr 1fr; }
    .testimonials-grid { grid-template-columns: 1fr; }
    .team-grid { grid-template-columns: repeat(2, 1fr); }
    .cta-inner { grid-template-columns: 1fr; text-align: center; padding: 48px 32px; }
    .cta-text p { margin: 0 auto; }
    .cta-actions { flex-direction: row; flex-wrap: wrap; justify-content: center; }
    .contact-layout { grid-template-columns: 1fr; }
    .footer-grid { grid-template-columns: 1fr; }
    .form-grid { grid-template-columns: 1fr; }
    .process-timeline { grid-template-columns: 1fr 1fr; }
  }

  @media (max-width: 480px) {
    .stats-grid { grid-template-columns: 1fr; }
    .stat-item::after { display: none !important; }
    .industries-grid { grid-template-columns: 1fr; }
    .team-grid { grid-template-columns: 1fr; }
    .process-timeline { grid-template-columns: 1fr; }
  }
`;

export default function Home2() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ status: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) {
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      }, 0);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [mobileOpen]);

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));
  }, []);

  useEffect(() => {
    const animateCounter = (el, target, suffix) => {
      let start = 0;
      const duration = 1800;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(ease * target);
        el.textContent = current + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const statsObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const nums = entry.target.querySelectorAll('.stat-num');
          const data = [
            { val: 250, suffix: '+' },
            { val: 94, suffix: '%' },
            { val: 2.4, suffix: 'B', special: true },
            { val: 15, suffix: '+' }
          ];
          nums.forEach((el, i) => {
            if (data[i].special) {
              el.textContent = '$2.4B';
            } else {
              animateCounter(el, data[i].val, data[i].suffix);
            }
          });
          statsObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) statsObs.observe(statsSection);
  }, []);

  // Form handlers
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ status: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({ 
          status: 'success', 
          message: data.message || 'Message sent successfully! We will get back to you soon.' 
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
        // Clear success message after 5 seconds
        setTimeout(() => setFormStatus({ status: '', message: '' }), 5000);
      } else {
        setFormStatus({ 
          status: 'error', 
          message: data.message || 'Failed to send message. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus({ 
        status: 'error', 
        message: 'Network error. Please ensure the backend server is running on http://localhost:5000' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap" rel="stylesheet"/>
      <style>{styles}</style>
      <Header />
      <section className="hero" id="home">
        <div className="hero-bg"></div>
        <div className="hero-bg-shape" style={{
          backgroundImage: `url(${meetingImg})`,
          backgroundPosition: 'right center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: 1
        }}></div>
        <div className="hero-bg-dots"></div>

        <div className="hero-content">
          <div className="hero-tag"><span></span> Operational Excellence</div>
          <h1>Driving Business<br/><em>Efficiency Forward</em></h1>
          <p>EffiCore Group partners with organisations to streamline operations, optimise processes and build sustainable performance frameworks that deliver measurable impact.</p>
          <div className="hero-actions">
            <a href="#services" className="btn-primary">Explore Services →</a>
            <a href="#contact" className="btn-outline">Book a Consultation</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card-stack">
            <div className="hero-main-card">
              <div className="hero-card-header" style={{alignItems: 'flex-start'}}>
                <div style={{
                  background: 'rgba(255,255,255,0.9)',
                  padding: '12px 16px',
                  borderRadius: 10,
                  color: 'var(--text-dark)',
                  maxWidth: '420px'
                }}>
                  <h3 style={{margin: 0, fontSize: '0.95rem', fontWeight: 700}}>100% HIPPA Compliant</h3>
                  <h2 style={{margin: '6px 0 8px', fontSize: '1.25rem', fontWeight: 800}}>Our mission</h2>
                  <p style={{margin: 0, fontSize: '0.95rem', color: 'var(--text-dark)'}}>“Tailored to maximize revenue for medical and dental practices while streamlining daily operations for seamless efficiency.”</p>
                </div>
              </div>
            </div>
            <div className="hero-mini-card">
              <div className="mini-icon"><Target size={20} color="#1A5C5C" /></div>
              <div className="mini-text">
                <div className="mt">Project Delivered</div>
                <div className="ms">On time, on budget</div>
              </div>
            </div>
            <div className="hero-mini-card2">
              <div className="mini-icon"><CheckCircle size={20} color="white" /></div>
              <div className="mini-text">
                <div className="mt">ISO Certified</div>
                <div className="ms">Quality assured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar" style={{padding: '18px 5%'}}>
        <div style={{display: 'flex', width: '100%', alignItems: 'center', gap: 24}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: 6, flex: '0 0 180px'}}>
            <span className="trust-label">We Cover</span>
            <span className="trust-label">all insurances</span>
            <span className="trust-label">including</span>
          </div>
          <div style={{display: 'flex', flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
            <span className="trust-client">HealthFirst</span>
            <span className="trust-client">Fidelis</span>
            <span className="trust-client">Delta Dental</span>
            <span className="trust-client">UHC</span>
            <span className="trust-client">Humana</span>
            <span className="trust-client">Cigna</span>
            <span className="trust-client">Humana</span>
          </div>
        </div>
      </div>

      {/* STATS */}
      <section className="stats-section">
        <div className="stats-grid reveal">
          <div className="stat-item">
            <span className="stat-num">250+</span>
            <div className="stat-label">Projects Delivered</div>
            <div className="stat-desc">Across 18 countries</div>
          </div>
          <div className="stat-item">
            <span className="stat-num">94%</span>
            <div className="stat-label">Client Retention Rate</div>
            <div className="stat-desc">Year-on-year</div>
          </div>
          <div className="stat-item">
            <span className="stat-num">$2.4B</span>
            <div className="stat-label">Value Generated</div>
            <div className="stat-desc">For client organisations</div>
          </div>
          <div className="stat-item">
            <span className="stat-num">15+</span>
            <div className="stat-label">Years of Expertise</div>
            <div className="stat-desc">Proven methodologies</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section" id="services">
        <div className="services-layout">
          <div className="services-intro reveal">
            <div className="section-tag">What We Do</div>
            <h2 className="section-title">Core <em>Services</em> We Provide</h2>
            <p className="section-sub">From strategy to execution, we offer a comprehensive suite of consulting services designed to transform how your organisation operates.</p>
            <a href="#contact" className="btn-primary" style={{ marginTop: '8px' }}>Start a Project →</a>
          </div>
          <div className="services-list reveal">
            {[
              { num: '01', icon: <Settings size={20} />, title: 'Process Optimisation', desc: 'Identify bottlenecks, eliminate waste and redesign workflows to unlock peak operational performance across your organisation.' },
              { num: '02', icon: <Hammer size={20} />, title: 'Organisational Design', desc: 'Restructure teams, roles and reporting lines to align your people strategy with business objectives and growth ambitions.' },
              { num: '03', icon: <BarChart3 size={20} />, title: 'Performance Management', desc: 'Build robust KPI frameworks, dashboards and review cadences that keep every level of the business accountable and aligned.' },
              { num: '04', icon: <Lightbulb size={20} />, title: 'Digital Transformation', desc: 'Navigate technology adoption and change management to modernise operations without disrupting core business continuity.' },
              { num: '05', icon: <Search size={20} />, title: 'Operational Due Diligence', desc: 'Deep-dive assessments of operational capability, readiness and efficiency risk for investment, M&A or growth scenarios.' },
              { num: '06', icon: <Handshake size={20} />, title: 'Change Management', desc: 'Structured programmes to guide your workforce through transformation with minimal resistance and maximum engagement.' }
            ].map((service) => (
              <div key={service.num} className="service-card">
                <span className="service-num">{service.num}</span>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">
        <div className="about-layout">
          <div className="about-visual-wrap reveal">
            <div style={{ background: 'linear-gradient(to bottom, #064e3b, #134e4a, #064e3b)', borderRadius: '24px', padding: '40px', minHeight: '480px', display: 'flex', alignItems: 'flex-end' }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', color: 'white', fontWeight: '700', marginBottom: '8px' }}>Built on a Foundation of Results</h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem' }}>Every engagement is driven by measurable outcomes</p>
              </div>
            </div>
            <div className="about-badge">
              <span className="badge-num">15+</span>
              <span className="badge-txt">Years of<br/>Excellence</span>
            </div>
          </div>
          <div className="about-content reveal">
            <div className="section-tag">Who We Are</div>
            <h2 className="section-title">Efficiency at <em>the Core</em> of Everything</h2>
            <p className="section-sub">EffiCore Group is a global management consulting firm specialising in operational excellence. We work with organisations across sectors to build the internal capability and systems needed to perform at their best — consistently.</p>
            <div className="about-features">
              {[
                { icon: <Target size={18} />, title: 'Outcome-Focused Approach', desc: 'We define success in quantifiable terms from day one and every recommendation is tested against that benchmark.' },
                { icon: <Beaker size={18} />, title: 'Evidence-Based Methodology', desc: 'Our frameworks are grounded in decades of research and real-world application, not theoretical models.' },
                { icon: <Globe size={18} />, title: 'Global Reach, Local Expertise', desc: 'With offices and consultants across 12 countries, we bring global insight with deep local knowledge.' }
              ].map((feature, i) => (
                <div key={i} className="about-feature">
                  <div className="about-feature-icon">{feature.icon}</div>
                  <div className="about-feature-text">
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn-primary">Meet Our Team →</a>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section" id="process">
        <div className="section-header centered reveal">
          <div className="section-tag">How We Work</div>
          <h2 className="section-title">Our Proven <em>5-Step</em> Methodology</h2>
          <p className="section-sub">A structured, repeatable process that delivers consistent results — from the first conversation to the final review.</p>
        </div>
        <div className="process-timeline reveal">
          {[
            { num: '01', icon: <Search size={20} />, title: 'Discovery', desc: 'Deep-dive into your organisation\'s current state, challenges and strategic ambitions.' },
            { num: '02', icon: <Map size={20} />, title: 'Diagnosis', desc: 'Root-cause analysis and opportunity mapping to pinpoint where value is being lost.' },
            { num: '03', icon: <PenTool size={20} />, title: 'Design', desc: 'Co-create tailored solutions and transformation roadmaps with your leadership team.' },
            { num: '04', icon: <Rocket size={20} />, title: 'Deploy', desc: 'Hands-on implementation support ensuring changes embed effectively across the business.' },
            { num: '05', icon: <TrendingUp size={20} />, title: 'Sustain', desc: 'Performance monitoring, governance and coaching to lock in gains for the long term.' }
          ].map((step) => (
            <div key={step.num} className="process-step">
              <div className="process-num">{step.num}</div>
              <div className="process-icon">{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="industries-section" id="industries">
        <div className="section-header reveal">
          <div className="section-tag">Sectors We Serve</div>
          <h2 className="section-title">Industry <em>Expertise</em> That Matters</h2>
          <p className="section-sub">We bring deep sector knowledge to every engagement, ensuring solutions are grounded in industry-specific realities.</p>
        </div>
        <div className="industries-grid reveal">
          {[
            { icon: <Factory size={24} />, title: 'Manufacturing & Industrials', desc: 'Lean transformation, supply chain optimisation and operational excellence programmes.' },
            { icon: <Building2 size={24} />, title: 'Financial Services', desc: 'Process efficiency, regulatory readiness and front-to-back office transformation.' },
            { icon: <Hospital size={24} />, title: 'Healthcare & Life Sciences', desc: 'Pathway redesign, capacity optimisation and clinical operations improvement.' },
            { icon: <Package size={24} />, title: 'Retail & Consumer', desc: 'End-to-end supply chain, fulfilment and category management optimisation.' },
            { icon: <Zap size={24} />, title: 'Energy & Utilities', desc: 'Asset management, operational safety and transition planning for energy businesses.' },
            { icon: <Laptop size={24} />, title: 'Technology & SaaS', desc: 'Scaling operations, product delivery efficiency and go-to-market execution.' }
          ].map((industry, i) => (
            <div key={i} className="industry-card">
              <div className="industry-card-bg"></div>
              <div className="industry-icon">{industry.icon}</div>
              <div className="industry-content">
                <h3>{industry.title}</h3>
                <p>{industry.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section" id="testimonials" style={{ background: 'linear-gradient(to bottom, #064e3b, #134e4a, #064e3b)', borderRadius: '16px' }}>
        <div className="section-header centered reveal">
          <div className="section-tag">Client Stories</div>
          <h2 className="section-title">What Our <em>Clients</em> Say</h2>
          <p className="section-sub">Real results, real relationships. Here's what industry leaders say about working with EffiCore Group.</p>
        </div>
        <div className="testimonials-grid reveal">
          {[
            { stars: '★★★★★', text: '"EffiCore transformed our operations in under 12 months. The level of rigour, pragmatism and genuine commitment to outcomes was unlike anything we had experienced from a consulting firm before."', avatar: 'JS', name: 'James Sterling', role: 'COO, Nexus Corporation' },
            { stars: '★★★★★', text: '"The process optimisation programme delivered a 34% reduction in cycle times and unlocked over £8M in annual savings. EffiCore didn\'t just consult — they built our internal capability to sustain it."', avatar: 'AM', name: 'Amara Mensah', role: 'CFO, Vantara Global' },
            { stars: '★★★★★', text: '"We engaged EffiCore for our digital transformation programme and they exceeded expectations on every metric. Their structured methodology gave our team the clarity and confidence to drive real change."', avatar: 'RL', name: 'Rebecca Lin', role: 'CEO, Meridian Tech Group' }
          ].map((testimonial, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-stars">{testimonial.stars}</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{testimonial.avatar}</div>
                <div className="testimonial-author-info">
                  <div className="name">{testimonial.name}</div>
                  <div className="role">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="team-section" id="team">
        <div className="section-header centered reveal">
          <div className="section-tag">Our People</div>
          <h2 className="section-title">Meet the <em>Leadership</em> Team</h2>
          <p className="section-sub">Experienced practitioners who have led transformation at the world's most complex organisations.</p>
        </div>
        <div className="team-grid reveal">
          {[
            { avatar: 'AK', name: 'Andrew Kamara', role: 'Founder & Managing Director', desc: '20 years leading operational transformation across EMEA and Asia-Pacific markets.', bg: 'linear-gradient(160deg, var(--teal-dark), var(--primary))' },
            { avatar: 'SR', name: 'Sofia Rodriguez', role: 'Director, Process Excellence', desc: 'Lean Six Sigma Master Black Belt with expertise in manufacturing and logistics.', bg: 'linear-gradient(160deg, #2D3B4E, #3D5A7A)' },
            { avatar: 'MT', name: 'Marcus Trent', role: 'Director, Digital Transformation', desc: 'Former CTO with deep experience in enterprise technology and change delivery.', bg: 'linear-gradient(160deg, #2A7A72, #1A5C5C)' },
            { avatar: 'NP', name: 'Nadia Patel', role: 'Head of Organisational Design', desc: 'Specialist in workforce restructuring and capability building for growth-stage firms.', bg: 'linear-gradient(160deg, #1A5C5C, #2D3B4E)' }
          ].map((member, i) => (
            <div key={i} className="team-card">
              <div className="team-photo" style={{ background: member.bg }}>
                <div className="team-avatar-large">{member.avatar}</div>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <span className="role-tag">{member.role}</span>
                <p>{member.desc}</p>
                <div className="team-socials">
                  <a className="team-social" href="#">in</a>
                  <a className="team-social" href="#">✉</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner reveal" style={{ background: 'linear-gradient(to bottom, #064e3b, #134e4a, #064e3b)', borderRadius: '16px' }}>
          <div className="cta-text">
            <h2>Ready to Put Efficiency at the Core?</h2>
            <p>Every day of operational inefficiency has a cost. Let's talk about what EffiCore Group can achieve for your organisation — starting now.</p>
          </div>
          <div className="cta-actions">
            <a href="#contact" className="btn-white">Book a Free Consultation</a>
            <a href="#services" className="btn-ghost">View All Services</a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="contact-layout">
          <div className="contact-info reveal">
            <div className="section-tag">Get in Touch</div>
            <h2 className="section-title">Let's Start a <em>Conversation</em></h2>
            <p className="section-sub">Whether you have a specific challenge in mind or simply want to explore what's possible, our team is ready to listen.</p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-item-icon"><MapPin size={24} /></div>
                <div className="contact-item-text">
                  <label>Address</label>
                  <span>5900 Balcones Dr Ste 14282 Austin Texas, 78731</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon"><Phone size={24} /></div>
                <div className="contact-item-text">
                  <label>Phone</label>
                  <span>+1(512) 920-6338</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon"><Mail size={24} /></div>
                <div className="contact-item-text">
                  <label>Email</label>
                  <span>Info@efficoregroup.com</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon"><Clock size={24} /></div>
                <div className="contact-item-text">
                  <label>Office Hours</label>
                  <span>Monday – Friday, 8:30am – 6:00pm GMT</span>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form reveal">
            <h3>Send Us a Message</h3>
            {formStatus.message && (
              <div style={{
                padding: '16px',
                marginBottom: '20px',
                borderRadius: '8px',
                backgroundColor: formStatus.status === 'success' ? 'rgba(78, 205, 196, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                borderLeft: `4px solid ${formStatus.status === 'success' ? '#4ECDC4' : '#EF4444'}`,
                color: formStatus.status === 'success' ? '#1A5C5C' : '#DC2626'
              }}>
                {formStatus.message}
              </div>
            )}
            <form onSubmit={handleFormSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label>First Name *</label>
                  <input 
                    type="text" 
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last Name *</label>
                  <input 
                    type="text" 
                    name="lastName"
                    placeholder="Smith"
                    value={formData.lastName}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="+44 20 0000 0000"
                    value={formData.phone}
                    onChange={handleFormChange}
                  />
                </div>
                <div className="form-group">
                  <label>Company</label>
                  <input 
                    type="text" 
                    name="company"
                    placeholder="Your organisation"
                    value={formData.company}
                    onChange={handleFormChange}
                  />
                </div>
                <div className="form-group">
                  <label>Service Interest</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleFormChange}
                  >
                    <option value="">Select a service...</option>
                    <option>Process Optimisation</option>
                    <option>Organisational Design</option>
                    <option>Performance Management</option>
                    <option>Digital Transformation</option>
                    <option>Operational Due Diligence</option>
                    <option>Change Management</option>
                  </select>
                </div>
                <div className="form-group full">
                  <label>Message *</label>
                  <textarea 
                    name="message"
                    placeholder="Tell us about your challenge or how we can help..."
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                  ></textarea>
                </div>
              </div>
              <button 
                type="submit" 
                className="form-submit"
                disabled={isSubmitting}
                style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
