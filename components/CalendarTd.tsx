import { format } from "date-fns";

export default function CalendarTd({
  date,
  labels,
}: {
  date: Date;
  labels?: string[];
}) {
  return (
    <td className="p-0 py-2">
      <div className="text-sm font-regular underline underline-offset-4">
        {format(date, "MM/dd")}
      </div>
      <div className="w-full lg:h-24 h-24 pt-4 flex flex-col gap-2">
        {labels !== undefined &&
          labels.map((label, key) => (
            <div
              className="w-full max-w-full overflow-visible h-8 whitespace-nowrap px-2 flex justify-center items-center bg-white text-black text-center lg:text-base text-[10px] font-semibold"
              key={key}
            >
              <div className="absolute">{label}</div>
            </div>
          ))}
      </div>
    </td>
  );
}
