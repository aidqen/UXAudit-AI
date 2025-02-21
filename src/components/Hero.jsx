"use client";

import { EmailInput } from "./EmailInput";

export function Hero() {
  return (

      <div className="hero z-10 relative flex flex-col w-full md:w-[70%] xl:w-[50%] justify-center items-center text-center">
        <div className="relative w-max rounded-full p-[1px] bg-gradient-to-l from-[#8558C8] to-[#6884C5] mb-[20px] md:mb-[25px] shadow-[0_0_33.7px_8px_rgba(107,55,231,0.03)]">
          <div className="bg-foregroundDark rounded-full px-[20px] py-[8px]">
            <span className="text-[14px]  bg-gradient-to-l from-[#AE6DFF] to-[#83ABF9] bg-clip-text text-transparent font-medium">• Early Access Opening Soon</span>
          </div>
        </div>
        <h1 className="text-[36px] md:text-[56px] text-center font-bold mb-[12px] leading-[125%] tracking-[0.64px]">
          <span className="">Elevate Your UX With AI Reduce Churn </span>
          <span className="gradient-blue-purple">Effortlessly</span>
        </h1>
        <h3 className="text-center md:text-[18px] text-textSecondaryDark text-[16px] mb-[40px]">
          Utilize AI to Analyze Your UX Designs, Identify Improvements, and Enhance User Retention.
        </h3>
        <h4 className="text-textAccentDark text-center text-[12px] md:text-[16px] mb-[10px] font-medium">
          Join The Waitlist For One Month Free
        </h4>
        <EmailInput />
        {/* <div className="flex flex-row w-full justify-center gap-[20px]">
          <input
            type="email"
            name=""
            className="bg-foregroundDark px-[15px]  py-[4px] md:py-[8px] md:w-[25rem] rounded-med border border-[#212047] text-[14px] md:text-[16px]"
            placeholder="Email"
          />
          <Button className="bg-primaryDark rounded-med text-white leading-[125%] tracking-[0.28px] font-bold px-[8px] text-[14px] md:text-[16px] py-[4px] md:py-[8px]">
            Join Waitlist
          </Button>
        </div> */}
      </div>
  );
};

