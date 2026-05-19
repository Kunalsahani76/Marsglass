import Service from "@/imports/Service9/Service9";
import imgHero from "@/imports/Service9/ebf78195e51d802f8cdc4912282c35e71414410b.png";
import imgSliding from "@/imports/Service9/0ac4d30c2952ecc576b11a6b43a66be111a09052.png";
import imgCasement from "@/imports/Service9/b88d8135924203d585a7cdc19e7f00f2078411f6.png";
import imgFrench from "@/imports/Service9/36a7719fd32cf5c101e603bdb9c2dc0bcac070ba.png";
import imgAdvantage from "@/imports/Service9/d6c5af605e693c6ccf83098fc5edb5cf846ff2fb.png";
import imgApp1 from "@/imports/Service9/4046b463dd895b16e1eaa8d8f5817c4a7d1ce543.png";
import imgApp2 from "@/imports/Service9/52f0e89d1454432723eb325caa9f7a38f1e0ca34.png";
import MobileServicePage from "./MobileServicePage";
import ScaledServiceImport from "./ScaledServiceImport";
import ServiceNavbar from "../components/ServiceNavbar";
import SiteFooter from "../components/SiteFooter";

export default function UpvcDoorSystemsPage() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <ServiceNavbar />
      <MobileServicePage
        title="UPVC Door Systems"
        subtitle="Durable, insulated, and low-maintenance door systems for long-term residential and commercial use."
        heroImage={imgHero}
        introTitle="Efficient UPVC Door Solutions"
        introText="UPVC door systems resist moisture, corrosion, and termites while improving insulation, comfort, and everyday usability."
        introImages={[imgSliding, imgCasement]}
        typesTitle="Types of UPVC Doors"
        types={[
          { title: "Sliding UPVC Doors", text: "Space-efficient doors for balconies, patios, and compact openings.", image: imgSliding },
          { title: "Casement UPVC Doors", text: "Hinged systems with excellent sealing and easy operation.", image: imgCasement },
          { title: "French UPVC Doors", text: "Double-door systems that create wide, elegant access points.", image: imgFrench },
        ]}
        components={[
          { title: "UPVC Profiles", text: "Multi-chamber frames for insulation and strength." },
          { title: "Reinforcement", text: "Steel support sections for rigidity and stability." },
          { title: "Glazing Options", text: "Tempered, laminated, or double glazing as needed." },
          { title: "Sealing Gaskets", text: "Weather seals that improve comfort and protection." },
        ]}
        advantages={[
          { title: "Thermal Insulation", text: "Helps reduce heat transfer and improves comfort.", image: imgAdvantage },
          { title: "Moisture Resistant", text: "Performs well in humid and exposed environments." },
          { title: "Low Maintenance", text: "Easy to clean and resistant to corrosion and termites." },
          { title: "Long-Term Value", text: "Durable profiles and hardware support everyday use." },
        ]}
        applications={[
          { title: "Residential Homes", text: "Balconies, bedrooms, patios, kitchens, and utility areas.", image: imgApp1 },
          { title: "Apartments", text: "Compact sliding and casement solutions for modern flats.", image: imgApp2 },
          { title: "Commercial Spaces", text: "Clinics, offices, service rooms, and light-use entrances.", image: imgHero },
        ]}
      />
      <ScaledServiceImport className="w-full hide-import-nav hide-import-first-nav hide-import-footer service-import-scale">
        <Service />
      </ScaledServiceImport>
      <SiteFooter className="mt-12" />
    </div>
  );
}
