import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/header.css';
import Home2 from "./pages/home2";
import MedicalBilling from "./pages/MedicalBilling";
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/medical-billing" element={<MedicalBilling />} />
      </Routes>
    </Router>
    
   );
}