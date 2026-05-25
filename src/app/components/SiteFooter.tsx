import svgPaths from "@/imports/Home/svg-od9zlvzvzo";
import imgFrame1000007495 from "@/imports/Home/3eb7b26dcf0dd609404203e92ea981a8a747ef76.png";

const footerNavHref = (item: string) => {
  const routes: Record<string, string> = {
    Home: "#home",
    Services: "#services",
    About: "#/about",
    Projects: "#/projects",
  };

  return routes[item] ?? `#${item.toLowerCase()}`;
};

type SiteFooterProps = {
  className?: string;
};

export default function SiteFooter({ className = "" }: SiteFooterProps) {
  return (
    <footer className={`w-full bg-[#424242] ${className}`} id="contact">
      <div className="max-w-[1400px] mx-auto px-8 py-8 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          <div className="flex flex-col gap-8 max-w-[320px]">
            <div className="h-[97px] w-[183px] relative overflow-hidden shrink-0">
              <img
                src={imgFrame1000007495}
                alt="Mars Glass Solutions Logo"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <p className="font-['Inter',sans-serif] font-normal text-[14px] text-[rgba(199,198,202,0.8)] leading-[22.75px]">
              Thank you for choosing to explore possibilities
              with us. We are here to make your project smooth
              and successful with expert guidance.
            </p>
          </div>

          <div className="flex flex-col gap-0">
            <p className="font-['Manrope',sans-serif] font-bold text-[14px] text-[rgba(255,255,255,0.4)] tracking-[1.4px] uppercase leading-[20px]">
              Navigation
            </p>
            <div className="mt-8 flex flex-col">
              {["Home", "Services", "About", "Projects"].map((item) => (
                <a
                  key={item}
                  href={footerNavHref(item)}
                  className="font-['Inter',sans-serif] font-medium text-[14px] text-[#c7c6ca] uppercase tracking-[-0.35px] opacity-70 leading-[20px] py-2"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-0">
            <p className="font-['Manrope',sans-serif] font-bold text-[14px] text-[rgba(255,255,255,0.4)] tracking-[1.4px] uppercase leading-[20px]">
              Inquiries
            </p>
            <div className="mt-8 flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <svg
                  width="14"
                  height="18"
                  viewBox="0 0 14.1666 18.1666"
                  fill="none"
                  className="shrink-0 mt-0.5"
                >
                  <path d={svgPaths.p1af08d80} fill="#C8C6C7" />
                </svg>
                <div>
                  <p className="font-['Inter',sans-serif] text-[#c7c6ca] text-[14px] leading-[20px]">
                    +91 9810129192
                  </p>
                  <p className="font-['Inter',sans-serif] text-[#c7c6ca] text-[14px] leading-[20px]">
                    
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 15.8333 16.4999"
                  fill="none"
                  className="shrink-0 mt-0.5"
                >
                  <path d={svgPaths.p2056a2c0} fill="#C8C6C7" />
                </svg>
                <div>
                  <p className="font-['Inter',sans-serif] text-[#c7c6ca] text-[14px] leading-[20px]">
                    info@marsglass.co.in
                  </p>
                  <p className="font-['Inter',sans-serif] text-[#c7c6ca] text-[14px] leading-[20px]">
                    projectsmars@yahoo.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <svg
                  width="13"
                  height="20"
                  viewBox="0 0 12.5801 19.8413"
                  fill="none"
                  className="shrink-0 mt-0.5"
                >
                  <path d={svgPaths.p3bdd2f00} fill="#C8C6C7" />
                </svg>
                <p className="font-['Inter',sans-serif] text-[#c7c6ca] text-[14px] leading-[22.75px]">
                  A-28A, Rajouri Garden, Ring Road,
                  <br />
                  New Delhi - 110027
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-2 border-t border-white/10">
          <p className="font-['Inter',sans-serif] font-medium text-[#c7c6ca] text-[12px] tracking-[-0.3px] uppercase leading-[16px]">
            © 2026 MARSGLASS. ALL RIGHTS RESERVED.
          </p>
          <p className="font-['Inter',sans-serif] font-medium text-[#c7c6ca] text-[12px] tracking-[-0.3px] uppercase leading-[16px]">
            {`Designed & Managed by D'Miraki.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
