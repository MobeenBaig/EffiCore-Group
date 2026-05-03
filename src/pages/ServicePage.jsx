import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function prettyFromSlug(slug){
  if(!slug) return '';
  let s = slug.replace(/-/g,' ');
  s = s.replace(/\band\b/g, '&');
  return s.split(' ').map(w => w.charAt(0).toUpperCase()+w.slice(1)).join(' ');
}

export default function ServicePage(){
  const { service } = useParams();
  const title = prettyFromSlug(service);

  return (
    <>
      <Header />
      <div style={{ padding: '80px 20px', maxWidth: 1000, margin: '0 auto' }}>
        <h1 style={{ fontFamily: "'Nunito', sans-serif", fontSize: '2rem', marginBottom: 12 }}>{title}</h1>
        <p style={{ color: 'var(--text-mid)' }}>This is the service page for <strong>{title}</strong>. You can customize this page to show details, contact information, and a CTA to start a project.</p>
        <div style={{ marginTop: 18 }}>
          {/* COMMENT */}
          <Link to="/" style={{ color: '#0f766e' }}>← Back to Home</Link>
        </div>
      </div>
      <Footer />
    </>
  )
}
