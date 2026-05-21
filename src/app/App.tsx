import { useEffect, useRef, useState } from "react";
import AboutPage from "./about-page/AboutPage";
import ContactPage from "./contact-page/ContactPage";
import SiteFooter from "./components/SiteFooter";
import ProjectsPage from "./projects-page/ProjectsPage";
import AcpCladdingSystemsPage from "./service-pages/AcpCladdingSystemsPage";
import AluminiumDoorSystemsPage from "./service-pages/AluminiumDoorSystemsPage";
import AluminumWindowsDoorsPage from "./service-pages/AluminumWindowsDoorsPage";
import GlassPartitionSystemsPage from "./service-pages/GlassPartitionSystemsPage";
import GlassCanopySystemsPage from "./service-pages/GlassCanopySystemsPage";
import InteriorGlassSolutionsPage from "./service-pages/InteriorGlassSolutionsPage";
import StructuralGlazingSystemsPage from "./service-pages/StructuralGlazingSystemsPage";
import UpvcDoorSystemsPage from "./service-pages/UpvcDoorSystemsPage";
import CurtainWallSystemsPage from "./service-pages/CurtainWallSystemsPage";
import svgPaths from "@/imports/Home/svg-od9zlvzvzo";
import imgFrame427319183 from "@/imports/Home/7d8a5e267a1459178e71b0854e875feb30865041.png";
import imgRectangle111141370 from "@/imports/Home/783cc26db44a314c44c9856a09e2d4edd69c905c.png";
import imgRectangle111141371 from "@/imports/Home/86e41f6298e8da42285cb9e8e6adb1b2aa456e87.png";
import imgRectangle111141372 from "@/imports/Home/cbb81fbd37318312709935193e762717cff7811c.png";
import imgRectangle111141373 from "@/imports/Home/a26a3de8b23a1d599af6ddbadf65cd1c2cd9c83e.png";
import imgRectangle111141359 from "@/imports/Home/e99a409b232b820b98714c37703a13bfa8ac23ea.png";
import imgRectangle111141360 from "@/imports/Home/a8b73beac2aed57fc36515342703d7830e5c3523.png";
import imgRectangle111141361 from "@/imports/Home/4505a5387a038c87ffab66230b3c67f13d82d83d.png";
import imgFrame1000007719 from "@/imports/Home/742f8d23088244cf6df0f774134efaa299566a17.png";
import imgFrame1000007720 from "@/imports/Home/c2c86abaa10ed2031f0dac4e53928abf60f56404.png";
import imgFrame1000007721 from "@/imports/Home/d69a050438aa04aae169b0bd99160ad57c92a75e.png";
import imgFrame1000007722 from "@/imports/Home/c98efad84cefcf67ae07a4f05a1fb9d9e60bc45d.png";
import imgFrame1000007723 from "@/imports/Home/6f2868ecd492b8465157ee502c900ba2c2c72058.png";
import imgFrame1000007724 from "@/imports/Home/4d730bb86ae066a66a81645cf0aa0e7558ffe2ac.png";
import imgFrame1000007725 from "@/imports/Home/6ead20604f487c8f81f6b8432c4daf49394b27bc.png";
import imgFrame1000007726 from "@/imports/Home/b0e8966acdb0195f654ee9013d56419444aabc24.png";
import imgFrame1000007727 from "@/imports/Home/642ecc0730efcf64aea12b0ca83fb847d8cb0560.png";
import imgRectangle111141362 from "@/imports/Home/6bc4b37fde09dc06a1cdc958e87290b8c5b981f1.png";
import imgRectangle111141367 from "@/imports/Home/56764cb09828da8f063c6c945697d897633566ae.png";
import imgRectangle111141363 from "@/imports/Home/d33aa9ead0e963e385d3e8c396636b4e1e571a4c.png";
import imgRectangle111141364 from "@/imports/Home/d2f6e16cfb6a0ede88bae7bc3f8435230369b31a.png";
import imgRectangle111141365 from "@/imports/Home/5a0c5cd70d1756d469035f7a01a198c5a5e62587.png";
import imgFrame1000007495 from "@/imports/Home/3eb7b26dcf0dd609404203e92ea981a8a747ef76.png";
import imgLogo from "@/imports/Home/a08ae53b754d0c478618f1f8072832fea766a0a6.png";
import imgMercedesShowroomOkhla from "../../Mercedes Showroom Okhla.jpeg";

