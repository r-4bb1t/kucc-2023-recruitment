import { useCallback, useEffect, useRef } from "react";

const offsets = [2, 1, 2, 3];

export default function Background() {
  const shapes = useRef<(HTMLDivElement | null)[]>([]);

  const handleScroll = useCallback(() => {
    for (let i = 0; i < 4; i++) {
      const shape = shapes.current[i];
      if (!shape) continue;
      shape.style.transform = `translateY(${-window.scrollY / offsets[i]}px)`;
    }
  }, [shapes]);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="w-full h-[300vh] fixed inset-0 overflow-hidden flex justify-center -z-10 bg-black">
      <div
        className="absolute top-[50px] w-[70vw] h-[70vw] lg:w-[20vw] lg:h-[20vw] transition-transform"
        ref={(el) => (shapes.current[0] = el)}
      >
        <div className="-translate-x-[30vw]">
          <img src="/assets/1.png" className="w-full h-full object-contain" />
        </div>
      </div>

      <div
        className="absolute top-[1200px] w-[100vw] h-[100vw] lg:w-[35vw] lg:h-[35vw] transition-transform"
        ref={(el) => (shapes.current[1] = el)}
      >
        <div className="-translate-x-[20vw]">
          <img src="/assets/2.png" className="w-full h-full object-contain" />
        </div>
      </div>
      <div
        className="absolute top-[440px] w-[100vw] h-[100vw] lg:w-[40vw] lg:h-[40vw] transition-transform"
        ref={(el) => (shapes.current[2] = el)}
      >
        <div className="translate-x-[30vw]">
          <img src="/assets/3.png" className="w-full h-full object-contain" />
        </div>
      </div>
      <div
        className="absolute top-[1600px] w-[100vw] h-[100vw] lg:w-[40vw] lg:h-[40vw] transition-transform"
        ref={(el) => (shapes.current[3] = el)}
      >
        <div className="-translate-x-[10vw]">
          <img src="/assets/4.png" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
}
