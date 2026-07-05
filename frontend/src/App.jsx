import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PopupForm from "./components/PopupForm";
import ScrollToTop from "./components/ScrollToTop";

// Global SEO Schemas & CTAs
import { OrganizationSchema, WebSiteSchema } from "./components/SchemaMarkup";
import FloatingContact from "./components/FloatingContact";

/* Lazy Load Pages for Performance */
const LandingPortal = lazy(() => import("./pages/LandingPortal"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const Subsidy = lazy(() => import("./pages/Subsidy"));
const Installation = lazy(() => import("./pages/Installation"));
const Contact = lazy(() => import("./pages/Contact"));

/* Dynamic City Pages */
const CityPage = lazy(() => import("./pages/CityPage"));

/* SEO Landing Pages */
const SolarInstallationBihar = lazy(() => import("./pages/SolarInstallationBihar"));
const RooftopSolarBihar = lazy(() => import("./pages/RooftopSolarBihar"));
const ResidentialSolarBihar = lazy(() => import("./pages/ResidentialSolarBihar"));
const IndustrialSolarBihar = lazy(() => import("./pages/IndustrialSolarBihar"));
const SolarMaintenance = lazy(() => import("./pages/SolarMaintenance"));
const SolarSubsidyBihar = lazy(() => import("./pages/SolarSubsidyBihar"));

/* New SEO Pages (AI Search & Product SEO) */
const SolarComparison = lazy(() => import("./pages/SolarComparison"));
const SolarCalculator = lazy(() => import("./pages/SolarCalculator"));
const ProductPage = lazy(() => import("./pages/ProductPage"));

/* Blog Pages */
const Blog = lazy(() => import("./pages/Blog"));
const BenefitsOfSolarEnergy = lazy(() => import("./pages/blog/BenefitsOfSolarEnergy"));
const SolarSubsidyInBihar = lazy(() => import("./pages/blog/SolarSubsidyInBihar"));
const HowSolarReducesElectricityBill = lazy(() => import("./pages/blog/HowSolarReducesElectricityBill"));
const BestSolarCompanyInBihar = lazy(() => import("./pages/blog/BestSolarCompanyInBihar"));
const BiharSolarRevolution = lazy(() => import("./pages/blog/BiharSolarRevolution"));
const FreeSolarPanelScheme = lazy(() => import("./pages/blog/FreeSolarPanelScheme"));
const RooftopSolarGuide = lazy(() => import("./pages/blog/RooftopSolarGuide"));
const SolarPanelMaintenanceTips = lazy(() => import("./pages/blog/SolarPanelMaintenanceTips"));
const SolarForFarmersBihar = lazy(() => import("./pages/blog/SolarForFarmersBihar"));
const CommercialSolarBihar = lazy(() => import("./pages/blog/CommercialSolarBihar"));
const NetMeteringGuideBihar = lazy(() => import("./pages/blog/NetMeteringGuideBihar"));
const OnGridVsOffGridSolar = lazy(() => import("./pages/blog/OnGridVsOffGridSolar"));

import "./blog.css";

// Loading Fallback Component
const PageSkeleton = () => (
  <div style={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div className="spinner" style={{ width: '40px', height: '40px', borderTopColor: '#f97316' }}></div>
  </div>
);

function CanonicalHelper() {
  const location = useLocation();
  const canonicalUrl = `https://ekosys.in${location.pathname === '/' ? '' : location.pathname}`;
  
  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en-IN" href={canonicalUrl} />
      <meta name="geo.region" content="IN-BR" />
      <meta name="geo.placename" content="Hajipur, Bihar" />
    </Helmet>
  );
}

function AppContent() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <>
      {!isLandingPage && <Navbar />}
      {!isLandingPage && <ScrollToTop />}

      <main className={isLandingPage ? "landing-main-wrapper" : "app-content"}>
        <Suspense fallback={<PageSkeleton />}>
          <Routes>
            {/* Main Website Pages */}
            <Route path="/" element={<LandingPortal />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/subsidy" element={<Subsidy />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="/contact" element={<Contact />} />

            {/* AI Search & Tools */}
            <Route path="/solar-system-comparison" element={<SolarComparison />} />
            <Route path="/solar-calculator" element={<SolarCalculator />} />

            {/* Product Details Route */}
            <Route path="/products/:category/:productSlug" element={<ProductPage />} />

            {/* Dynamic City Landing Pages */}
            <Route path="/solar-company-:citySlug" element={<CityPage />} />
            <Route path="/solar-installation-:citySlug" element={<CityPage />} />

            {/* SEO Landing Pages */}
            <Route path="/solar-installation-bihar" element={<SolarInstallationBihar />} />
            <Route path="/rooftop-solar-bihar" element={<RooftopSolarBihar />} />
            <Route path="/residential-solar-bihar" element={<ResidentialSolarBihar />} />
            <Route path="/industrial-solar-bihar" element={<IndustrialSolarBihar />} />
            <Route path="/solar-maintenance" element={<SolarMaintenance />} />
            <Route path="/solar-subsidy-bihar" element={<SolarSubsidyBihar />} />

            {/* Blog Pages */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/benefits-of-solar-energy" element={<BenefitsOfSolarEnergy />} />
            <Route path="/blog/bihar-solar-revolution" element={<BiharSolarRevolution />} />
            <Route path="/blog/free-solar-panel-scheme" element={<FreeSolarPanelScheme />} />
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
        </Suspense>
      </main>

      {!isLandingPage && <Footer />}
      {!isLandingPage && <PopupForm />}
      {!isLandingPage && <FloatingContact />}
    </>
  );
}

function App() {
  return (
    <Router>
      <CanonicalHelper />
      <OrganizationSchema />
      <WebSiteSchema />
      <AppContent />
    </Router>
  );
}

export default App;
