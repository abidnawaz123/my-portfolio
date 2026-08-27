import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setActiveLink] = useState("home");
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "dark" || stored === "light") return stored;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

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
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/60 dark:border-slate-800/60 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Smooth backdrop blur transition */}
      <div
        className={`absolute inset-0 -z-10 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-800"
            : "bg-white/40 dark:bg-slate-900/40 backdrop-blur-xs"
        }`}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between relative z-10">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 z-50 group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
            <span className="text-white font-bold text-sm tracking-wider">AN</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              Abid Nawaz
            </span>
            <span className="text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide">
              Full Stack Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 rounded-full px-3 py-1.5 backdrop-blur-md">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => {
                scrollToSection();
                setActiveLink(item.href);
              }}
              className="px-3.5 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-slate-700/60 rounded-full transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right side actions (Theme toggle & CTA) */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Switch */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-500 transition-all duration-200 shadow-xs"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>

          {/* CTA Button */}
          <a
            href="mailto:youthone01@gmail.com"
            className="hidden md:inline-flex button-primary py-2 px-4 text-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Hire Me</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 p-2 relative text-slate-800 dark:text-slate-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-16 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl overflow-y-auto border-t border-slate-200 dark:border-slate-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
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
                  className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 relative group w-full text-center py-3 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.label}
                </motion.a>
              ))}

              <div className="w-full h-px bg-slate-200 dark:bg-slate-800 my-2" />

              <a
                href="mailto:youthone01@gmail.com"
                className="mt-2 button-primary w-full text-center py-3"
              >
                Hire Me
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
