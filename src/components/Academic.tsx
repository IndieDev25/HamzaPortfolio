import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const education = [
  {
    degree: "Artificial Intelligence",
    school: "National University of Sciences & Technology (NUST)",
    tag: "M.PHIL SCHOLAR"
  },
  {
    degree: "Computer Science",
    school: "COMSATS University",
    tag: "BACHELOR OF SCIENCE"
  }
];

const certifications = [
  "GOOGLE DATA ENGINEER PROFESSIONAL",
  "AWS MACHINE LEARNING SPECIALTY",
  "UNITY CERTIFIED DEVELOPER",
  "DEEPLEARNING.AI TENSORFLOW"
];

export default function Academic() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h3 className="text-3xl font-bold tracking-tighter mb-10 uppercase">Academic Foundation</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card/50 border-white/5 p-6 hover:border-primary/20 transition-all">
                  <span className="text-primary text-[10px] font-bold tracking-widest uppercase mb-2 block">{edu.tag}</span>
                  <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                  <p className="text-muted-foreground text-sm">{edu.school}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-3xl font-bold tracking-tighter mb-10 uppercase">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card/50 border-white/5 p-4 flex items-center gap-4 hover:border-primary/20 transition-all group">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">{cert}</span>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
