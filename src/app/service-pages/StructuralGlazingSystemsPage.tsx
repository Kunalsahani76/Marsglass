import Service from "@/imports/Service2/Service2";
import imgHero from "@/imports/Service2/7ed88177b0e8003411d1a605cb0394acea1c9d96.png";
import imgIntro from "@/imports/Service2/de0eccf71b626aadae75199db96ccc19a0a250fc.png";
import imgFourSided from "@/imports/Service2/0e31e907b955049f6410f439b9f794129b669c82.png";
import imgTwoSided from "@/imports/Service2/f346ed75a2dcaa65a0869a2585c997848854c40b.png";
import imgSpider from "@/imports/Service2/f4fceda2efd057a3cbf785355a1c84606ac3f718.png";
import imgMall from "@/imports/Service2/953c4fc17b320bc5b488ad1484aa2cc221cad714.png";
import imgInterior from "@/imports/Service2/f57705eda6b4cfaad4c02d29b01c59996de65280.png";
import imgOffice from "@/imports/Service2/6c6147faad5f688dd28c03ac4dbeceedd80488af.png";
import MobileServicePage from "./MobileServicePage";
import ServiceNavbar from "../components/ServiceNavbar";

export default function StructuralGlazingSystemsPage() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#eaedef]">
      <ServiceNavbar />
      <MobileServicePage
        title="Structural Glazing Systems"
        subtitle="Advanced glazing solutions for seamless facades, transparency, and high-performance building envelopes."
        heroImage={imgHero}
        introTitle="Modern Structural Glazing Solutions"
        introText="Structural glazing creates clean glass facades by bonding glass panels to engineered frames, improving aesthetics while supporting thermal and weather performance."
        introImages={[imgIntro, imgHero]}
        typesTitle="Types of Structural Glazing Systems"
        types={[
          { title: "4-Sided Structural Glazing", text: "Glass is bonded on all sides for a seamless all-glass appearance.", image: imgFourSided },
          { title: "2-Sided Structural Glazing", text: "Two bonded edges combine with visible framing for balanced performance and economy.", image: imgTwoSided },
          { title: "Spider Glazing System", text: "Point-fixed hardware creates open, transparent facades for feature entrances and atriums.", image: imgSpider },
        ]}
        components={[
          { title: "Structural Silicone", text: "High-strength bonding sealant for glass-to-frame attachment." },
          { title: "Aluminum Frames", text: "Engineered members that carry wind and dead loads." },
          { title: "IGU Glass", text: "Insulated glass units for acoustic and thermal performance." },
          { title: "Weather Seals", text: "Gaskets and sealants that resist water and air ingress." },
        ]}
        advantages={[
          { title: "Seamless Appearance", text: "Creates sleek facades with minimal visible framing.", image: imgOffice },
          { title: "Better Daylight", text: "Maximizes natural light while maintaining envelope performance." },
          { title: "Weather Protection", text: "Engineered sealing improves water and air resistance." },
          { title: "Design Flexibility", text: "Supports commercial, retail, and institutional facade concepts." },
        ]}
        applications={[
          { title: "Commercial Towers", text: "Office buildings, corporate facades, and IT parks.", image: imgOffice },
          { title: "Retail Spaces", text: "Showrooms, malls, and high-visibility shopfronts.", image: imgMall },
          { title: "Interiors", text: "Atriums, partitions, and feature glass areas.", image: imgInterior },
        ]}
      />
      <div className="hidden w-full hide-import-nav md:block" style={{ minWidth: "320px" }}>
        <Service />
      </div>
    </div>
  );
}
