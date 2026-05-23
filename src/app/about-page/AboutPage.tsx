import { useEffect, useRef, useState } from "react";
import SiteFooter from "../components/SiteFooter";
import ServiceNavbar from "../components/ServiceNavbar";

// About page images
import imgHeroBg from "@/imports/AboutPage/About/e24628afec469bd5d601c2d0bc2eb5319a22e8b0.png";
import imgAboutMain from "@/imports/AboutPage/About/1ee82d49b96eba8df6d560e8e9d0c199307b8c2b.png";
import imgLegacyBg from "@/imports/AboutPage/About/5e358c37ff2f5e2b8ce8af0d17fb02d0707918fe.png";
import imgFacadeBg from "@/imports/AboutPage/About/40c25396ec148a2ee15e575777e531c8033f8b0d.png";
import imgSpec1 from "@/imports/AboutPage/About/1c25366f9764983463d553ca2494b80e86c24148.png";
import imgSpec2 from "@/imports/AboutPage/About/3a9e07847e62d33b7dab7c7429308bf56ca84b7d.png";
import imgSpec3 from "@/imports/AboutPage/About/fe25b04f0b8ce9912b7ea05bc5e808593546afe7.png";
import imgSpec4 from "@/imports/AboutPage/About/f8616a0e8abe33f7e3bba956ce478cd941cef140.png";
import imgSpec5 from "@/imports/AboutPage/About/5a0c5cd70d1756d469035f7a01a198c5a5e62587.png";
import imgSpec6 from "@/imports/AboutPage/About/68e1da9a62773ca7937d26418bd2162971676bb1.png";
import imgOpPhoto1 from "@/imports/AboutPage/About/a4619472ad7b69259814b539cace87b9d02e8a18.png";
import imgOpPhoto2 from "@/imports/AboutPage/About/bd1f8df77c142d2bfeb6b9a66b6398b5dcc60280.png";
import imgOpBg from "@/imports/AboutPage/About/1ec9436a22e1b92ce5cd757c41fe7f89f206bc44.png";
import imgQuoteBg from "@/imports/AboutPage/About/7dd9ee7e6f7ee77aaabd718029ccb2bfc47f51e4.png";
import imgLogo from "@/imports/AboutPage/About/3eb7b26dcf0dd609404203e92ea981a8a747ef76.png";
import imgNavLogo from "@/imports/AboutPage/About/a08ae53b754d0c478618f1f8072832fea766a0a6.png";
import imgDesignEngineeringIcon from "../../../Design & Engineering.png";
import imgFabricationTechIcon from "../../../Fabrication & Tech.png";
import imgInstallationExecutionIcon from "../../../Installation & Execution.png";
import imgUnitizedFacadesIcon from "../../../Unitized Facades.png";
import imgBulletProofGlassIcon from "../../../Bullet Proof Glass.png";
import imgGlassBalustradesIcon from "../../../Glass Balustrades.png";
import imgAcpCladdingIcon from "../../../ACP Cladding.png";
import imgStructuralGlazingIcon from "../../../Structural Glazing.png";
import imgCurtainWallsIcon from "../../../Curtain Walls.png";
import imgSpiderFittingsIcon from "../../../Spider Fittings.png";
import imgSkylightsCanopiesIcon from "../../../Skylights & Canopies.png";
import imgCheckCircleIcon from "../../../check_circle.png";
import imgFormatQuoteIcon from "../../../format_quote.png";

