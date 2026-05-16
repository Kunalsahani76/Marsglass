import Service from "@/imports/Service1/Service1";
import imgHero from "@/imports/Service1/5706193da3b81232d3844b7edf4b18c22aa97ac9.png";
import ServiceNavbar from "../components/ServiceNavbar";

export default function CurtainWallSystemsPage() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#eaedef]">
      <ServiceNavbar />
      <section className="curtain-wall-mobile-hero relative flex min-h-[520px] w-full items-center justify-center overflow-hidden px-5 py-12 text-center md:hidden">
        <img
          src={imgHero}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto flex w-full max-w-[340px] flex-col items-center gap-5 sm:max-w-[520px]">
          <h1 className="w-full min-w-0 whitespace-normal break-words bg-gradient-to-r from-[#5a93d1] to-white bg-clip-text font-['Roboto',sans-serif] text-[clamp(30px,8vw,38px)] font-medium leading-[1.12] text-transparent">
            Curtain Wall
            <br />
            Systems
          </h1>
          <p className="w-full min-w-0 font-['Inter',sans-serif] text-[16px] leading-[1.45] text-white">
            Advanced facade solutions engineered to enhance modern architecture with superior performance, durability, and energy efficiency.
          </p>
          <div className="flex w-full flex-col gap-3">
            <a
              href="#/contact"
              className="flex w-full items-center justify-center rounded-[4px] border border-black bg-[#5a93d1] px-5 py-4 font-['Lato',sans-serif] text-[16px] text-black"
            >
              Get Consultation
            </a>
            <a
              href="#/projects"
              className="flex w-full items-center justify-center rounded-[4px] border border-black bg-white px-5 py-4 font-['Lato',sans-serif] text-[16px] text-black"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>
      <div className="curtain-wall-page w-full hide-import-nav hide-import-first-nav" style={{ minWidth: "320px" }}>
        <Service />
      </div>
    </div>
  );
}
