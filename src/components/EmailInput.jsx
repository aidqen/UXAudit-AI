"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { addUserToWaitlist } from "@/service/resend.service";

export function EmailInput() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleEmailChange = (e) => setEmail(e.target.value);

    const handleSubmit = async () => {
        if (!email) return setMessage("Please enter your email!");

        setLoading(true);
        setMessage("");

        try {
            await addUserToWaitlist(email);
            setMessage("You're on the waitlist! 🎉");
            setEmail("");
        } catch (error) {
            setMessage(error.message || "Failed to join waitlist. Please try again.");
        }

        setLoading(false);
    };

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex flex-row w-full justify-center gap-[20px]">
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="bg-foregroundDark px-[15px] py-[4px] md:w-[300px] rounded-med border border-[#212047] text-[14px] md:text-[16px] hover:border-primaryDark/60 transition-colors focus-visible:border-primaryDark/60 focus-visible:outline-none focus-visible:ring-0"
                    placeholder="Email"
                    disabled={loading}
                />
                <Button 
                    onClick={handleSubmit} 
                    className="bg-primaryDark hover:bg-primaryDark/70 rounded-med text-white leading-[125%] tracking-[0.28px] font-bold px-[8px] md:px-[12px] text-[14px] md:text-[16px] py-[4px]"
                    disabled={loading}
                >
                    {loading ? "Joining..." : "Join Waitlist"}
                </Button>
            </div>
            {message && (
                <p className={`text-sm ${message.includes("🎉") ? "text-green-400" : "text-red-400"}`}>
                    {message}
                </p>
            )}
        </div>
    );
}