const homeNavHref = (item: string) => {
  const routes: Record<string, string> = {
    Home: "#home",
    About: "#/about",
    "About Us": "#/about",
    Project: "#/projects",
    Projects: "#/projects",
    Services: "#services",
    Contact: "#/contact",
  };

  return routes[item] ?? `#${item.toLowerCase()}`;
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
    "Aluminium Windows & Doors": "#/services/aluminum-windows-doors",
    "Glass Partition Systems": "#/services/glass-partition-systems",
    "Interior Glass Solutions": "#/services/interior-glass-solutions",
    "Aluminium Door Systems": "#/services/aluminium-door-systems",
    "UPVC Door Systems": "#/services/upvc-door-systems",
  };

  return routes[service] ?? "#services";
};

const heroCarouselImages = [
  { src: imgRectangle111141370, alt: "Glass facade project" },
  { src: imgRectangle111141371, alt: "Modern glass facade project" },
  { src: imgRectangle111141372, alt: "Interior glass partition project" },
  { src: imgRectangle111141373, alt: "Sliding glass door installation" },
];

/* ─── Icons ─── */
function PhoneIcon() {
  return (
    <svg
      className="block shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      width="20"
      height="20"
    >
      <path d={svgPaths.pb384280} fill="currentColor" />
    </svg>
  );
}

function DropdownArrow() {
  return (
    <svg
      className="block shrink-0"
      fill="none"
      viewBox="0 0 24 26"
      width="18"
      height="18"
    >
      <path d={svgPaths.p3b2ff900} fill="currentColor" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg
      className="block shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      width="20"
      height="20"
    >
      <path d={svgPaths.pb384280} fill="currentColor" />
    </svg>
  );
}

