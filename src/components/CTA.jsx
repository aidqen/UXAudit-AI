import { EmailInput } from "./EmailInput";
import { Button } from "./ui/button";

export function CTA() {

    return <div className="hero z-10 flex flex-col w-full md:w-[60%] xl:w-[40%] justify-center items-center text-center">
        <h1 className="text-[32px] md:text-[48px] text-center font-bold mb-[24px] md:mb-[32px] leading-[125%] tracking-[0.64px]">
            <span className="">Experience The Future of UX Design with </span>
            <span className="bg-gradient-to-r from-[#AE6DFF] to-[#83ABF9] bg-clip-text text-transparent">UXAudit</span>
        </h1>
        <h4 className="text-textAccentDark text-center text-[12px] md:text-[16px] mb-[10px] font-medium">
            Join The Waitlist For One Month Free
        </h4>
        <EmailInput />
    </div>
}