import { useCallback, useEffect, useRef } from "react";

export default function Card() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (cardRef.current)
      cardRef.current.style.transform = `scaleX(${
        -Math.min(0.2, Math.abs(window.scrollY - window.screenY - 700) / 1000) +
        1
      }) skew(0deg, ${Math.max(
        -10,
        Math.min(10, (window.scrollY - window.screenY - 700) / 10)
      )}deg)`;
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  return (
    <div className="lg:scale-[1.5]">
      <div
        className="relative w-80 h-48 rounded-3xl border bg-gradient-radial from-pink-600/5 to-transparent border-white/50 backdrop-blur-md overflow-hidden transition-transform"
        ref={cardRef}
      >
        <div className="absolute -top-1/2 -left-1/4 w-2/3 h-96 bg-white/10 backdrop-blur-sm -rotate-12" />
        <div className="absolute w-full h-full flex flex-col px-8 pt-8">
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-white" />
            <div className="w-2 h-2 rounded-full bg-white" />
            <div className="w-2 h-2 rounded-full bg-white" />
          </div>
          <img src="/logo_white.png" className="w-32 -ml-1 -mb-3" />
          <div className="flex justify-between items-end">
            <div className="text-2xl translate-y-1">
              - 08.30<small>WED</small>
            </div>
            <div className="text-right leading-5">
              2023 F/F
              <div className="font-bold">RECRUITMENT</div>
            </div>
          </div>
          <div className="h-px w-full bg-white mt-2"></div>
        </div>
      </div>
    </div>
  );
}
