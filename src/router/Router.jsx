import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../component/pages/home/Home";
import Service from "../component/pages/Service";
import Apropos from "../component/pages/Apropos";
import Realistion from "../component/pages/Realistion";
import Patener from "../component/pages/Patener";
import Contact from "../component/pages/Contact";
import Faq from "../component/pages/Faq";
import NavBar from "../component/navBar/NavBar";
import Footer from "../component/navBar/Footer";

function SectionPage({ children }) {
  return <main className="min-h-screen pt-28 md:pt-24">{children}</main>;
}

export default function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<SectionPage><Service /></SectionPage>} />
        <Route path="/a-propos" element={<SectionPage><Apropos /></SectionPage>} />
        <Route path="/realisations" element={<SectionPage><Realistion /></SectionPage>} />
        <Route path="/partenaires" element={<SectionPage><Patener /></SectionPage>} />
        <Route path="/faq" element={<SectionPage><Faq /></SectionPage>} />
        <Route path="/contact" element={<SectionPage><Contact /></SectionPage>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
