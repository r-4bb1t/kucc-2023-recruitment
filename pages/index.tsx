import Background from "@/components/Background";
import Card from "@/components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";
import { useState } from "react";

export default function Home() {
  const [index, setIndex] = useState(0);
  return (
    <main className="w-full text-white bg-black/20">
      <Background index={index} />
      <Swiper
        direction="vertical"
        spaceBetween={0}
        slidesPerView={1}
        autoHeight={true}
        followFinger={true}
        mousewheel={true}
        onSlideChange={(swiper) => setIndex(swiper.activeIndex)}
        modules={[Mousewheel]}
      >
        <SwiperSlide>
          <div className="relative h-screen flex flex-col items-center justify-center">
            <div className="text-8xl">KUCC</div>
            <div className="text-xl text-white/80 -mt-3 font-light">
              Korea University Computer Club
            </div>
            <div className="text-4xl font-light mt-5">2023 F/F</div>
            <div className="text-4xl font-semibold">RECRUITMENT</div>

            <div className="absolute bottom-12 flex justify-center p-1 rounded-full h-8 border-2 border-white">
              <div className="mouse-scroll w-1 h-1 rounded-full bg-white" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen flex flex-col items-center justify-center">
            <div className="text-3xl mb-24 lg:mb-48 font-bold">
              Do You Want To Join Us?
            </div>
            <Card index={index} />
            <button className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg mt-20 lg:mt-40">
              REGISTER NOW
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
