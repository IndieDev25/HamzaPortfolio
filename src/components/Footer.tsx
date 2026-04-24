export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <span className="text-xl font-bold tracking-tighter text-white">
            KINETIC.<span className="text-primary">AI</span>
          </span>
          <p className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase mt-2">
            Architecting Intelligence
          </p>
        </div>
        
        <div className="flex items-center gap-8">
          {["GITHUB", "LINKEDIN", "RESEARCHGATE", "X / TWITTER"].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-[10px] font-bold tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        
        <div className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
          © 2024 KINETIC PRECISION. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
