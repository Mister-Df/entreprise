import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../component/pages/home/Home";
import NavBar from "../component/navBar/NavBar";
import Service from "../component/pages/Service";
import Footer from "../component/navBar/Footer";

export default function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="flex flex-col gap-5">
        <Routes>
          <Route path="/home" element={<Home />} />
          {/* <Route path="/home/service" element={<Service />} /> */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
