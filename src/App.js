import './App.css';
import AllReport from './pages/AllReport';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleReport from './pages/SingleReport';
import SubReports from './pages/SubReports';
import ReportPayment from './pages/ReportPayment';
import Toc from './pages/Toc';
import Mmp from './pages/Mmp';
import RequestSample from './pages/RequestSample';
import ThankYou from './pages/ThankYou';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import SearchRes from './pages/SearchRes';
import Promotion from './pages/Promotion';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/all-report" element={<AllReport />} />
          <Route exact path="/category/:id" element={<SubReports />} />
          <Route exact path="/:id/:id/overview" element={<SingleReport />} />
          <Route exact path="/:id/:id/TOC" element={<Toc />} />
          {/* <Route exact path="/:id/:id/MMP" element={<Mmp />} /> */}
          <Route exact path="/:id/:id/request-sample" element={<RequestSample />} />
          <Route exact path="/purchase/:id" element={<ReportPayment />} />
          <Route exact path="/thank-you-for-purchase/:id" element={<ThankYou />} />
          <Route exact path="/search" element={<SearchRes />} />
          <Route exact path="/promotion" element={<Promotion />} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
