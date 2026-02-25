import { motion } from "framer-motion";
import { CircuitBoard, Braces, Database, Wrench } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const skillCategories = [
    {
      title: "Frontend",
      icon: CircuitBoard,
      color: "from-blue-500 to-cyan-500",
      skills: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "MUI"],
    },
    {
      title: "State Management",
      icon: Braces,
      color: "from-purple-500 to-pink-500",
      skills: ["Redux", "Redux Saga", "Context API"],
    },
    {
      title: "Backend",
      icon: Database,
      color: "from-green-500 to-teal-500",
      skills: ["Python", "Django", "Django REST Framework", "MongoDB"],
    },
    {
      title: "Tools & Workflow",
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      skills: ["Git", "Docker", "Agile", "Performance", "Responsive Design"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full border border-blue-500/5"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ rotate: { duration: 35, repeat: Infinity, ease: "linear" }, scale: { duration: 5, repeat: Infinity } }}
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
            Core Stack
          </motion.p>
          <h2 className="section-title mb-4">Skills & Technologies</h2>
          <p className="section-subtitle mb-6">
            A focused toolkit built from years of shipping high-quality interfaces and reliable backend services.
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
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="glass-card-float p-8 group overflow-hidden"
            >
              {/* Animated glow on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0"
                whileHover={{ from: "from-purple-500/10 to-pink-500/10" }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />

              <motion.div
                className="flex items-center gap-4 mb-6 relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <motion.span
                  className="icon-ring-glow"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <category.icon className="w-6 h-6" />
                </motion.span>
                <motion.h3
                  className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300"
                  animate={{ opacity: [1, 0.85, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {category.title}
                </motion.h3>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-3 relative z-10"
                initial="hidden"
                whileInView="visible"
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.06 },
                  },
                }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="chip"
                    variants={{
                      hidden: { opacity: 0, scale: 0.8, y: 10 },
                      visible: { opacity: 1, scale: 1, y: 0 },
                    }}
                    whileHover={{ scale: 1.12, rotate: 5 }}
                    transition={{ delay: skillIndex * 0.06 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 glass-card-float p-8 text-center"
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <p className="text-lg text-slate-300 mb-4">
            I'm always learning and exploring new technologies to stay at the forefront of web development.
          </p>
          <motion.div
            className="flex justify-center gap-4 flex-wrap"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.08 },
              },
            }}
          >
            {["Responsive Design", "Performance Optimization", "Clean Code", "Problem Solving"].map((skill, index) => (
              <motion.span
                key={index}
                className="chip"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.12 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
