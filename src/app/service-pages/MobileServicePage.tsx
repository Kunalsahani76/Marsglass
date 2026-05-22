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
  return (
    <main className="block bg-[#f7f9fb] pt-[76px] md:hidden">
      <section className="relative min-h-[540px] overflow-hidden">
        <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto flex min-h-[540px] w-full max-w-[390px] flex-col items-center justify-center gap-5 px-5 text-center">
          <h1 className="bg-gradient-to-r from-[#5a93d1] to-white bg-clip-text font-['Roboto',sans-serif] text-[42px] font-medium leading-[1.08] text-transparent">
            {title}
          </h1>
          <p className="font-['Roboto',sans-serif] text-[16px] leading-[1.55] text-white/90">{subtitle}</p>
          <div className="flex w-full flex-col gap-3 pt-2">
            <a
              href="#/contact"
              className="flex h-[58px] items-center justify-center rounded-[4px] border border-black bg-[#5a93d1] font-['Lato',sans-serif] text-[16px] text-black shadow-none transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[5px_5px_0_rgba(0,0,0,0.95)]"
            >
              Get Consultation
            </a>
            <a
              href="#/projects"
              className="flex h-[58px] items-center justify-center rounded-[4px] border border-black bg-white font-['Lato',sans-serif] text-[16px] text-black transition hover:-translate-y-0.5 hover:bg-[#5a93d1] hover:shadow-[5px_5px_0_rgba(0,0,0,0.95)]"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-14">
        <Heading title={introTitle} text={introText} />
        <div className="mt-8 grid gap-4">
          {introImages.map((image, index) => (
            <div key={`${image}-${index}`} className="h-[220px] overflow-hidden rounded-[8px] shadow-[0_14px_34px_rgba(10,37,64,0.14)]">
              <img src={image} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-14">
        <Heading title={typesTitle} />
        <div className="mt-8 grid gap-5">
          {types.map((type) => (
            <article key={type.title} className="overflow-hidden rounded-[8px] bg-white shadow-[0_12px_30px_rgba(15,23,42,0.12)]">
              {type.image ? <img src={type.image} alt="" className="h-[190px] w-full object-cover" /> : null}
              <div className="p-5">
                <h3 className="font-['Roboto',sans-serif] text-[22px] font-semibold leading-[1.25] text-[#0a2540]">{type.title}</h3>
                <p className="mt-3 font-['Roboto',sans-serif] text-[15px] leading-[1.55] text-[#475569]">{type.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#0f172a] px-5 py-14">
        <Heading title="Key Components" light />
        <div className="mt-8 grid grid-cols-2 gap-4">
          {components.map((component) => (
            <article key={component.title} className="rounded-[8px] border border-white/15 bg-white/8 p-4">
              <h3 className="font-['Roboto',sans-serif] text-[17px] font-semibold leading-[1.25] text-white">{component.title}</h3>
              <p className="mt-2 font-['Roboto',sans-serif] text-[13px] leading-[1.45] text-white/72">{component.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-14">
        <Heading title="Advantages" />
        <div className="mt-8 grid gap-5">
          {advantages.map((advantage) => (
            <article key={advantage.title} className="rounded-[8px] bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.1)]">
              {advantage.image ? <img src={advantage.image} alt="" className="mb-4 h-[180px] w-full rounded-[6px] object-cover" /> : null}
              <h3 className="font-['Roboto',sans-serif] text-[21px] font-semibold leading-[1.25] text-[#0a2540]">{advantage.title}</h3>
              <p className="mt-3 font-['Roboto',sans-serif] text-[15px] leading-[1.55] text-[#475569]">{advantage.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-14">
        <Heading title="Applications" />
        <div className="mt-8 grid gap-5">
          {applications.map((application) => (
            <article key={application.title} className="overflow-hidden rounded-[8px] bg-[#f8fafc] shadow-[0_12px_30px_rgba(15,23,42,0.1)]">
              {application.image ? <img src={application.image} alt="" className="h-[185px] w-full object-cover" /> : null}
              <div className="p-5">
                <h3 className="font-['Roboto',sans-serif] text-[21px] font-semibold leading-[1.25] text-[#0a2540]">{application.title}</h3>
                <p className="mt-3 font-['Roboto',sans-serif] text-[15px] leading-[1.55] text-[#475569]">{application.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
