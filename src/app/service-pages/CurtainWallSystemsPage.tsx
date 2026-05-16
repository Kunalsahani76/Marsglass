import Service from "@/imports/Service1/Service1";
import ServiceNavbar from "../components/ServiceNavbar";

export default function CurtainWallSystemsPage() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#eaedef]">
      <ServiceNavbar />
      <div className="w-full hide-import-nav hide-import-first-nav" style={{ minWidth: "320px" }}>
        <Service />
      </div>
    </div>
  );
}
