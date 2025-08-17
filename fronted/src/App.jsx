import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar from "./GeoTracking/Navbar.jsx";
import Header from "./GeoTracking/header";
import Footer from "./GeoTracking/footer";
import Body from "./GeoTracking/Body";
import GpsTrackingHero from "./GeoTracking/GPSTracking";
import UltraWideBand from "./GeoTracking/UWB";
import Wifi from "./GeoTracking/wifi";
import Bluetooth from "./GeoTracking/bluetooth";
import Zigbee from "./GeoTracking/zigbee";
import CellularNetwork from "./GeoTracking/cellular";
import GeoTracking from "./GeoTracking/geotracking";
import Contact from "./GeoTracking/contact";
import Rfid from "./RFIDTracking/rfid";
import Active from "./RFIDTracking/active";
import Passive from "./RFIDTracking/passive";
import Nfc from "./RFIDTracking/nfc";
import Rtls from "./RFIDTracking/rtls";
import RfidBands from "./RFIDTracking/rfidBands";
import Bio from "./BIOTRACKING/bio";
import Sensor from "./BIOTRACKING/Sensor";
import Accelerometer from "./BIOTRACKING/Acc";
import Gyro from "./BIOTRACKING/gyro";
import Smart from "./BIOTRACKING/smart";
import Infrared from "./BIOTRACKING/infra";
import Ultrasonic from "./BIOTRACKING/ultra";
import About from "./About/about";
import Career from "./Career/career";
import Standard from "./Career/standard";
import MBA from "./Career/mba";
import AI from "./Career/ai";
import ApplicationForm from "./Career/standardfrom";
import MbaForm from "./Career/mbaform";
import AIForm from "./Career/aiform";
import MarketIntern from "./Career/marketintern";
import HRIntern from "./Career/HRintern";
import IntelligenceIntern from "./Career/intelligenceintern";
import WordpressIntern from "./Career/wordpressintern";
import DigitalIntern from "./Career/digitalintern";
import CreativeIntern from "./Career/creativeintern";
import OnlineIntern from "./Career/onlineintern";
import AIAssistedIntern from "./Career/AI-assistedintern";
import WebContentIntern from "./Career/web-contentintern";
import EmailIntern from "./Career/emailintern";
import SEOIntern from "./Career/seointern";
import LeadIntern from "./Career/leadintern";
import TalentIntern from "./Career/talentintern";
import StratagicIntern from "./Career/stratagicintern";
import AIEnchancedIntern from "./Career/Ai-enchancedintern";
import CreativeAIIntern from "./Career/creative-ai-intern";
import AITalentIntern from "./Career/Ai-talent-intern";
import AIDrivenIntern from "./Career/Ai-driven-intern";
import GenerativeIntern from "./Career/generative-intern";
import GragphicsIntern from "./Career/ai-graphics-intern";
import AugmentedIntern from "./Career/ai-augmented-intern";
import PartnershipsIntern from "./Career/ai-partnership-intern";
import TechnicalIntern from "./Career/ai-driven-technical-intern";
import ResearchIntern from "./Career/ai-based-research-intern";
import PoweredIntern from "./Career/ai-powered-email-intern";
import AiDrivenSEOIntern from "./Career/ai-driven-seo-intern";
import AILeadIntern from "./Career/ai-driven-lead-intern";
import HrPartnerIntern from "./Career/hr-partner-intern";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Body />
              <Footer />
            </>
          }
        />

        <Route
          path="/location-based-tracking-technologies"
          element={
            <>
              <GeoTracking />
              <Footer />
            </>
          }
        />

        <Route
          path="/location-based-tracking-technologies/gps-global-positioning-system"
          element={
            <>
              <GpsTrackingHero />
              <Footer />
            </>
          }
        />
        <Route
          path="/location-based-tracking-technologies/uwb-ultra-wideband"
          element={
            <>
              <UltraWideBand />
              <Footer />
            </>
          }
        />
        <Route
          path="/location-based-tracking-technologies/wi-fi-positioning"
          element={
            <>
              <Wifi />
              <Footer />
            </>
          }
        />
        <Route
          path="/location-based-tracking-technologies/bluetooth-low-energy-ble"
          element={
            <>
              <Bluetooth />
              <Footer />
            </>
          }
        />
        <Route
          path="/location-based-tracking-technologies/zigbee"
          element={
            <>
              <Zigbee />
              <Footer />
            </>
          }
        />
        <Route
          path="/location-based-tracking-technologies/cellular-network-based-tracking"
          element={
            <>
              <CellularNetwork />
              <Footer />
            </>
          }
        />

        <Route
          path="/radio-frequency-identification-and-releted-technologies-rfid"
          element={
            <>
              <Rfid />
              <Footer />
            </>
          }
        />

        <Route
          path="/radio-frequency-identification-and-releted-technologies-rfid/active-rfid"
          element={
            <>
              <Active />
              <Footer />
            </>
          }
        />

        <Route
          path="/radio-frequency-identification-and-releted-technologies-rfid/passive-rfid"
          element={
            <>
              <Passive />
              <Footer />
            </>
          }
        />

        <Route
          path="/radio-frequency-identification-and-releted-technologies-rfid/near-field-communication-nfc"
          element={
            <>
              <Nfc />
              <Footer />
            </>
          }
        />

        <Route
          path="/radio-frequency-identification-and-releted-technologies-rfid/real-time-location-systems-rtls"
          element={
            <>
              <Rtls />
              <Footer />
            </>
          }
        />
        <Route
          path="/radio-frequency-identification-and-releted-technologies-rfid/rfid-wristbands-bands"
          element={
            <>
              <RfidBands />
              <Footer />
            </>
          }
        />

        <Route
          path="/sensor-and-wearable-based-tracking-technologies"
          element={
            <>
              <Bio />
              <Footer />
            </>
          }
        />

        <Route
          path="/sensor-and-wearable-based-tracking-technologies/smart-wearables-smartwatches-fitness-trackers"
          element={
            <>
              <Sensor />
              <Footer />
            </>
          }
        />

        <Route
          path="/sensor-and-wearable-based-tracking-technologies/accelerometer-based-tracking"
          element={
            <>
              <Accelerometer />
              <Footer />
            </>
          }
        />

        <Route
          path="/sensor-and-wearable-based-tracking-technologies/gyroscope-based-tracking"
          element={
            <>
              <Gyro />
              <Footer />
            </>
          }
        />

        <Route
          path="/sensor-and-wearable-based-tracking-technologies/smart-shoes"
          element={
            <>
              <Smart />
              <Footer />
            </>
          }
        />

        <Route
          path="/sensor-and-wearable-based-tracking-technologies/infrared-sensors"
          element={
            <>
              <Infrared />
              <Footer />
            </>
          }
        />

        <Route
          path="/sensor-and-wearable-based-tracking-technologies/ultrasonic-positioning-systems"
          element={
            <>
              <Ultrasonic />
              <Footer />
            </>
          }
        />

        <Route
          path="/about-us"
          element={
            <>
              <About />
              <Footer />
            </>
          }
        />

        <Route
          path="/career"
          element={
            <>
              <Career />
              <Footer />
            </>
          }
        />

        <Route
          path="/career/standard-internship-positions"
          element={
            <>
              <Standard />
              <Footer />
            </>
          }
        />

        <Route
          path="/career/mba-masters-internship-positions"
          element={
            <>
              <MBA />
              <Footer />
            </>
          }
        />

        <Route
          path="/career/ai-enhanced-internship-opportunities"
          element={
            <>
              <AI />
              <Footer />
            </>
          }
        />

        <Route
          path="/career/ai-enhanced-internship-opportunities/applyforinternship"
          element={
            <>
              <ApplicationForm />
              <Footer />
            </>
          }
        />

        <Route
          path="/career/mba-masters-internship-positions/applyMBAIntership"
          element={
            <>
              <MbaForm />
              <Footer />
            </>
          }
        />

        <Route
          path="/career/mba-masters-internship-positions/applyAIIntership"
          element={
            <>
              <AIForm />
              <Footer />
            </>
          }
        />

        <Route
          path="/market-research-product-acquisition-intern"
          element={
            <>
              <MarketIntern />
              <Footer />
            </>
          }
        />

        <Route
          path="/hr-administration-recruitment-intern"
          element={
            <>
              <HRIntern />
              <Footer />
            </>
          }
        />

        <Route
          path="/market-intelligence-lead-discovery-intern"
          element={
            <>
              <IntelligenceIntern />
              <Footer />
            </>
          }
        />
        <Route
          path="/wordpress-web-development"
          element={
            <>
              <WordpressIntern />
              <Footer />
            </>
          }
        />
        <Route
          path="/digital-graphics-visual-media-intern"
          element={
            <>
              <DigitalIntern />
              <Footer />
            </>
          }
        />

        <Route
          path="/creative-video-design-intern"
          element={
            <>
              <CreativeIntern />
              <Footer />
            </>
          }
        />
        <Route
          path="/online-marketing-strategy-intern"
          element={
            <>
              <OnlineIntern />
              <Footer />
            </>
          }
        />

        <Route
          path="/ai-assisted-tech-content-writing"
          element={
            <>
              <AIAssistedIntern />
              <Footer />
            </>
          }
        />

        <Route
          path="/web-content-management-intern"
          element={
            <>
              <WebContentIntern />
              <Footer />
            </>
          }
        />

        <Route
          path="/email-campaign-management-intern"
          element={
            <>
              <EmailIntern />
              <Footer />
            </>
          }
        />
        <Route
          path="/online-marketing-seo-analyst-intern"
          element={
            <>
              <SEOIntern />
              <Footer />
            </>
          }
        />

        <Route
          path="/lead-acquisition-market-insights-intern"
          element={
            <>
              <LeadIntern />
              <Footer />
            </>
          }
        />

        <Route
          path="/talent-recruitment-hr-strategy-intern"
          element={
            <>
              <TalentIntern />
              <Footer />
            </>
          }
        />

        <Route
          path="/strategic-hiring-hr-partnership"
          element={
            <>
              <StratagicIntern />
              <Footer />
            </>
          }
        />
        <Route
          path="/ai-enhanced-web-content-specialist-intern"
          element={
            <>
              <AIEnchancedIntern />
              <Footer />
            </>
          }
        />

        <Route
          path="/creative-video-ai-automation-intern"
          element={
            <>
              <CreativeAIIntern />
              <Footer />
            </>
          }
        />

        <Route
          path="/ai-talent-acquisition-specialist"
          element={
            <>
              <AITalentIntern />
              <Footer />
            </>
          }
        />

        <Route
          path="/ai-driven-product-sourcing-specialist"
          element={
            <>
              <AIDrivenIntern />
              <Footer />
            </>
          }
        />

        <Route
          path="/generative-ai-product-content-creato"
          element={
            <>
              <GenerativeIntern />
              <Footer />
            </>
          }
        />

        <Route
          path="/ai-graphics-visual-communication-intern"
          element={
            <>
              <GragphicsIntern />
              <Footer />
            </>
          }
        />
        <Route
          path="/ai-augmented-wordpress-web-develope"
          element={
            <>
              <AugmentedIntern />
              <Footer />
            </>
          }
        />

        <Route
          path="/ai-driven-business-partnerships-intern"
          element={
            <>
              <PartnershipsIntern />
              <Footer />
            </>
          }
        />

        <Route
          path="/ai-driven-technical-writing-intern"
          element={
            <>
              <TechnicalIntern />
              <Footer />
            </>
          }
        />
        <Route
          path="/ai-based-content-creation-research-internship"
          element={
            <>
              <ResearchIntern />
              <Footer />
            </>
          }
        />

        <Route
          path="/ai-powered-email-marketing-campaigns"
          element={
            <>
              <PoweredIntern />
              <Footer />
            </>
          }
        />

        <Route
          path="/ai-driven-seo-marketing-internship"
          element={
            <>
              <AiDrivenSEOIntern />
              <Footer />
            </>
          }
        />
        <Route
          path="/ai-driven-market-insights-lead-generation-intern"
          element={
            <>
              <AILeadIntern />
              <Footer />
            </>
          }
        />

        <Route
          path="/hr-partner-recruitment-intern"
          element={
            <>
              <HrPartnerIntern />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact-us"
          element={
            <>
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

