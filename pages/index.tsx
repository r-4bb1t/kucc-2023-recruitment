import Background from "@/components/Background";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="w-full text-white bg-black/20">
      <Background />
      <div className="h-screen flex flex-col items-center justify-center">
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
      <div className="py-48 flex flex-col items-center">
        <div className="text-3xl mb-24 lg:mb-48 font-bold">
          Do You Want To Join Us?
        </div>
        <Card />
        <button className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg mt-20 lg:mt-40">
          REGISTER NOW
        </button>
      </div>
    </main>
  );
}
