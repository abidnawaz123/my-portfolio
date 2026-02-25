import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const projects = [
    {
      title: "Data Integration Platform",
      description: "A comprehensive platform for seamless data integration across multiple sources with real-time synchronization and advanced analytics.",
      technologies: ["React", "TypeScript", "Python", "Django", "PostgreSQL", "Redux"],
      highlight: "Built scalable data pipelines handling millions of records daily",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      title: "Manufacturing Procurement Optimization",
      description: "Enterprise-level procurement system optimizing supply chain operations and reducing costs through intelligent automation.",
      technologies: ["Vue.js", "MUI", "Python", "Django REST", "Celery", "Redis"],
      highlight: "Reduced procurement time by 40% through process optimization",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      title: "AI Workforce Agentic Workflows",
      description: "Next-generation platform for building and managing AI agents with sophisticated workflow orchestration and monitoring capabilities.",
      technologies: ["React", "TypeScript", "Agent Stack", "WebSockets", "Python", "FastAPI"],
      highlight: "Architected real-time agent communication system for 1000+ concurrent users",
      gradient: "from-green-600 to-teal-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          className="absolute top-40 right-20 w-48 h-48 rounded-full border border-purple-500/20 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.p className="badge mb-6" whileHover={{ scale: 1.05 }}>
            Selected Work
          </motion.p>
          <h2 className="section-title mb-4">Featured Projects</h2>
          <p className="section-subtitle mb-6">
            A curated selection of products and platforms I have helped design, build, and scale.
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
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="glass-card-float p-8 overflow-hidden group"
            >
              {/* Shimmer overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div>
                    <motion.h3
                      className="text-2xl md:text-3xl font-semibold text-white mb-3 group-hover:gradient-text transition-all duration-300"
                      animate={{ opacity: [1, 0.8, 1] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      className="text-slate-300 text-lg leading-relaxed max-w-2xl"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.description}
                    </motion.p>
                  </div>
                </div>

                <motion.div
                  className="mb-6 p-4 rounded-xl border border-white/10 bg-white/5"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-slate-200 font-semibold flex items-start gap-2">
                    <motion.span
                      className="text-purple-400 mt-1"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ✨
                    </motion.span>
                    {project.highlight}
                  </p>
                </motion.div>

                <motion.div
                  className="flex flex-wrap gap-2 mb-6"
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    visible: {
                      transition: { staggerChildren: 0.05 },
                    },
                  }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="chip"
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                      }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ delay: techIndex * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.button
                  className="btn button-primary"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 glass-card p-8 text-center"
        >
          <p className="text-lg text-slate-300 mb-6">
            Looking for more projects? Check out my GitHub profile.
          </p>
          <motion.a
            href="https://github.com/abidnawaz123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 button-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            Explore GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