/* ─── Navbar ─── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const desktopServicesRef = useRef<HTMLDivElement>(null);
  const mobileServicesRef = useRef<HTMLDivElement>(null);

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
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex items-center justify-between px-6 py-3 max-w-[1400px]">
        {/* Logo */}
        <div className="h-[52px] w-[73px] relative overflow-hidden shrink-0">
          <img
            src={imgLogo}
            alt="Mars Glass Solutions"
            className="absolute h-[368.33%] max-w-none"
            style={{
              left: "-80.36%",
              top: "-134.17%",
              width: "263.1%",
            }}
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "About Us", "Services", "Project"].map((item) =>
            item === "Services" ? (
              <div
                key={item}
                ref={desktopServicesRef}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
              >
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
                href={homeNavHref(item)}
                className="font-['Roboto',sans-serif] text-[17px] text-[#1e1e1e] capitalize leading-[1.45] hover:opacity-70"
              >
                {item}
              </a>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <a
            href="#/contact"
            className="navbar-contact-button flex items-center gap-2 border border-black rounded-[8px] px-5 py-2 font-['Inter',sans-serif] font-bold text-[15px] text-black capitalize"
          >
            <ContactIcon />
            <span>Contact</span>
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-black transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {[
            "Home",
            "About Us",
            "Services",
            "Project",
          ].map((item) =>
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
                href={homeNavHref(item)}
                className="border-b border-gray-100 pb-3 font-['Roboto',sans-serif] text-[16px] text-[#1e1e1e] capitalize"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            )
          )}
          <a
            href="#/contact"
            className="navbar-contact-button flex items-center gap-2 border border-black rounded-[8px] px-5 py-2 font-['Inter',sans-serif] font-bold text-[15px] text-black capitalize w-fit"
            onClick={() => setOpen(false)}
          >
            <ContactIcon />
            <span>Contact</span>
          </a>
        </div>
      )}
    </header>
  );
}

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section
      id="home"
      className="home-hero relative w-full"
      style={{
        minHeight: "600px",
        height: "clamp(500px,60vw,700px)",
      }}
    >
      {/* BG */}
      <div className="absolute inset-0">
        <img
          src={imgFrame427319183}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="home-hero-content relative flex flex-col lg:flex-row items-center justify-between h-full px-6 md:px-12 xl:px-20 py-14 gap-10 max-w-[1400px] mx-auto">
        {/* Text */}
        <div className="home-hero-copy flex flex-col gap-7 max-w-[760px] w-full">
          <div className="home-hero-title home-load-fade home-load-title flex flex-col leading-none">
            <span className="font-['Roboto',sans-serif] font-normal text-white text-5xl md:text-6xl xl:text-[80px] tracking-[-0.4px] leading-[1.2]">
              Crafting
            </span>
            <span className="font-['Roboto',sans-serif] font-normal text-white text-5xl md:text-6xl xl:text-[80px] tracking-[-0.4px] leading-[1.2]">
              Excellence in
            </span>
            <span className="font-['Roboto',sans-serif] font-normal text-5xl md:text-6xl xl:text-[80px] tracking-[-0.4px] leading-[1.2] bg-gradient-to-r from-[#489ef6] to-[#cee4fb] bg-clip-text text-transparent">
              {`Glass & Facades`}
            </span>
          </div>
          <p className="home-hero-intro home-load-fade home-load-intro font-['Roboto',sans-serif] font-medium text-white text-[17px] md:text-[19px] tracking-normal leading-[1.28] max-w-[760px]">
            Mars Glass Solutions Pvt Ltd is a professional glass
            and facade company delivering complete solutions
            from design to installation.
          </p>
          <div className="home-hero-actions home-load-fade home-load-actions flex flex-wrap gap-4">
            <a
              href="#/projects"
              className="bg-[#5a93d1] rounded-[8px] px-5 py-3 font-['Roboto',sans-serif] font-bold text-[15px] text-black capitalize text-center"
            >
              View our Project
            </a>
            <a
              href="#/contact"
              className="navbar-contact-button home-hero-contact-button flex items-center gap-2 bg-white rounded-[8px] px-5 py-3 font-['Inter',sans-serif] font-bold text-[15px] text-black capitalize border border-black/10"
            >
              <ContactIcon />
              <span>Contact</span>
            </a>
          </div>
        </div>

        {/* Hero wallpaper carousel */}
        <div
          className="hidden lg:block home-wallpaper-carousel relative rounded-[26px] overflow-hidden shrink-0"
          style={{
            width: "clamp(300px,30vw,411px)",
            aspectRatio: "411/399",
          }}
        >
          <div className="home-wallpaper-track absolute inset-0 flex">
            {[...heroCarouselImages, heroCarouselImages[0]].map((image, index) => (
              <div
                className="home-wallpaper-slide relative h-full shrink-0"
                key={`${image.src}-${index}`}
              >
                <img
                  src={image.src}
                  alt={index === heroCarouselImages.length ? "" : image.alt}
                  className="absolute inset-0 w-full h-full object-cover rounded-[26px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Gradient Section Wrapper ─── */
function GradientSection({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="w-full"
      style={{
        background:
          "linear-gradient(90deg, rgba(88,167,246,0.6) 0%, rgba(145,209,227,0.6) 100%)",
      }}
    >
      {children}
    </section>
  );
}

/* ─── Contact Button ─── */
function ContactBtn({ className = "" }: { className?: string }) {
  return (
    <a
      href="#/contact"
      className={`section-contact-button flex items-center gap-2 bg-white rounded-[8px] px-5 py-2.5 font-['Inter',sans-serif] font-bold text-[15px] text-black capitalize border border-black/30 w-fit ${className}`}
    >
      <ContactIcon />
      <span>Contact</span>
    </a>
  );
}

/* ─── Section Title ─── */
function SectionTitle({ title }: { title: string }) {
  return (
    <div className="w-full flex justify-center py-4">
      <h2 className="font-['Roboto',sans-serif] font-semibold text-[28px] md:text-[30px] text-black tracking-[-0.6px] leading-[1.56] underline decoration-solid text-center">
        {title}
      </h2>
    </div>
  );
}

/* ─── About Section ─── */
function AboutSection() {
  return (
    <GradientSection id="about">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-20 py-10 md:py-14 flex flex-col gap-6">
        <SectionTitle title="Mars Glass Solutions Pvt Ltd" />
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
          {/* Text */}
          <div className="flex flex-col gap-5 max-w-[664px] lg:max-w-[620px]">
            <p className="font-['Inter',sans-serif] font-bold text-[16px] text-black tracking-[-0.32px] leading-[1.7]">
              <span className="font-bold">
                Mars Glass Solutions Pvt. Ltd.
              </span>
              {` is a premier glass and facade engineering company delivering complete architectural glazing solutions from design development to precision installation.`}
            </p>
            <p className="font-['Inter',sans-serif] font-light text-[16px] text-black tracking-[-0.32px] leading-[1.7]">
              <span className="font-medium">
                Established in 2009,
              </span>
              {` our leadership brings over 30 years of expertise in facade engineering and high performance glass systems. We specialize in structural glazing, curtain wall systems, spider glazing, ACP cladding, aluminium doors and windows, and bespoke interior glass solutions.`}
            </p>
            <p className="font-['Inter',sans-serif] font-light text-[16px] text-black tracking-[-0.32px] leading-[1.7]">
              Every project reflects our commitment to
              engineering excellence, structural integrity,
              energy efficiency, and refined aesthetics. We
              execute commercial, corporate, hospitality,
              retail, and residential projects with
              uncompromising quality standards.
            </p>
            <p className="font-['Inter',sans-serif] font-bold text-[16px] text-black tracking-[-0.32px] leading-[1.7]">
              At Mars Glass Solutions, we create iconic glass
              facades that define modern architecture.
            </p>
            <ContactBtn className="about-contact-button" />
          </div>

          {/* Image */}
          <div
            className="section-image-zoom relative shrink-0 overflow-hidden"
            style={{
              width: "clamp(280px,45vw,580px)",
              aspectRatio: "580/406",
              borderRadius: "0 230px 230px 0",
            }}
          >
            <img
              src={imgRectangle111141359}
              alt="About Mars Glass"
              className="section-image-zoom-media absolute inset-0 w-full h-full object-cover"
              style={{ borderRadius: "0 230px 230px 0" }}
            />
          </div>
        </div>
      </div>
    </GradientSection>
  );
}

/* ─── Vision Section ─── */
function VisionSection() {
  return (
    <GradientSection id="vision">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-20 py-10 md:py-14 flex flex-col gap-6">
        <SectionTitle title="Our Vision" />
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start justify-between gap-10 lg:gap-12">
          {/* Text */}
          <div className="flex flex-col gap-5 max-w-[596px] lg:max-w-[580px]">
            <p className="font-['Roboto',sans-serif] font-light text-[16px] text-black tracking-[-0.32px] leading-[1.7]">
              To lead the future of architectural glass and
              facade engineering with innovation, integrity, and
              world class execution.
            </p>
            <p className="font-['Roboto',sans-serif] font-light text-[16px] text-black tracking-[-0.32px] leading-[1.7]">
              We aspire to redefine modern skylines by
              delivering facade systems that represent strength,
              precision, and timeless design. Through advanced
              technology, disciplined engineering, and
              uncompromising quality standards, we aim to set
              new benchmarks in performance, safety, and
              architectural excellence across India and
              international markets.
            </p>
            <p className="font-['Roboto',sans-serif] font-bold text-[16px] text-black tracking-[-0.32px] leading-[1.7]">
              At Mars Glass Solutions Pvt. Ltd., our vision is
              not just to build structures, but to shape iconic
              identities in glass.
            </p>
            <ContactBtn className="about-contact-button" />
          </div>

          {/* Image - flipped */}
          <div
            className="section-image-zoom relative shrink-0 overflow-hidden"
            style={{
              width: "clamp(260px,43vw,549px)",
              aspectRatio: "549/382",
              borderRadius: "217px 0 0 217px",
            }}
          >
            <img
              src={imgRectangle111141360}
              alt="Our Vision"
              className="section-image-zoom-media absolute inset-0 w-full h-full object-cover"
              style={{ borderRadius: "217px 0 0 217px" }}
            />
            <div
              className="absolute inset-0 bg-black/30"
              style={{ borderRadius: "217px 0 0 217px" }}
            />
          </div>
        </div>
      </div>
    </GradientSection>
  );
}

/* ─── Mission Section ─── */
function MissionSection() {
  return (
    <GradientSection id="mission">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-20 py-10 md:py-14 flex flex-col gap-6">
        <SectionTitle title="Our Mission" />
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-12">
          {/* Text */}
          <div className="flex flex-col gap-5 max-w-[596px] lg:max-w-[580px]">
            <p className="font-['Roboto',sans-serif] font-light text-[16px] text-black tracking-[-0.32px] leading-[1.7]">
              To lead the future of architectural glass and
              facade engineering with innovation, integrity, and
              world class execution.
            </p>
            <p className="font-['Roboto',sans-serif] font-light text-[16px] text-black tracking-[-0.32px] leading-[1.7]">
              We aspire to redefine modern skylines by
              delivering facade systems that represent strength,
              precision, and timeless design. Through advanced
              technology, disciplined engineering, and
              uncompromising quality standards, we aim to set
              new benchmarks in performance, safety, and
              architectural excellence across India and
              international markets.
            </p>
            <p className="font-['Roboto',sans-serif] font-bold text-[16px] text-black tracking-[-0.32px] leading-[1.7]">
              At Mars Glass Solutions Pvt. Ltd., our vision is
              not just to build structures, but to shape iconic
              identities in glass.
            </p>
            <ContactBtn className="about-contact-button" />
          </div>

          {/* Image */}
          <div
            className="section-image-zoom relative shrink-0 overflow-hidden"
            style={{
              width: "clamp(260px,43vw,549px)",
              aspectRatio: "549/382",
              borderRadius: "217px 0 0 217px",
            }}
          >
            <img
              src={imgRectangle111141361}
              alt="Our Mission"
              className="section-image-zoom-media absolute inset-0 w-full h-full object-cover"
              style={{ borderRadius: "217px 0 0 217px" }}
            />
            <div
              className="absolute inset-0 bg-black/30"
              style={{ borderRadius: "217px 0 0 217px" }}
            />
          </div>
        </div>
      </div>
    </GradientSection>
  );
}

/* ─── Service Card ─── */
function ServiceCard({
  img,
  label,
}: {
  img: string;
  label: string;
}) {
  return (
    <div
      className="section-image-zoom relative rounded-[8px] overflow-hidden"
      style={{ height: "clamp(320px,38vw,527px)" }}
    >
      <img
        src={img}
        alt={label}
        className="section-image-zoom-media absolute inset-0 w-full h-full object-cover rounded-[8px]"
      />
      {/* Glassmorphism label */}
      <div className="absolute bottom-0 left-0 right-0 h-[88px] flex items-center justify-center rounded-[8px] backdrop-blur-[14px] bg-[rgba(11,11,11,0.4)] border border-[#fffefe]">
        <p className="font-['Poppins',sans-serif] text-white text-[22px] md:text-[26px] text-center leading-[1.45] capitalize px-4">
          {label}
        </p>
      </div>
    </div>
  );
}

/* ─── Services Section ─── */
function ServicesSection() {
  const services = [
    { img: imgFrame1000007719, label: "Curtain Wall Systems" },
    { img: imgFrame1000007720, label: "Glass Canopy Systems" },
    {
      img: imgFrame1000007721,
      label: "Interior Glass Solutions",
    },
    {
      img: imgFrame1000007722,
      label: "Structural Glazing System",
    },
    { img: imgFrame1000007723, label: "Aluminium Windows" },
    { img: imgFrame1000007724, label: "Aluminium Doors" },
    { img: imgFrame1000007725, label: "ACP Cladding Systems" },
    {
      img: imgFrame1000007726,
      label: "Glass Partition Systems",
    },
    { img: imgFrame1000007727, label: "UPVC Door Systems" },
  ];

  return (
    <section id="services" className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-20 pt-8 pb-4">
        <div className="flex justify-center py-5">
          <h2 className="font-['Roboto',sans-serif] font-bold text-[30px] md:text-[36px] text-black tracking-[-0.72px] leading-[1.2] underline decoration-solid text-center">
            Why Choose Us
          </h2>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <ServiceCard
              key={s.label}
              img={s.img}
              label={s.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Choose Us Features ─── */
function FeatureCard({
  iconPath,
  title,
  desc,
  isFirst,
}: {
  iconPath: string;
  title: string;
  desc: string;
  isFirst?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      {/* Icon circle */}
      {isFirst ? (
        <svg
          width="65"
          height="65"
          viewBox="0 0 65 65"
          fill="none"
          className="shrink-0"
        >
          <rect
            fill="url(#featureGrad)"
            fillOpacity="0.6"
            height="65"
            rx="32.5"
            width="65"
          />
          <path d={iconPath} fill="black" />
          <defs>
            <linearGradient
              id="featureGrad"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="65"
              y1="32.5"
              y2="32.5"
            >
              <stop stopColor="#58A7F6" />
              <stop offset="1" stopColor="#91D1E3" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <div
          className="flex items-center justify-center rounded-full shrink-0"
          style={{
            width: 65,
            height: 65,
            background:
              "linear-gradient(90deg, rgba(88,167,246,0.6) 0%, rgba(145,209,227,0.6) 100%)",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d={iconPath} fill="black" />
          </svg>
        </div>
      )}
      <h3 className="font-['Roboto',sans-serif] font-medium text-[22px] md:text-[26px] text-black tracking-[-0.52px] leading-[1.2]">
        {title}
      </h3>
      <p className="font-['Roboto',sans-serif] font-normal text-[#494949] text-[15px] leading-[1.2] max-w-[250px]">
        {desc}
      </p>
    </div>
  );
}

function WhyChooseSection() {
  const features = [
    {
      iconPath: svgPaths.p10cbc980,
      title: "30 years Experience",
      desc: "With over three decades of hands-on industry experience, our leadership and technical teams deliver precision-driven glass and facade solutions with deep structural understanding and practical execution excellence.",
      isFirst: true,
    },
    {
      iconPath: svgPaths.p3ec0d80,
      title: "Uncompromising Quality Standards",
      desc: "We use certified materials, advanced fabrication technologies, and strict quality control processes to ensure superior durability, performance, and flawless finishing in every project.",
    },
    {
      iconPath: svgPaths.p348bf600,
      title: "Safety and Process Discipline",
      desc: "Our operations are governed by structured project management systems and rigorous safety protocols, ensuring controlled execution, minimal risk, and zero compromise on compliance.",
    },
    {
      iconPath: svgPaths.p2b120d80,
      title: "Client Centric Execution",
      desc: "We align every design, engineering, and installation decision with your specifications and project vision, ensuring transparent communication, timely delivery, and measurable value.",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-20 py-10">
        <div className="flex justify-center pb-8">
          <h2 className="font-['Roboto',sans-serif] font-bold text-[30px] md:text-[36px] text-black tracking-[-0.72px] leading-[1.2] underline decoration-solid text-center">
            Why Choose Us
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Project Card ─── */
type ProjectItem = {
  img: string;
  title: string;
  reverse?: boolean;
};

function ProjectCard({ img, title, reverse }: ProjectItem) {
  const titleLines = title
    .replace(" I ", "\n")
    .split(title.includes("|") ? "|" : "\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-[minmax(240px,485px)_minmax(320px,1fr)] items-center gap-8 md:gap-10 lg:gap-12 py-8 md:py-10 ${reverse ? "lg:grid-cols-[minmax(320px,1fr)_minmax(240px,485px)]" : ""}`}
    >
      {/* Image */}
      <div
        className={`relative w-full overflow-hidden ${reverse ? "lg:col-start-2" : ""}`}
        style={{
          maxWidth: "485px",
          aspectRatio: "485/596",
        }}
      >
        <img
          src={img}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Label badge */}
      <div className={`relative w-full ${reverse ? "lg:col-start-1 lg:row-start-1" : ""}`}>
        <div
          className="relative mx-auto flex min-h-[84px] w-full max-w-[625px] items-center justify-center rounded-l-[80px] px-5 py-4 md:min-h-[96px] md:px-8"
          style={{
            background: `url('${imgRectangle111141367}') top left / 1024px 1024px, linear-gradient(90deg, rgb(88, 167, 246) 0%, rgb(145, 209, 227) 100%)`,
          }}
        >
          <h3 className="w-full text-center font-['Roboto',sans-serif] text-[22px] font-bold leading-[1.16] tracking-[-0.19px] text-black capitalize md:text-[28px] xl:text-[34px]">
            {titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h3>
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  const projects = [
    {
      img: imgRectangle111141362,
      title: "Ramada | Sonepat, Haryana",
      reverse: false,
    },
    {
      img: imgMercedesShowroomOkhla,
      title: "Mercedes Showroom I Okhla, New Delhi",
      reverse: true,
    },
    {
      img: imgRectangle111141364,
      title: "23, Ram Villa\nRajendra Park, Delhi",
      reverse: false,
    },
    {
      img: imgRectangle111141365,
      title: "Dhaula Kua Metro\nNew Delhi",
      reverse: true,
    },
  ];

  return (
    <section id="projects" className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-20 py-4">
        <div className="flex justify-center py-8">
          <h2 className="font-['Roboto',sans-serif] font-bold text-[30px] md:text-[36px] text-black tracking-[-0.72px] leading-[1.2] underline decoration-solid text-center">
            Our Projects
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return <SiteFooter />;
}

/* ─── App ─── */
export default function App() {
  const [hash, setHash] = useState(() => window.location.hash || "#home");
  const isAboutRoute = hash.startsWith("#/about");
  const isProjectsRoute = hash.startsWith("#/projects");
  const isContactRoute = hash.startsWith("#/contact");
  const isCurtainWallRoute = hash.startsWith("#/services/curtain-wall-systems");
  const isStructuralGlazingRoute = hash.startsWith("#/services/structural-glazing-systems");
  const isAcpCladdingRoute = hash.startsWith("#/services/acp-cladding-systems");
  const isGlassCanopyRoute = hash.startsWith("#/services/glass-canopy-systems");
  const isAluminumWindowsDoorsRoute = hash.startsWith("#/services/aluminum-windows-doors");
  const isGlassPartitionRoute = hash.startsWith("#/services/glass-partition-systems");
  const isInteriorGlassRoute = hash.startsWith("#/services/interior-glass-solutions");
  const isAluminiumDoorRoute = hash.startsWith("#/services/aluminium-door-systems");
  const isUpvcDoorRoute = hash.startsWith("#/services/upvc-door-systems");

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || "#home");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (isAboutRoute || isProjectsRoute || isContactRoute || isCurtainWallRoute || isStructuralGlazingRoute || isAcpCladdingRoute || isGlassCanopyRoute || isAluminumWindowsDoorsRoute || isGlassPartitionRoute || isInteriorGlassRoute || isAluminiumDoorRoute || isUpvcDoorRoute) {
        const sectionId = hash.split("#")[2];
        const element = sectionId ? document.getElementById(sectionId) : null;
        element?.scrollIntoView({ behavior: "smooth", block: "start" });

        if (!sectionId) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }

        return;
      }

      const sectionId = hash.startsWith("#/") ? "home" : hash.slice(1);
      const element = sectionId ? document.getElementById(sectionId) : null;
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [hash, isAboutRoute, isProjectsRoute, isContactRoute, isCurtainWallRoute, isStructuralGlazingRoute, isAcpCladdingRoute, isGlassCanopyRoute, isAluminumWindowsDoorsRoute, isGlassPartitionRoute, isInteriorGlassRoute, isAluminiumDoorRoute, isUpvcDoorRoute]);

  if (isAboutRoute) {
    return <AboutPage />;
  }

  if (isProjectsRoute) {
    return <ProjectsPage />;
  }

  if (isContactRoute) {
    return <ContactPage />;
  }

  if (isCurtainWallRoute) {
    return <CurtainWallSystemsPage />;
  }

  if (isStructuralGlazingRoute) {
    return <StructuralGlazingSystemsPage />;
  }

  if (isAcpCladdingRoute) {
    return <AcpCladdingSystemsPage />;
  }

  if (isGlassCanopyRoute) {
    return <GlassCanopySystemsPage />;
  }

  if (isAluminumWindowsDoorsRoute) {
    return <AluminumWindowsDoorsPage />;
  }

  if (isGlassPartitionRoute) {
    return <GlassPartitionSystemsPage />;
  }

  if (isInteriorGlassRoute) {
    return <InteriorGlassSolutionsPage />;
  }

  if (isAluminiumDoorRoute) {
    return <AluminiumDoorSystemsPage />;
  }

  if (isUpvcDoorRoute) {
    return <UpvcDoorSystemsPage />;
  }

  return (
    <div className="bg-white flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex flex-col flex-1">
        <HeroSection />
        <AboutSection />
        <VisionSection />
        <MissionSection />
        <ServicesSection />
        <WhyChooseSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
