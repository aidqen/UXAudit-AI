"use client";

import { cn } from "@/lib/util";
import { Target, BarChart3, Map, Lightbulb, LightbulbIcon, Search } from "lucide-react";

const features = [
  {
    id: 1,
    title: "AI-Powered UX Feedback in Seconds",
    description:
      "Upload your designs, and our AI instantly identifies UX issues. Get actionable recommendations to improve conversions and retention.",
    icon: Target,
    iconSize: "w-[40px] h-[40px]"
  },
  {
    id: 2,
    title: "Outperform Your Competitors",
    description:
      "Benchmark your UX against top competitors. Discover what makes users stay on their platforms and how you can do it better.",
    icon: BarChart3,
    iconSize: "w-[40px] h-[40px]"
  },
  {
    id: 3,
    title: "Pinpoint Why Users Leave",
    description:
      "Track where and why users drop off. Uncover friction points and optimize your user journey to maximize retention and revenue.",
    icon: Search,
    iconSize: "w-[40px] h-[40px]"
  },
  {
    id: 4,
    title: "Actionable Insights from UX Best Practices",
    description:
      "Leverage industry-leading UX standards and AI-driven insights to refine your product’s experience—ensuring higher engagement and growth.",
    icon: Lightbulb,
    iconSize: "w-[40px] h-[40px]"
  },
];

export function Features() {
  return (
    <section id="features" className="features flex flex-col items-center gap-[45px] md:gap-[85px] max-w-[1320px] lg:px-[2.5rem] xl:px-[3.5rem]">
      <div className="flex flex-col items-center gap-2 md:gap-5">

        <h2 className=" capitalize text-center text-white font-bold md:w-[80%] xl:w-[60%] text-[24px] md:text-[36px] leading-[125%] tracking-[0.8px]">
          88% of users won&apos;t return after a <span className="relative inline-block">
            <span className="absolute z-[1] bottom-1 left-0 h-[10px] w-full bg-[#FF5A7A]"></span>
            <span className="relative z-[2] text-white">bad user experience</span>
          </span>
        </h2>
        <h3 className="flex flex-col capitalize text-center text-textSecondaryDark font-regular text-[16px] md:text-[16px] leading-[125%] tracking-[0.8px]">Here's How We Help You Solve it</h3>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-[18px] md:gap-[32px] xl:gap-[48px]">

        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (

            <div key={feature.id} className={cn("bg-foregroundDark rounded-med md:rounded-med w-full h-full flex flex-col md:py-[24px] md:px-[32px] xl:py-[42px] p-[24px]")}>
              <Icon className={`text-primaryDark h-[42px] w-[42px] mb-4 md:mb-[24px]`} />
              <h3 className="font-semibold text-white text-[18px] md:text-[24px] leading-[125%] tracking-[0.72px] mb-1">{feature.title}</h3>
              <p className="text-textSecondaryDark text-[12px] md:text-[16px] font-medium tracking-[0.4px] leading-[125%]">
                {feature.description}
              </p>
            </div>
          );
        })}
      </ul>
    </section>
  );
};
