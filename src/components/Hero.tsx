import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
            M.PHIL SCHOLAR IN ARTIFICIAL INTELLIGENCE
          </Badge>
          
          <h2 className="text-muted-foreground font-mono tracking-[0.3em] text-sm mb-4 uppercase">
            SOFTWARE ENGINEER
          </h2>
          
          <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tighter mb-8">
            SYED<br />
            <span className="text-gradient">MUHAMMAD</span><br />
            HAMZA
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
            Software Engineer with expertise in multiple stacks — including game development, mobile app development, and Artificial Intelligence.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button className="bg-gradient-primary text-background font-bold px-8 py-6 h-auto rounded-xl glow-primary hover:scale-105 transition-transform uppercase">
              EXPERIENCE
            </Button>
            <Button variant="outline" className="border-white/10 text-white font-bold px-8 py-6 h-auto rounded-xl hover:bg-white/5 transition-all uppercase">
              CONNECT
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 glow-primary">
            <img 
              src="profilepic.png" 
              alt="Syed Muhammad Hamza"
              className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 blur-[100px] -z-10" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 blur-[100px] -z-10" />
          
          <div className="absolute -bottom-6 -left-6 bg-card/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl z-20">
            <div className="text-4xl font-bold text-primary">5+</div>
            <div className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
