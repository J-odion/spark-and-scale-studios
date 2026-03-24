import { useEffect, useRef } from "react";
import { Mail, MessageCircle, Instagram, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-title",
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: contactRef.current, start: "top 80%" },
        }
      );

      const items = gsap.utils.toArray<HTMLElement>(".contact-item");
      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.8, delay: i * 0.15, ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 95%" },
          }
        );
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "splashtechstudios@gmail.com",
      href: "mailto:splashtechstudios@gmail.com",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+234 913 383 8340",
      href: "https://wa.me/2349133838340",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@splashtechstudios",
      href: "https://instagram.com/splashtechstudios",
    },
  ];

  return (
    <section id="contact" ref={contactRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="contact-title text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 text-foreground">
              Let's Build <span className="text-gradient">Together</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Guaranteed delivery. 24/7 support. Maximum ROI.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item glass-card rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 group flex items-center gap-5"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center shrink-0 group-hover:animate-glow">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                    <div className="font-semibold text-foreground">{item.value}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto group-hover:translate-x-1 transition-transform" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
