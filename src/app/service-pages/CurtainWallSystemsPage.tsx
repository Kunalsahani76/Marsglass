import Service from "@/imports/Service1/Service1";
import imgHero from "@/imports/Service1/5706193da3b81232d3844b7edf4b18c22aa97ac9.png";
import imgIntroA from "@/imports/Service1/d5efcb537bf471ba6e88cb3f5299b89613aef778.png";
import imgIntroB from "@/imports/Service1/60beb585fe38eae4fa0b785a2659427929cf3625.png";
import imgStick from "@/imports/Service1/9fc0c7a09e054b15e2517d5960cf62622549f4c1.png";
import imgSemi from "@/imports/Service1/d6831287f74713ccf30346c5422397b73348b129.png";
import imgUnitized from "@/imports/Service1/dddfd796deab68cd1ce19137d82311c72a79793b.png";
import imgAdvantages from "@/imports/Service1/46dffd7bbfe1a9e0b8aeca646f6b667004a966e0.png";
import imgCommercial from "@/imports/Service1/06524d1f79e181ced8d16420a7e58f4f512eae9b.png";
import imgInfrastructure from "@/imports/Service1/a16871f6f4e08e7c58a930a57302204ed05792c2.png";
import imgRetail from "@/imports/Service1/f4361dccff0910b66bcf729c7a5f886a55f5002f.png";
import imgHospitality from "@/imports/Service1/6b5723906706766745e2d094731ee36f0e529fd9.png";
import ServiceNavbar from "../components/ServiceNavbar";
import ScaledServiceImport from "./ScaledServiceImport";

const wallTypes = [
  {
    title: "Stick Curtain Wall System",
    image: imgStick,
    text: "Individual mullions and transoms are assembled on site, offering flexibility and cost efficiency for low to mid-rise buildings.",
  },
  {
    title: "Semi-Unitized Curtain Wall System",
    image: imgSemi,
    text: "A hybrid system that combines factory-prepared panels with on-site assembly for balanced speed and adaptability.",
  },
  {
    title: "Unitized Curtain Wall System",
    image: imgUnitized,
    text: "Factory-glazed panels are installed as complete units for faster installation, cleaner quality control, and high-rise performance.",
  },
];

const coreComponents = [
  ["Aluminum Mullions", "Vertical members designed to resist heavy wind loads."],
  ["Aluminum Transoms", "Horizontal members that support the weight of glass panels."],
  ["Glass Panels", "High-performance double or triple glazed units with low-E coatings."],
  ["Structural Anchors", "Heavy-duty connection points to the building frame."],
  ["Weather Sealants", "EPDM gaskets and silicone seals for air-tightness."],
  ["Thermal Break Systems", "Insulated barriers that reduce heat transfer through frames."],
];

const advantages = [
  ["Sleek Modern Aesthetics", "Clean contemporary facades with a refined architectural finish."],
  ["Lightweight Strength", "Aluminum framing and performance glazing keep the system durable yet efficient."],
  ["Energy Efficiency", "Insulated glass and thermal breaks help improve comfort and reduce energy use."],
  ["Weather Resistance", "Advanced sealing protects against air, water, and harsh weather exposure."],
  ["Structural Flexibility", "Engineered to handle movement, wind loads, and temperature changes."],
];

const applicationAreas = [
  {
    title: "Commercial Buildings",
    image: imgCommercial,
    items: ["Corporate Offices", "IT Parks", "Business Centers", "High-Rise Office Towers"],
  },
  {
    title: "Infrastructure Projects",
    image: imgInfrastructure,
    items: ["Airports and Terminals", "Metro Stations", "Railway Stations", "Convention Centers"],
  },
  {
    title: "Retail Developments",
    image: imgRetail,
    items: ["Shopping Malls", "Retail Complexes", "Premium Showrooms"],
  },
  {
    title: "Hospitality & Institutional",
    image: imgHospitality,
    items: ["Hotels and Resorts", "Hospitals", "Universities and Educational Campuses"],
  },
];

