import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PopupForm from "./components/PopupForm";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Subsidy from "./pages/Subsidy";
import Installation from "./pages/Installation";
import Contact from "./pages/Contact";

/* SEO Landing Pages */
import SolarInstallationBihar from "./pages/SolarInstallationBihar";
import RooftopSolarBihar from "./pages/RooftopSolarBihar";
import ResidentialSolarBihar from "./pages/ResidentialSolarBihar";
import IndustrialSolarBihar from "./pages/IndustrialSolarBihar";
import SolarMaintenance from "./pages/SolarMaintenance";
import SolarSubsidyBihar from "./pages/SolarSubsidyBihar";

/* Blog Pages */
import Blog from "./pages/Blog";
import BenefitsOfSolarEnergy from "./pages/blog/BenefitsOfSolarEnergy";
import SolarSubsidyInBihar from "./pages/blog/SolarSubsidyInBihar";
import HowSolarReducesElectricityBill from "./pages/blog/HowSolarReducesElectricityBill";
import BestSolarCompanyInBihar from "./pages/blog/BestSolarCompanyInBihar";
import RooftopSolarGuide from "./pages/blog/RooftopSolarGuide";
import SolarPanelMaintenanceTips from "./pages/blog/SolarPanelMaintenanceTips";
import SolarForFarmersBihar from "./pages/blog/SolarForFarmersBihar";
import CommercialSolarBihar from "./pages/blog/CommercialSolarBihar";
import NetMeteringGuideBihar from "./pages/blog/NetMeteringGuideBihar";
import OnGridVsOffGridSolar from "./pages/blog/OnGridVsOffGridSolar";

import "./blog.css";

function App() {
  return (
    <Router>

      {/* GLOBAL SEO META TAGS */}
      <Helmet>

        {/* Primary SEO Title */}
        <title>
          Best Solar Installation in Bihar | Rooftop Solar Company in Vaishali | Ekosys
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Ekosys is one of the best solar installation companies in Bihar and Vaishali. We provide rooftop solar systems, industrial solar installation, residential solar panels, solar maintenance, solar subsidy guidance, and renewable energy solutions across Bihar."
        />

        {/* SEO Keywords */}
        <meta
          name="keywords"
          content="
            solar installation in Bihar,
            best solar installation in Bihar,
            rooftop solar company in Bihar,
            solar panel installation in Vaishali,
            solar company in Hajipur,
            best solar company in Bihar,
            residential solar installation,
            industrial solar installation,
            rooftop solar solutions,
            solar subsidy Bihar,
            solar shop in Bihar,
            best solar shop in Vaishali,
            on-grid solar system,
            off-grid solar system,
            renewable energy company Bihar,
            Ekosys solar solutions
          "
        />

        {/* Author */}
        <meta name="author" content="Ekosys" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://ekosys.in/" />

        {/* Open Graph SEO */}
        <meta
          property="og:title"
          content="Best Solar Installation in Bihar | Ekosys"
        />

        <meta
          property="og:description"
          content="Professional rooftop solar installation, industrial solar systems, residential solar panels and renewable energy solutions in Bihar and Vaishali."
        />

        <meta
          property="og:url"
          content="https://ekosys.in/"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content="https://ekosys.in/preview.jpg"
        />

        {/* Twitter SEO */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Best Solar Company in Bihar | Ekosys"
        />

        <meta
          name="twitter:description"
          content="Solar installation, rooftop solar systems and renewable energy solutions in Bihar and Vaishali."
        />

        <meta
          name="twitter:image"
          content="https://ekosys.in/preview.jpg"
        />

      </Helmet>

      <Navbar />

      <ScrollToTop />

      <main className="app-content">

        <Routes>

          {/* Main Website Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/subsidy" element={<Subsidy />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/contact" element={<Contact />} />

          {/* SEO Landing Pages */}
          <Route
            path="/solar-installation-bihar"
            element={<SolarInstallationBihar />}
          />

          <Route
            path="/rooftop-solar-bihar"
            element={<RooftopSolarBihar />}
          />

          <Route
            path="/residential-solar-bihar"
            element={<ResidentialSolarBihar />}
          />

          <Route
            path="/industrial-solar-bihar"
            element={<IndustrialSolarBihar />}
          />

          <Route
            path="/solar-maintenance"
            element={<SolarMaintenance />}
          />

          <Route
            path="/solar-subsidy-bihar"
            element={<SolarSubsidyBihar />}
          />

          {/* Blog Pages */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/benefits-of-solar-energy" element={<BenefitsOfSolarEnergy />} />
          <Route path="/blog/solar-subsidy-in-bihar" element={<SolarSubsidyInBihar />} />
          <Route path="/blog/how-solar-reduces-electricity-bill" element={<HowSolarReducesElectricityBill />} />
          <Route path="/blog/best-solar-company-in-bihar" element={<BestSolarCompanyInBihar />} />
          <Route path="/blog/rooftop-solar-guide" element={<RooftopSolarGuide />} />
          <Route path="/blog/solar-panel-maintenance-tips" element={<SolarPanelMaintenanceTips />} />
          <Route path="/blog/solar-for-farmers-bihar" element={<SolarForFarmersBihar />} />
          <Route path="/blog/commercial-solar-bihar" element={<CommercialSolarBihar />} />
          <Route path="/blog/net-metering-guide-bihar" element={<NetMeteringGuideBihar />} />
          <Route path="/blog/on-grid-vs-off-grid-solar" element={<OnGridVsOffGridSolar />} />

        </Routes>

      </main>

      <Footer />

      <PopupForm />

    </Router>
  );
}

export default App;