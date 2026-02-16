import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../component/pages/home/Home";
import NavBar from "../component/navBar/NavBar";
import Footer from "../component/navBar/Footer";

export default function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="flex flex-col gap-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
