import Service from "@/imports/Service5/Service5";
import imgHero from "@/imports/Service5/f013c7dd142caf2744596a2026cfc4358a9c6c05.png";
import imgSliding from "@/imports/Service5/343912e9f2a5c28987626a6653eda225a6417438.png";
import imgCasement from "@/imports/Service5/0269815ccd27a72af596d122b6edfda3d354be38.png";
import imgFixed from "@/imports/Service5/fc39eb3a1e94fdc83a907ccbd820bb0f51995f2c.png";
import imgAdvantage from "@/imports/Service5/8bd0ab72582237bb6f6eb140b6053fcc54138ff0.png";
import imgApp1 from "@/imports/Service5/4046b463dd895b16e1eaa8d8f5817c4a7d1ce543.png";
import imgApp2 from "@/imports/Service5/52f0e89d1454432723eb325caa9f7a38f1e0ca34.png";
import MobileServicePage from "./MobileServicePage";
import ScaledServiceImport from "./ScaledServiceImport";
import ServiceNavbar from "../components/ServiceNavbar";
import SiteFooter from "../components/SiteFooter";

export default function AluminumWindowsDoorsPage() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <ServiceNavbar />
      <MobileServicePage
        title="Aluminum Windows & Doors"
        subtitle="Strong, lightweight, and modern systems for residential, commercial, and hospitality projects."
        heroImage={imgHero}
        introTitle="Durable Aluminum Openings"
        introText="Aluminum window and door systems combine slim profiles, high strength, and long service life with contemporary aesthetics."
        introImages={[imgSliding, imgCasement]}
        typesTitle="Types of Aluminum Systems"
        types={[
          { title: "Sliding Windows", text: "Space-saving window systems with smooth movement and modern profiles.", image: imgSliding },
          { title: "Casement Windows", text: "Side-hinged systems designed for ventilation and weather sealing.", image: imgCasement },
          { title: "Fixed Windows", text: "Large fixed glazed openings for daylight, views, and facade design.", image: imgFixed },
        ]}
        components={[
          { title: "Aluminum Profiles", text: "Powder-coated or anodized frames with slim sightlines." },
          { title: "Glass Units", text: "Tempered, laminated, or insulated glass based on project needs." },
          { title: "Rollers & Hinges", text: "Quality movement hardware for smooth operation." },
          { title: "Weather Gaskets", text: "Seals that improve air, dust, and water resistance." },
        ]}
        advantages={[
          { title: "Long Life", text: "Aluminum is corrosion-resistant and suitable for daily use.", image: imgAdvantage },
          { title: "Modern Appearance", text: "Slim sections support clean architectural detailing." },
          { title: "Low Maintenance", text: "Durable finishes are easy to clean and maintain." },
          { title: "Design Flexibility", text: "Works across homes, offices, hotels, and retail spaces." },
        ]}
        applications={[
          { title: "Homes & Apartments", text: "Balconies, bedrooms, living spaces, and utility areas.", image: imgApp1 },
          { title: "Commercial Spaces", text: "Offices, stores, showrooms, and institutions.", image: imgApp2 },
          { title: "Hospitality Projects", text: "Hotels, resorts, cafes, and premium interiors.", image: imgHero },
        ]}
      />
      <ScaledServiceImport className="aluminum-windows-page service-hero-page w-full hide-import-nav hide-import-first-nav hide-import-footer service-import-scale">
        <Service />
      </ScaledServiceImport>
      <SiteFooter className="mt-12" />
    </div>
  );
}
