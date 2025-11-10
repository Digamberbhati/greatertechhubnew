import { Button } from "@/components/ui/button";
import { Zap, Globe } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-dvh w-screen flex flex-col items-center justify-center bg-white overflow-hidden 
                       pt-[env(safe-area-inset-top,0px)] 
                       pb-[env(safe-area-inset-bottom,0px)] 
                       pl-[env(safe-area-inset-left,0px)] 
                       pr-[env(safe-area-inset-right,0px)]
                       supports-[height:100dvh]:h-dvh">
      
      {/* PREMIUM MOTION BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 -left-32 w-80 h-80 md:w-96 md:h-96 bg-[#1E1E1E]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 -right-32 w-72 h-72 md:w-80 md:h-80 bg-[#1E1E1E]/8 rounded-full blur-3xl animate-float animation-delay-3000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[520px] md:h-[520px] 
                     bg-gradient-to-br from-[#1E1E1E]/10 via-blue-600/5 to-purple-600/5 
                     rounded-full blur-3xl animate-glow"></div>
        <div className="absolute top-1/3 w-full h-px bg-gradient-to-r from-transparent via-[#1E1E1E]/20 to-transparent animate-shine"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-5">
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
          Transform Your Business with 
          <span className="block mt-3 text-[#1E1E1E] relative">
            Cutting-Edge 
            <span className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-xl -z-10"></span>
            <span className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-shimmer">
              Technology
            </span>
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
          GreaterTechHub delivers <span className="font-bold text-[#1E1E1E]">innovative IT solutions</span> that drive 
          <Zap className="inline w-5 h-5 text-yellow-500 mx-1 animate-pulse" />
          <span className="font-bold">growth</span>, <span className="font-bold">efficiency</span>, and 
          <Globe className="inline w-5 h-5 text-blue-600 mx-1" />
          <span className="font-bold">digital transformation</span> for businesses worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Button className="group px-10 py-7 text-lg font-semibold rounded-lg bg-[#1E1E1E] hover:bg-[#1E1E1E]/90 text-white shadow-xl hover:shadow-2xl hover:shadow-[#1E1E1E]/30 transform hover:-translate-y-1 transition-all duration-300">
            Get Started
          </Button>
          <Button variant="outline" className="px-10 py-7 text-lg font-semibold rounded-lg border-2 border-[#1E1E1E] text-[#1E1E1E] hover:bg-[#1E1E1E]/5 backdrop-blur-md transition-all hover:scale-105">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}