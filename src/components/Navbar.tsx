import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Sparkles, Sun, Moon, Palette, Check } from "lucide-react";
import { useTheme, THEMES, type ThemeId } from "../context/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setActiveLink] = useState("home");
  const { theme, setTheme, toggleTheme, isDark, currentThemeOption } = useTheme();

  const themeMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (themeMenuRef.current && !themeMenuRef.current.contains(event.target as Node)) {
        setIsThemeMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/50 dark:border-white/10 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Smooth backdrop blur transition */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          backgroundColor: isScrolled
            ? isDark
              ? "rgba(7, 9, 15, 0.85)"
              : "rgba(255, 255, 255, 0.85)"
            : "rgba(0, 0, 0, 0)",
          backdropFilter: isScrolled ? "blur(24px)" : "blur(0px)",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      {/* Subtle border glow */}
      {isScrolled && (
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
      )}

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
            <span className="font-bold text-base tracking-tight text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
              Abid Nawaz
            </span>
            <span className="text-[11px] text-purple-600 dark:text-purple-400 font-semibold tracking-wide">
              Full Stack Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-full px-3 py-1.5 backdrop-blur-md">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => {
                scrollToSection();
                setActiveLink(item.href);
              }}
              className="px-3.5 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-full transition-all duration-200 hover:bg-slate-200/60 dark:hover:bg-white/10"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action Controls: Multi-Theme Palette Picker & CTA */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Quick Sun/Moon Toggle */}
          <motion.button
            onClick={toggleTheme}
            aria-label="Toggle light/dark mode"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-white/15 bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 hover:border-purple-400 dark:hover:border-purple-400 transition-all duration-300 shadow-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Toggle Light / Dark mode"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </motion.button>

          {/* Theme Palette Dropdown Button */}
          <div className="relative" ref={themeMenuRef}>
            <motion.button
              onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
              aria-label="Select color theme"
              className="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 dark:border-white/15 bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 hover:border-purple-400 dark:hover:border-purple-400 transition-all duration-300 text-xs font-semibold shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Palette className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="hidden sm:inline">{currentThemeOption.name}</span>
              <div
                className="w-2.5 h-2.5 rounded-full border border-white/20 shadow-sm"
                style={{ backgroundColor: currentThemeOption.colors[1] }}
              />
            </motion.button>

            {/* Theme Dropdown Popover */}
            <AnimatePresence>
              {isThemeMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-64 p-2.5 rounded-2xl border border-slate-200 dark:border-white/15 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl shadow-2xl z-50 max-h-96 overflow-y-auto"
                >
                  <div className="px-2 py-1.5 mb-1.5 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Choose Theme (11)
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-300 font-semibold">
                      Live Preview
                    </span>
                  </div>

                  <div className="space-y-1">
                    {THEMES.map((t) => {
                      const isActive = theme === t.id;
                      return (
                        <button
                          key={t.id}
                          onClick={() => {
                            setTheme(t.id as ThemeId);
                            setIsThemeMenuOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                            isActive
                              ? "bg-purple-500/15 text-purple-900 dark:text-purple-300 border border-purple-500/30"
                              : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            {/* Dual Color Swatch Dot */}
                            <div className="flex items-center -space-x-1">
                              <div
                                className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-sm"
                                style={{ backgroundColor: t.colors[0] }}
                              />
                              <div
                                className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-sm"
                                style={{ backgroundColor: t.colors[1] }}
                              />
                            </div>
                            <span>{t.name}</span>
                          </div>

                          {isActive && <Check className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA Button */}
          <a
            href="mailto:youthone01@gmail.com"
            className="btn button-primary py-2 px-4 text-sm flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile controls: Theme Palette + Quick Toggle + Menu button */}
        <div className="flex md:hidden items-center gap-1.5 z-50">
          <motion.button
            onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
            aria-label="Select theme"
            className="p-2 rounded-xl border border-slate-200 dark:border-white/15 bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200"
            whileTap={{ scale: 0.9 }}
          >
            <Palette className="w-4.5 h-4.5 text-purple-600 dark:text-purple-400" />
          </motion.button>

          <motion.button
            onClick={toggleTheme}
            aria-label="Toggle theme mode"
            className="p-2 rounded-xl border border-slate-200 dark:border-white/15 bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200"
            whileTap={{ scale: 0.9 }}
          >
            {isDark ? (
              <Sun className="w-4.5 h-4.5 text-amber-400" />
            ) : (
              <Moon className="w-4.5 h-4.5 text-indigo-600" />
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

      {/* Mobile Theme Popover */}
      <AnimatePresence>
        {isThemeMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden fixed top-16 right-4 left-4 p-3 rounded-2xl border border-slate-200 dark:border-white/15 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl shadow-2xl z-50 max-h-80 overflow-y-auto"
          >
            <div className="px-2 py-1 mb-2 border-b border-slate-200 dark:border-white/10 flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
              <span>Select Theme</span>
              <span>11 Palettes</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {THEMES.map((t) => {
                const isActive = theme === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTheme(t.id as ThemeId);
                      setIsThemeMenuOpen(false);
                    }}
                    className={`flex items-center justify-between p-2 rounded-xl text-xs font-medium transition-all ${
                      isActive
                        ? "bg-purple-500/20 text-purple-900 dark:text-purple-300 border border-purple-500/40"
                        : "text-slate-700 dark:text-slate-300 bg-slate-100/70 dark:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center -space-x-1">
                        <div
                          className="w-3 h-3 rounded-full border border-white/20"
                          style={{ backgroundColor: t.colors[0] }}
                        />
                        <div
                          className="w-3 h-3 rounded-full border border-white/20"
                          style={{ backgroundColor: t.colors[1] }}
                        />
                      </div>
                      <span className="truncate max-w-[90px]">{t.name}</span>
                    </div>
                    {isActive && <Check className="w-3 h-3 text-purple-600 dark:text-purple-400" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation Menu */}
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
                  className="nav-link text-lg relative group w-full text-center py-3 rounded-lg text-slate-800 dark:text-slate-200 font-medium"
                  initial={{ opacity: 0, y: 20, x: -20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{
                    x: 10,
                    backgroundColor: isDark ? "rgba(139, 92, 246, 0.1)" : "rgba(139, 92, 246, 0.05)",
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
                className="mt-2 btn button-primary w-full text-center flex items-center justify-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.08 + 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="w-4 h-4" />
                <span>Hire Me</span>
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
