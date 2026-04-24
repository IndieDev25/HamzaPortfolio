import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, BrainCircuit } from "lucide-react";

const expertise = [
  {
    title: "GAME DEVELOPMENT",
    description: "Unity Developer specializing in gameplay systems, performance optimization, SDK integrations, analytics & monetization, and cross-platform deployment (Android, iOS, Meta Horizon).",
    icon: <Gamepad2 className="w-6 h-6 text-primary" />,
    tags: ["UNITY 3D", "UNREAL ENGINE", "PHYSX"]
  },
  {
    title: "AI & MACHINE LEARNING",
    description: "Applied machine learning, computer vision, and data-driven systems with Python (TensorFlow, PyTorch, OpenCV), including agentic workflows using OpenClaw for automation and real-time decision systems.",
    icon: <BrainCircuit className="w-6 h-6 text-primary" />,
    tags: ["NEURAL NETWORKS", "PYTORCH", "COMPUTER VISION"]
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-muted-foreground font-mono tracking-[0.3em] text-xs mb-4 uppercase">
          CORE DISCIPLINES
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">
          SPECIALIZED EXPERTISE
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {expertise.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 border-white/5 hover:border-primary/50 transition-all duration-500 group h-full">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors uppercase">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-white/5 text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
