import classcat from "classcat";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

export default function CalendarItem({
  date,
  labels,
  type,
}: {
  date: Date;
  labels?: string[];
  type?: string;
}) {
  return (
    <div className="p-0 py-2">
      <div
        className={classcat([
          "relative text-base font-semibold flex flex-col items-center w-full justify-center h-8 border-white border-y",
        ])}
      >
        {format(date, "MM/dd (E)", { locale: ko })}
      </div>
      <div className="w-full h-24 pt-6 flex flex-col gap-2">
        {labels !== undefined &&
          labels.map((label, key) => (
            <div
              className={classcat([
                "relative w-full flex flex-col items-center overflow-visible",
              ])}
              key={key}
            >
              <div
                className={classcat([
                  "relative w-full h-1 bg-white text-center font-semibold flex items-center",
                  ,
                  type === "left" &&
                    "!w-1/2 !absolute right-0 rounded-l-full before:absolute before:w-3 before:h-3 before:bg-white before:rounded-full before:-left-1.5",
                  type === "right" &&
                    "!w-1/2 !absolute left-0 rounded-r-full before:absolute before:w-3 before:h-3 before:bg-white before:rounded-full before:-right-1.5",
                  type === "two" &&
                    key === 0 &&
                    "!w-1/2 !absolute left-0 rounded-r-full before:absolute before:w-3 before:h-3 before:bg-white before:rounded-full before:-right-1.5",
                  type === "two" &&
                    key === 1 &&
                    "!w-3 !h-3 rounded-full before:absolute before:w-3 before:h-3 before:bg-white before:rounded-full before:left-0",
                  type === "all" && "!w-3 !h-3 rounded-full -mt-1",
                ])}
              ></div>
              <div className="whitespace-nowrap mt-2 text-sm mb-3">{label}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
