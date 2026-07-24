import { motion } from "framer-motion";
import { useEffect } from "react";
import { HashRouter, Link, NavLink, Route, Routes, useLocation } from "react-router-dom";

type Project = {
  title: string;
  stack: string;
  description: string;
  highlights: string[];
  github: string;
  liveDemo?: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Distributed Deadlock Detector",
    stack: "Python, FastAPI, Distributed Systems",
    description:
      "Built APIs for process coordination, resource allocation tracking, and deadlock detection in distributed environments.",
    highlights: [
      "Developed FastAPI endpoints for process communication and resource ownership updates.",
      "Modeled distributed wait conditions and coordinated detection across nodes.",
      "Simulated realistic distributed coordination and concurrent resource workflows.",
    ],
    github: "https://github.com/Mueeza-517/Distributed-Deadlock-Detector",
    image: "/images/project-deadlock.jpg",
  },
  {
    title: "Question Paper Generator",
    stack: "HTML, CSS, JavaScript",
    description:
      "Developed a dynamic generator that creates unique question papers from a question bank with each request.",
    highlights: [
      "Implemented randomized generation logic to produce unique paper sets.",
      "Built a responsive and easy-to-use interface with vanilla JavaScript.",
      "Focused on teacher-friendly workflows for fast question paper creation.",
    ],
    github: "https://github.com/Musfirah-999/Question-Paper-Generator",
    liveDemo: "https://question-paper-generator-lac.vercel.app/",
    image: "/images/project-question-paper.jpg",
  },
  {
    title: "Klondike Solitaire Card Game",
    stack: "JavaScript, HTML5, CSS3, Data Structures",
    description:
      "Implemented complete gameplay logic including drag-and-drop, draw-3 mechanics, undo-redo, scoring, timer, and hints.",
    highlights: [
      "Built custom Stack, Queue, and LinkedList structures for deck and move logic.",
      "Implemented drag-and-drop mechanics with strict gameplay validation.",
      "Added gameplay quality features like undo-redo, scoring, timer, and hints.",
    ],
    github: "https://github.com/Musfirah-999/Solitare-Card-Game",
    liveDemo: "https://solitare-card-game.vercel.app/",
    image: "/images/project-solitaire.jpg",
  },
  {
    title: "Hardware Store Management System",
    stack: "C#, .NET Framework, WinForms, SQL Server",
    description:
      "Created a role-based desktop system for inventory, billing, sales, employee records, and reporting workflows.",
    highlights: [
      "Designed role-based access for manager, cashier, and salesman workflows.",
      "Implemented complete CRUD operations for inventory and billing.",
      "Connected reporting and discount logic to improve daily store operations.",
    ],
    github: "https://github.com/RanaZainUlAbiden/Hardware-Store-Management-System",
    image: "/images/project-hardware-store.jpg",
  },
  {
    title: "Pharmacy Management System",
    stack: "C#, .NET Framework, WinForms, SQL Server",
    description:
      "Designed a full CRUD-based pharmacy management platform with expiry tracking, billing automation, and secure role access.",
    highlights: [
      "Implemented secure role separation for admin, pharmacist, and cashier.",
      "Built medicine inventory workflows including expiry tracking and updates.",
      "Integrated automated billing and customer record management.",
    ],
    github: "https://github.com/Musfirah-999/Pharmacy-Management-System",
    image: "/images/project-pharmacy.jpg",
  },
];

const technicalSkills = [
  "Python",
  "C++",
  "C#",
  "JavaScript",
  "FastAPI",
  "React",
  "Node.js",
  "Express.js",
  "ASP.NET",
  "WinForms",
  "PostgreSQL",
  "SQL Server",
  "MongoDB",
  "Neo4j",
  "Git & GitHub",
];

const softSkills = [
  "Problem Solving",
  "Communication",
  "Time Management",
  "Teamwork",
  "Leadership",
  "OOP and DSA",
  "MVC Architecture",
];

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

const resumeFileUrl = `${import.meta.env.BASE_URL}resume/Musfirah-Zainab-Resume.pdf`;

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
}

function Header() {
  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-700/60 bg-slate-950/90 backdrop-blur"
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4 md:px-10">
        <Link to="/" className="text-lg font-semibold tracking-wide text-cyan-200">
          Musfirah Zainab
        </Link>
        <nav className="flex flex-wrap gap-5 text-sm text-slate-200/90">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition ${isActive ? "text-cyan-200" : "hover:text-cyan-200"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link
          to="/contact"
          className="rounded-md border border-cyan-300/80 px-4 py-2 text-xs font-semibold tracking-wide text-cyan-200 transition hover:bg-cyan-300 hover:text-slate-900"
        >
          Hire Me
        </Link>
        <a
          href={resumeFileUrl}
          download
          className="rounded-md bg-cyan-300 px-4 py-2 text-xs font-semibold tracking-wide text-slate-900 transition hover:bg-cyan-200"
        >
          Download Resume
        </a>
      </div>
    </motion.header>
  );
}

