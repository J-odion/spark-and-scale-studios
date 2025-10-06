import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-badge", {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "back.out(1.7)",
      });

      gsap.from(".hero-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      });

      gsap.from(".hero-description", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      });

      gsap.from(".hero-button", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      // Parallax effect
      gsap.to(heroRef.current, {
        y: 200,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="hero-badge inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Fast. Value-Driven. Trusted Globally.</span>
          </div>

          <h1 className="hero-title text-6xl md:text-[10rem] font-black mb-6 leading-tight tracking-tight">
            Build. Scale. <span className="text-gradient">Thrive</span>
          </h1>

          <p className="hero-subtitle text-3xl md:text-4xl font-semibold mb-4 text-foreground/90">
            Digital growth partner delivering guaranteed results
          </p>

          <p className="hero-description text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            with 24/7 support and maximum ROI.
          </p>

          <div className="flex flex-col gap-4 items-center justify-center">
            <Button
              size="lg"
              className="hero-button bg-gradient-primary border-0 text-lg px-8 py-6 glow-primary hover:opacity-90 transition-opacity group"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hero-button text-lg px-8 py-6 border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5"
              asChild
            >
              <a href="#work">View Our Work</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
