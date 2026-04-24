import { motion } from "motion/react";
import { Mail, Linkedin, Github } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-40 px-6 text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-7xl md:text-9xl font-bold tracking-tighter mb-12">
          LET'S <span className="text-gradient italic">BUILD.</span>
        </h2>
        
        <p className="text-lg text-muted-foreground mb-16 max-w-xl mx-auto leading-relaxed">
          Currently open to high-impact collaborations and architectural consulting in AI & Software Systems.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Mail className="w-5 h-5" />, label: "EMAIL ME", href: "mailto:ai.fanatic.guy@gmail.com" },
            { icon: <Linkedin className="w-5 h-5" />, label: "LINKEDIN", href: "https://linkedin.com" },
            { icon: <Github className="w-5 h-5" />, label: "GITHUB", href: "https://github.com" }
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="flex flex-col items-center gap-6 p-10 bg-card/50 border border-white/5 rounded-2xl hover:border-primary/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all">
                {social.icon}
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase">{social.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] -z-10" />
    </section>
  );
}
