import { InputHTMLAttributes } from "react";

export default function Radio({
  name,
  label,
  ...props
}: {
  name: string;
  label: string;
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex items-center">
      <label
        className="relative flex cursor-pointer items-center rounded-full p-3"
        htmlFor={`${label}`}
      >
        <input
          id={`${label}`}
          name={name}
          type="radio"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-white transition-all"
          {...props}
        />
        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
          </svg>
        </div>
      </label>
      <label
        className="mt-px cursor-pointer select-none font-normal"
        htmlFor={`${label}`}
      >
        {label}
      </label>
    </div>
  );
}