function HomePage() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        <motion.img
          src="/images/hero-workspace.jpg"
          alt="Software development workspace"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.08, opacity: 0.3 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-slate-950/60" />
        <motion.div
          className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-end px-6 pb-20 pt-28 md:px-10"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="max-w-3xl space-y-6">
            <p className="text-sm tracking-[0.3em] text-cyan-200/95">BACKEND DEVELOPER</p>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">Musfirah Zainab</h1>
            <p className="max-w-2xl text-base text-slate-100/90 md:text-lg">
              I build API-first products, data-driven systems, and reliable business software that
              solves real operational problems.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="rounded-md bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-200"
              >
                View Projects
              </Link>
              <Link
                to="/about"
                className="rounded-md border border-slate-300/70 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-200 hover:text-cyan-100"
              >
                About Me
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid gap-10 md:grid-cols-3"
        >
          <div className="md:col-span-2">
            <h2 className="text-3xl font-semibold text-white">What Recruiters Look For</h2>
            <p className="mt-4 max-w-3xl text-slate-300">
              Strong fundamentals in backend engineering, production-ready APIs, collaborative Git
              workflows, and the ability to own complete features from logic design to deployment.
            </p>
            <p className="mt-4 max-w-3xl text-slate-400">
              I bring a balanced profile: backend problem-solving, database-driven systems, and the
              discipline to ship reliable software with clear documentation and clean code structure.
            </p>
          </div>
          <div className="space-y-2 text-slate-300">
            <p className="text-sm font-semibold tracking-wide text-cyan-200">CURRENT PROFILE</p>
            <p className="text-white">BS Computer Science, UET Lahore</p>
            <p>CGPA: 3.7 / 4.0</p>
            <p>Expected Graduation: 2028</p>
          </div>
        </motion.div>
      </section>

      <section className="border-y border-slate-800/80 bg-slate-900/50">
        <motion.div
          className="mx-auto max-w-6xl px-6 py-20 md:px-10"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-semibold text-white">Why I Am a Strong Intern Candidate</h2>
          <p className="mt-4 max-w-4xl text-slate-300">
            I have delivered projects in distributed systems, desktop business software, and frontend
            interaction-heavy products. This range helps me adapt quickly, collaborate effectively,
            and contribute to real product teams from day one.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl font-semibold text-white">About Me</h2>
          <p className="mt-4 text-slate-300">
            Backend developer focused on API-first systems, database-driven workflows, and practical
            software that supports real users in education, healthcare, and operations.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
          >
            Read full About page {"->"}
          </Link>
        </motion.div>
      </section>

      <section className="border-y border-slate-800/80 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-semibold text-white">Projects</h2>
            <p className="mt-3 max-w-3xl text-slate-300">
              A snapshot of my best work with GitHub repositories and live demos where available.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-10">
            {projects.map((project, index) => (
              <motion.article
                key={`home-${project.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="grid gap-6 border-t border-slate-800 pt-8 md:grid-cols-12"
              >
                <div className="md:col-span-5">
                  <img
                    src={project.image}
                    alt={`${project.title} cover`}
                    className="h-full min-h-44 w-full rounded-md object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="md:col-span-7">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-2 text-sm text-cyan-200">{project.stack}</p>
                  <p className="mt-3 text-slate-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-100 transition hover:text-cyan-200"
                    >
                      View Repository {"->"}
                    </a>
                    {project.liveDemo ? (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
                      >
                        Live Demo {"->"}
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <Link
            to="/projects"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
          >
            Open full Projects page {"->"}
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid gap-12 md:grid-cols-2"
        >
          <div>
            <h2 className="text-3xl font-semibold text-white">Skills</h2>
            <ul className="mt-6 grid grid-cols-1 gap-3 text-slate-300 sm:grid-cols-2">
              {technicalSkills.map((skill) => (
                <li key={`home-skill-${skill}`} className="border-b border-slate-800 pb-2">
                  {skill}
                </li>
              ))}
            </ul>
            <Link
              to="/skills"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
            >
              Open full Skills page {"->"}
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white">Contact</h2>
            <p className="mt-4 text-slate-300">
              Open to internships and backend software opportunities.
            </p>
            <div className="mt-6 space-y-3 text-slate-200">
              <a className="block transition hover:text-cyan-200" href="mailto:musfirahzainab01@gmail.com">
                musfirahzainab01@gmail.com
              </a>
              <a className="block transition hover:text-cyan-200" href="tel:+923279603395">
                +92 327 9603395
              </a>
              <a
                href={resumeFileUrl}
                download
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
              >
                Download Resume {"->"}
              </a>
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
            >
              Open full Contact page {"->"}
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <section className="mx-auto min-h-screen w-full max-w-6xl px-6 py-28 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl"
      >
        <h1 className="text-4xl font-bold text-white md:text-5xl">About Musfirah</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          I am a Backend Developer and Computer Science undergraduate focused on building reliable,
          maintainable, and user-focused software. My work combines API design, data modeling,
          system logic, and practical UI understanding so products stay stable as they scale.
        </p>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          I have built both desktop and web applications across healthcare, retail operations,
          educational technology, and algorithmic game logic. I enjoy turning complex requirements
          into clean architecture and delivering solutions that teams can confidently extend.
        </p>
      </motion.div>

      <motion.div
        className="mt-16 grid gap-12 md:grid-cols-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <h2 className="text-2xl font-semibold text-white">How I Work</h2>
          <p className="mt-5 text-base leading-7 text-slate-300">
            I start by understanding the problem and expected workflow, then design modular logic,
            database structure, and API contracts before implementation. I keep code readable,
            test flow paths manually, and use Git for clear iterative progress.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white">Education</h2>
          <p className="mt-5 text-base leading-7 text-slate-300">
            University of Engineering and Technology (UET), Lahore
          </p>
          <p className="text-base leading-7 text-slate-300">Bachelor of Science in Computer Science</p>
          <p className="text-base leading-7 text-slate-300">CGPA: 3.7 / 4.0</p>
          <p className="text-base leading-7 text-slate-300">Expected Graduation: 2028</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white">Career Focus</h2>
          <p className="mt-5 text-base leading-7 text-slate-300">
            Currently focused on backend internships where I can contribute to API development,
            database-backed services, and scalable software architecture while continuing to grow in
            system design and engineering best practices.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white">Communication</h2>
          <p className="mt-5 text-base leading-7 text-slate-300">English: Professional Working Proficiency</p>
          <p className="text-base leading-7 text-slate-300">Urdu: Native</p>
          <p className="text-base leading-7 text-slate-300">Saraiki: Native</p>
        </div>
      </motion.div>
    </section>
  );
}

function ProjectsPage() {
  return (
    <section className="mx-auto min-h-screen w-full max-w-6xl px-6 py-28 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold text-white md:text-5xl">Featured Projects</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Real projects covering distributed systems, automation, desktop business tools, and
          frontend game logic.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-10">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="grid gap-6 border-t border-slate-800 pt-8 md:grid-cols-12"
          >
            <div className="md:col-span-5">
              <img
                src={project.image}
                alt={`${project.title} cover`}
                className="h-full min-h-52 w-full rounded-md object-cover"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-7">
              <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
              <p className="mt-2 text-sm text-cyan-200">{project.stack}</p>
              <p className="mt-4 text-slate-300">{project.description}</p>
              <ul className="mt-4 space-y-2 text-slate-300">
                {project.highlights.map((point) => (
                  <li key={point} className="text-sm leading-6">
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-100 transition hover:text-cyan-200"
                >
                  View Repository {"->"}
                </a>
                {project.liveDemo ? (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
                  >
                    Live Demo {"->"}
                  </a>
                ) : null}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function SkillsPage() {
  return (
    <section className="mx-auto min-h-screen w-full max-w-6xl px-6 py-28 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="grid gap-14 md:grid-cols-2"
      >
        <div>
          <h1 className="text-4xl font-bold text-white md:text-5xl">Technical Skills</h1>
          <ul className="mt-8 grid grid-cols-1 gap-3 text-slate-300 sm:grid-cols-2">
            {technicalSkills.map((skill) => (
              <li key={skill} className="border-b border-slate-800 pb-2">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-white">Core Strengths</h2>
          <ul className="mt-8 space-y-3 text-slate-300">
            {softSkills.map((skill) => (
              <li key={skill} className="border-b border-slate-800 pb-2">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="mx-auto min-h-screen w-full max-w-6xl px-6 py-28 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl font-bold text-white md:text-5xl">Contact</h1>
        <p className="mt-4 text-slate-300">
          Open to internships, backend development roles, and collaboration opportunities.
        </p>
        <div className="mt-10 space-y-4 text-lg text-slate-200">
          <a className="block transition hover:text-cyan-200" href="mailto:musfirahzainab01@gmail.com">
            musfirahzainab01@gmail.com
          </a>
          <a className="block transition hover:text-cyan-200" href="tel:+923279603395">
            +92 327 9603395
          </a>
          <a
            className="block transition hover:text-cyan-200"
            href="https://linkedin.com/in/hafiza-musfirah"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/hafiza-musfirah
          </a>
          <a
            className="block transition hover:text-cyan-200"
            href="https://github.com/Musfirah-999"
            target="_blank"
            rel="noreferrer"
          >
            github.com/Musfirah-999
          </a>
          <a
            href={resumeFileUrl}
            download
            className="block font-semibold text-cyan-200 transition hover:text-cyan-100"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      <motion.p
        className="mt-16 text-sm text-slate-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6 }}
      >
        Based in Lahore, Pakistan. Available for remote collaboration and internship opportunities.
      </motion.p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-sm text-slate-400 md:px-10">
        <p>Musfirah Zainab Portfolio</p>
        <div className="flex gap-5">
          <a href="https://github.com/Musfirah-999" target="_blank" rel="noreferrer" className="transition hover:text-cyan-200">
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/hafiza-musfirah"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-cyan-200"
          >
            LinkedIn
          </a>
          <a href="mailto:musfirahzainab01@gmail.com" className="transition hover:text-cyan-200">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
