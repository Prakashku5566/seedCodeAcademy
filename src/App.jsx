import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CoursePage from "./pages/CoursePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CareersPage from "./pages/CareersPage";
import BlogPage from "./pages/BlogPage";
import DocumentationPage from "./pages/DocumentationPage";
import CommunityPage from "./pages/CommunityPage";
import SupportPage from "./pages/SupportPage";
import FAQPage from "./pages/FAQPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import RefundPolicyPage from "./pages/RefundPolicyPage";
import "./index.css";
import CoursesSection from "./pages/CoursesSection";
import ScrollTop from "./components/ScrollTop";


function App() {
  return (
    <BrowserRouter basename="/seedCodeAcademy">
      <div className='min-h-screen'>
        <ScrollTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<CoursesSection />} />
          <Route path='/course/:id' element={<CoursePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/careers' element={<CareersPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/documentation' element={<DocumentationPage />} />
          <Route path='/community' element={<CommunityPage />} />
          <Route path='/support' element={<SupportPage />} />
          <Route path='/faq' element={<FAQPage />} />
          <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
          <Route path='/terms-of-service' element={<TermsOfServicePage />} />
          <Route path='/refund-policy' element={<RefundPolicyPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


