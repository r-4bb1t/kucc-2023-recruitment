import { useCallback, useEffect, useState } from "react";

const offsets = [2, 1, 2, 3];

export default function Background({ index }: { index: number }) {
  const [mounted, setMounted] = useState(false);
  const getTransform = useCallback(
    (i: number) => {
      if (mounted) return `translateY(${(-index * 300) / offsets[i]}px)`;
      return "none";
    },
    [index]
  );
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full h-[300vh] fixed inset-0 overflow-hidden flex justify-center -z-10 bg-black">
      <div
        className="absolute top-[70px] w-[70vw] h-[70vw] lg:w-[30vw] lg:h-[30vw] transition-transform"
        style={{
          transform: getTransform(0),
        }}
      >
        <div className="-translate-x-[15vw]">
          <img src="/assets/1.png" className="w-full h-full object-contain" />
        </div>
      </div>

      <div
        className="absolute top-[1200px] w-[100vw] h-[100vw] lg:w-[35vw] lg:h-[35vw] transition-transform"
        style={{
          transform: getTransform(1),
        }}
      >
        <div className="-translate-x-[20vw]">
          <img src="/assets/2.png" className="w-full h-full object-contain" />
        </div>
      </div>
      <div
        className="absolute top-[550px] lg:top-[300px] w-[100vw] h-[100vw] lg:w-[40vw] lg:h-[40vw] transition-transform"
        style={{
          transform: getTransform(2),
        }}
      >
        <div className="translate-x-[20vw]">
          <img src="/assets/3.png" className="w-full h-full object-contain" />
        </div>
      </div>
      <div
        className="absolute top-[1600px] w-[100vw] h-[100vw] lg:w-[40vw] lg:h-[40vw] transition-transform"
        style={{
          transform: getTransform(3),
        }}
      >
        <div className="-translate-x-[10vw]">
          <img src="/assets/4.png" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
}
