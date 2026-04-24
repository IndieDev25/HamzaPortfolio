import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Syed's ability to translate complex AI concepts into functional, scalable code is unmatched. He delivered a system that outperformed our expectations by every metric.",
    author: "MALIKENT",
    role: "TECH LEAD, INNOVATION LABS"
  },
  {
    quote: "One of the most precise software engineers I've worked with. His attention to detail in data engineering saved our project months of refactoring.",
    author: "JOBSINC",
    role: "CTO, DATADRIVEN CO."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-muted-foreground font-mono tracking-[0.3em] text-xs mb-4 uppercase">
          TESTIMONIALS
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">
          TRUSTED BY INDUSTRY LEADERS
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.author}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 border-white/5 p-8 relative overflow-hidden group">
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-primary/5 group-hover:text-primary/10 transition-colors" />
              
              <p className="text-lg text-muted-foreground italic mb-8 relative z-10 leading-relaxed">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">{t.author[0]}</span>
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase">{t.author}</h4>
                  <p className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase">{t.role}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
