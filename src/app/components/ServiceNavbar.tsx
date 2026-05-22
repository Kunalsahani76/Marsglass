import { useEffect, useRef, useState } from "react";
import svgPaths from "@/imports/Home/svg-od9zlvzvzo";
import imgLogo from "@/imports/Home/a08ae53b754d0c478618f1f8072832fea766a0a6.png";

const navHref = (item: string) => {
  const routes: Record<string, string> = {
    Home: "#/",
    About: "#/about",
    "About Us": "#/about",
    Services: "#services",
    Project: "#/projects",
    Contact: "#/contact",
  };

  return routes[item] ?? "#/";
};

const serviceColumns = [
  ["Curtain Wall Systems", "Structural Glazing Systems", "ACP Cladding Systems"],
  ["Glass Canopy Systems", "Aluminium Windows & Doors", "Glass Partition Systems"],
  ["Interior Glass Solutions", "Aluminium Door Systems", "UPVC Door Systems"],
];

const serviceNavHref = (service: string) => {
  const routes: Record<string, string> = {
    "Curtain Wall Systems": "#/services/curtain-wall-systems",
    "Structural Glazing Systems": "#/services/structural-glazing-systems",
    "ACP Cladding Systems": "#/services/acp-cladding-systems",
    "Glass Canopy Systems": "#/services/glass-canopy-systems",
    "Aluminium Windows & Doors": "#/services/aluminium-windows-doors",
    "Glass Partition Systems": "#/services/glass-partition-systems",
    "Interior Glass Solutions": "#/services/interior-glass-solutions",
    "Aluminium Door Systems": "#/services/aluminium-door-systems",
    "UPVC Door Systems": "#/services/upvc-door-systems",
  };

  return routes[service] ?? "#services";
};

function ContactIcon() {
  return (
    <svg className="block shrink-0" fill="none" viewBox="0 0 24 24" width="20" height="20">
      <path d={svgPaths.pb384280} fill="currentColor" />
    </svg>
  );
}

function DropdownArrow() {
  return (
    <svg className="block shrink-0" fill="none" viewBox="0 0 24 26" width="18" height="18">
      <path d={svgPaths.p3b2ff900} fill="currentColor" />
    </svg>
  );
}

export default function ServiceNavbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const desktopServicesRef = useRef<HTMLDivElement>(null);
  const mobileServicesRef = useRef<HTMLDivElement>(null);
  const links = ["Home", "About Us", "Services", "Project"];

  useEffect(() => {
    if (!servicesOpen) return;

    const closeOnOutsideClick = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      const insideDesktop = desktopServicesRef.current?.contains(target);
      const insideMobile = mobileServicesRef.current?.contains(target);

      if (!insideDesktop && !insideMobile) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("touchstart", closeOnOutsideClick);

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("touchstart", closeOnOutsideClick);
    };
  }, [servicesOpen]);

  return (
    <>
    <header className="fixed left-0 right-0 top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex items-center justify-between px-6 py-3 max-w-[1400px]">
        <a href="#/" className="h-[52px] w-[73px] relative overflow-hidden shrink-0">
          <img
            src={imgLogo}
            alt="Mars Glass Solutions"
            className="absolute h-[368.33%] max-w-none"
            style={{ left: "-80.36%", top: "-134.17%", width: "263.1%" }}
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((item) =>
            item === "Services" ? (
              <div key={item} ref={desktopServicesRef} className="relative" onMouseEnter={() => setServicesOpen(true)}>
                <button
                  type="button"
                  className="flex items-center gap-1 font-['Roboto',sans-serif] text-[17px] text-[#1e1e1e] capitalize leading-[1.45] hover:opacity-70"
                  onClick={() => setServicesOpen((current) => !current)}
                >
                  <span>Services</span>
                  <DropdownArrow />
                </button>
                {servicesOpen && (
                  <div className="absolute left-1/2 top-full z-50 mt-8 w-[min(792px,calc(100vw-48px))] -translate-x-1/2 bg-white px-[30px] py-[28px] shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                    <div className="grid grid-cols-3 gap-[88px]">
                      {serviceColumns.map((column, columnIndex) => (
                        <div key={columnIndex} className="flex flex-col items-start gap-[15px]">
                          {column.map((service) => (
                            <a
                              key={service}
                              href={serviceNavHref(service)}
                              className="border-b border-black pb-[3px] font-['Roboto',sans-serif] text-[16px] leading-none text-black hover:text-[#5a93d1]"
                              onClick={() => setServicesOpen(false)}
                            >
                              {service}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item}
                href={navHref(item)}
                className="font-['Roboto',sans-serif] text-[17px] text-[#1e1e1e] capitalize leading-[1.45] hover:opacity-70"
              >
                {item}
              </a>
            )
          )}
        </nav>

        <a
          href="#/contact"
          className="navbar-contact-button hidden md:flex items-center gap-2 border border-black rounded-[8px] px-5 py-2 font-['Inter',sans-serif] font-bold text-[15px] text-black capitalize"
        >
          <ContactIcon />
          <span>Contact</span>
        </a>

        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-black transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-black transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-black transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex max-h-[calc(100vh-76px)] flex-col gap-4 overflow-y-auto">
          {links.map((item) =>
            item === "Services" ? (
              <div key={item} ref={mobileServicesRef} className="flex flex-col border-b border-gray-100 pb-3">
                <button
                  type="button"
                  className="flex w-full items-center justify-between font-['Roboto',sans-serif] text-[16px] text-[#1e1e1e] capitalize"
                  onClick={() => setServicesOpen((current) => !current)}
                  aria-expanded={servicesOpen}
                >
                  <span>Services</span>
                  <span className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}>
                    <DropdownArrow />
                  </span>
                </button>
                {servicesOpen && (
                  <div className="mt-4 grid gap-3 pl-4">
                    {serviceColumns.flat().map((service) => (
                      <a
                        key={service}
                        href={serviceNavHref(service)}
                        className="font-['Roboto',sans-serif] text-[14px] leading-[1.35] text-[#1e1e1e]"
                        onClick={() => {
                          setOpen(false);
                          setServicesOpen(false);
                        }}
                      >
                        {service}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item}
                href={navHref(item)}
                className="border-b border-gray-100 pb-3 font-['Roboto',sans-serif] text-[16px] text-[#1e1e1e] capitalize"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            )
          )}
          <a
            href="#/contact"
            className="navbar-contact-button flex items-center justify-center gap-2 border border-black rounded-[8px] px-5 py-2 font-['Inter',sans-serif] font-bold text-[15px] text-black capitalize"
            onClick={() => setOpen(false)}
          >
            <ContactIcon />
            <span>Contact</span>
          </a>
        </div>
      )}
    </header>
    <div aria-hidden="true" className="h-[76px] shrink-0" />
    </>
  );
}
