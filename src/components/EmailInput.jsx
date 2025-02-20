'use client'

import { useState } from "react";
import { Button } from "./ui/button";

export function EmailInput() {
const [email, setEmail] = useState("");
const handleEmailChange = (e) => setEmail(e.target.value);


    return (
    <div className="flex flex-row w-full justify-center gap-[20px]">
        <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="bg-foregroundDark px-[15px] py-[4px] md:w-[300px] rounded-med border border-[#212047] text-[14px] md:text-[16px] hover:border-primaryDark/60 transition-colors focus-visible:border-primaryDark/60 focus-visible:outline-none focus-visible:ring-0"
            placeholder="Email"
        />
        <Button className="bg-primaryDark hover:bg-primaryDark/70 rounded-med text-white leading-[125%] tracking-[0.28px] font-bold px-[8px] md:px-[12px] text-[14px] md:text-[16px] py-[4px]">
            Join Waitlist
        </Button>
    </div>)
}