import Background from "@/components/Background";
import Card from "@/components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";
import { useState } from "react";
import Plan from "@/components/Plan";

export default function Home() {
  const [index, setIndex] = useState(0);
  return (
    <main className="w-full text-white bg-black/30">
      <header className="inset-x-0 fixed top-0 w-full flex justify-center gap-1 py-4">
        {[...Array(index + 1)].map((_, i) => (
          <div key={i} className="w-4 h-1 bg-white"></div>
        ))}
        {[...Array(4 - index)].map((_, i) => (
          <div key={i} className="w-4 h-1 bg-white/30"></div>
        ))}
      </header>
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
          <Plan />
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
        <SwiperSlide>
          <div className="w-full h-screen flex flex-col items-center justify-center">
            <div className="text-3xl mb-24 lg:mb-48 font-bold">FAQ</div>
            <ul className="text-xl text-center px-6 flex flex-col gap-5 justify-center">
              <li>
                <div className="font-bold">
                  Q. 지원이 마감된 이후 추가모집을 받나요?
                </div>
                <div className="text-base mt-2">
                  A. 아니요, 매 학기 추가모집은 따로 진행하고 있지 않습니다.
                  기한 안에 신청서를 제출해 주세요.
                </div>
              </li>
              <li>
                <div className="font-bold">
                  Q. 실력이 없어도 지원 가능한가요?
                </div>
                <div className="text-base mt-2">
                  A. 네, 심사 기준에 프로그래밍 실력은 포함되지 않습니다. 다만,
                  지원자분이 얼마나 컴퓨터에 관심을 가지고 동아리에서 활동하실
                  수 있는지를 고려하고 있습니다.
                </div>
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen flex flex-col items-center justify-center">
            <div className="text-3xl mb-24 lg:mb-48 font-bold">Contact</div>
            <div className="text-center text-xl">
              <strong>회장</strong> 명재위
              <br />
              010-3096-8941
            </div>
            <div className="text-center text-xl mt-8">
              <strong>부회장</strong> 김채린
              <br />
              010-8628-8084
            </div>
            <div className="text-center text-xl mt-8">
              <strong>부회장</strong> 박성철
              <br />
              010-6355-8791
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
