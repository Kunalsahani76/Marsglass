import Service from "@/imports/Service6/Service6";
import imgHero from "@/imports/Service6/939240df3f278995ea04daaa5cdaa20bc53ebe28.png";
import imgFrameless from "@/imports/Service6/2feeb55ace4f40306417a73e02af62a9a649c4b4.png";
import imgFramed from "@/imports/Service6/18f658b725989d146407eac4fa48bc6b412668f1.png";
import imgSliding from "@/imports/Service6/29675f062a6e0b7a68c679662311bf5d7adece18.png";
import imgAdvantage from "@/imports/Service6/1932998ef4cb8253e41e7972787960c32a260aec.png";
import imgApp1 from "@/imports/Service6/4046b463dd895b16e1eaa8d8f5817c4a7d1ce543.png";
import imgApp2 from "@/imports/Service6/52f0e89d1454432723eb325caa9f7a38f1e0ca34.png";
import MobileServicePage from "./MobileServicePage";
import ScaledServiceImport from "./ScaledServiceImport";
import ServiceNavbar from "../components/ServiceNavbar";
import SiteFooter from "../components/SiteFooter";

export default function GlassPartitionSystemsPage() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <ServiceNavbar />
      <MobileServicePage
        title="Glass Partition Systems"
        subtitle="Functional interior partitions that preserve openness, daylight, and modern spatial clarity."
        heroImage={imgHero}
        introTitle="Modern Interior Space Division"
        introText="Glass partitions create efficient rooms and cabins while keeping interiors bright, connected, and visually spacious."
        introImages={[imgFrameless, imgFramed]}
        typesTitle="Types of Glass Partition Systems"
        types={[
          { title: "Frameless Partitions", text: "Minimal profiles for clean, premium office and retail interiors.", image: imgFrameless },
          { title: "Framed Partitions", text: "Aluminum-framed systems for strength, privacy, and repeat use.", image: imgFramed },
          { title: "Sliding Partitions", text: "Flexible partitions that save space and adapt to changing layouts.", image: imgSliding },
        ]}
        components={[
          { title: "Tempered Glass", text: "Safety glass for durable interior use." },
          { title: "Aluminum Channels", text: "Neat support sections for glass alignment and stability." },
          { title: "Door Hardware", text: "Hinges, handles, locks, and sliding tracks." },
          { title: "Acoustic Seals", text: "Optional seals that improve privacy and comfort." },
        ]}
        advantages={[
          { title: "Open Interiors", text: "Maintains light and visibility while defining work zones.", image: imgAdvantage },
          { title: "Space Efficiency", text: "Ideal for compact offices and flexible layouts." },
          { title: "Premium Finish", text: "Creates a polished, contemporary interior look." },
          { title: "Easy Maintenance", text: "Glass surfaces are simple to clean and maintain." },
        ]}
        applications={[
          { title: "Office Cabins", text: "Manager cabins, meeting rooms, and workspaces.", image: imgApp1 },
          { title: "Retail Interiors", text: "Showrooms, clinics, salons, and display areas.", image: imgApp2 },
          { title: "Hospitality Spaces", text: "Hotels, lounges, restaurants, and service areas.", image: imgHero },
        ]}
      />
      <ScaledServiceImport className="w-full hide-import-nav hide-import-first-nav hide-import-footer service-import-scale">
        <Service />
      </ScaledServiceImport>
      <SiteFooter className="mt-12" />
    </div>
  );
}