// Project page images
import imgProjectHero from "@/imports/AboutPage/Project/9e6114889e60e150a229b435f1f4b9c09668ac4f.png";
import imgP1 from "@/imports/AboutPage/Project/30ad35cb3301413f3734e3a4394045ada018c18e.png";
import imgP2 from "@/imports/AboutPage/Project/b5142ab68162fef3dd3eeaa9c8af481996c40240.png";
import imgP3 from "@/imports/AboutPage/Project/6a6b8f1e7ca9a9d3d950617944bfe3677815d2ec.png";
import imgP4 from "@/imports/AboutPage/Project/bd1f8df77c142d2bfeb6b9a66b6398b5dcc60280.png";
import imgP5 from "@/imports/AboutPage/Project/c7e44eedb445c697d243212317ec21cc5d852b04.png";
import imgP6 from "@/imports/AboutPage/Project/b54849d10a452ee54c7050d0eb0a7c377be35f7c.png";
import imgP7 from "@/imports/AboutPage/Project/add0df225c55be5797f2e42dfa33c68f98828c53.png";
import imgP8 from "@/imports/AboutPage/Project/d598272f9b1a7330bd866a9b1e5fff54f07473a9.png";
import imgP9 from "@/imports/AboutPage/Project/a41a363dc6b3a66d009176c2c9e93a7886074fe5.png";

// SVG paths for inline icons
const svgPhone = "M13.2836 18.1666C11.7131 18.1666 10.1354 17.8015 8.55045 17.0713C6.96552 16.341 5.50933 15.3108 4.18188 13.9807C2.85443 12.6506 1.82558 11.1944 1.09535 9.61215C0.365117 8.02989 0 6.45351 0 4.88301C0 4.63072 0.0833333 4.42048 0.25 4.25229C0.416667 4.0841 0.625 4 0.875 4H3.5929C3.80337 4 3.989 4.06864 4.14979 4.20593C4.31059 4.34322 4.41288 4.51282 4.45669 4.71475L4.93425 7.16664C4.96737 7.3942 4.96042 7.58971 4.91341 7.75318C4.86641 7.91664 4.782 8.05393 4.66021 8.16504L2.73553 10.0384C3.04537 10.6057 3.39927 11.1423 3.79724 11.6482C4.19521 12.1541 4.62603 12.6373 5.08971 13.0977C5.54698 13.555 6.03309 13.9797 6.54805 14.3718C7.06301 14.7639 7.6191 15.1287 8.21633 15.4663L10.0865 13.5801C10.2169 13.4444 10.3747 13.3493 10.5601 13.2949C10.7454 13.2404 10.938 13.227 11.1378 13.2548L13.4519 13.7259C13.6623 13.7815 13.8341 13.8889 13.9671 14.0481C14.1001 14.2073 14.1666 14.3878 14.1666 14.5897V17.2916C14.1666 17.5416 14.0825 17.7499 13.9143 17.9166C13.7461 18.0833 13.5359 18.1666 13.2836 18.1666Z";
const svgEmail = "M1.5064 16.4999C1.08546 16.4999 0.72916 16.3541 0.437496 16.0624C0.145832 15.7708 0 15.4145 0 14.9935V5.5064C0 5.08546 0.145832 4.72916 0.437496 4.4375C0.72916 4.14583 1.08546 4 1.5064 4H14.3269C14.7478 4 15.1041 4.14583 15.3958 4.4375C15.6874 4.72916 15.8333 5.08546 15.8333 5.5064V14.9935C15.8333 15.4145 15.6874 15.7708 15.3958 16.0624C15.1041 16.3541 14.7478 16.4999 14.3269 16.4999H1.5064ZM7.91664 10.7147L1.24997 6.45186V14.9935C1.24997 15.0683 1.27401 15.1298 1.32209 15.1778C1.37017 15.2259 1.43161 15.25 1.5064 15.25H14.3269C14.4017 15.25 14.4631 15.2259 14.5112 15.1778C14.5593 15.1298 14.5833 15.0683 14.5833 14.9935V6.45186L7.91664 10.7147ZM7.91664 9.41664L14.4551 5.24997H1.37818L7.91664 9.41664Z";
const svgLocation = "M6.29004 11.8044C6.70563 11.8044 7.0606 11.6573 7.35493 11.3629C7.64927 11.0686 7.79643 10.7136 7.79643 10.298C7.79643 9.88245 7.64927 9.52749 7.35493 9.23315C7.0606 8.93882 6.70563 8.79165 6.29004 8.79165C5.87444 8.79165 5.51948 8.93882 5.22514 9.23315C4.93081 9.52749 4.78364 9.88245 4.78364 10.298C4.78364 10.7136 4.93081 11.0686 5.22514 11.3629C5.51948 11.6573 5.87444 11.8044 6.29004 11.8044ZM6.29004 19.8413C4.19282 18.024 2.62018 16.3328 1.57211 14.7676C0.524036 13.2024 0 11.7655 0 10.4567C0 8.53364 0.622058 6.97675 1.86618 5.78605C3.11029 4.59535 4.58491 4 6.29004 4C7.99516 4 9.46978 4.59535 10.7139 5.78605C11.958 6.97675 12.5801 8.53364 12.5801 10.4567C12.5801 11.7655 12.056 13.2024 11.008 14.7676C9.95989 16.3328 8.38725 18.024 6.29004 19.8413Z";
const svgContactPhone = "M19.95 21C17.8667 21 15.8083 20.5458 13.775 19.6375C11.7417 18.7292 9.89167 17.4417 8.225 15.775C6.55833 14.1083 5.27083 12.2583 4.3625 10.225C3.45417 8.19167 3 6.13333 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07917 8.725 3.2375C8.90833 3.39583 9.01667 3.58333 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.70417 12.1125 8.1625 12.6875C8.62083 13.2625 9.125 13.8167 9.675 14.35C10.1917 14.8667 10.7333 15.3458 11.3 15.7875C11.8667 16.2292 12.4667 16.6333 13.1 17L15.45 14.65C15.6 14.5 15.7958 14.3875 16.0375 14.3125C16.2792 14.2375 16.5167 14.2167 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1375 20.775 15.3125C20.925 15.4875 21 15.6833 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21Z";
const svgDropdown = "M12 18.0167L6 11.5167L7.4 10L12 14.9562L16.6 10L18 11.5167L12 18.0167Z";

