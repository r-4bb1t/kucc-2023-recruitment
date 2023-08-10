import { useState } from "react";
import Radio from "./Radio";

export default function Test() {
  const [category, setCategory] = useState<
    "webapp" | "data" | "ai" | "algorithm" | "none"
  >("none");
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="text-3xl mb-24 lg:mb-48 font-bold px-12 text-center">
        내게 맞는 KUCC 활동
      </div>
      <div className="w-full flex flex-col items-center text-lg font-semibold px-6">
        <div>가장 관심있는 분야는 무엇인가요?</div>
        <div className="flex flex-wrap justify-center gap-1 mt-2">
          <Radio
            checked={category === "webapp"}
            onChange={(e) => e.target.checked && setCategory("webapp")}
            label="웹 / 앱 개발"
            name="category"
          />
          <Radio
            checked={category === "data"}
            onChange={(e) => e.target.checked && setCategory("data")}
            label="데이터 분석"
            name="category"
          />
          <Radio
            checked={category === "ai"}
            onChange={(e) => e.target.checked && setCategory("ai")}
            label="인공지능"
            name="category"
          />
          <Radio
            checked={category === "algorithm"}
            onChange={(e) => e.target.checked && setCategory("algorithm")}
            label="알고리즘"
            name="category"
          />
          <Radio
            checked={category === "none"}
            onChange={(e) => e.target.checked && setCategory("none")}
            label="없음"
            name="category"
          />
        </div>
      </div>
    </div>
  );
}
