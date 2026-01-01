import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Toaster } from "./components/ui/sonner";

import AboutPage from "./pages/AboutPage";
import MissionPage from "./pages/MissionPage";
import CalculatorPage from "./pages/CalculatorPage";
import PersonalServicesPage from "./pages/PersonalServicesPage";
import BusinessServicesPage from "./pages/BusinessServicesPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/expertise/personal" element={<PersonalServicesPage />} />
          <Route path="/expertise/business" element={<BusinessServicesPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
