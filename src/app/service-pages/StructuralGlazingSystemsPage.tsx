import Service from "@/imports/Service2/Service2";
import ServiceNavbar from "../components/ServiceNavbar";

export default function StructuralGlazingSystemsPage() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#eaedef]">
      <ServiceNavbar />
      <div className="w-full hide-import-nav" style={{ minWidth: "320px" }}>
        <Service />
      </div>
    </div>
  );
}
