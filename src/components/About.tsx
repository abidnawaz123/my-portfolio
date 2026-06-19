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
    <motion.span
      className="gradient-text font-semibold"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      {display}
      {suffix}
    </motion.span>
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
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full border border-purple-500/10 opacity-5"
          animate={{ rotate: 360, y: [0, 30, 0] }}
          transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" }, y: { duration: 4, repeat: Infinity } }}
        />
      </div>

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
              <motion.p
                key={idx}
                className="text-lg text-slate-300 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ x: 5 }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass-card-float p-8 space-y-6"
            whileHover={{ y: -5 }}
          >
            {[
              { title: "Frontend Stack", content: "React • Next.js • Vue.js • TypeScript • Tailwind CSS • MongoDB" },
              { title: "Backend Stack", content: "Python • Django • Django REST Framework • RESTful APIs" },
              { title: "Other Skills", content: "Git • Docker • Responsive Design • UI/UX • Performance Optimization" },
            ].map((stack, idx) => (
              <motion.div
                key={idx}
                className="space-y-4 p-4 rounded-lg border border-white/5 hover:border-purple-400/30 transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ backgroundColor: "rgba(139, 92, 246, 0.05)" }}
              >
                <h3 className="text-xl font-semibold text-white">{stack.title}</h3>
                <p className="text-slate-300">{stack.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            { value: 3.5, decimals: 1, suffix: "+", label: "Years Experience" },
            { value: 8, decimals: 0, suffix: "+", label: "Projects Completed" },
            { value: 100, decimals: 0, suffix: "%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center glass-card-float p-6 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-4xl mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
              >
                <AnimatedCounter
                  value={stat.value}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </motion.div>
              <motion.p
                className="text-slate-400"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
