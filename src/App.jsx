import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Github, Linkedin, Mail, Phone, Moon, SunMedium, ArrowDown, 
  Award, School, Calendar, Rocket, Trophy, Download, ExternalLink,
  ChevronRight, Code, Database, Cpu, Palette, Smartphone, Globe
} from "lucide-react";

// ------- Editable Data ------------------------------------------------------
const PROFILE = {
  name: "Sunil Shrestha",
  role: "Flutter Developer",
  tagline: "Building cross-platform experiences that feel native.",
  location: "Duwakot, Bhaktapur",
  phone: "9840252536",
  email: "linus9840@gmail.com",
  linkedin: "https://linkedin.com/in/sunil-shrestha-fuu",
  github: "https://github.com/Sunichiii",
  resume: "/resume.pdf",
   // Add a professional photo in public folder
};

const EXPERIENCE = [
  { 
    company: "Technergy Global Pvt. Ltd.", 
    title: "Associate Flutter Developer", 
    period: "July 2024 – Present",
    description: "Developing and maintaining cross-platform mobile applications using Flutter framework.",
    technologies: ["Flutter", "Dart", "Firebase", "REST APIs"]
  },
  { 
    company: "Technergy Global Pvt. Ltd.", 
    title: "Flutter Developer Intern", 
    period: "Jan 2024 – June 2024",
    description: "Assisted in developing mobile applications and learned industry best practices.",
    technologies: ["Flutter", "Dart", "Git", "UI/UX Design"]
  },
  { 
    company: "CloudFactory", 
    title: "Data Specialist (Annotation)", 
    period: "2022 – 2023",
    description: "Worked on data annotation and quality assurance for machine learning projects.",
    technologies: ["Data Annotation", "Quality Assurance", "Team Collaboration"]
  },
];

const SKILLS = {
  "Mobile Development": ["Flutter", "Dart", "Kotlin", "Android Studio"],
  "Frontend & Backend": ["Django", "JavaScript", "HTML/CSS", "REST APIs"],
  "Machine Learning": ["TensorFlow", "Keras", "Scikit-learn", "Python"],
  "Databases": ["SQL", "Firestore", "SQLite", "Room DB"],
  "Tools & Technologies": ["Git", "GitHub", "Firebase", "VS Code", "Figma"],
  "State Management": ["BLoC", "Provider", "GetX", "Riverpod"],
};

const PROJECTS = [
  { 
    title: "Smart Scribbles", 
    desc: "Learning app with ML recognition for handwriting and drawing analysis", 
    technologies: ["Flutter", "TensorFlow Lite", "Firebase"],
    link: "https://github.com/Sunichiii/smart_scribbles_v3"
  },
  { 
    title: "Quick Bite", 
    desc: "Food delivery app with real-time order management and tracking", 
    technologies: ["Flutter", "Node.js", "MongoDB"],
    link: "https://github.com/Sunichiii/Food-Delivery-App"
  },
  { 
    title: "TastyTreats", 
    desc: "Recipe discovery app using MealDB API with personalized recommendations", 
    technologies: ["Flutter", "MealDB API", "Provider"],
    link: "https://github.com/Sunichiii/Receipe-instruction-crud"
  },
  { 
    title: "Blood Bank Management System", 
    desc: "Role-based platform for blood donation management built with Django & SQL", 
    technologies: ["Django", "SQL", "JavaScript", "Bootstrap"],
    link: "#"
  },
];

const AWARDS = [
  { title: "Winner — Apex Hackathon", org: "Apex College", year: "2023", desc: "Developed a healthcare solution for rural areas" },
  { title: "ThingQbator Flutter Course — Certified", org: "ThingQbator", year: "2022", desc: "Completed comprehensive Flutter development course" },
  { title: "SQL & Relational Database — Certified", org: "Coursera", year: "2024", desc: "Stanford University database certification" },
];

