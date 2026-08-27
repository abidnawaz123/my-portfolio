import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Github, Linkedin, Send, type LucideIcon } from "lucide-react";

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const contactVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const SocialLink = ({ icon: Icon, href }: { icon: LucideIcon, href: string, label?: string }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="icon-ring-glow"
    >
      <Icon className="w-5 h-5 text-slate-700" />
    </motion.a>
  );

  const contactItems = [
    { icon: Mail, title: "Email", content: "youthone01@gmail.com", href: "mailto:youthone01@gmail.com" },
    { icon: Linkedin, title: "LinkedIn", content: "linkedin.com/in/abid-nawaz-b99201290", href: "https://www.linkedin.com/in/abid-nawaz-b99201290" },
    { icon: Github, title: "GitHub", content: "github.com/abidnawaz123", href: "https://github.com/abidnawaz123" },
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background gradient elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen blur-3xl"
          animate={{
            x: ["0px", "30px", "-30px", "0px"],
            y: ["0px", "-50px", "50px", "0px"],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen blur-3xl"
          animate={{
            x: ["0px", "-40px", "40px", "0px"],
            y: ["0px", "40px", "-40px", "0px"],
            scale: [1, 0.9, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>

      {/* Floating accent elements */}
      <motion.div
        className="absolute top-1/3 left-20 w-32 h-32 border border-purple-500/10 rounded-full"
        animate={{ rotate: 360, y: [0, 30, 0] }}
        transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, y: { duration: 5, repeat: Infinity } }}
      />

      <div className="max-w-3xl mx-auto w-full">
        <motion.div
          variants={contactVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <p className="badge mb-4">
            Get In Touch
          </p>
          <h2 className="section-title mb-4">
            Let's Connect
          </h2>
          <p className="section-subtitle mx-auto">
            I'm always open to new opportunities, collaborations, and interesting projects. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-6 md:p-10 mb-10 overflow-hidden"
        >
          <div className="space-y-6">
            {contactItems.map((item, idx) => (
              <div key={idx}>
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
                  <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-500 text-sm">{item.title}</h3>
                    <a
                      href={item.href}
                      target={item.title !== "Email" ? "_blank" : undefined}
                      rel={item.title !== "Email" ? "noopener noreferrer" : undefined}
                      className="text-slate-900 hover:text-indigo-600 font-bold text-base sm:text-lg transition-colors inline-block mt-0.5"
                    >
                      {item.content}
                    </a>
                  </div>
                </div>

                {idx !== contactItems.length - 1 && (
                  <div className="h-px bg-slate-200 my-6" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <motion.a
            href="mailto:youthone01@gmail.com"
            className="btn button-primary mb-12 inline-flex"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Send className="w-5 h-5" />
            </motion.span>
            Send me an Email
          </motion.a>

          <motion.div
            className="flex justify-center gap-6 mb-12"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {[
              { icon: Github, href: "https://github.com/abidnawaz123", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/abid-nawaz-b99201290", label: "LinkedIn" },
              { icon: Mail, href: "mailto:youthone01@gmail.com", label: "Email" },
            ].map((link, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <SocialLink icon={link.icon} href={link.href} label={link.label} />
              </motion.div>
            ))}
          </motion.div>

          <p className="text-slate-600 font-medium">
            Based in <span className="text-indigo-600 font-bold">Bahawalpur, Pakistan</span> • Available for remote opportunities worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
}
