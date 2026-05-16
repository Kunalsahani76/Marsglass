import Service from "@/imports/Service3/Service3";
import ServiceNavbar from "../components/ServiceNavbar";

export default function AcpCladdingSystemsPage() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#eaedef]">
      <ServiceNavbar />
      <div className="w-full hide-import-nav" style={{ minWidth: "320px" }}>
        <Service />
      </div>
    </div>
  );
}
