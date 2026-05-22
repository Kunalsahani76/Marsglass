import { useEffect, useRef, useState } from "react";
import svgPaths from "@/imports/ContactPage/Contact/svg-vppthmw37v";
import SiteFooter from "../components/SiteFooter";
import ServiceNavbar from "../components/ServiceNavbar";
import imgLogo from "@/imports/ContactPage/Contact/3eb7b26dcf0dd609404203e92ea981a8a747ef76.png";
import imgHeroBg from "@/imports/ContactPage/Contact/e1770aa3d01cc68cd32d478b7008480d7eff09e8.png";
import imgAboutImg from "@/imports/ContactPage/Contact/effd7e15c64c3f1b481b2fdfe6ffe08f89e320e9.png";
import imgNavLogo from "@/imports/ContactPage/Contact/a08ae53b754d0c478618f1f8072832fea766a0a6.png";

const contactNavHref = (item: string) => {
  const routes: Record<string, string> = {
    Home: "#/",
    About: "#/about",
    Services: "#/contact#services",
    Project: "#/projects",
    Projects: "#/projects",
    Contact: "#/contact",
  };

  return routes[item] ?? `#/contact#${item.toLowerCase()}`;
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

  return routes[service] ?? "#/contact#services";
};

/* ─── Navbar ─────────────────────────────────────────────────── */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const desktopServicesRef = useRef<HTMLDivElement>(null);
  const mobileServicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const links = ["Home", "About", "Services", "Project"];

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow ${scrolled ? "shadow-md" : ""}`}
    >
      <div className="flex items-center justify-between px-6 md:px-8 py-3 max-w-[1460px] mx-auto">
        {/* Logo */}
        <a href="#/" className="h-[60px] w-[84px] relative overflow-hidden shrink-0">
          <img
            src={imgNavLogo}
            alt="Mars Glass Solutions"
            className="absolute h-[368.33%] max-w-none"
            style={{ width: "263.1%", top: "-134.17%", left: "-80.36%" }}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {links.map((link) =>
            link === "Services" ? (
              <div
                key={link}
                ref={desktopServicesRef}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 font-['Roboto',sans-serif] text-[#1e1e1e] text-[17px] capitalize tracking-[-0.09px] hover:text-[#5a93d1] transition-colors"
                  onClick={() => setServicesOpen((current) => !current)}
                >
                  <span>{link}</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
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
                key={link}
                href={contactNavHref(link)}
                className="font-['Roboto',sans-serif] text-[#1e1e1e] text-[17px] capitalize tracking-[-0.09px] hover:text-[#5a93d1] transition-colors"
              >
                {link}
              </a>
            )
          )}
        </nav>

        {/* Contact Button */}
        <a
          href="#/contact"
          className="hidden md:flex items-center gap-2 border border-black rounded-lg px-5 py-2 font-['Inter',sans-serif] font-bold text-[16px] text-black hover:bg-black hover:text-white transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d={svgPaths.pb384280} fill="currentColor" />
          </svg>
          Contact
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-transform ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-0.5 bg-black transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-black transition-transform ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-4">
          {links.map((link) =>
            link === "Services" ? (
              <div key={link} ref={mobileServicesRef} className="border-b border-gray-100 py-3">
                <button
                  type="button"
                  className="flex w-full items-center justify-between font-['Roboto',sans-serif] text-[#1e1e1e] text-[16px] capitalize"
                  onClick={() => setServicesOpen((current) => !current)}
                  aria-expanded={servicesOpen}
                >
                  <span>{link}</span>
                  <svg className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="mt-4 grid gap-3 pl-4">
                    {serviceColumns.flat().map((service) => (
                      <a
                        key={service}
                        href={serviceNavHref(service)}
                        onClick={() => {
                          setMenuOpen(false);
                          setServicesOpen(false);
                        }}
                        className="block font-['Roboto',sans-serif] text-[14px] leading-[1.35] text-[#1e1e1e]"
                      >
                        {service}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link}
                href={contactNavHref(link)}
                onClick={() => setMenuOpen(false)}
                className="block py-3 font-['Roboto',sans-serif] text-[#1e1e1e] text-[16px] capitalize border-b border-gray-100 last:border-0"
              >
                {link}
              </a>
            )
          )}
          <a
            href="#/contact"
            className="mt-3 flex items-center justify-center gap-2 border border-black rounded-lg px-5 py-2 font-['Inter',sans-serif] font-bold text-[16px] text-black"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}

/* ─── Hero Section ───────────────────────────────────────────── */
function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[520px] lg:min-h-[620px] flex items-center justify-center overflow-hidden">
      <img src={imgHeroBg} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center px-4 py-24">
        <h1 className="font-['Roboto',sans-serif] font-semibold text-white text-5xl sm:text-6xl lg:text-[80px] xl:text-[96px] leading-tight mb-4">
          Mars Glass Solutions
        </h1>
        <p className="font-['Roboto',sans-serif] font-semibold text-white text-xl sm:text-2xl lg:text-[36px]">
          Precision. Strength. Elegance in Glass & Facade
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#/projects"
            className="bg-[#5a93d1] text-black font-['Roboto',sans-serif] font-bold text-[17px] px-8 py-3 rounded-lg capitalize"
          >
            View Projects
          </a>
          <a
            href="#/contact#get-in-touch"
            className="contact-hero-touch-button border border-white text-white font-['Roboto',sans-serif] font-bold text-[17px] px-8 py-3 rounded-lg capitalize"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── About Section ──────────────────────────────────────────── */
function About() {
  return (
    <section id="about" className="bg-[#222] w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20 py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 min-w-0">
          <p className="font-['Roboto',sans-serif] text-white text-lg sm:text-xl lg:text-[23px] leading-relaxed mb-6">
            At{" "}
            <span className="font-bold">Mars Glass Solutions Pvt. Ltd.,</span>{" "}
            we believe every successful project begins with a clear conversation.
          </p>
          <p className="font-['Roboto',sans-serif] font-light text-white text-lg sm:text-xl lg:text-[23px] leading-relaxed mb-6">
            Whether you are planning a commercial tower, residential development, corporate office, or exterior renovation, our engineering team is ready to assist you with precision and expertise.
          </p>
          <p className="font-['Roboto',sans-serif] font-semibold text-white text-lg sm:text-xl lg:text-[23px] leading-relaxed mb-3">
            We welcome architects, developers, consultants, contractors,
          </p>
          <p className="font-['Roboto',sans-serif] font-light text-white text-lg sm:text-xl lg:text-[23px] leading-relaxed">
            And project owners to connect with us for tailored glass and facade solutions.
          </p>
        </div>
        <div className="shrink-0 w-full max-w-[420px] lg:w-[495px] lg:max-w-none">
          <img
            src={imgAboutImg}
            alt="Glass facade project"
            className="w-full h-[300px] sm:h-[360px] lg:h-[382px] object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Vision Section ─────────────────────────────────────────── */
function Vision() {
  return (
    <section id="vision" className="bg-[#151515] w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full max-w-[480px] shrink-0">
            <div className="bg-gradient-to-br from-[#5a93d1]/20 to-[#91d1e3]/20 border border-[#5a93d1]/30 rounded-2xl p-8 lg:p-12 flex flex-col items-center text-center gap-6">
              <div className="w-16 h-16 bg-[#5a93d1]/20 rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="6" fill="#5a93d1" />
                  <circle cx="16" cy="16" r="12" stroke="#5a93d1" strokeWidth="2" fill="none" />
                  <circle cx="16" cy="16" r="15" stroke="#5a93d1" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                </svg>
              </div>
              <h2 className="font-['Roboto',sans-serif] font-bold text-white text-3xl lg:text-4xl">Our Vision</h2>
              <p className="font-['Roboto',sans-serif] font-light text-white/80 text-base lg:text-lg leading-relaxed">
                To be India's most trusted glass and facade engineering partner — redefining how buildings look, feel, and perform through innovation, craftsmanship, and an unwavering commitment to excellence.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <p className="font-['Roboto',sans-serif] font-semibold text-[#4299f0] text-sm uppercase tracking-[2px] mb-4">What Drives Us</p>
            <h3 className="font-['Roboto',sans-serif] font-bold text-white text-2xl lg:text-3xl mb-6 leading-tight">
              Building a future where architecture and glass engineering are inseparable
            </h3>
            <p className="font-['Roboto',sans-serif] font-light text-white/80 text-base lg:text-lg leading-relaxed mb-4">
              We envision a built environment where glass is not just a material — it is a statement of precision, sustainability, and design intelligence.
            </p>
            <p className="font-['Roboto',sans-serif] font-light text-white/80 text-base lg:text-lg leading-relaxed">
              From commercial skyscrapers to intimate residential facades, our vision guides every project we undertake, ensuring that each installation is a lasting testament to quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Mission Section ────────────────────────────────────────── */
function Mission() {
  return (
    <section id="mission" className="bg-[#222] w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
          <div className="w-full max-w-[480px] shrink-0">
            <div className="bg-gradient-to-br from-black to-[#181f55] border border-white/20 rounded-2xl p-8 lg:p-12 flex flex-col items-center text-center gap-6">
              <div className="w-16 h-16 bg-[#5a93d1]/20 rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 4L28 10V22L16 28L4 22V10L16 4Z" stroke="#5a93d1" strokeWidth="2" fill="none" />
                  <path d="M16 10L22 13V19L16 22L10 19V13L16 10Z" fill="#5a93d1" fillOpacity="0.4" />
                </svg>
              </div>
              <h2 className="font-['Roboto',sans-serif] font-bold text-white text-3xl lg:text-4xl">Our Mission</h2>
              <p className="font-['Roboto',sans-serif] font-light text-white/80 text-base lg:text-lg leading-relaxed">
                To deliver precision-engineered glass and facade solutions that combine aesthetic excellence with structural integrity, serving every client with transparency, trust, and technical mastery.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <p className="font-['Roboto',sans-serif] font-semibold text-[#4299f0] text-sm uppercase tracking-[2px] mb-4">Our Purpose</p>
            <h3 className="font-['Roboto',sans-serif] font-bold text-white text-2xl lg:text-3xl mb-6 leading-tight">
              Every project is a promise — delivered with precision and care
            </h3>
            <div className="flex flex-col gap-4">
              {[
                "Engineer glass facades that meet international quality standards",
                "Provide end-to-end service from design consultation to installation",
                "Build lasting partnerships with architects, contractors, and developers",
                "Continuously innovate to adopt sustainable and efficient glazing technologies",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#5a93d1]/20 border border-[#5a93d1]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="#5a93d1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="font-['Roboto',sans-serif] font-light text-white/80 text-base leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Why Choose Us ──────────────────────────────────────────── */
const whyItems = [
  {
    icon: "🏗️",
    title: "25+ Years Experience",
    desc: "Decades of expertise in glass and facade engineering across commercial, residential, and institutional projects.",
  },
  {
    icon: "🔧",
    title: "Precision Engineering",
    desc: "Every installation is planned with meticulous detail — from structural calculations to final finishing.",
  },
  {
    icon: "🌿",
    title: "Sustainable Solutions",
    desc: "We prioritize energy-efficient glazing systems that reduce carbon footprint without compromising aesthetics.",
  },
  {
    icon: "🤝",
    title: "End-to-End Service",
    desc: "From consultation and design to manufacturing and installation — we handle the entire project lifecycle.",
  },
  {
    icon: "📐",
    title: "Custom Fabrication",
    desc: "Bespoke glass solutions tailored to the unique architectural requirements of each project.",
  },
  {
    icon: "⭐",
    title: "Quality Certified",
    desc: "All our products and processes conform to Indian and international quality and safety standards.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-[#151515] w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20 py-16 lg:py-20">
        <div className="text-center mb-12">
          <p className="font-['Roboto',sans-serif] font-semibold text-[#4299f0] text-sm uppercase tracking-[2px] mb-3">Why Us</p>
          <h2
            className="font-['Roboto',sans-serif] font-bold text-white text-3xl lg:text-[40px] leading-tight underline decoration-[#4299f0]"
            style={{ textDecorationThickness: "3px", textUnderlineOffset: "6px" }}
          >
            Why Choose Mars Glass Solutions?
          </h2>
          <p className="font-['Roboto',sans-serif] font-light text-white/70 text-base lg:text-lg mt-4 max-w-2xl mx-auto">
            We combine engineering excellence with artistic vision to deliver glass facade solutions that stand the test of time.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyItems.map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-black to-[#181f55] border border-white/20 rounded-xl p-8 flex flex-col gap-4"
            >
              <div className="text-4xl">{item.icon}</div>
              <h3 className="font-['Roboto',sans-serif] font-bold text-white text-xl">{item.title}</h3>
              <p className="font-['Roboto',sans-serif] font-light text-white/70 text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Features/Benefits ──────────────────────────────────────── */
const features = [
  { label: "Structural Glazing", value: "Double & Triple Glazed Units" },
  { label: "Curtain Wall Systems", value: "Aluminium & Steel Framing" },
  { label: "Spider Glazing", value: "Point-Fixed Frameless Systems" },
  { label: "Skylight Solutions", value: "Custom Roof & Atrium Glass" },
  { label: "ACP Cladding", value: "Aluminium Composite Panels" },
  { label: "Fire-Rated Glass", value: "Safety & Compliance Certified" },
  { label: "Acoustic Glass", value: "Sound Insulation Systems" },
  { label: "Solar Control", value: "Heat & UV Reduction Glazing" },
];

function Features() {
  return (
    <section id="services" className="bg-[#222] w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20 py-16 lg:py-20">
        <div className="text-center mb-12">
          <p className="font-['Roboto',sans-serif] font-semibold text-[#4299f0] text-sm uppercase tracking-[2px] mb-3">What We Offer</p>
          <h2 className="font-['Roboto',sans-serif] font-bold text-white text-3xl lg:text-[40px] leading-tight">
            Our Glass & Facade Solutions
          </h2>
          <p className="font-['Roboto',sans-serif] font-light text-white/70 text-base lg:text-lg mt-4 max-w-2xl mx-auto">
            Comprehensive facade engineering services covering every aspect of modern glass installation.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <div key={i} className="bg-[#151515] border border-white/10 rounded-xl p-6 flex flex-col gap-2">
              <div className="w-8 h-1 bg-[#5a93d1] rounded-full mb-2" />
              <p className="font-['Roboto',sans-serif] font-semibold text-white text-lg">{f.label}</p>
              <p className="font-['Roboto',sans-serif] font-light text-white/60 text-sm">{f.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Projects Showcase ──────────────────────────────────────── */
const projects = [
  { title: "DLF Cyber Hub", location: "Gurgaon, Haryana", type: "Commercial Tower", color: "#1a2a4a" },
  { title: "Oberoi Realty", location: "Mumbai, Maharashtra", type: "Luxury Residential", color: "#1a3a2a" },
  { title: "Infosys Campus", location: "Bengaluru, Karnataka", type: "Corporate Campus", color: "#2a1a3a" },
  { title: "Delhi Metro Station", location: "New Delhi", type: "Public Infrastructure", color: "#3a2a1a" },
  { title: "Hyatt Regency", location: "New Delhi", type: "Hospitality", color: "#1a3a3a" },
  { title: "Phoenix Mall", location: "Navi Mumbai", type: "Retail & Commercial", color: "#2a2a1a" },
];

function Projects() {
  return (
    <section id="project" className="bg-[#151515] w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20 py-16 lg:py-20">
        <div className="text-center mb-12">
          <p className="font-['Roboto',sans-serif] font-semibold text-[#4299f0] text-sm uppercase tracking-[2px] mb-3">Our Work</p>
          <h2 className="font-['Roboto',sans-serif] font-bold text-white text-3xl lg:text-[40px] leading-tight">
            Featured Projects
          </h2>
          <p className="font-['Roboto',sans-serif] font-light text-white/70 text-base lg:text-lg mt-4 max-w-2xl mx-auto">
            A selection of landmark projects where our glass and facade expertise has transformed architectural visions into reality.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-white/10">
              <div
                className="w-full h-[200px] lg:h-[220px] flex items-end p-6"
                style={{ background: `linear-gradient(135deg, ${p.color} 0%, #0a0a0a 100%)` }}
              >
                <div>
                  <span className="inline-block bg-[#5a93d1]/30 text-[#5a93d1] text-xs font-['Roboto',sans-serif] font-semibold px-3 py-1 rounded-full mb-2">
                    {p.type}
                  </span>
                  <h3 className="font-['Roboto',sans-serif] font-bold text-white text-xl">{p.title}</h3>
                  <p className="font-['Roboto',sans-serif] font-light text-white/60 text-sm mt-1">{p.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact Section ────────────────────────────────────────── */
function ContactInfo() {
  const cards = [
    {
      svgPath: svgPaths.p7c43f00,
      title: "Our Office",
      detail: "A-28A, Rajouri Garden, Ring Road, New Delhi-110027",
    },
    {
      svgPath: svgPaths.pa775580,
      title: "Mail Us",
      detail: "info@manglass.co.in",
    },
    {
      svgPath: svgPaths.pa6e3980,
      title: "Call Us",
      detail: "+91 9319744714 / 011-43411290",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center py-12 lg:py-20 px-6 bg-[#222] w-full">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-gradient-to-b from-black to-[#181f55] border border-white rounded-xl flex flex-col items-center gap-6 p-6 lg:p-8 w-full sm:w-[calc(50%-12px)] lg:w-[380px] text-center"
        >
          <div className="w-[67px] h-[67px] shrink-0">
            <svg width="67" height="67" viewBox="0 0 67 67" fill="none">
              <path d={card.svgPath} fill="white" />
            </svg>
          </div>
          <h3
            className="font-['Roboto',sans-serif] font-bold text-white capitalize"
            style={{ fontSize: "33px", lineHeight: 1.45, letterSpacing: "-0.17px" }}
          >
            {card.title}
          </h3>
          <p
            className="font-['Roboto',sans-serif] font-light text-white capitalize"
            style={{ fontSize: "21px", lineHeight: 1.45, letterSpacing: "-0.11px" }}
          >
            {card.detail}
          </p>
        </div>
      ))}
    </div>
  );
}

function ContactForm() {
  return (
    <section id="contact" className="bg-[#222] w-full">
      {/* Form + Map */}
      <div id="get-in-touch" className="w-full px-6 md:px-10 lg:px-[70px] py-12 lg:py-[60px] flex flex-col lg:flex-row gap-10 lg:gap-[60px] items-start max-w-[1400px] mx-auto scroll-mt-24">
        {/* Form */}
        <div className="flex-1 min-w-0 flex flex-col gap-10 lg:gap-[81px]">
          <div className="flex flex-col gap-3 text-white">
            <h2 className="font-['Roboto',sans-serif] font-semibold text-[32px] lg:text-[40px]">Get in Touch</h2>
            <p className="font-['Roboto',sans-serif] text-base text-white/90 max-w-[440px]">
              Reach out to discuss your project requirements, request a technical consultation, or receive a customized proposal.
            </p>
          </div>
          <div className="flex flex-col gap-5 w-full">
            {[
              { label: "Your Name", type: "text", placeholder: "" },
              { label: "Email Address", type: "email", placeholder: "" },
              { label: "Phone Number", type: "tel", placeholder: "" },
            ].map((field) => (
              <div key={field.label} className="flex flex-col gap-1.5 w-full">
                <label className="font-['Roboto',sans-serif] font-semibold text-white text-[20px]">{field.label}</label>
                <input
                  type={field.type}
                  className="bg-white h-[53px] rounded-[4px] w-full px-4 text-black font-['Roboto',sans-serif] text-base outline-none"
                />
              </div>
            ))}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="font-['Roboto',sans-serif] font-semibold text-white text-[20px]">Message</label>
              <div className="relative">
                <textarea
                  className="bg-white h-[169px] rounded-[4px] w-full px-5 py-8 text-black font-['Roboto',sans-serif] text-base outline-none resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-[rgba(88,167,246,0.6)] to-[rgba(145,209,227,0.6)] rounded-[4px] p-[10px] font-['Roboto',sans-serif] font-semibold text-white text-[22px] lg:text-[26px]">
              Send Message
            </button>
          </div>
        </div>

        {/* Map */}
        <div className="shrink-0 w-full max-w-[520px] lg:w-[595px] lg:max-w-none">
          <iframe
            title="Mars Glass Solutions location map"
            src="https://www.google.com/maps?q=A-28A%2C%20Rajouri%20Garden%2C%20Ring%20Road%2C%20New%20Delhi-110027&output=embed"
            className="w-full h-[400px] sm:h-[500px] lg:h-[811px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>

      {/* Contact Info Cards */}
      <ContactInfo />
    </section>
  );
}

/* ─── CTA Banner ─────────────────────────────────────────────── */
function CTABanner() {
  return (
    <section className="bg-[#222] w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20 py-12 lg:py-16 flex flex-col items-center gap-5 text-center">
        <h2
          className="font-['Roboto',sans-serif] font-bold text-[#4299f0] text-2xl lg:text-[34px] underline"
          style={{ textDecorationColor: "#4299f0", textDecorationThickness: "2px" }}
        >
          Have a Vision for Your Next Building?
        </h2>
        <p className="font-['Roboto',sans-serif] text-white text-base max-w-2xl">
          {"Let's collaborate on your next architectural masterpiece. Our engineers are ready to bring technical excellence to your design."}
        </p>
        <button
          type="button"
          onClick={() => document.getElementById("get-in-touch")?.scrollIntoView({ behavior: "smooth", block: "start" })}
          className="bg-[#5a93d1] text-black font-['Roboto',sans-serif] font-bold text-[17px] px-6 py-3 rounded-lg capitalize"
        >
          Start Project Inquiry
        </button>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────── */
function Footer() {
  return <SiteFooter />;
}

/* ─── Root ───────────────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <div className="bg-[#151515] min-h-screen w-full flex flex-col">
      <ServiceNavbar />
      <Hero />
      <About />
      <Vision />
      <Mission />
      <WhyChooseUs />
      <Features />
      <ContactForm />
      <CTABanner />
      <Footer />
    </div>
  );
}
