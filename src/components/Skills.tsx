import { motion, type Variants } from "framer-motion";
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20 relative">
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
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="glass-card p-6 md:p-8 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="icon-ring-glow">
                  <category.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="chip cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass-card p-8 text-center"
        >
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
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
