import { useState } from "react";
import Service from "@/imports/Service3/Service3";
import imgLogo from "@/imports/Service3/a08ae53b754d0c478618f1f8072832fea766a0a6.png";
import svgPaths from "@/imports/Service3/svg-goap1ddtiy";

const navHref = (item: string) => {
  const routes: Record<string, string> = {
    Home: "#/",
    About: "#/about",
    Services: "#services",
    Project: "#/projects",
    Contact: "#/contact",
  };

  return routes[item] ?? "#/";
};

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Services", "Project", "Contact"];

  return (
    <nav className="bg-white sticky top-0 z-50 w-full shadow-sm">
      <div className="max-w-[1341px] mx-auto flex items-center justify-between px-6 sm:px-[30px] py-[10px]">
        <a href="#/" className="h-[60px] w-[84px] relative overflow-hidden shrink-0">
          <img
            alt="Manglass Logo"
            className="absolute h-[368.33%] left-[-80.36%] max-w-none top-[-134.17%] w-[263.1%]"
            src={imgLogo}
          />
        </a>

        <div className="hidden lg:flex gap-[46px] items-center">
          {links.map((item) => (
            <a
              key={item}
              href={navHref(item)}
              className="capitalize font-['Roboto',sans-serif] font-normal text-[#1e1e1e] text-[18px] tracking-[-0.09px] leading-[1.45] whitespace-nowrap no-underline hover:text-[#5a93d1]"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#/contact"
          className="hidden lg:flex bg-white border border-black rounded-[8px] items-center gap-[8px] px-[20px] py-[10px] no-underline"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d={svgPaths.pb384280} fill="black" />
          </svg>
          <span className="capitalize font-['Inter',sans-serif] font-bold text-[16px] text-black tracking-[-0.08px] leading-[1.45]">
            contact
          </span>
        </a>

        <button
          className="lg:hidden p-2"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-5">
          {links.map((item) => (
            <a
              key={item}
              href={navHref(item)}
              className="capitalize font-['Roboto',sans-serif] font-normal text-[#1e1e1e] text-[18px] no-underline"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#/contact"
            className="bg-white border border-black rounded-[8px] flex items-center gap-2 px-5 py-2.5 no-underline w-fit"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d={svgPaths.pb384280} fill="black" />
            </svg>
            <span className="capitalize font-['Inter',sans-serif] font-bold text-[16px] text-black">
              contact
            </span>
          </a>
        </div>
      )}
    </nav>
  );
}

export default function AcpCladdingSystemsPage() {
  return (
    <div className="w-full min-h-screen bg-[#eaedef]">
      <Navbar />
      <div className="w-full overflow-x-hidden hide-import-nav">
        <Service />
      </div>
    </div>
  );
}
