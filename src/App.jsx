import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles/header.css';
import Home2 from "./pages/home2";
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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home2 />} />
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