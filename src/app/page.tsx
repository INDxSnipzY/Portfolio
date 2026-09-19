"use client";

import {
  ArrowDownToLine, ArrowRight, BriefcaseBusiness, Code2, Database,
  ExternalLink, Folder, GraduationCap, Mail, MapPin, Menu,
  Monitor, Rocket, Send, ShieldCheck, Sparkles, UserRound, X,
} from "lucide-react";
import { useState } from "react";

const skills = [
  { name: "JavaScript", icon: "JS", color: "#F7DF1E" },
  { name: "TypeScript", icon: "TS", color: "#3178C6" },
  { name: "React", icon: "⚛", color: "#61DAFB" },
  { name: "Next.js", icon: "N", color: "#FFFFFF" },
  { name: "Tailwind CSS", icon: "≋", color: "#38BDF8" },
  { name: "Node.js", icon: "⬡", color: "#68A063" },
  { name: "Python", icon: "Py", color: "#FFD43B" },
  { name: "PostgreSQL", icon: "PG", color: "#699AD0" },
  { name: "Git", icon: "◆", color: "#F05032" },
  { name: "GitHub", icon: "GH", color: "#FFFFFF" },
  { name: "VS Code", icon: "VS", color: "#38BDF8" },
  { name: "Redis", icon: "R", color: "#DC382D" },
];

const learning = [
  "Advanced React & Next.js",
  "Backend Development",
  "Database Design",
  "System Design Basics",
  "Building Real-World Projects",
];

