import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { ShoppingBag, BarChart3, Smartphone, Activity, MessageCircle, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useEmblaCarousel from "embla-carousel-react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 70%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      icon: ShoppingBag,
      category: "Web Development",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with custom CRM integration",
      gradient: "from-primary to-primary-glow",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    },
    {
      icon: BarChart3,
      category: "Product Design",
      title: "SaaS Dashboard",
      description: "Modern analytics dashboard with real-time data visualization",
      gradient: "from-accent to-accent-glow",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
    {
      icon: Smartphone,
      category: "Mobile Design",
      title: "Mobile Banking App",
      description: "Secure and intuitive banking experience for iOS and Android",
      gradient: "from-primary-glow to-accent",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    },
    {
      icon: Activity,
      category: "Custom CRM",
      title: "Healthcare Portal",
      description: "Patient management system with telemedicine capabilities",
      gradient: "from-accent-glow to-primary",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    },
    {
      icon: MessageCircle,
      category: "Full Stack",
      title: "Social Media Platform",
      description: "Community-driven platform with real-time messaging",
      gradient: "from-primary to-accent",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    },
    {
      icon: Sparkles,
      category: "AI/ML Integration",
      title: "AI Content Generator",
      description: "Smart content creation tool powered by artificial intelligence",
      gradient: "from-accent to-primary-glow",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section id="work" ref={projectsRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 projects-title">
          <h2 className="text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Explore our recent work helping businesses scale and thrive
          </p>
        </div>

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="embla__slide flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0"
                >
                  <Card className="glass-card p-0 h-full hover:scale-105 transition-all duration-300 glow-primary group cursor-pointer border-0 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                      <div
                        className={`absolute top-4 left-4 w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-accent font-medium mb-2">
                        {project.category}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-muted-foreground">
          {projects.length} Projects • Swipe to explore
        </div>
      </div>
    </section>
  );
};

export default Projects;
