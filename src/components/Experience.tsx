import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronRight } from "lucide-react";

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const experiences = [
    {
      role: "Senior Frontend Developer",
      company: "Tech Company",
      duration: "2023 - Present",
      years: "1.5+",
      responsibilities: [
        "Led development of frontend architecture for AI workforce platform",
        "Implemented real-time data visualization with complex state management",
        "Mentored junior developers and conducted code reviews",
        "Optimized application performance, reducing load time by 50%",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Enterprise Solutions",
      duration: "2021 - 2023",
      years: "2",
      responsibilities: [
        "Developed full-stack features for data integration platform",
        "Built RESTful APIs using Django and PostgreSQL",
        "Implemented responsive UI with React and Material-UI",
        "Collaborated with product team to deliver features on schedule",
      ],
    },
    {
      role: "Junior Developer",
      company: "Startup",
      duration: "2020 - 2021",
      years: "1",
      responsibilities: [
        "Started career building web applications with React and Vue",
        "Learned full-stack development practices",
        "Contributed to manufacturing procurement system",
        "Participated in agile development cycles",
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
          className="absolute bottom-40 left-10 w-64 h-64 rounded-full border border-blue-500/10 opacity-10"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
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
            Career
          </motion.p>
          <h2 className="section-title mb-4">Experience</h2>
          <p className="section-subtitle mb-6">
            A timeline of the roles and responsibilities that shaped my full-stack expertise.
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
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-10 md:pl-16"
            >
              {/* Timeline vertical bar */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-4 md:left-6 top-10 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/40 via-purple-500/20 to-transparent" />
              )}

              {/* Timeline marker */}
              <div className="absolute left-1.5 md:left-3.5 top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-purple-400 flex items-center justify-center shadow-md shadow-purple-500/30">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
              </div>

              {/* Content card */}
              <motion.div
                className="glass-card p-6 md:p-8 group"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4 pb-4 border-b border-slate-200/50 dark:border-white/5">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 font-medium text-sm sm:text-base">
                      {exp.company}
                    </p>
                  </div>
                  <div className="md:text-right">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20">
                      {exp.duration} ({exp.years} years)
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li
                      key={respIndex}
                      className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 text-sm md:text-base"
                    >
                      <ChevronRight className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 glass-card p-6 md:p-8 text-center"
        >
          <p className="text-lg text-slate-800 dark:text-slate-200 font-medium">
            Total Experience: <span className="gradient-text text-xl font-bold">4 Years</span>
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
            Building beautiful, scalable applications with passion for code quality and user experience
          </p>
        </motion.div>
      </div>
    </section>
  );
}
