type MobileServiceCard = {
  title: string;
  text: string;
  image?: string;
};

type MobileServicePageProps = {
  title: string;
  subtitle: string;
  heroImage: string;
  introTitle: string;
  introText: string;
  introImages: string[];
  typesTitle: string;
  types: MobileServiceCard[];
  components: MobileServiceCard[];
  advantages: MobileServiceCard[];
  applications: MobileServiceCard[];
};

function Heading({
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

export default function MobileServicePage({
  title,
  subtitle,
  heroImage,
  introTitle,
  introText,
  introImages,
  typesTitle,
  types,
  components,
  advantages,
  applications,
}: MobileServicePageProps) {
  const [firstIntro, secondIntro = firstIntro] = introImages;
  const advantageImage = advantages.find((item) => item.image)?.image ?? heroImage;

  return (
    <main className="md:hidden">
      <section className="relative flex min-h-[520px] w-full items-center justify-center overflow-hidden px-5 py-12 text-center">
        <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto flex w-full max-w-[340px] flex-col items-center gap-5">
          <h1 className="w-full bg-gradient-to-r from-[#5a93d1] to-white bg-clip-text font-['Roboto',sans-serif] text-[clamp(30px,8vw,38px)] font-medium leading-[1.12] text-transparent">
            {title}
          </h1>
          <p className="w-full font-['Inter',sans-serif] text-[16px] leading-[1.45] text-white">{subtitle}</p>
          <div className="flex w-full flex-col gap-3">
            <a href="#/contact" className="flex w-full items-center justify-center rounded-[4px] border border-black bg-[#5a93d1] px-5 py-4 font-['Lato',sans-serif] text-[16px] text-black">
              Get Consultation
            </a>
            <a href="#/projects" className="flex w-full items-center justify-center rounded-[4px] border border-black bg-white px-5 py-4 font-['Lato',sans-serif] text-[16px] text-black">
              View Projects
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] px-5 py-12">
        <div className="mx-auto flex max-w-[350px] flex-col gap-7">
          <div className="grid grid-cols-2 gap-3">
            <img src={firstIntro} alt="" className="h-[180px] w-full rounded-[6px] object-cover" />
            <img src={secondIntro} alt="" className="mt-10 h-[180px] w-full rounded-[6px] object-cover" />
          </div>
          <div className="rounded-[6px] border border-black bg-[#f4f4f4] p-5 shadow-sm">
            <h2 className="bg-gradient-to-r from-[#5a93d1] to-black bg-clip-text font-['Roboto',sans-serif] text-[30px] font-medium leading-[1.16] text-transparent">
              {introTitle}
            </h2>
            <p className="mt-4 font-['Roboto',sans-serif] text-[15px] leading-[1.55] text-[#475569]">{introText}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-12">
        <Heading title={typesTitle} text="Explore practical system options tailored for different architectural requirements." />
        <div className="mx-auto mt-8 grid max-w-[350px] gap-5">
          {types.map((type) => (
            <article key={type.title} className="overflow-hidden rounded-[8px] bg-[#0a2642] text-white">
              <div className="relative h-[260px]">
                {type.image ? <img src={type.image} alt="" className="absolute inset-0 h-full w-full object-cover" /> : null}
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
        <Heading title="Core Components" text="The high-performance elements that keep the system reliable and durable." />
        <div className="mx-auto mt-8 grid max-w-[350px] gap-4">
          {components.map((item, index) => (
            <article key={item.title} className="flex gap-4 rounded-[8px] border border-[#e2e8f0] bg-white p-4 shadow-sm">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[#0a2642]/5 font-['Inter',sans-serif] text-[14px] font-bold text-[#0a2642]">
                {index + 1}
              </span>
              <div>
                <h3 className="font-['Inter',sans-serif] text-[18px] font-bold leading-[1.25] text-[#0f172a]">{item.title}</h3>
                <p className="mt-1 font-['Inter',sans-serif] text-[14px] leading-[1.45] text-[#64748b]">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-12 text-white">
        <img src={advantageImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-[350px]">
          <Heading title={`Advantages of ${title}`} text="Key benefits for performance, durability, and modern design." light />
          <div className="mt-8 grid gap-4">
            {advantages.map((item) => (
              <article key={item.title} className="rounded-[8px] bg-white/10 p-4 backdrop-blur-sm">
                <h3 className="font-['Inter',sans-serif] text-[18px] font-semibold leading-[1.25]">{item.title}</h3>
                <p className="mt-2 font-['Roboto',sans-serif] text-[14px] leading-[1.5] text-white/80">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-12">
        <Heading title="Application Areas" text="Ideal spaces where this system delivers reliable performance and clean aesthetics." />
        <div className="mx-auto mt-8 grid max-w-[350px] gap-5">
          {applications.map((area) => (
            <article key={area.title} className="overflow-hidden rounded-[8px] border border-[#4299f0] bg-[#f7f5fa]">
              {area.image ? <img src={area.image} alt="" className="h-[190px] w-full object-cover" /> : null}
              <div className="p-5">
                <h3 className="bg-gradient-to-r from-[#5a93d1] to-black bg-clip-text font-['Roboto',sans-serif] text-[22px] font-medium leading-[1.2] text-transparent">
                  {area.title}
                </h3>
                <p className="mt-3 font-['Roboto',sans-serif] text-[15px] leading-[1.45] text-[#475569]">{area.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
