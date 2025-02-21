"use client";

import { Button } from "./ui/button";
import Link from "next/link";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "FAQ", href: "#faqs" },
];

export function Header() {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 30;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="w-full pt-8">
      <div className="w-max mx-auto">
        <nav className="flex items-center justify-center gap-12 px-[2rem] py-[0.7rem] rounded-full ">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-[#B4ADDC] hover:text-white transition-all duration-300 text-[14px] font-medium cursor-pointer relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primaryDark group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
