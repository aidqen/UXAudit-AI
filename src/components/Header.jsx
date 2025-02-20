"use client";

import { Button } from "./ui/button";
import Link from "next/link";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "FAQ", href: "#faq" },
  { name: "Pricing", href: "#pricing" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-backgroundDark border-b border-primaryDark/20">
      <div className="max-w-[1320px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="text-2xl font-bold">
            <span className="gradient-blue-purple">UXAudit</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-textSecondaryDark hover:text-white transition-colors text-[14px] font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            className="hidden md:flex text-textSecondaryDark hover:text-white hover:bg-foregroundDark"
          >
            Sign in
          </Button>
          <Button className="bg-primaryDark hover:bg-primaryDark/90 text-white px-6">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
