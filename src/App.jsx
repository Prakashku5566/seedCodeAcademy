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
    <BrowserRouter>
      <div className='min-h-screen'>
        <ScrollTop />
        <Navbar />
        <Routes>
          <Route path='seedCodeAcademy/' element={<Home />} />
          <Route path='seedCodeAcademy/courses' element={<CoursesSection />} />
          <Route path='seedCodeAcademy/course/:id' element={<CoursePage />} />
          <Route path='seedCodeAcademy/about' element={<AboutPage />} />
          <Route path='seedCodeAcademy/contact' element={<ContactPage />} />
          <Route path='seedCodeAcademy/careers' element={<CareersPage />} />
          <Route path='seedCodeAcademy/blog' element={<BlogPage />} />
          <Route path='seedCodeAcademy/documentation' element={<DocumentationPage />} />
          <Route path='seedCodeAcademy/community' element={<CommunityPage />} />
          <Route path='seedCodeAcademy/support' element={<SupportPage />} />
          <Route path='seedCodeAcademy/faq' element={<FAQPage />} />
          <Route path='seedCodeAcademy/privacy-policy' element={<PrivacyPolicyPage />} />
          <Route path='seedCodeAcademy/terms-of-service' element={<TermsOfServicePage />} />
          <Route path='seedCodeAcademy/refund-policy' element={<RefundPolicyPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


