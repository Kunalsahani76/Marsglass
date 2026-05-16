import Service from "@/imports/Service5/Service5";
import ServiceNavbar from "../components/ServiceNavbar";

export default function AluminumWindowsDoorsPage() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <ServiceNavbar />
      <div className="w-full hide-import-nav hide-import-first-nav" style={{ minWidth: "320px" }}>
        <Service />
      </div>
    </div>
  );
}