const navItems = ["Home", "About", "Skills", "Projects", "Certifications", "Contact"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="portfolio">
      <aside className={`sidebar ${menuOpen ? "sidebar-open" : ""}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
          <X />
        </button>
        <div className="brand">
          <div className="brand-logo">AS</div>
          <div className="brand-name">AJAY <span>SAWLE</span></div>
        </div>
        <div className="sidebar-intro">
          <h2>Modern Developer<span>Portfolio</span></h2>
          <p>Building ideas into real-world experiences. Focused on clean code, better design and meaningful products.</p>
        </div>
        <div className="sidebar-features">
          {[
            ["Full-Stack Development", <Code2 key="1" />],
            ["Modern & Minimal Design", <ShieldCheck key="2" />],
            ["Fully Responsive", <Monitor key="3" />],
            ["Easy Customization", <Sparkles key="4" />],
            ["Smooth Animations", <Rocket key="5" />],
            ["Optimized Performance", <Database key="6" />],
            ["Open to Opportunities", <BriefcaseBusiness key="7" />],
          ].map(([feature, icon]) => (
            <div className="feature" key={String(feature)}>
              <span className="feature-icon">{icon}</span>{feature}
            </div>
          ))}
        </div>
        <button className="connect-button" onClick={() => scrollTo("contact")}>
          Let&apos;s Connect <ArrowRight size={17} />
        </button>
        <div className="social-links">
          <a href="https://github.com/INDxSnipzY" target="_blank" rel="noreferrer" aria-label="GitHub"></a>
          <a href="https://www.linkedin.com/in/ajay-sawle/" target="_blank" rel="noreferrer" aria-label="LinkedIn"> </a>
          <a href="mailto:"><Mail /></a>
        </div>
        <div className="sidebar-quote">
          <span>“</span><p>Discipline today, a better tomorrow.</p><small>— Ajay Sawle</small>
        </div>
        <div className="sidebar-waves" />
      </aside>

      <div className="main-content">
        <header className="topbar">
          <button className="mobile-menu" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu /></button>
          <button className="code-logo" onClick={() => scrollTo("home")} aria-label="Go home"><Code2 /></button>
          <nav>
            {navItems.map((item) => (
              <button key={item} onClick={() => scrollTo(item === "Home" ? "home" : item.toLowerCase())}>{item}</button>
            ))}
          </nav>
          <div className="availability"><span />Available for Opportunities</div>
        </header>

        <section className="hero panel" id="home">
          <div className="stars" />
          <div className="hero-content">
            <div className="hello-badge">👋 Hi, I&apos;m</div>
            <h1>Ajay <span>Sawle</span></h1>
            <h2>Aspiring Full-Stack Developer</h2>
            <p>First-year student at Dyal Singh College, University of Delhi, passionate about building modern web applications and learning through real-world projects.</p>
            <div className="hero-buttons">
              <button className="primary-button" onClick={() => scrollTo("projects")}>View My Work <ArrowRight size={18} /></button>
              <a className="secondary-button" href="/resume.pdf" download><ArrowDownToLine size={18} /> Download Resume</a>
            </div>
          </div>
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dots"><i /><i /><i /></div><span>ajay@developer:~</span>
            </div>
            <div className="terminal-body">
              <p className="terminal-command">$ whoami</p><p>Ajay Sawle</p>
              <p className="terminal-command">$ what_i_do</p>
              <p><span className="terminal-arrow">➜</span> Building modern web apps</p>
              <p><span className="terminal-arrow">➜</span> Learning new technologies</p>
              <p><span className="terminal-arrow">➜</span> Solving real-world problems</p>
              <p><span className="terminal-arrow">➜</span> Exploring opportunities</p>
              <p><span className="terminal-arrow">➜</span> Turning ideas into reality</p>
              <p className="terminal-command">$ <span className="cursor" /></p>
            </div>
          </div>
          <div className="hero-decoration">Better<br />Code<br />Brighter<br />Future</div>
        </section>

        <div className="dashboard-grid">
          <section className="panel skills-panel" id="skills">
            <div className="section-heading">
              <div><Code2 /><h3>Tech Stack & Skills</h3></div>
              <button onClick={() => scrollTo("about")}>View All <ArrowRight size={15} /></button>
            </div>
            <p className="section-subtitle">Tools and technologies I work with and keep learning.</p>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill-card" key={skill.name}>
                  <div className="skill-icon" style={{ color: skill.color }}>{skill.icon}</div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="panel project-panel" id="projects">
            <div className="section-heading">
              <div><Folder /><h3>Featured Project</h3></div>
              <span className="status-badge">In Development</span>
            </div>
            <div className="project-preview">
              <div className="project-preview-top"><span className="project-symbol">M</span><span className="project-preview-label">MEDICARE / HEALTHCARE</span></div>
              <div className="project-preview-content">
                <div>
                  <h4>Medicare</h4><p>Healthcare Information Platform</p>
                  <p className="project-description">A healthcare platform focused on disease information, symptoms, medical knowledge, and finding nearby doctors.</p>
                </div>
                <div className="medical-symbol"><span>+</span></div>
              </div>
              <div className="project-tags"><span>In Development</span><span>Next.js</span><span>TypeScript</span><span>Tailwind CSS</span></div>
            </div>
            <p className="project-note">A work in progress — more projects coming soon.</p>
          </section>

          <section className="panel github-panel">
            <div className="section-heading">
              <div><h3>GitHub</h3></div>
              <a href="https://github.com/INDxSnipzY" target="_blank" rel="noreferrer">View Profile <ExternalLink size={15} /></a>
            </div>
            <div className="github-stats">
              <div><span>Total Repositories</span><strong>0</strong><small>Just getting started!</small></div>
              <div className="contribution-grid" aria-label="Illustrative contribution grid">
                {Array.from({ length: 70 }).map((_, i) => <i key={i} />)}
              </div>
            </div>
          </section>

          <section className="panel learning-panel">
            <div className="section-heading"><div><Sparkles /><h3>Currently Learning</h3></div></div>
            <div className="learning-content">
              <ul>{learning.map((item) => <li key={item}><span>⌘</span>{item}</li>)}</ul>
              <blockquote><span>“</span>Consistency<br />compounds<br />everything.<small>— Keep Going</small></blockquote>
            </div>
          </section>

          <section className="panel about-panel" id="about">
            <div className="section-heading"><div><UserRound /><h3>About Me</h3></div></div>
            <p>I&apos;m a first-year student at Dyal Singh College, University of Delhi, passionate about web development, clean UI/UX, and problem-solving. I enjoy learning new technologies and building projects that create real value.</p>
            <div className="about-details">
              <div><GraduationCap /><span>Dyal Singh College</span><small>University of Delhi</small></div>
              <div><MapPin /><span>Delhi, India</span></div>
              <div><BriefcaseBusiness /><span>Former BGMI</span><small>Professional Player</small></div>
            </div>
          </section>

          <section className="panel certifications-panel" id="certifications">
            <div className="section-heading"><div><ShieldCheck /><h3>Certifications</h3></div></div>
            <div className="certificate-card">
              <div className="aws-logo">aws</div>
              <div><h4>AWS Certified</h4><p>Data Engineer</p><small>Amazon Web Services</small></div>
              <span className="certificate-dot" />
            </div>
          </section>

          <section className="panel contact-panel" id="contact">
            <div className="section-heading"><div><Send /><h3>Let&apos;s Connect</h3></div></div>
            <p>Open to internships, collaborations, and exciting opportunities.</p>
            <a className="contact-link" href="https://www.linkedin.com/in/ajay-sawle/" target="_blank" rel="noreferrer">linkedin.com/in/ajay-sawle</a>
            <a className="contact-link" href="https://github.com/INDxSnipzY" target="_blank" rel="noreferrer">github.com/INDxSnipzY</a>
            <a className="contact-button" href="mailto:">Send me a message <ArrowRight size={17} /></a>
          </section>
        </div>
        <footer><span>Designed & built by Ajay Sawle</span><span>Keep building. Keep learning. ✦</span></footer>
      </div>
    </main>
  );
}
