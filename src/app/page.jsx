// import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center bg-backgroundDark relative min-h-screen w-full overflow-x-hidden overflow-hidden">
        <div className="absolute top-0 -right-[5rem] w-[calc(100%+5rem)]  overflow-hidden opacity-20 pointer-events-none z-[2]">
          <img src="/Vector.svg" alt="Background pattern" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-[5em] -right-[5rem] w-full rotate-180 overflow-hidden opacity-20 pointer-events-none z-[2]">
          <img src="/Vector.svg" alt="Background pattern" className="w-full h-full object-cover" />
        </div>
        <div className="absolute -bottom-[25rem] -left-[5rem] rotate-180 w-full  md:w-[75%] opacity-50 pointer-events-none z-[2]">
          <img src="/Light.svg" alt="Background pattern" className="w-full h-full object-cover" />
        </div>
        <div className="absolute -top-[25rem] -right-[5rem] w-full  md:w-[75%] opacity-60 pointer-events-none z-[12]">
          <img src="/Light.svg" alt="Background pattern" className="w-full h-full object-cover" />
        </div>

        <div className="w-full flex flex-col items-center px-[22.5px]">
          <Header />
          <div className="flex flex-col items-center md:gap-[18rem] gap-[14rem] pt-[6rem]">
            <Hero />
            <Features />
            <FAQ />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
