import { useEffect, useRef } from "react";
import { Video, Ear, Hammer, Search, Rocket, RefreshCw, Headphones } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const processRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 70%",
        },
      });

      // Animate circle path
      if (circleRef.current) {
        gsap.to(circleRef.current, {
          rotation: 360,
          duration: 20,
          repeat: -1,
          ease: "none",
          transformOrigin: "center center",
        });
      }

      gsap.from(".process-step", {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 60%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const steps = [
    { icon: Video, title: "Meet", subtitle: "Calls", description: "Virtual calls to discuss your vision" },
    { icon: Ear, title: "Listen", subtitle: "Understand", description: "Conversation and documents to grasp your project concepts" },
    { icon: Hammer, title: "Build", subtitle: "Implement", description: "Transform concepts into working solutions" },
    { icon: Search, title: "Review", subtitle: "Quality Check", description: "Internal review and quality assurance" },
    { icon: Rocket, title: "Deploy", subtitle: "Launch", description: "Push your project live" },
    { icon: RefreshCw, title: "Update", subtitle: "Iterate", description: "Continuous improvements and updates" },
    { icon: Headphones, title: "Support", subtitle: "Life Support", description: "Lifetime support and partnership" },
  ];

  return (
    <section ref={processRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <svg width="800" height="800" viewBox="0 0 800 800">
          <circle
            ref={circleRef}
            cx="400"
            cy="400"
            r="350"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeDasharray="10 5"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(263 70% 50%)" />
              <stop offset="100%" stopColor="hsl(189 95% 51%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 process-title">
          <h2 className="text-5xl font-bold mb-4">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-2">
            Proven methodology on infinite loop
          </p>
          <p className="text-sm text-accent animate-pulse">
            Continuous improvement • Always evolving
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="process-step glass-card rounded-2xl p-6 text-center hover:scale-110 transition-all duration-300 glow-primary group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                <p className="text-sm text-accent mb-2">{step.subtitle}</p>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
