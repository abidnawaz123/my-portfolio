import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer className="bg-black/60 backdrop-blur-xl border-t border-white/10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96 rounded-full border border-purple-500/5"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          className="grid md:grid-cols-3 gap-12 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div
            variants={itemVariants}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3
              className="text-2xl font-semibold text-white mb-4"
              animate={{ opacity: [1, 0.8, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Abid Nawaz
            </motion.h3>
            <motion.p
              className="text-slate-400"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Full-Stack Developer passionate about building beautiful web experiences.
            </motion.p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              {["About", "Projects", "Experience", "Contact"].map((link, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-white transition-colors inline-block"
                    whileHover={{ scale: 1.05 }}
                  >
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Follow</h4>
            <div className="flex gap-4">
              {[
                { name: "GitHub", url: "https://github.com/abidnawaz123" },
                { name: "LinkedIn", url: "https://www.linkedin.com/in/abid-nawaz-b99201290" },
                { name: "Twitter", url: "https://twitter.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  style={{ transition: `opacity 3s ease-in-out ${index * 0.3}s infinite` }}
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          className="flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.p
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            © {currentYear} Abid Nawaz. All rights reserved.
          </motion.p>
          <motion.p
            className="flex items-center gap-2 mt-4 md:mt-0"
            whileHover={{ scale: 1.05 }}
          >
            Built with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500" />
            </motion.span>
            {" "}using React, TypeScript, and Tailwind CSS
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
