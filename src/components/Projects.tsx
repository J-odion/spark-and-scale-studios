import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useEmblaCarousel from "embla-carousel-react";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: "Eyelight Publishers",
    category: "Publishing & Client Management",
    description: "Publication agency managing client onboarding flow for writers and editors.",
    fullDescription: "A full-service publication agency platform that manages client management and onboarding flow. Eyelight Publishers serves as Writer, Ghostwriter, Editor, and Publishing Coach — helping leaders and experts turn what they know into books that build their legacy. The platform has facilitated over 335 books and content projects for clients around the world.",
    image: "/projects/eyelight.png",
    gradient: "from-primary to-primary-glow",
  },
  {
    title: "MatTrack",
    category: "Real Estate Inventory CRM",
    description: "Inventory tracking CRM that saved over ₦50M by preventing material theft.",
    fullDescription: "A real estate inventory CRM that takes control of inventory, engineer requests, and material disbursements across construction sites. MatTrack ensures work is always ongoing and trackable, prevents material theft or diversion, and pinpoints inconsistencies — identifying who and at what point issues occurred. This application saved over ₦50 million by preventing material theft, spotting material mismanagement, and enforcing strict compliance with company standards.",
    image: "/projects/mattrack.png",
    gradient: "from-accent to-accent-glow",
  },
  {
    title: "JuaChini Group",
    category: "Logistics & Technical Services",
    description: "Integrated logistics and support services across West Africa.",
    fullDescription: "A swift, secure, and seamless logistics platform. JuaChini Group serves as a trusted partner for Integrated Technical, Logistics, and Support Services across West Africa and beyond. The platform streamlines operations and provides end-to-end logistics management for enterprise clients.",
    image: "/projects/juachini.png",
    gradient: "from-primary-glow to-accent",
  },
  {
    title: "Falclin Logistics",
    category: "Supply Chain Solutions",
    description: "Premier logistics connecting West Africa with swift, secure services.",
    fullDescription: "A premier logistics and supply chain solutions platform connecting West Africa with swift, secure, and seamless logistics services. Falclin provides comprehensive supply chain management, freight forwarding, and distribution services for businesses across the region.",
    image: "/projects/falclin.png",
    gradient: "from-accent-glow to-primary",
  },
  {
    title: "Beulah Technologies",
    category: "E-Commerce & Solar Solutions",
    description: "Eco-friendly solar water heaters and premium shower systems.",
    fullDescription: "An innovative e-commerce platform for Beulah Technologies & Innovatives LTD, specializing in solar water heaters and premium shower systems. The platform combines luxury functionality with eco-friendly sustainability, offering customers innovative interior decor solutions for a greener tomorrow. Features a full product catalog, shopping experience, and brand storytelling.",
    image: "/projects/beulah.png",
    gradient: "from-primary to-accent",
  },
  {
    title: "Next Banking",
    category: "FinTech Platform",
    description: "Microfinance banking software — secure, reliable, made for Nigeria.",
    fullDescription: "The easiest way to build financial products. Next provides everything a Microfinance bank needs to succeed — powerful software that's secure, reliable, and made for Nigeria. Partners include Microbiz, Viscount, CreditGo, CRC Credit Bureau, Mono, Verve, Termii, Dojah, EasyPay, and ProvidusBank.",
    image: "/projects/next-banking.png",
    gradient: "from-accent to-primary-glow",
  },
  {
    title: "Ria's Treat",
    category: "E-Commerce & Business Automation",
    description: "Artisanal doughnuts brand with automated business processes.",
    fullDescription: "Ria's Treat — Artisanal Doughnuts Fit for Royalty. An e-commerce platform for handcrafted doughnuts made with the finest ingredients and royal attention to detail. Beyond the customer-facing storefront, the platform automates core business processes including order management, inventory tracking, and delivery coordination.",
    image: "/projects/rias-treat.png",
    gradient: "from-primary-glow to-accent-glow",
  },
  {
    title: "Osieka Resort",
    category: "Hospitality & Hotel Management",
    description: "Hotel and resort platform with internal flow and processing.",
    fullDescription: "A complete hotel and resort digital product for Osieka Resort. The platform handles room bookings, restaurant management, and event coordination — perfect moments under the African sky. It also aids internal flow and processing for staff operations, guest management, and service delivery optimization.",
    image: "/projects/osieka.png",
    gradient: "from-accent to-primary",
  },
  {
    title: "Hotel Systems",
    category: "Hotel Management System",
    description: "Hotel lodges and comprehensive hotel management system.",
    fullDescription: "A comprehensive hotel lodges and hotel management system. The platform provides multi-property management, room booking engines, guest check-in/check-out flows, billing, housekeeping coordination, and administrative dashboards for hotel operators.",
    image: "/projects/hotel-systems.png",
    gradient: "from-primary to-primary-glow",
  },
  {
    title: "Avia Lois",
    category: "Water Production & CRM",
    description: "Water production company with internal CRM and web processing.",
    fullDescription: "Advanced Water Solutions for a Sustainable Future. Avia Lois is a water production company platform featuring a customer-facing website and internal CRM for web processing. The platform showcases water purification, treatment, and hydration technologies ensuring clean, safe water for communities and industries worldwide — with a 99.9% purity rate and 10M+ liters purified daily.",
    image: "/projects/avia-lois.png",
    gradient: "from-accent-glow to-primary-glow",
  },
  {
    title: "EduAI (LearnWell)",
    category: "EdTech Learning Platform",
    description: "AI-powered exam prep for JAMB, WAEC, NECO, ICAN, TOEFL.",
    fullDescription: "An AI-powered educational platform preparing students for professional exams including JAMB, WAEC, NECO, ICAN, and TOEFL. Features specific curriculums for each exam, past questions, AI tutors across every course and topic, and realistic exam simulations. The platform provides personalized learning paths and intelligent assessment tools.",
    image: "/projects/eduai.png",
    gradient: "from-primary to-accent-glow",
  },
  {
    title: "VFDN Forex Academy",
    category: "Forex Trading Academy",
    description: "Nigeria's premier forex academy with student learning platform.",
    fullDescription: "Vanguard Forex Drive Network — Nigeria's Premier Forex Academy transforming beginners into professional traders. The platform features a comprehensive student portal where lessons can be taken, with structured courses on persistence, focus, and ambition in trading. Includes progress tracking, cohort management, and free training modules.",
    image: "/projects/vfdn.png",
    gradient: "from-accent to-primary",
  },
  {
    title: "MetricsZero",
    category: "Observability Cost Optimization",
    description: "ML-driven optimization for Datadog, CloudWatch, and New Relic.",
    fullDescription: "An Observability Cost Optimization Platform that maximizes observability efficiency. MetricsZero cuts costs across Datadog, CloudWatch, and New Relic — with zero code changes. Features advanced ML-driven optimization for modern observability stacks, trusted by teams who care about efficiency.",
    image: "/projects/metricszero.png",
    gradient: "from-primary-glow to-accent",
  },
  {
    title: "Konlo",
    category: "FinTech / Savings Platform",
    description: "Save in local currency, hold in USD & USDT. Beat inflation.",
    fullDescription: "Konlo protects savings from local currency inflation and unlocks borderless withdrawals. Users can save in their local currency and hold in USD & USDT. Features bank-grade security, global access, and inflation protection. Trusted by thousands across Nigeria, Ghana, Kenya, Brazil, and more with a 4.9/5 rating.",
    image: "/projects/konlo.png",
    gradient: "from-accent-glow to-primary",
  },
  {
    title: "Gen Health",
    category: "HealthTech Platform",
    description: "Healthcare access — care for whoever, wherever, whenever.",
    fullDescription: "Gen Health bridges people and providers with fast, personal healthcare access that puts control back in the patient's hands. Features include familiar messaging-app interface, location-based services, proactive care with early detection, personal health manager, 24/7 availability, and instant connection to healthcare providers. Replacing waiting rooms with better experiences.",
    image: "/projects/genhealth.png",
    gradient: "from-primary to-accent",
  },
  {
    title: "Rhema Schools",
    category: "School LMS Portal",
    description: "School management system for quality education and character development.",
    fullDescription: "A comprehensive school LMS portal for RHEMA PRIMARY & SECONDARY SCHOOL SYSTEM. The platform is committed to nurturing young minds through quality education and character development. Features enrollment management, academic tracking, fee management, and a complete learning management system for students and educators.",
    image: "/projects/rhema.png",
    gradient: "from-accent to-primary-glow",
  },
  {
    title: "Your Light Foundation",
    category: "NGO / Non-Profit",
    description: "Empowering less privileged children through education and mentorship.",
    fullDescription: "Your Light Foundation — Illuminating Futures, Transforming Lives. Dedicated to creating pathways to success for less privileged children through education, healthcare, and mentorship. The platform has supported 5K+ children across Nigeria, enabling donations, program management, and community engagement.",
    image: "/projects/yourlight.png",
    gradient: "from-primary-glow to-accent-glow",
  },
  {
    title: "Point Prime POS",
    category: "E-Commerce Sales Portal",
    description: "Complete e-commerce sales portal for retail businesses.",
    fullDescription: "A comprehensive e-commerce sales portal designed for retail businesses. Point Prime POS provides point-of-sale functionality, inventory management, sales tracking, customer management, and reporting — all in a modern, intuitive interface built for speed and efficiency.",
    image: "/projects/pointprime.png",
    gradient: "from-accent to-primary",
  },
];

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".projects-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: projectsRef.current, start: "top 70%" },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(".modal-overlay", { opacity: 0 }, { opacity: 1, duration: 0.3 });
      gsap.fromTo(".modal-content", { opacity: 0, scale: 0.9, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "back.out(1.4)" });
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedProject]);

  const closeModal = () => setSelectedProject(null);

  return (
    <>
      <section id="work" ref={projectsRef} className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 projects-title">
            <h2 className="text-5xl font-bold mb-4 text-foreground">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore our recent work helping businesses scale and thrive
            </p>
          </div>

          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="embla__slide flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0"
                >
                  <Card
                    onClick={() => setSelectedProject(project)}
                    className="glass-card p-0 h-full hover:scale-105 transition-all duration-300 glow-primary group cursor-pointer border-0 overflow-hidden"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                      <div
                        className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-br ${project.gradient} text-xs font-semibold text-white`}
                      >
                        {project.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8 text-sm text-muted-foreground">
            {projects.length} Projects • Swipe to explore
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="modal-content glass-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover object-top rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-t-2xl" />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>
            <div className="p-8">
              <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-br ${selectedProject.gradient} text-xs font-semibold text-white mb-4`}>
                {selectedProject.category}
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">{selectedProject.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{selectedProject.fullDescription}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