// ── Project card data ──────────────────────────────────────────
const projects = [
  { img: imgP1, name: "G.D Goenka", location: "A-56, Sector 50, Noida, U.P." },
  { img: imgP2, name: "Costa Coffee", location: "Dehradun" },
  { img: imgP3, name: "Haldiram's", location: "Dehradun" },
  { img: imgP4, name: "23 Ram Villa", location: "Rajendra Park, Delhi" },
  { img: imgP5, name: "Dhaula Kua Metro", location: "New Delhi" },
  { img: imgP6, name: "Mercedes Showroom I Okhla,", location: "New Delhi" },
  { img: imgP7, name: "Platina Mall", location: "Gurgaon" },
  { img: imgP8, name: "Bensups Hospital", location: "Sector 12 Dwarka, New Delhi" },
  { img: imgP9, name: "Bourn Hall Clinic", location: "Gurgaon, Sector-40" },
];

// ── Specializations ────────────────────────────────────────────
const specializations = [
  { img: imgSpec1, label: "Hospitality & Hotels" },
  { img: imgSpec2, label: "Luxury Residential" },
  { img: imgSpec3, label: "Healthcare Facilities" },
  { img: imgSpec4, label: "Retail Hubs" },
  { img: imgSpec5, label: "Public Infrastructure" },
  { img: imgSpec6, label: "IT & Business Parks" },
];

// ── Core services ──────────────────────────────────────────────
const coreServices = [
  { icon: imgUnitizedFacadesIcon, label: "Unitized Facades" },
  { icon: imgBulletProofGlassIcon, label: "Bullet Proof Glass" },
  { icon: imgGlassBalustradesIcon, label: "Glass Balustrades" },
  { icon: imgAcpCladdingIcon, label: "ACP Cladding" },
  { icon: imgStructuralGlazingIcon, label: "Structural Glazing" },
  { icon: imgCurtainWallsIcon, label: "Curtain Walls" },
  { icon: imgSpiderFittingsIcon, label: "Spider Fittings" },
  { icon: imgSkylightsCanopiesIcon, label: "Skylights & Canopies" },
];

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
  };

  return routes[service] ?? "#/about#services";
};

