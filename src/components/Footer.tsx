import { motion, type Variants } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer className="bg-slate-100/80 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          className="grid md:grid-cols-3 gap-12 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Abid Nawaz
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Full-Stack Developer passionate about building beautiful web experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm font-medium">
              {["About", "Projects", "Experience", "Contact"].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3">Follow</h4>
            <div className="flex gap-4">
              {[
                { name: "GitHub", url: "https://github.com/abidnawaz123" },
                { name: "LinkedIn", url: "https://www.linkedin.com/in/abid-nawaz-b99201290" },
                { name: "Email", url: "mailto:youthone01@gmail.com" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="h-px bg-slate-200 dark:bg-slate-800 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between text-slate-500 dark:text-slate-400 text-sm">
          <p>© {currentYear} Abid Nawaz. All rights reserved.</p>
          <p className="flex items-center gap-1.5 mt-4 md:mt-0 font-medium">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500 inline" /> using React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
