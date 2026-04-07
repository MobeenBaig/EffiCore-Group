import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './styles/header.css';
import Home2 from "./pages/home2";
import AboutEfficore from "./pages/AboutEfficore";
import MedicalBilling from "./pages/MedicalBilling";
import DentalBilling from "./pages/DentalBilling";
import Credentialing from "./pages/Credentialing";
import ARRecovery from "./pages/ARRecovery";
import PracticeDevelopment from "./pages/PracticeDevelopment";
import Hedis from "./pages/Hedis";
import Pcmh from "./pages/Pcmh";
import Ccm from "./pages/Ccm";
import PatientSch from "./pages/PatientSch";
import DocumentManag from "./pages/DocumentManag";
import PracticeOperation from "./pages/PracticeOperation";
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import LeadershipTeam from './pages/LeadershipTeam';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FAQ from './pages/FAQ';
import ContactUs from './pages/ContactUs';
import Careers from './pages/Careers';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/about" element={<AboutEfficore />} />
        <Route path="/leadership" element={<LeadershipTeam />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/medical-billing" element={<MedicalBilling />} />
        <Route path="/dental-billing" element={<DentalBilling />} />
        <Route path="/credentialing" element={<Credentialing />} />
        <Route path="/practice-development" element={<PracticeDevelopment />} />
        <Route path="/ar-recovery" element={<ARRecovery />} />
        <Route path="/hedis" element={<Hedis />} />
        <Route path="/pcmh" element={<Pcmh />} />
        <Route path="/ccm" element={<Ccm />} />
        <Route path="/patient-scheduling" element={<PatientSch />} />
        <Route path="/document-management" element={<DocumentManag />} />
        <Route path="/practice-operations-audit" element={<PracticeOperation />} />
      </Routes>
    </Router>
    
   );
}