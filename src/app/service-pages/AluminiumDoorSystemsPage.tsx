import Service from "@/imports/Service8/Service8";
import imgHero from "@/imports/Service5/f013c7dd142caf2744596a2026cfc4358a9c6c05.png";
import imgHospitality from "@/imports/Service8/0bd8afd39276a6a4f69969590461ece8e5a50b56.png";
import imgSliding from "@/imports/Service8/5cf70c75ae3f36f35402097f14930705348eefbd.png";
import imgHinged from "@/imports/Service8/a1c0009361876486204aa9205e2bbfd7e94a46ed.png";
import imgAutomatic from "@/imports/Service8/995e3f81e5e4cdbb06a7340c36d35b81dafcc815.png";
import imgAdvantage from "@/imports/Service8/df8dd1f34d00af88f0a847928d3d361b3156e90a.png";
import imgApp1 from "@/imports/Service8/4046b463dd895b16e1eaa8d8f5817c4a7d1ce543.png";
import imgApp2 from "@/imports/Service8/52f0e89d1454432723eb325caa9f7a38f1e0ca34.png";
import MobileServicePage from "./MobileServicePage";
import ScaledServiceImport from "./ScaledServiceImport";
import ServiceNavbar from "../components/ServiceNavbar";
import SiteFooter from "../components/SiteFooter";

export default function AluminiumDoorSystemsPage() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <ServiceNavbar />
      <MobileServicePage
        title="Aluminium Door Systems"
        subtitle="Strong, lightweight, and stylish aluminium doors for homes, offices, and hospitality spaces."
        heroImage={imgHero}
        introTitle="Durable Aluminium Door Solutions"
        introText="Aluminium door systems deliver reliable operation, clean design, and long-lasting performance for high-use spaces."
        introImages={[imgSliding, imgHinged]}
        typesTitle="Types of Aluminium Doors"
        types={[
          { title: "Sliding Aluminium Doors", text: "Smooth space-saving doors for balconies, offices, and interiors.", image: imgSliding },
          { title: "Hinged Aluminium Doors", text: "Classic swing doors with strong frames and modern finishes.", image: imgHinged },
          { title: "Automatic Aluminium Doors", text: "Sensor-based access systems for commercial and hospitality entrances.", image: imgAutomatic },
        ]}
        components={[
          { title: "Aluminium Profiles", text: "Strong, slim sections with durable surface finishes." },
          { title: "Door Hardware", text: "Hinges, rollers, handles, locks, and closers." },
          { title: "Glass Panels", text: "Tempered, laminated, or insulated glass options." },
          { title: "Weather Seals", text: "Gaskets and brushes for smoother closure and protection." },
        ]}
        advantages={[
          { title: "Strength & Durability", text: "Built for repeated use with low maintenance.", image: imgAdvantage },
          { title: "Modern Look", text: "Slim profiles and clean finishes suit contemporary spaces." },
          { title: "Corrosion Resistance", text: "Durable coatings protect the frame over time." },
          { title: "Flexible Designs", text: "Available in sliding, hinged, automatic, and folding formats." },
        ]}
        applications={[
          { title: "Residential Spaces", text: "Balconies, living areas, kitchens, and utility doors.", image: imgApp1 },
          { title: "Commercial Entrances", text: "Offices, showrooms, stores, and institutions.", image: imgApp2 },
          { title: "Hospitality Areas", text: "Hotels, restaurants, lounges, and public access zones.", image: imgHospitality },
        ]}
      />
      <ScaledServiceImport className="aluminium-door-page service-hero-page w-full hide-import-nav hide-import-first-nav hide-import-footer service-import-scale">
        <Service />
      </ScaledServiceImport>
      <SiteFooter className="mt-12" />
    </div>
  );
}
