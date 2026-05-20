import Service from "@/imports/Service7/Service7";
import imgHero from "@/imports/Service7/6a49e25da9b36383a0c93946cb143d169d968172.png";
import imgPartition from "@/imports/Service7/d46960041e90284e764700026a0db1a08fc6b6f5.png";
import imgMirror from "@/imports/Service7/e19df9e450879aa8a000934c33efa8413ad90b23.png";
import imgDoor from "@/imports/Service7/29d3ffaf7b6b12ce4c42ad06a28bed64367fd566.png";
import imgAdvantage from "@/imports/Service7/7ebf70180b4d2daee09706519f91dbdd5cadaf39.png";
import imgApp1 from "@/imports/Service7/4046b463dd895b16e1eaa8d8f5817c4a7d1ce543.png";
import imgApp2 from "@/imports/Service7/52f0e89d1454432723eb325caa9f7a38f1e0ca34.png";
import MobileServicePage from "./MobileServicePage";
import ScaledServiceImport from "./ScaledServiceImport";
import ServiceNavbar from "../components/ServiceNavbar";
import SiteFooter from "../components/SiteFooter";

export default function InteriorGlassSolutionsPage() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <ServiceNavbar />
      <MobileServicePage
        title="Interior Glass Solutions"
        subtitle="Transparent, safe, and refined glass systems for modern interiors and premium spaces."
        heroImage={imgHero}
        introTitle="Premium Interior Glass Design"
        introText="Interior glass solutions enhance spaces with openness, light, and functional separation using tempered or laminated safety glass."
        introImages={[imgPartition, imgMirror]}
        typesTitle="Types of Interior Glass Solutions"
        types={[
          { title: "Glass Partitions", text: "Elegant room divisions for offices, clinics, and commercial spaces.", image: imgPartition },
          { title: "Decorative Glass", text: "Feature glass, mirrors, and design panels for refined interiors.", image: imgMirror },
          { title: "Glass Doors", text: "Swinging and sliding glass doors for clean, modern access.", image: imgDoor },
        ]}
        components={[
          { title: "Safety Glass", text: "Tempered or laminated glass selected for the application." },
          { title: "Profiles & Channels", text: "Slim supports for clean installation and stability." },
          { title: "Handles & Locks", text: "Premium hardware for usability and security." },
          { title: "Finishing Details", text: "Edges, films, and seals that complete the interior look." },
        ]}
        advantages={[
          { title: "Open Feel", text: "Keeps interiors bright and visually connected.", image: imgAdvantage },
          { title: "Premium Finish", text: "Adds a clean, sophisticated look to any space." },
          { title: "Functional Privacy", text: "Can include frosted, tinted, or patterned glass." },
          { title: "Flexible Use", text: "Works for homes, offices, retail, and hospitality interiors." },
        ]}
        applications={[
          { title: "Corporate Interiors", text: "Cabins, conference rooms, and collaborative zones.", image: imgApp1 },
          { title: "Residential Interiors", text: "Partitions, doors, wardrobes, and decorative panels.", image: imgApp2 },
          { title: "Retail & Hospitality", text: "Showrooms, hotels, salons, restaurants, and clinics.", image: imgHero },
        ]}
      />
      <ScaledServiceImport className="interior-glass-page service-hero-page w-full hide-import-nav hide-import-first-nav hide-import-footer service-import-scale">
        <Service />
      </ScaledServiceImport>
      <SiteFooter className="mt-12" />
    </div>
  );
}
