import { useCallback, useEffect, useRef, useState } from "react";

export default function Card({ index }: { index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const getTransform = useCallback(() => {
    if (mounted && index == 1) return `scaleX(0.9) skew(0deg, 10deg)`;
    return "scaleX(1) skew(0)";
  }, [index]);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="lg:scale-[1.5]">
      <div
        className="relative w-80 h-48 rounded-3xl border bg-gradient-radial from-pink-600/5 to-transparent border-red-100/20 backdrop-blur-md overflow-hidden transition-transform duration-1000"
        style={{
          transform: getTransform(),
        }}
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
