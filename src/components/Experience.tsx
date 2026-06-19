import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Animated timeline line */}
              {index !== experiences.length - 1 && (
                <motion.div
                  className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-purple-500/50 via-purple-500/30 to-transparent"
                  initial={{ scaleY: 0, originY: 0 }}
                  animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                />
              )}

              {/* Animated timeline dot */}
              <motion.div
                className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center z-10 shadow-lg shadow-purple-500/50"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.2 }}
              >
                <motion.div
                  className="w-3 h-3 bg-white rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                />
              </motion.div>

              {/* Content card */}
              <motion.div
                className="ml-20 glass-card-float p-8 group overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                {/* Hover shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <motion.h3
                        className="text-2xl font-semibold text-white mb-1 group-hover:gradient-text transition-all duration-300"
                        animate={{ opacity: [1, 0.8, 1] }}
                        transition={{ duration: 5, repeat: Infinity }}
                      >
                        {exp.role}
                      </motion.h3>
                      <motion.p
                        className="text-slate-300 font-semibold"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {exp.company}
                      </motion.p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-400 text-sm">{exp.duration}</p>
                      <motion.p
                        className="text-lg font-semibold gradient-text"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                      >
                        {exp.years} years
                      </motion.p>
                    </div>
                  </div>

                  <motion.ul
                    className="space-y-3"
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                      visible: {
                        transition: { staggerChildren: 0.08 },
                      },
                    }}
                  >
                    {exp.responsibilities.map((resp, respIndex) => (
                      <motion.li
                        key={respIndex}
                        variants={{
                          hidden: { opacity: 0, x: -15 },
                          visible: { opacity: 1, x: 0 },
                        }}
                        transition={{ duration: 0.5 }}
                        className="flex items-start gap-3 text-slate-300 hover:text-slate-100 transition-colors duration-300"
                      >
                        <motion.span
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: respIndex * 0.2 }}
                        >
                          <ChevronRight className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        </motion.span>
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 glass-card-float p-8 text-center"
          whileHover={{ scale: 1.02 }}
        >
          <p className="text-lg text-slate-300">
            Total Experience: <motion.span
              className="gradient-text font-bold text-2xl inline-block"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              4 Years
            </motion.span>
          </p>
          <p className="text-slate-400 mt-2">
            Building beautiful, scalable applications with passion for code quality and user experience
          </p>
        </motion.div>
      </div>
    </section>
  );
}
