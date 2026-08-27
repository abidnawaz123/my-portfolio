import { motion, type Variants } from "framer-motion";
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
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="glass-card p-6 md:p-8 overflow-hidden group border border-white/10 hover:border-purple-500/30"
            >
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-base leading-relaxed max-w-2xl">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="mb-5 p-3.5 rounded-xl border border-purple-500/20 bg-purple-500/10">
                  <p className="text-purple-200 text-sm font-medium flex items-center gap-2">
                    <span className="text-purple-400">✨</span>
                    {project.highlight}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="chip"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="button-primary text-sm py-2 px-4">
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </button>
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
