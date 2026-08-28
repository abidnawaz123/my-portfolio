import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setActiveLink] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/50 dark:border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
    >
      {/* Smooth backdrop blur transition */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          backgroundColor: isScrolled
            ? theme === "dark"
              ? "rgba(7, 9, 15, 0.75)"
              : "rgba(255, 255, 255, 0.85)"
            : "rgba(0, 0, 0, 0)",
          backdropFilter: isScrolled ? "blur(24px)" : "blur(0px)",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      {/* Smooth animated border glow */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        animate={{
          opacity: isScrolled ? [0.3, 0.5, 0.3] : 0,
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between relative z-10">
        {/* Logo */}
        <motion.a
          href="#home"
          className="flex items-center gap-2 z-50 group"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <motion.div
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-lg relative"
            animate={{
              boxShadow: [
                "0 0 20px rgba(99, 102, 241, 0.3)",
                "0 0 40px rgba(139, 92, 246, 0.6)",
                "0 0 20px rgba(99, 102, 241, 0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            whileHover={{ rotate: 360 }}
          >
            <span className="text-white font-bold text-lg">AN</span>
          </motion.div>
          <motion.div className="flex flex-col">
            <motion.span
              className="hidden sm:inline font-bold text-base gradient-text"
              animate={{ opacity: [1, 0.8, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Abid
            </motion.span>
            <motion.span
              className="hidden sm:inline text-xs text-purple-600 dark:text-purple-400 font-semibold"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              Developer
            </motion.span>
          </motion.div>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              onClick={() => {
                scrollToSection();
                setActiveLink(item.href);
              }}
              className="nav-link relative px-4 py-2 group"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background hover effect */}
              <motion.div
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 -z-10"
                whileHover={{
                  backgroundColor: theme === "dark" ? "rgba(139, 92, 246, 0.15)" : "rgba(139, 92, 246, 0.1)",
                  opacity: 1,
                }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Text with animation */}
              <motion.span className="relative flex items-center gap-1">
                {item.label}
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="text-purple-600 dark:text-purple-400"
                >
                  <Sparkles className="w-3 h-3" />
                </motion.span>
              </motion.span>

              {/* Underline animation */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                initial={{ width: 0, opacity: 0 }}
                whileHover={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Action Controls: Theme Toggle & Contact Button */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-white/15 bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 hover:border-purple-400 dark:hover:border-purple-400 transition-all duration-300 shadow-sm"
            whileHover={{ scale: 1.1, rotate: theme === "dark" ? 45 : -45 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.div
                  key="sun"
                  initial={{ scale: 0, rotate: -90, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  exit={{ scale: 0, rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-5 h-5 text-amber-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ scale: 0, rotate: 90, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  exit={{ scale: 0, rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-5 h-5 text-indigo-600" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* CTA Button */}
          <motion.a
            href="mailto:youthone01@gmail.com"
            className="flex items-center gap-2 btn button-primary relative overflow-hidden"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              📧
            </motion.span>
            <span>Contact</span>
          </motion.a>
        </div>

        {/* Mobile controls: Theme toggle + Menu button */}
        <div className="flex md:hidden items-center gap-2 z-50">
          <motion.button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-xl border border-slate-200 dark:border-white/15 bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-indigo-600" />
            )}
          </motion.button>

          <motion.button
            className="p-2 relative"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-slate-900 dark:text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-slate-900 dark:text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-16 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl overflow-y-auto"
            initial={{ opacity: 0, y: -20, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -20, scaleY: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ originY: 0 }}
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                className="absolute top-20 right-10 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl"
                animate={{ y: [0, 30, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-40 left-10 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl"
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </div>

            <motion.div
              className="flex flex-col items-center justify-start gap-3 p-8 mt-4 relative z-10"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                },
              }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  onClick={() => {
                    scrollToSection();
                    setActiveLink(item.href);
                  }}
                  className="nav-link text-lg relative group w-full text-center py-3 rounded-lg text-slate-800 dark:text-slate-200"
                  initial={{ opacity: 0, y: 20, x: -20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{
                    x: 10,
                    backgroundColor: theme === "dark" ? "rgba(139, 92, 246, 0.1)" : "rgba(139, 92, 246, 0.05)",
                  }}
                >
                  <motion.div>
                    {item.label}
                    <motion.div
                      className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mt-2 rounded-full"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.a>
              ))}

              <motion.div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent my-4" />

              <motion.a
                href="mailto:youthone01@gmail.com"
                className="mt-2 btn button-primary w-full text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.08 + 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  📧
                </motion.span>
                Send Me an Email
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

