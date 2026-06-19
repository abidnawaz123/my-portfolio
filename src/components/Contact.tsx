import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Github, Linkedin, Send } from "lucide-react";

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

  const SocialLink = ({ icon: Icon, href }: { icon: any, href: string, label?: string }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="icon-ring-glow"
    >
      <Icon className="w-6 h-6 text-white" />
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
          <motion.p className="badge mb-6" whileHover={{ scale: 1.05 }}>
            Get In Touch
          </motion.p>
          <motion.h2
            className="section-title mb-4"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Let's Connect
          </motion.h2>
          <motion.p
            className="section-subtitle mb-12 mx-auto"
            initial={{ opacity: 0.7 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            I'm always open to new opportunities, collaborations, and interesting projects. Feel free to reach out!
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card-float p-8 md:p-12 mb-12 overflow-hidden group"
          whileHover={{ scale: 1.02 }}
        >
          {/* Shimmer overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.8 }}
          />

          <div className="space-y-6 relative z-10">
            {contactItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <motion.div
                  className="flex flex-col md:flex-row items-center gap-6"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                  >
                    <item.icon className="w-8 h-8 text-purple-400 flex-shrink-0" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <a
                      href={item.href}
                      target={item.title !== "Email" ? "_blank" : undefined}
                      rel={item.title !== "Email" ? "noopener noreferrer" : undefined}
                      className="text-slate-300 hover:text-purple-300 transition-colors hover:scale-105 inline-block"
                    >
                      {item.content}
                    </a>
                  </div>
                </motion.div>

                {idx !== contactItems.length - 1 && (
                  <motion.div
                    className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent my-6"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: idx * 0.15 }}
                  />
                )}
              </motion.div>
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

          <motion.p
            className="text-slate-400"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Based in <span className="text-purple-400 font-semibold">Bahawalpur, Pakistan</span> • Available for remote opportunities worldwide
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
