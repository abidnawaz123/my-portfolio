import { motion, useMotionValue, useSpring, useMotionValueEvent, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  decimals?: number;
  inView: boolean;
};

function AnimatedCounter({ value, suffix = "", decimals = 0, inView }: AnimatedCounterProps) {
  const [display, setDisplay] = useState(value.toFixed(decimals));
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 40, damping: 22, mass: 1.6 });

  useMotionValueEvent(spring, "change", (latest) => {
    setDisplay(Number(latest).toFixed(decimals));
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(0);
      const timer = setTimeout(() => {
        motionValue.set(value);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [inView, motionValue, value]);

  return (
    <span className="gradient-text font-bold text-4xl sm:text-5xl">
      {display}
      {suffix}
    </span>
  );
}

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.p className="badge mb-6" whileHover={{ scale: 1.05 }}>
            About
          </motion.p>
          <h2 className="section-title mb-4">About Me</h2>
          <p className="section-subtitle mb-6">
            I build full-stack web applications with a frontend-first mindset and a strong foundation in backend systems.
          </p>
          <motion.div
            className="section-divider"
            animate={{ scaleX: [0, 1] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            {[
              "I'm a passionate Full-Stack Developer with over 3.5 years of experience in building modern web applications. Building full-stack web applications with a strong expertise across the tech stack.",
              "What drives me is the intersection of design and functionality—creating solutions that not only look great but work seamlessly. I have a strong foundation in both frontend and backend technologies, allowing me to understand the full picture of application development.",
              "When I'm not coding, I'm exploring new technologies, contributing to open-source projects, and continuously learning to stay updated with the ever-evolving tech landscape.",
            ].map((text, idx) => (
              <p
                key={idx}
                className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
              >
                {text}
              </p>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass-card p-6 md:p-8 space-y-4"
          >
            {[
              { title: "Frontend Stack", content: "React • Next.js • Vue.js • TypeScript • Tailwind CSS • MongoDB" },
              { title: "Backend Stack", content: "Python • Django • Django REST Framework • RESTful APIs" },
              { title: "Other Skills", content: "Git • Docker • Responsive Design • UI/UX • Performance Optimization" },
            ].map((stack, idx) => (
              <div
                key={idx}
                className="space-y-1.5 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 hover:border-indigo-300 dark:hover:border-indigo-500 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/40 transition-all duration-200"
              >
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{stack.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{stack.content}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            { value: 3.5, decimals: 1, suffix: "+", label: "Years Experience" },
            { value: 8, decimals: 0, suffix: "+", label: "Projects Completed" },
            { value: 100, decimals: 0, suffix: "%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center glass-card-float p-6"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-2">
                <AnimatedCounter
                  value={stat.value}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </div>
              <p className="text-slate-600 dark:text-slate-300 font-medium text-sm sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
