import { ReactNode, useLayoutEffect, useRef, useState } from "react";

type ScaledServiceImportProps = {
  children: ReactNode;
  className?: string;
};

const IMPORT_WIDTH = 1341;

export default function ScaledServiceImport({
  children,
  className = "",
}: ScaledServiceImportProps) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [mobileLayout, setMobileLayout] = useState<{
    height: number;
    scale: number;
  } | null>(null);

  useLayoutEffect(() => {
    const updateLayout = () => {
      const isMobile = window.innerWidth <= 768;
      const inner = innerRef.current;

      if (!isMobile || !inner) {
        setMobileLayout(null);
        return;
      }

      const scale = window.innerWidth / IMPORT_WIDTH;
      const rawHeight = inner.scrollHeight;
      setMobileLayout({
        height: rawHeight * scale,
        scale,
      });
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);

    const observer =
      typeof ResizeObserver !== "undefined" && innerRef.current
        ? new ResizeObserver(updateLayout)
        : null;

    if (observer && innerRef.current) {
      observer.observe(innerRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateLayout);
      observer?.disconnect();
    };
  }, []);

  return (
    <div
      className={`service-import-frame ${className}`}
      style={
        mobileLayout
          ? {
              height: `${mobileLayout.height}px`,
              minWidth: "320px",
            }
          : { minWidth: "320px" }
      }
    >
      <div
        ref={innerRef}
        className="service-import-inner"
        style={
          mobileLayout
            ? {
                width: `${IMPORT_WIDTH}px`,
                transform: `scale(${mobileLayout.scale})`,
              }
            : undefined
        }
      >
        {children}
      </div>
    </div>
  );
}
