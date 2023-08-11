import { useState } from "react";
import CalendarItem from "./CalendarItem";

export default function Plan() {
  const [category, setCategory] = useState<
    "webapp" | "data" | "ai" | "algorithm" | "none"
  >("none");
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="text-3xl mb-24 font-bold px-12 text-center">Plan</div>
      <div className="w-full flex flex-col items-center text-lg px-6">
        <div className="w-full max-w-xl grid grid-cols-3">
          <CalendarItem date={new Date("2023-08-27")} labels={[""]} />
          <CalendarItem
            date={new Date("2023-08-28")}
            labels={["지원서 제출"]}
          />
          <CalendarItem date={new Date("2023-08-29")} labels={[""]} />
          <CalendarItem
            date={new Date("2023-08-30")}
            labels={[""]}
            type="right"
          />
          <CalendarItem date={new Date("2023-08-31")} />
          <CalendarItem
            date={new Date("2023-09-01")}
            labels={["서류 합격자 발표"]}
            type="all"
          />
          <CalendarItem
            date={new Date("2023-09-02")}
            labels={[""]}
            type="left"
          />
          <CalendarItem date={new Date("2023-09-03")} labels={["면접"]} />
          <CalendarItem
            date={new Date("2023-09-04")}
            labels={["", "합격자 발표"]}
            type="two"
          />
        </div>
      </div>
    </div>
  );
}
