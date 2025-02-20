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
      {/* <Header /> */}
      <div className="pt-[15rem] flex flex-col items-center md:gap-[18rem] gap-[14rem] bg-[#080C23] relative min-h-screen w-full overflow-x-hidden overflow-hidden px-[22.5px]">
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
        {/* <div className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-full md:w-[75%] opacity-70 pointer-events-none z-[1]">
          <img src="/Container.svg" alt="Background pattern" className="w-full h-full object-cover" />
        </div> */}
        {/* <div className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-full md:w-[60%] opacity-60 pointer-events-none z-[1]">
          <img src="/Container_2.svg" alt="Background pattern" className="w-full h-full object-cover" />
        </div> */}
          <Hero />
          <Features />
          <FAQ />
          <CTA />
          <Footer />
      </div>
    </>
  );
}
