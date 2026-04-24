import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    year: "2023",
    status: "PRESENT",
    company: "FILES STUDIO",
    role: "SENIOR SOFTWARE ENGINEER & AI ARCHITECT",
    description: "Lead the development of large-scale AI integration systems. Optimized data ingestion pipelines resulting in a 40% reduction in processing latency. Architected neural networks for custom image recognition tasks.",
    align: "right"
  },
  {
    year: "2021",
    status: "2023",
    company: "FINZ GAMES",
    role: "GAME SYSTEMS ENGINEER",
    description: "Developed robust gameplay mechanics and backend multiplayer architecture for high-concurrency mobile titles. Spearheaded the implementation of automated testing frameworks.",
    align: "left"
  },
  {
    year: "2019",
    status: "2021",
    company: "VIRTUAL DIVE STUDIO",
    role: "JUNIOR SOFTWARE ENGINEER",
    description: "Focused on AR/VR simulation development. Built immersive educational experiences using Unity3D and integrated hardware sensors for real-time interaction feedback.",
    align: "right"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 max-w-7xl mx-auto relative">
      <div className="mb-20 text-center">
        <h2 className="text-muted-foreground font-mono tracking-[0.3em] text-xs mb-4 uppercase">
          PROFESSIONAL ODYSSEY
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">
          EXPERIENCE
        </h3>
      </div>
      
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />
        
        <div className="space-y-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8 ${exp.align === 'left' ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 w-full md:w-auto">
                <div className={`text-center ${exp.align === 'right' ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="text-6xl md:text-8xl font-bold text-white/5 mb-2 select-none">{exp.year}</div>
                  <div className="text-primary text-[10px] font-bold tracking-widest uppercase">{exp.status}</div>
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="w-4 h-4 bg-primary rounded-full glow-primary" />
              </div>
              
              <div className="flex-1 w-full md:w-auto">
                <Card className="bg-card/50 border-white/5 hover:border-primary/20 transition-all duration-500">
                  <CardContent className="p-8">
                    <h4 className="text-xl font-bold text-white mb-1 uppercase">{exp.company}</h4>
                    <h5 className="text-primary text-[10px] font-bold tracking-widest uppercase mb-6">{exp.role}</h5>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
