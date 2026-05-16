import Service from "@/imports/Service3/Service3";
import imgHero from "@/imports/Service3/3a38d99a860cd41791fa5e5ee42bb085d263aa9a.png";
import imgIntro from "@/imports/Service3/aa3446ed44cf1d7f7e2d53715c3327eb283e3276.png";
import imgExterior from "@/imports/Service3/434ea9194900c5513a70a3d7cc539e28f88a5bcb.png";
import imgInterior from "@/imports/Service3/a8d0284107d24a6a45aa682497e219d36aae4317.png";
import imgFeature from "@/imports/Service3/8ef0d2450cabaeb6f616b049ad61f36da426771c.png";
import imgMall from "@/imports/Service3/953c4fc17b320bc5b488ad1484aa2cc221cad714.png";
import imgOffice from "@/imports/Service3/6c6147faad5f688dd28c03ac4dbeceedd80488af.png";
import MobileServicePage from "./MobileServicePage";
import ServiceNavbar from "../components/ServiceNavbar";

export default function AcpCladdingSystemsPage() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#eaedef]">
      <ServiceNavbar />
      <MobileServicePage
        title="ACP Cladding Systems"
        subtitle="Lightweight aluminum composite panel cladding for modern exterior and interior architectural finishes."
        heroImage={imgHero}
        introTitle="Aluminum Composite Panel Cladding"
        introText="ACP cladding provides a clean, durable, and versatile skin for buildings, offering smooth finishes, weather resistance, and design flexibility."
        introImages={[imgIntro, imgHero]}
        typesTitle="Types of ACP Cladding"
        types={[
          { title: "Exterior ACP Cladding", text: "Weather-resistant panels for facades, elevations, and building envelopes.", image: imgExterior },
          { title: "Interior ACP Cladding", text: "Clean interior wall finishes for commercial and retail environments.", image: imgInterior },
          { title: "Feature Cladding", text: "Accent surfaces for entrances, signage zones, and architectural highlights.", image: imgFeature },
        ]}
        components={[
          { title: "ACP Panels", text: "Composite sheets with aluminum skins and engineered core material." },
          { title: "Support Frame", text: "Aluminum or steel backing structure for panel alignment." },
          { title: "Sealants", text: "Weatherproof joints that protect against moisture ingress." },
          { title: "Fixing Hardware", text: "Clips, brackets, and fasteners for reliable installation." },
        ]}
        advantages={[
          { title: "Lightweight Finish", text: "Reduces load while giving buildings a crisp modern appearance.", image: imgMall },
          { title: "Durable Surface", text: "Resists weathering and maintains a clean finish over time." },
          { title: "Fast Installation", text: "Panelized installation helps speed up facade work." },
          { title: "Design Variety", text: "Supports multiple colors, textures, and architectural forms." },
        ]}
        applications={[
          { title: "Commercial Facades", text: "Office elevations, corporate buildings, and institutions.", image: imgOffice },
          { title: "Retail Fronts", text: "Malls, shops, showrooms, and signage bands.", image: imgMall },
          { title: "Interiors", text: "Lobbies, wall panels, columns, and feature surfaces.", image: imgInterior },
        ]}
      />
      <div className="w-full hide-import-nav service-import-scale" style={{ minWidth: "320px" }}>
        <Service />
      </div>
    </div>
  );
}
