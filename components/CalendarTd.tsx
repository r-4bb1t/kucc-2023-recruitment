import classcat from "classcat";
import { format } from "date-fns";

export default function CalendarTd({
  date,
  labels,
  type,
}: {
  date: Date;
  labels?: string[];
  type?: string;
}) {
  return (
    <td className="p-0 py-2">
      <div className="relative text-sm font-regular flex flex-col items-center after:absolute after:-bottom-1 after:w-1 after:h-1 after:bg-white after:rounded-full">
        {format(date, "MM/dd")}
      </div>
      <div className="w-full lg:h-24 h-24 pt-6 flex flex-col gap-2">
        {labels !== undefined &&
          labels.map((label, key) => (
            <div
              className={classcat([
                "w-full max-w-full overflow-visible h-8 whitespace-nowrap px-2 flex justify-center items-center bg-white text-black text-center lg:text-base text-[10px] font-semibold",
                ,
                type === "left" && "rounded-l-full",
                type === "right" && "rounded-r-full",
                type === "two" && key === 0 && "rounded-r-full",
                type === "two" && key === 1 && "rounded-full",
              ])}
              key={key}
            >
              <div className="absolute">{label}</div>
            </div>
          ))}
      </div>
    </td>
  );
}