const EDUCATION = {
  degree: "B.Sc. CSIT",
  uni: "Tribhuvan University",
  college: "New Summit College",
  years: "2020 – 2025",
  location: "Shantinagar, Kathmandu",
  description: "Focus on software development, algorithms, and data structures. Relevant coursework: Mobile Application Development, Database Management, Machine Learning."
};

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// ------- Dark Mode ----------------------------------------------------------
function useDarkMode() {
  const [enabled, setEnabled] = useState(() => {
    if (typeof window === "undefined") return true;
    const saved = localStorage.getItem("sunil-dark");
    if (saved !== null) return saved === "true";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", enabled);
    localStorage.setItem("sunil-dark", String(enabled));
  }, [enabled]);
  return { enabled, setEnabled };
}

// Floating elements background component
const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-10 dark:opacity-20"
        style={{
          width: Math.random() * 100 + 50,
          height: Math.random() * 100 + 50,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, Math.random() * 40 - 20, 0],
          x: [0, Math.random() * 40 - 20, 0],
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>
);

// Skill icons mapping
const skillIcons = {
  "Mobile Development": <Smartphone className="w-5 h-5" />,
  "Frontend & Backend": <Code className="w-5 h-5" />,
  "Machine Learning": <Cpu className="w-5 h-5" />,
  "Databases": <Database className="w-5 h-5" />,
  "Tools & Technologies": <Code className="w-5 h-5" />,
  "State Management": <Palette className="w-5 h-5" />,
};

