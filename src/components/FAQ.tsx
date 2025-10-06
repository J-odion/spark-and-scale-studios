import { useEffect, useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const faqRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".faq-item", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 60%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on scope, but we guarantee fast delivery. Most projects are completed within 2-8 weeks. We provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you offer 24/7 support?",
      answer: "Yes! We provide 24/7 support with a dedicated account manager. You'll always have someone available when you need assistance.",
    },
    {
      question: "What is included in your pricing?",
      answer: "Our pricing is transparent with no hidden fees. Each package includes development, testing, deployment, and support. We'll provide a detailed breakdown during our consultation.",
    },
    {
      question: "Can you work with existing projects?",
      answer: "Absolutely! We can take over existing projects, perform audits, add new features, or completely redesign your application. We're flexible and adapt to your needs.",
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Yes, we offer lifetime support packages and ongoing maintenance. We'll ensure your project stays updated, secure, and running smoothly.",
    },
    {
      question: "What technologies do you work with?",
      answer: "We specialize in modern web technologies including React, Node.js, Next.js, and cloud platforms. We use the best tools to deliver scalable, high-performance solutions.",
    },
  ];

  return (
    <section ref={faqRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 faq-title">
          <h2 className="text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about working with us
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item glass-card rounded-xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-white" />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-5 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
