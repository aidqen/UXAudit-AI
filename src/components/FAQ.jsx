"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is UXEvaluator AI?",
    solution: "UXEvaluator AI is an AI-powered UX analysis tool that helps businesses and designers improve user experience. It reviews your designs, screenshots, and competitor insights, then provides actionable recommendations to optimize usability and reduce user churn.",
  },
  {
    id: 2,
    question: "How is UXEvaluator AI better than ChatGPT or other tools for this?",
    solution: "Unlike general AI models like ChatGPT, UXEvaluator AI is specifically trained on UX best practices, usability heuristics, and real-world design data. It provides in-depth, targeted insights into user experience issues, competitive analysis, and churn reduction strategies that generic AI tools can't offer.",
  },
  {
    id: 3,
    question: "When will UXEvaluator AI be available?",
    solution: "UX Evaluator is set to launch in April 2025. We are currently in the development and testing phase. Sign up for early access to get notified about the official launch and gain exclusive access to beta features.",
  },
  {
    id: 4,
    question: "Who is UXEvaluator for?",
    solution: "UXEvaluator AI is designed for product managers, UX/UI designers, SaaS founders, and anyone looking to improve the user experience of their digital products. Whether you're a startup or an enterprise, our AI-powered insights can help optimize your user flows and increase retention.",
  },
  {
    id: 5,
    question: "I have another question",
    solution: "We'd love to hear from you! Feel free to email us directly at aidqen@gmail.com.",
  },
];

export function FAQ() {
  return (
    <section id="faqs" className="faqs flex flex-col items-center gap-[48px] md:gap-[64px] md:w-[930px] w-full max-w-full">
      <header className="w-full">
        <h2 className="text-white text-center text-[24px] font-bold leading-[125%] tracking-[0.48px] mb-[16px] md:mb-[20px]">
          FAQs
        </h2>
        <h2 className="text-white text-center text-[24px] md:text-[36px] font-bold leading-[125%] tracking-[0.48px] mb-[8px] md:mb-[12px">
          Frequently Asked Questions
        </h2>
        <p className="text-textSecondaryDark text-[14px] md:text-[24px] text-center leading-[125%] tracking-[0.28px]">
          Have questions? We&apos;re here to help.
        </p>
      </header>
      <Accordion type="single" collapsible className="w-full max-w-full flex flex-col gap-[24px]">
        {faqs.map((faq) => {
          const [isOpen, setIsOpen] = useState(false);
          return (
            <AccordionItem
              key={faq.id}
              value={`item-${faq.id}`}
              className="w-full border-none"
            >
              <div className={`rounded-med border border-[rgba(108,92,180,0.25)] bg-foregroundDark overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'border-primaryDark shadow-[0_0_32px_rgba(131,171,249,0.15)]' : 'hover:border-primaryDark/50'}`}>
                <AccordionTrigger
                  className="w-full flex px-[14px] md:px-[30px] md:py-[25px] py-[20px] justify-between items-center hover:no-underline group transition-all duration-500 ease-in-out"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className={`text-[14px] md:text-[24px] font-medium leading-[125%] tracking-[0.28px] text-left transition-colors duration-500 ease-in-out ${isOpen ? 'text-white' : 'text-textSecondaryDark group-hover:text-white'}`}>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-textSecondaryDark px-[14px] md:px-[30px] pb-[25px] text-[14px] md:text-[16px] leading-[150%] pt-0 transition-all duration-500 ease-in-out">
                  {faq.solution || "Coming soon..."}
                </AccordionContent>
              </div>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}
