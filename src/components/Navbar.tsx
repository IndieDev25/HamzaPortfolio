import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-4 bg-background/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold tracking-tighter text-white">
          KINETIC.<span className="text-primary">AI</span>
        </span>
      </div>
      
      <div className="hidden md:flex items-center gap-10">
        {["EXPERTISE", "EXPERIENCE", "TESTIMONIALS", "CONTACT"].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-[10px] font-bold tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase"
          >
            {item}
          </a>
        ))}
      </div>
      
      <button className="bg-primary text-background text-[10px] font-bold px-6 py-2 rounded-full hover:scale-105 transition-transform uppercase">
        HIRE ME
      </button>
    </motion.nav>
  );
}