function SectionHeading({
  title,
  text,
  light = false,
}: {
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto flex w-full max-w-[350px] flex-col items-center gap-3 text-center">
      <h2
        className={`font-['Roboto',sans-serif] text-[30px] font-medium leading-[1.16] ${
          light ? "text-white" : "bg-gradient-to-r from-[#5a93d1] to-black bg-clip-text text-transparent"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p className={`font-['Roboto',sans-serif] text-[15px] leading-[1.5] ${light ? "text-white/85" : "text-[#475569]"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}

function MobileCurtainWallContent() {
  return (
    <main className="curtain-wall-mobile-content md:hidden">
      <section className="bg-[#f6f8fb] px-5 py-12">
        <div className="mx-auto flex max-w-[350px] flex-col gap-7">
          <div className="grid grid-cols-2 gap-3">
            <img src={imgIntroA} alt="" className="h-[180px] w-full rounded-[6px] object-cover" />
            <img src={imgIntroB} alt="" className="mt-10 h-[180px] w-full rounded-[6px] object-cover" />
          </div>
          <div className="rounded-[6px] border border-black bg-[#f4f4f4] p-5 shadow-sm">
            <h2 className="bg-gradient-to-r from-[#5a93d1] to-black bg-clip-text font-['Roboto',sans-serif] text-[30px] font-medium leading-[1.16] text-transparent">
              Modern Facade Engineering for Contemporary Buildings
            </h2>
            <p className="mt-4 font-['Roboto',sans-serif] text-[15px] leading-[1.55] text-[#475569]">
              The curtain wall is the defining element of modern skyscraper design. Our engineering approach integrates structural integrity with aesthetic brilliance, creating a protective thermal envelope with clear transparency.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-12">
        <SectionHeading
          title="Types of Curtain Wall Systems"
          text="Explore engineering solutions tailored for different architectural requirements."
        />
        <div className="mx-auto mt-8 grid max-w-[350px] gap-5">
          {wallTypes.map((type) => (
            <article key={type.title} className="overflow-hidden rounded-[8px] bg-[#0a2642] text-white">
              <div className="relative h-[260px]">
                <img src={type.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-['Roboto',sans-serif] text-[25px] font-medium leading-[1.15]">{type.title}</h3>
                  <p className="mt-2 font-['Roboto',sans-serif] text-[14px] leading-[1.45] text-white/85">{type.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f4f4] px-5 py-12">
        <SectionHeading title="Core Components" text="The high-performance elements that power our facade systems." />
        <div className="mx-auto mt-8 grid max-w-[350px] gap-4">
          {coreComponents.map(([title, text], index) => (
            <article key={title} className="flex gap-4 rounded-[8px] border border-[#e2e8f0] bg-white p-4 shadow-sm">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[#0a2642]/5 font-['Inter',sans-serif] text-[14px] font-bold text-[#0a2642]">
                {index + 1}
              </span>
              <div>
                <h3 className="font-['Inter',sans-serif] text-[18px] font-bold leading-[1.25] text-[#0f172a]">{title}</h3>
                <p className="mt-1 font-['Inter',sans-serif] text-[14px] leading-[1.45] text-[#64748b]">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-12 text-white">
        <img src={imgAdvantages} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-[350px]">
          <SectionHeading
            title="Advantages of Curtain Wall Systems"
            text="Curtain wall systems offer key advantages for modern architecture."
            light
          />
          <div className="mt-8 grid gap-4">
            {advantages.map(([title, text]) => (
              <article key={title} className="rounded-[8px] bg-white/10 p-4 backdrop-blur-sm">
                <h3 className="font-['Inter',sans-serif] text-[18px] font-semibold leading-[1.25]">{title}</h3>
                <p className="mt-2 font-['Roboto',sans-serif] text-[14px] leading-[1.5] text-white/80">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-12">
        <SectionHeading
          title="Application Areas"
          text="Curtain wall systems are used across sectors where performance and clean aesthetics matter."
        />
        <div className="mx-auto mt-8 grid max-w-[350px] gap-5">
          {applicationAreas.map((area) => (
            <article key={area.title} className="service-application-card overflow-hidden rounded-[8px] border border-[#4299f0] bg-[#f7f5fa]">
              <img src={area.image} alt="" className="h-[190px] w-full object-cover" />
              <div className="p-5">
                <h3 className="bg-gradient-to-r from-[#5a93d1] to-black bg-clip-text font-['Roboto',sans-serif] text-[22px] font-medium leading-[1.2] text-transparent">
                  {area.title}
                </h3>
                <ul className="mt-3 grid gap-1 font-['Roboto',sans-serif] text-[15px] leading-[1.45] text-[#475569]">
                  {area.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default function CurtainWallSystemsPage() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#eaedef]">
      <ServiceNavbar />
      <section className="curtain-wall-mobile-hero hidden">
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
      <ScaledServiceImport className="curtain-wall-page w-full hide-import-nav hide-import-first-nav service-import-scale">
        <Service />
      </ScaledServiceImport>
    </div>
  );
}
