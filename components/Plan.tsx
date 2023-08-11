import { useState } from "react";
import CalendarTd from "./CalendarTd";

export default function Plan() {
  const [category, setCategory] = useState<
    "webapp" | "data" | "ai" | "algorithm" | "none"
  >("none");
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="text-3xl mb-24 font-bold px-12 text-center">Plan</div>
      <div className="w-full flex flex-col items-center text-lg px-6">
        <table className="table w-full max-w-2xl">
          <thead>
            <td>MON</td>
            <td>TUE</td>
            <td>WED</td>
            <td>TUR</td>
            <td>FRI</td>
            <td>SAT</td>
            <td>SUN</td>
          </thead>
          <tbody>
            <tr>
              <CalendarTd date={new Date("2023-08-28")} labels={[""]} />
              <CalendarTd
                date={new Date("2023-08-29")}
                labels={["지원서 제출"]}
              />
              <CalendarTd date={new Date("2023-08-30")} labels={[""]} />
              <CalendarTd date={new Date("2023-08-31")} />
              <CalendarTd date={new Date("2023-09-01")} />
              <CalendarTd date={new Date("2023-09-02")} labels={[""]} />
              <CalendarTd date={new Date("2023-09-03")} labels={["면접"]} />
            </tr>
            <tr>
              <CalendarTd
                date={new Date("2023-09-04")}
                labels={["면접", "합격자 발표"]}
              />
              <CalendarTd date={new Date("2023-09-05")} />
              <CalendarTd date={new Date("2023-09-06")} />
              <CalendarTd date={new Date("2023-09-07")} />
              <CalendarTd date={new Date("2023-09-08")} />
              <CalendarTd date={new Date("2023-09-09")} />
              <CalendarTd date={new Date("2023-09-10")} />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