const aboutNavHref = (link: string) => {
  const routes: Record<string, string> = {
    Home: "#/",
    About: "#/about",
    Services: "#/about#services",
    Project: "#/projects",
    Projects: "#/projects",
    Contact: "#/contact",
  };

  return routes[link] ?? `#/about#${link.toLowerCase()}`;
};

// ────────────────────────────────────────────────────────────────
// NAVBAR
// ────────────────────────────────────────────────────────────────
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const desktopServicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!servicesOpen) return;

    const closeOnOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (!desktopServicesRef.current?.contains(event.target as Node)) {
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

  const navLinks = ["Home", "About", "Services", "Project"];

  return (
    <nav
      className={`sticky top-0 z-50 bg-white w-full transition-shadow ${scrolled ? "shadow-md" : ""}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex items-center justify-between h-[80px]">
        {/* Logo */}
        <div className="h-[50px] w-[70px] relative overflow-hidden shrink-0">
          <img
            src={imgNavLogo}
            alt="Mars Glass Solutions"
            className="absolute object-cover"
            style={{ height: "368.33%", left: "-80.36%", top: "-134.17%", width: "263.1%", maxWidth: "none" }}
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) =>
            link === "Services" ? (
              <div
                key={link}
                ref={desktopServicesRef}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 font-roboto text-[#1e1e1e] text-[17px] capitalize tracking-tight hover:text-[#1173d4]"
                  onClick={() => setServicesOpen((current) => !current)}
                >
                  <span>{link}</span>
                  <svg className="w-4 h-5 relative top-[1px]" fill="none" viewBox="0 0 24 26">
                    <path d={svgDropdown} fill="#1E1E1E" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="absolute left-1/2 top-full z-50 mt-8 w-[min(980px,calc(100vw-48px))] -translate-x-1/2 bg-white px-[30px] py-[28px] shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                    <div className="grid grid-cols-3 gap-[88px]">
                      {serviceColumns.map((column, columnIndex) => (
                        <div key={columnIndex} className="flex flex-col items-start gap-[15px]">
                          {column.map((service) => (
                            <a
                              key={service}
                              href={serviceNavHref(service)}
                              className="whitespace-nowrap border-b border-black pb-[3px] font-roboto text-[16px] leading-none text-black hover:text-[#1173d4]"
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
                key={link}
                href={aboutNavHref(link)}
                className="font-roboto text-[#1e1e1e] text-[17px] capitalize tracking-tight hover:text-[#1173d4]"
              >
                {link}
              </a>
            )
          )}
        </div>

        {/* Contact Button */}
        <a
          href="#/contact"
          className="hidden md:flex items-center gap-2 border border-black rounded-lg px-5 py-2.5 text-black font-inter font-bold text-[15px]"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d={svgContactPhone} fill="black" />
          </svg>
          Contact
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-[#1e1e1e] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#1e1e1e] transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#1e1e1e] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={aboutNavHref(link)}
              className="block py-3 text-[#1e1e1e] font-roboto text-[17px] capitalize border-b border-gray-50"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#/contact"
            className="mt-4 flex items-center gap-2 border border-black rounded-lg px-5 py-2.5 w-fit text-black font-inter font-bold text-[15px]"
            onClick={() => setMenuOpen(false)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d={svgContactPhone} fill="black" />
            </svg>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

// ────────────────────────────────────────────────────────────────
// HERO
// ────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="home" className="about-hero relative min-h-[600px] md:min-h-[700px] lg:min-h-[620px] overflow-hidden">
      <img
        src={imgHeroBg}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="about-hero-content relative z-10 max-w-[1400px] mx-auto px-6 lg:px-20 pt-10 pb-24 lg:pt-12 lg:pb-28 flex flex-col gap-10">
        <div className="about-hero-title home-load-fade home-load-title max-w-[760px]">
          <h1 className="font-roboto text-white text-[42px] sm:text-[56px] lg:text-[70px] leading-[1.2] tracking-[-0.4px] font-normal">
            Redefining Architectural{" "}
            <span className="text-[#00c0e8]">Glass and Facade </span>
            Engineering
          </h1>
        </div>
        <p className="about-hero-copy home-load-fade home-load-intro font-roboto font-medium text-white text-[16px] sm:text-[18px] max-w-[700px] leading-[1.4] tracking-[-0.38px]">
          Pioneering precision-engineered facade solutions that blend structural integrity with aesthetic brilliance. We turn architectural visions into iconic landmarks.
        </p>
        <div className="about-hero-actions home-load-fade home-load-actions flex flex-wrap gap-3">
          <a
            href="#/projects"
            className="bg-[#5a93d1] text-black font-roboto font-bold text-[16px] px-8 py-3.5 rounded-lg"
          >
            View our Project
          </a>
          <a
            href="#/contact"
            className="navbar-contact-button bg-white border border-black text-black font-inter font-bold text-[15px] px-6 py-3.5 rounded-lg flex items-center gap-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d={svgContactPhone} fill="black" />
            </svg>
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────
// ABOUT – A Legacy of Precision and Innovation
// ────────────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section id="about" className="bg-white border-t border-b border-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-12 lg:py-[50px] flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Image with badge */}
        <div className="relative shrink-0 w-full max-w-[716px] lg:w-[52%] aspect-[716/537]">
          <div className="relative rounded-[10px] overflow-hidden h-full w-full">
            <img src={imgAboutMain} alt="Team" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-black/20 rounded-[10px]" />
          </div>
          {/* Badge */}
          <div className="absolute bottom-0 right-0 flex min-h-[86px] w-[min(38%,270px)] min-w-[178px] flex-col items-center justify-center rounded-[10px] border border-white/70 bg-[linear-gradient(110deg,rgba(255,255,255,0.38),rgba(164,172,172,0.72)_48%,rgba(255,255,255,0.42))] px-4 py-3 text-center shadow-[0_12px_30px_rgba(0,0,0,0.2)] backdrop-blur-md sm:min-h-[110px]">
            <p className="font-['DM_Serif_Display',serif] text-[#137fec] text-[clamp(42px,5vw,68px)] leading-[0.95]">
              30 <span className="font-inter font-extrabold">+</span>
            </p>
            <p className="mt-2 font-inter text-[#475569] text-[clamp(10px,1.1vw,14px)] tracking-wide uppercase leading-[1.2]">Years of Experience</p>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-3 max-w-[500px]">
          <h2 className="font-roboto font-bold text-[#1e293b] text-[28px] sm:text-[36px] tracking-[1.8px] leading-normal">
            A Legacy of Precision and Innovation
          </h2>
          <p className="font-inter font-normal text-[#475569] text-[16px] sm:text-[18px] leading-normal">
            With a foundation built on technical expertise, disciplined execution, and uncompromising quality standards, we have established ourselves as a trusted partner for developers, architects, infrastructure consultants, and corporate clients.
          </p>
          <p className="font-inter font-normal text-[#475569] text-[16px] sm:text-[18px] leading-normal">
            Mars Glass Solutions Pvt. Ltd. is a premier architectural glass and facade engineering company delivering integrated, high performance building envelope solutions across India. We specialize in transforming architectural concepts into structurally engineered, visually refined, and performance driven facade systems.
          </p>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────
// OUR LEGACY OF EXPERTISE
// ────────────────────────────────────────────────────────────────
function LegacySection() {
  return (
    <section className="bg-white border-b border-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-12 lg:py-[50px] flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Text */}
        <div className="flex flex-col gap-3 max-w-[500px] order-2 lg:order-1">
          <h2 className="font-roboto font-bold text-[#1e293b] text-[28px] sm:text-[36px] tracking-[1.8px] leading-normal">
            Our Legacy of Expertise
          </h2>
          <p className="font-inter font-normal text-[#475569] text-[16px] sm:text-[18px] leading-normal">
            Established in 2009, our leadership team brings over three decades of hands-on experience in glasswork, facade engineering, and structural glazing systems. This deep industry knowledge allows us to manage complex, large scale projects with technical confidence and precision.
          </p>
          <p className="font-inter font-normal text-[#475569] text-[16px] sm:text-[18px] leading-normal">
            Our experience extends across commercial high rises, corporate headquarters, hospitality developments, premium residential projects, and institutional infrastructure.
          </p>
        </div>

        {/* Image with badge */}
        <div className="relative shrink-0 w-full max-w-[536px] lg:w-[45%] aspect-[536/402] order-1 lg:order-2">
          <div className="relative rounded-[10px] overflow-hidden h-full w-full">
            <img src={imgLegacyBg} alt="Legacy" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-black/50 rounded-[10px]" />
          </div>
          {/* 2009 Badge */}
          <div className="absolute bottom-0 left-0 flex min-h-[86px] w-[min(38%,205px)] min-w-[156px] flex-col items-center justify-center rounded-[10px] border border-white/70 bg-[linear-gradient(110deg,rgba(255,255,255,0.38),rgba(164,172,172,0.72)_48%,rgba(255,255,255,0.42))] px-4 py-3 text-center shadow-[0_12px_30px_rgba(0,0,0,0.2)] backdrop-blur-md sm:min-h-[104px]">
            <p className="font-['DM_Serif_Display',serif] text-[#137fec] text-[clamp(42px,5vw,58px)] leading-[0.95]">2009</p>
            <p className="mt-2 font-inter text-[#475569] text-[clamp(10px,1vw,14px)] tracking-wide uppercase leading-[1.2]">Since</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────
// COMPREHENSIVE FACADE & GLAZING SOLUTIONS
// ────────────────────────────────────────────────────────────────
function FacadeSection() {
  const services = [
    {
      icon: imgDesignEngineeringIcon,
      title: "Design & Engineering",
      items: [
        "Technical feasibility studies",
        "Structural analysis and detailing",
        "Shop drawings and fabrication drawings",
        "System optimization for energy efficiency",
      ],
    },
    {
      icon: imgFabricationTechIcon,
      title: "Fabrication & Tech",
      items: [
        "Advanced glass processing and finishing",
        "High precision aluminium system fabrication",
        "Certified material sourcing",
        "Quality inspection at every stage",
      ],
    },
    {
      icon: imgInstallationExecutionIcon,
      title: "Installation & Execution",
      items: [
        "Structured project management",
        "On site technical supervision",
        "Strict safety compliance",
        "Timely and disciplined execution",
      ],
    },
  ];

  return (
    <section id="services" className="relative overflow-hidden">
      <img
        src={imgFacadeBg}
        alt="Facade solutions bg"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-20 py-12 lg:py-[50px] flex flex-col gap-10">
        <h2 className="font-roboto font-bold text-white text-[28px] sm:text-[36px] leading-[40px] text-center">
          Comprehensive Facade &amp; Glazing Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {services.map((s) => (
            <div key={s.title} className="flex flex-col gap-6">
              <div className="bg-white/90 rounded-lg w-14 h-14 flex items-center justify-center shrink-0">
                <img src={s.icon} alt="" className="w-7 h-7 object-contain" />
              </div>
              <h3 className="font-roboto font-bold text-white text-[20px] leading-[28px]">{s.title}</h3>
              <ul className="font-roboto font-normal text-white text-[15px] leading-[26px] flex flex-col gap-1">
                {s.items.map((item) => (
                  <li key={item}>* {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────
// OUR CORE SPECIALIZATIONS (horizontal scroll strip)
// ────────────────────────────────────────────────────────────────
function SpecializationsSection() {
  const carouselItems = [...specializations, ...specializations];

  return (
    <section className="overflow-hidden bg-white">
      {/* Title row */}
      <div className="flex items-center justify-center h-[112px] px-4">
        <h2 className="font-roboto font-bold text-black text-[28px] sm:text-[36px] text-center leading-[40px]">
          Our Core Specializations
        </h2>
      </div>
      {/* Wallpaper carousel */}
      <div className="overflow-hidden pb-6">
        <div className="specializations-carousel-track flex w-max">
          {carouselItems.map((spec, index) => (
            <div
              key={`${spec.label}-${index}`}
              className="relative mx-[6px] h-[350px] w-[300px] shrink-0 overflow-hidden sm:h-[476px] sm:w-[357px]"
            >
              <img src={spec.img} alt={spec.label} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[30%] to-black/50 to-[84%]" />
              <div className="absolute bottom-2 left-3 right-3">
                <div className="bg-[#a1cff7] rounded-full py-1.5 px-4 text-center border border-[rgba(17,115,212,0.1)]">
                  <span className="font-roboto font-black text-black text-[20px] sm:text-[24px] leading-tight">{spec.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────
// CORE SERVICES ICON GRID
// ────────────────────────────────────────────────────────────────
function CoreServicesGrid() {
  return (
    <section className="bg-white border-b border-[#0f172a]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-12 sm:py-14 lg:py-[50px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-12 sm:gap-y-14 lg:gap-x-24">
          {coreServices.map((s) => (
            <div key={s.label} className="flex min-h-[90px] flex-col items-center justify-start gap-3">
              <img src={s.icon} alt="" className="h-12 w-12 object-contain" />
              <p className="font-roboto font-bold text-black text-[15px] sm:text-[16px] text-center leading-[24px] max-w-[140px]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────
// OPERATIONAL DISCIPLINE & QUALITY ASSURANCE
// ────────────────────────────────────────────────────────────────
function OperationalSection() {
  const items = [
    { title: "ISO 9001:2015 Certified", desc: "Adhering to global quality management systems for every process." },
    { title: "Seismic & Wind Load Testing", desc: "Rigorous simulation for structural resilience in extreme weather." },
    { title: "Safety-First Culture", desc: "Zero-compromise safety protocols for all high-altitude installations." },
  ];

  return (
    <section className="relative overflow-hidden">
      <img
        src={imgOpBg}
        alt="Operations background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-20 py-14 lg:py-[60px] flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text col */}
        <div className="flex flex-col gap-5 max-w-[600px]">
          <h2 className="font-roboto font-bold text-white text-[24px] sm:text-[30px] leading-[36px]">
            Operational Discipline &amp; Quality Assurance
          </h2>
          <p className="font-roboto font-normal text-[#cecece] text-[16px] sm:text-[18px] leading-[28px]">
            Our engineering workflow is built on a foundation of international standards. We maintain absolute discipline in sourcing, fabrication, and installation to guarantee safety and longevity.
          </p>
          <div className="flex flex-col gap-4 mt-2">
            {items.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <img
                  src={imgCheckCircleIcon}
                  alt=""
                  className="mt-1 h-5 w-5 shrink-0 object-contain"
                />
                <div>
                  <p className="font-roboto font-bold text-white text-[15px] leading-[24px]">{item.title}</p>
                  <p className="font-inter font-normal text-[#cecece] text-[13px] leading-[20px]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Two overlapping photos */}
        <div className="relative w-full lg:w-[560px] h-[360px] shrink-0">
          <div className="absolute top-0 left-0 w-[260px] h-[258px] rounded-xl overflow-hidden">
            <img src={imgOpPhoto1} alt="Operations 1" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 w-[260px] h-[258px] rounded-xl overflow-hidden">
            <img src={imgOpPhoto2} alt="Operations 2" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────
// QUOTE SECTION
// ────────────────────────────────────────────────────────────────
function QuoteSection() {
  return (
    <section className="relative overflow-hidden">
      <img src={imgQuoteBg} alt="Quote background" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 lg:px-20 py-16 lg:py-20 text-center">
        <img
          src={imgFormatQuoteIcon}
          alt=""
          className="h-[26px] w-[35px] object-contain"
        />
        <h2 className="font-roboto font-bold text-white text-[28px] sm:text-[40px] lg:text-[48px] leading-[1.2] max-w-[900px]">
          "We do not merely install glass. We engineer architectural identities that define skylines."
        </h2>
        <div className="bg-[#1173d4] h-[4px] w-24" />
        <p className="font-roboto font-bold text-[#94a3b8] text-[14px] tracking-[4.8px] uppercase">Mars Glass Solutions</p>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────
// PROJECTS HERO BANNER
// ────────────────────────────────────────────────────────────────
function ProjectsHero() {
  return (
    <section id="project" className="relative overflow-hidden h-[400px] sm:h-[520px] lg:h-[620px]">
      <img src={imgProjectHero} alt="Our esteemed projects" className="absolute inset-0 w-full h-full object-cover" />
      {/* Centered overlay card */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative backdrop-blur-md bg-black/40 border border-[#c6c0c0] rounded-[14px] p-5 sm:p-8 mx-4 max-w-[620px] w-full flex flex-col gap-8 items-center">
          <h2 className="font-roboto font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#5a93d1] to-white text-[36px] sm:text-[50px] lg:text-[56px] text-center leading-[1.2] tracking-[-1.5px]">
            OUR ESTEEMED PROJECTS
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="#/about#portfolio"
              className="bg-[#5a93d1] text-black font-roboto font-bold text-[14px] px-6 py-3 rounded-lg"
            >
              Request Consultation
            </a>
            <a
              href="#/about#portfolio"
              className="bg-white border border-black text-black font-inter font-bold text-[14px] px-6 py-3 rounded-lg"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────
// ARCHITECTURAL PORTFOLIO
// ────────────────────────────────────────────────────────────────
function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-[#222]">
      <div className="px-6 lg:px-20 py-14 lg:py-[60px] flex flex-col items-center gap-4">
        <h2 className="font-roboto font-bold text-[#4299f0] text-[28px] sm:text-[34px] text-center underline underline-offset-4">
          Architectural Portfolio
        </h2>
        <p className="font-roboto font-normal text-white text-[15px] text-center max-w-[880px]">
          Explore our latest innovations in structural glazing, facade engineering, and custom glass solutions across the globe.
        </p>
      </div>

      {/* Project cards grid */}
      <div className="px-6 sm:px-10 lg:px-20 pb-14 lg:pb-[60px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
          {projects.map((p) => (
            <div
              key={p.name}
              className="relative w-full max-w-[369px] h-[356px] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)]"
            >
              {/* Card background */}
              <div className="absolute inset-x-0 top-0 h-[340px] bg-[#f4f4f4] rounded-[66px]" />
              {/* Image area */}
              <div className="absolute top-[9px] left-[9px] right-[9px] h-[222px] rounded-[60px] overflow-hidden shadow-[0px_0px_8px_0px_#407bff]">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Text */}
              <div className="absolute left-6 top-[249px] w-[267px]">
                <p className="font-roboto font-semibold text-[#4299f0] text-[22px] leading-normal">{p.name}</p>
                <p className="font-roboto font-normal text-black text-[18px] leading-normal">{p.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────
// CTA – Have a Vision
// ────────────────────────────────────────────────────────────────
function CtaSection() {
  return (
    <section className="bg-[#222] border-t border-gray-700">
      <div className="px-6 lg:px-20 py-12 lg:py-[40px] flex flex-col items-center gap-6 text-center">
        <h2 className="font-roboto font-bold text-[#4299f0] text-[24px] sm:text-[34px] underline underline-offset-4">
          Have a Vision for Your Next Building?
        </h2>
        <p className="font-roboto font-normal text-white text-[14px] sm:text-[16px] max-w-[700px]">
          Let's collaborate on your next architectural masterpiece. Our engineers are ready to bring technical excellence to your design.
        </p>
        <a
          href="#/contact"
          className="bg-[#5a93d1] text-black font-roboto font-bold text-[14px] px-8 py-3 rounded-lg"
        >
          Request Consultation
        </a>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────
// FOOTER
// ────────────────────────────────────────────────────────────────
function Footer() {
  return <SiteFooter />;
}

// ────────────────────────────────────────────────────────────────
// ROOT
// ────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-white font-roboto">
      <ServiceNavbar />
      <Hero />
      <AboutSection />
      <LegacySection />
      <FacadeSection />
      <SpecializationsSection />
      <CoreServicesGrid />
      <OperationalSection />
      <QuoteSection />
      <Footer />
    </div>
  );
}