// ------- Main ---------------------------------------------------------------
export default function Portfolio() {
  const { enabled, setEnabled } = useDarkMode();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "home";
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 via-white to-zinc-200 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 text-zinc-800 dark:text-zinc-100 transition-colors duration-500 overflow-hidden">
      <FloatingElements />
      

{/* Navigation */}
<nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-700">
  <div className="container mx-auto px-6 py-3 flex justify-between items-center">
    {/* Empty div to maintain layout balance */}
    <div className="w-0 md:w-auto"></div>
    
    <div className="hidden md:flex space-x-8">
      {["home", "experience", "skills", "projects", "awards", "education", "contact"].map((item) => (
        <button
          key={item}
          onClick={() => scrollToSection(item)}
          className={`capitalize transition-all duration-300 ${
            activeSection === item 
              ? "text-blue-600 dark:text-blue-400 font-medium" 
              : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
    
    <button
      onClick={() => setEnabled(!enabled)}
      className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
    >
      {enabled ? <SunMedium className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  </div>
</nav>

      {/* Hero Section */}
<section id="home" className="h-screen flex flex-col justify-center items-center text-center relative px-6">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-zinc-900 z-10"></div>
  
  <motion.div 
    className="relative z-20"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    {/* Photo removed from here */}
    
    <motion.h1
      className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
        {PROFILE.name}
      </span>
    </motion.h1>
    
    <motion.p 
      className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 mb-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
    >
      {PROFILE.role} • {PROFILE.location}
    </motion.p>
    
    <motion.p 
      className="text-lg md:text-xl max-w-2xl mx-auto text-zinc-500 dark:text-zinc-400 mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 1 }}
    >
      {PROFILE.tagline}
    </motion.p>
    
    <motion.div 
      className="flex flex-wrap justify-center gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 1 }}
    >
      <motion.a 
        href={`mailto:${PROFILE.email}`}
        whileHover={{ y: -5 }}
        className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all"
      >
        <Mail className="w-4 h-4" /> Email Me
      </motion.a>
      
      <motion.a 
        href={PROFILE.resume}
        download
        whileHover={{ y: -5 }}
        className="inline-flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-700 px-5 py-3 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 shadow-lg hover:shadow-xl transition-all"
      >
        <Download className="w-4 h-4" /> Download CV
      </motion.a>
    </motion.div>
  </motion.div>
  
  <motion.div 
    className="absolute bottom-8 flex flex-col items-center text-sm text-zinc-500 dark:text-zinc-400 z-20"
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 2 }}
  >
    <ArrowDown className="w-6 h-6" />
    <span>Scroll to explore</span>
  </motion.div>
</section>

            {/* Experience */}
      <section id="experience" className="min-h-screen py-20 px-6 relative">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                <Calendar className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              Work Experience
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              My professional journey and the roles I've undertaken in the tech industry
            </p>
          </motion.div>
          
          {/* Centered timeline container */}
          <div className="relative">
            {/* Vertical timeline line - centered */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-400 transform -translate-x-1/2 hidden md:block"></div>
            
            {/* Experience items */}
            <div className="space-y-16">
              {EXPERIENCE.map((job, i) => (
                <motion.div 
                  key={i}
                  className="relative flex flex-col md:flex-row md:items-center justify-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  {/* Timeline dot - centered */}
                  <div className="absolute left-1/2 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-x-1/2 -translate-y-1/2 z-10 border-2 border-white dark:border-zinc-900 hidden md:block"></div>
                  
                  {/* Mobile dot */}
                  <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-x-1/2 -translate-y-1/2 z-10 border-2 border-white dark:border-zinc-900 md:hidden"></div>
                  
                  {/* Content container - centered */}
                  <div className="md:w-5/6 lg:w-2/3 ml-8 md:ml-0">
                    <div className="p-6 rounded-2xl bg-white dark:bg-zinc-800 shadow-lg hover:shadow-xl transition-shadow">
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{job.period}</span>
                      <h3 className="text-xl font-bold mt-2">{job.title}</h3>
                      <p className="text-zinc-600 dark:text-zinc-300 font-medium">{job.company}</p>
                      <p className="mt-3 text-zinc-600 dark:text-zinc-400">{job.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {job.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 rounded-full text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Skills */}
      <section id="skills" className="min-h-screen py-20 px-6 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                <Rocket className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              Skills & Expertise
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              The technologies and tools I use to bring ideas to life
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {Object.entries(SKILLS).map(([group, items], idx) => (
              <motion.div 
                key={group}
                variants={fadeIn}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-800 shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    {skillIcons[group]}
                  </div>
                  <h3 className="font-semibold text-lg">{group}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span 
                      key={s} 
                      className="px-3 py-1.5 rounded-full text-sm bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="min-h-screen py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
              <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
                <Trophy className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              </div>
              Featured Projects
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              A selection of my recent work and personal projects
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((p, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group rounded-2xl bg-white dark:bg-zinc-800 overflow-hidden shadow-lg hover:shadow-xl transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="h-20 bg-gradient-to-r from-blue-500 to-purple-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{p.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">{p.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 rounded-full text-xs bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={p.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="min-h-screen py-20 px-6 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              Awards & Certifications
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Recognition for my work and achievements in the field of technology
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {AWARDS.map((a, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-800 shadow-lg hover:shadow-xl transition-all"
                whileHover={{ y: -3 }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-lg">{a.title}</h3>
                  <span className="text-sm text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                    {a.year}
                  </span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 font-medium mb-2">{a.org}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-500">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="min-h-screen py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
              <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
                <School className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              Education
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              My academic background and qualifications
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-2">{EDUCATION.degree} — {EDUCATION.uni}</h3>
            <p className="text-lg opacity-90 mb-3">{EDUCATION.college}</p>
            <p className="mb-4 opacity-80">{EDUCATION.years} • {EDUCATION.location}</p>
            <p className="opacity-90">{EDUCATION.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="min-h-screen py-20 px-6 flex items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
              I'm always excited to collaborate on impactful projects or discuss new opportunities. Reach out and let's build something together.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <motion.a 
                href={`mailto:${PROFILE.email}`}
                whileHover={{ y: -5 }}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white dark:bg-zinc-800 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <span>{PROFILE.email}</span>
              </motion.a>
              
              <motion.a 
                href={`tel:${PROFILE.phone}`}
                whileHover={{ y: -5 }}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white dark:bg-zinc-800 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                  <Phone className="w-5 h-5" />
                </div>
                <span>{PROFILE.phone}</span>
              </motion.a>
            </div>
            
            <div className="flex justify-center gap-6">
              <motion.a 
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5, scale: 1.05 }}
                className="p-4 rounded-full bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              
              <motion.a 
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5, scale: 1.05 }}
                className="p-4 rounded-full bg-zinc-800 text-white shadow-lg hover:shadow-xl transition-all"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              
              <motion.a 
                href={PROFILE.resume}
                download
                whileHover={{ y: -5, scale: 1.05 }}
                className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <Download className="w-6 h-6" />
                <span>Resume</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 text-center text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-900">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
          <p className="mt-2 text-sm">Crafted with passion and React</p>
        </div>
      </footer>
    </div>
  );
}