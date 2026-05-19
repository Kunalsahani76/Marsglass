import Service from "@/imports/Service4/Service4";
import imgHero from "@/imports/Service4/0775b2ef7907e5251c0b05dd60e79f973403fe4e.png";
import imgType1 from "@/imports/Service4/c59a9a7dd91ad70231b25f9e1f3b0d6b93a3260f.png";
import imgType2 from "@/imports/Service4/8db12b28a6768d93f783b697a6c21d0c78b401c0.png";
import imgType3 from "@/imports/Service4/2448bbf52060278bce0cf86c17e917f3fc08392c.png";
import imgAdvantage from "@/imports/Service4/88be267c1af251ea9732d19bc671c2e4c0463ea6.png";
import imgApp1 from "@/imports/Service4/4046b463dd895b16e1eaa8d8f5817c4a7d1ce543.png";
import imgApp2 from "@/imports/Service4/52f0e89d1454432723eb325caa9f7a38f1e0ca34.png";
import MobileServicePage from "./MobileServicePage";
import ScaledServiceImport from "./ScaledServiceImport";
import ServiceNavbar from "../components/ServiceNavbar";
import SiteFooter from "../components/SiteFooter";

export default function GlassCanopySystemsPage() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <ServiceNavbar />
      <MobileServicePage
        title="Glass Canopy Systems"
        subtitle="Elegant and durable weather protection solutions for entrances, walkways, and architectural features."
        heroImage={imgHero}
        introTitle="Transparent Weather Protection"
        introText="Glass canopy systems protect entrances and circulation areas while preserving natural light and a modern transparent appearance."
        introImages={[imgType1, imgType2]}
        typesTitle="Types of Glass Canopy Systems"
        types={[
          { title: "Frameless Canopies", text: "Minimal hardware for clean, floating glass protection.", image: imgType1 },
          { title: "Supported Canopies", text: "Engineered brackets and frames for stronger spans and busy entrances.", image: imgType2 },
          { title: "Spider-Fixed Canopies", text: "Point-fixed glass with stainless hardware for premium architectural entrances.", image: imgType3 },
        ]}
        components={[
          { title: "Tempered Glass", text: "Toughened safety glass for impact and weather resistance." },
          { title: "Steel Hardware", text: "Brackets, rods, and fittings that support the canopy safely." },
          { title: "Drainage Detail", text: "Slope and joints planned to manage rainwater." },
          { title: "Sealants", text: "Weatherproof joints for long-term protection." },
        ]}
        advantages={[
          { title: "Weather Protection", text: "Protects visitors and entrances from sun and rain.", image: imgAdvantage },
          { title: "Modern Look", text: "Adds a premium transparent feature to building elevations." },
          { title: "Durable Build", text: "Uses safety glass and corrosion-resistant fittings." },
          { title: "Low Visual Bulk", text: "Keeps entrances open and bright." },
        ]}
        applications={[
          { title: "Building Entrances", text: "Corporate, residential, and institutional entrances.", image: imgApp1 },
          { title: "Walkways", text: "Covered pathways, drop-off areas, and public access zones.", image: imgApp2 },
          { title: "Retail Fronts", text: "Showrooms, malls, cafes, and hospitality entrances.", image: imgHero },
        ]}
      />
      <ScaledServiceImport className="w-full hide-import-nav hide-import-first-nav hide-import-footer service-import-scale">
        <Service />
      </ScaledServiceImport>
      <SiteFooter className="mt-12" />
    </div>
  );
}
