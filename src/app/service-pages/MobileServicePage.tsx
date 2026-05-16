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
  title: _title,
  subtitle: _subtitle,
  heroImage: _heroImage,
  introTitle: _introTitle,
  introText: _introText,
  introImages: _introImages,
  typesTitle: _typesTitle,
  types: _types,
  components: _components,
  advantages: _advantages,
  applications: _applications,
}: MobileServicePageProps) {
  return null;
}
