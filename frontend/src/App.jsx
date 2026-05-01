import { useState, useRef, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiCode, FiDatabase, FiServer, FiActivity, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [dragConstraints, setDragConstraints] = useState({ right: 0, left: 0 });
  const galleryRef = useRef(null);

  useEffect(() => {
    if (galleryRef.current) {
      // Calculate how far the gallery can be dragged based on its scroll width vs container width
      const scrollWidth = galleryRef.current.scrollWidth;
      const clientWidth = galleryRef.current.clientWidth;
      setDragConstraints({ right: 0, left: -scrollWidth + clientWidth - 40 }); // -40 for padding buffer
    }
  }, []);

  const skills = [
    {
      category: "Programming Languages",
      icon: <FiCode className="skill-icon" />,
      items: ["Python", "Java", "JavaScript (ES6+)"]
    },
    {
      category: "Frontend Development",
      icon: <FiActivity className="skill-icon" />,
      items: ["React 19", "Next.js 15", "Tailwind CSS"]
    },
    {
      category: "Database & Backend",
      icon: <FiDatabase className="skill-icon" />,
      items: ["Spring Boot 3.2", "SQL Server (T-SQL)", "PostgreSQL", "MongoDB", "Medallion Architecture"]
    },
    {
      category: "Data Analysis",
      icon: <FiActivity className="skill-icon" />,
      items: ["Exploratory Data Analysis (EDA)", "SQL Joins & Aggregations", "Window Functions & CTEs", "Tableau & Power BI", "Apache Superset"]
    },
    {
      category: "Data Science",
      icon: <FiActivity className="skill-icon" />,
      items: ["Pandas & NumPy", "Scikit-learn", "Temporal Analysis", "Geographic Analysis", "ML Pipelines"]
    },
    {
      category: "Data Engineering",
      icon: <FiServer className="skill-icon" />,
      items: ["ETL & ELT Pipelines", "Apache Airflow", "dbt", "Docker Compose", "Git & Linux"]
    }
  ];

  const projects = [
    {
      title: "Sales Data Warehouse BI",
      description: "Faced with fragmented sales data from multiple ERP and CRM sources, I designed a modern SQL Server data warehouse to consolidate data into a unified analytical model. The project resolved critical data quality issues and inconsistencies, providing a 'single source of truth' for strategic business reporting.",
      techStack: {
        "Warehouse": "SQL Server (T-SQL)",
        "Integration": "Data Cleaning & Consolidation (ERP/CRM sources)",
        "Reporting": "SQL-based analytical queries"
      },
      github: "https://github.com/pooja-456/sales-data-warehouse-bi.git"
    },
    {
      title: "Sales Data Analytics",
      description: "To bridge the gap between raw data and actionable insights, I developed a structured analytical flow using advanced SQL. Moving from Exploratory Data Analysis (EDA) to cumulative performance and change-over-time analysis, the project identifies hidden sales trends and provides metrics for informed decision-making.",
      techStack: {
        "Analysis": "EDA, Change-over-Time, Cumulative Performance Analysis",
        "Concepts": "Aggregations, Window Functions (LAG, SUM OVER), CTEs",
        "Purpose": "Business reporting and decision-making insights"
      },
      github: "https://github.com/pooja-456/sales-data-analytics.git"
    },
    {
      title: "Crime Pattern Analysis",
      description: "Addressing the complexity of Indian crime statistics (2020-2024), this Data Science pipeline provides actionable intelligence through wrangling and modeling. I built an interactive 22-visual Power BI dashboard to track victim demographics, temporal distributions, and law enforcement efficiency metrics.",
      techStack: {
        "Pipeline": "Python (Pandas, NumPy, Scikit-learn, ML Pipelines)",
        "Visualization": "Power BI (Executive Overview, Heatmaps, Performance KPIs)",
        "Analysis": "Temporal & Geographic Trends, Victim Demographics"
      },
      github: "https://github.com/pooja-456/Crime-Pattern-Analysis-Data-Science-.git"
    },
    {
      title: "Weather ELT Platform",
      description: "Designed to solve the challenge of monitoring real-time weather at scale, this fully containerized pipeline aggregates and transforms data for Kovilpatti. Using Airflow for 5-minute orchestration and dbt for modeling, the project delivers near real-time insights through an auto-refreshing analytical dashboard.",
      techStack: {
        "Ingestion": "Python (OpenWeatherMap API)",
        "Orchestration": "Apache Airflow (5-minute scheduling)",
        "Warehouse": "PostgreSQL, dbt (SQL Transformation Models)",
        "Infrastructure": "Docker Compose, WSL2",
        "Visualization": "Apache Superset (5-minute auto-refresh dashboard)"
      },
      github: "https://github.com/pooja-456/weather-data-pipeline.git"
    },
    {
      title: "Online Examination System",
      description: "To modernize the academic testing experience, I built a secure enterprise-grade portal for managing online exams. The system features JWT-based authentication and a bulk data processing engine (Excel/CSV) to handle thousands of questions efficiently, ensuring a robust and scalable testing environment.",
      techStack: {
        "Backend": "Spring Boot 3.2 (Java 17), Spring Security, JWT",
        "Frontend": "Next.js 15 (React 19), Tailwind CSS, Zustand",
        "Database": "MongoDB, Apache POI (Excel), OpenCSV",
        "Infrastructure": "Docker containerization"
      },
      github: "https://github.com/pooja-456/Online-Examination-System.git"
    }
  ];

  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const certs = [
    { 
      name: "Multidimensional Data Modeling", 
      issuer: "Infosys",
      image: "/certificates/multidimensional-data-modeling.jpeg" 
    },
    { 
      name: "Data Analytics Job Simulation", 
      issuer: "Deloitte (Forage)",
      image: "/certificates/certificate.jpg" 
    },
    { 
      name: "13 Python Data Science Real World Hands-on Projects", 
      issuer: "Udemy",
      image: "/certificates/13 data science projects .jpg" 
    },
    { 
      name: "Insight-Driven Decisions with Power BI", 
      issuer: "NEC Dept. of IT",
      image: "/certificates/power bi .jpeg" 
    }
  ];

  const emailAddress = "2312033@nec.edu.in";
  
  // Custom function to handle email clicks properly in case mailto doesn't work out of the box
  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailAddress);
    alert(`Email address copied to clipboard: ${emailAddress}`);
    // Opens Gmail compose window in a new tab directly
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:+919360582247`;
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="container nav-container">
          <div className="nav-brand-quote">
            "Without data, you're just another person with an opinion." — W. Edwards Deming
          </div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="container hero" id="home">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="hero-grid"
          >
            <motion.div variants={fadeInUp} className="hero-image-container">
              <div className="hero-image-wrapper">
                <img 
                  src="/profile.jpg" 
                  alt="Pooja M" 
                  className="hero-image"
                />
                <div className="hero-image-blob"></div>
              </div>
            </motion.div>

            <div className="hero-content">
              <motion.div variants={fadeInUp} className="hero-subtitle">Software Engineer | Data Engineer</motion.div>
              <motion.h1 variants={fadeInUp} className="hero-title">
                Hi, I'm Pooja M<br />
                <span style={{ color: "var(--primary)" }}>A Data Enthusiast</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="hero-description">
                I am an aspiring Data Professional from Kovilpatti, Tamil Nadu, with a deep passion for bridging the gap between robust Software Engineering and scalable Data Solutions. With hands-on experience in building full-stack applications and end-to-end ELT pipelines, I specialize in transforming complex, raw data into high-performance, analytics-ready datasets and actionable business intelligence.
              </motion.p>
              <motion.div variants={fadeInUp} className="hero-cta">
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#projects" className="btn btn-primary">View My Work</motion.a>
                <motion.button onClick={handleEmailClick} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn btn-outline">Contact Me</motion.button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* About & Skills Section */}
        <section className="section section-bg" id="skills">
          <div className="container">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="section-title">Technical Expertise</motion.h2>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer} className="skills-container">
              {skills.map((skill, index) => (
                <motion.div variants={fadeInUp} className="skill-card" key={index}>
                  <h3 className="skill-title">
                    {skill.icon}
                    {skill.category}
                  </h3>
                  <ul className="skill-list">
                    {skill.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section (Horizontal Drag-to-Scroll) */}
        <section className="section" id="projects">
          <div className="container" style={{ paddingBottom: 0 }}>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="section-title">Featured Projects</motion.h2>
          </div>
          
          <div className="projects-gallery-wrapper">
            <motion.div ref={galleryRef} className="projects-gallery-container">
              <motion.div 
                className="projects-gallery"
                drag="x"
                dragConstraints={dragConstraints}
                whileTap={{ cursor: "grabbing" }}
              >
                {projects.map((project, index) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className={`project-card-gallery ${flippedIndex === index ? 'flipped' : ''}`}
                    key={index}
                    onClick={() => handleFlip(index)}
                  >
                    <div className="project-card-inner">
                      {/* Front Side */}
                      <div className="project-card-front">
                        <div className="project-content">
                          <h3 className="project-title">{project.title}</h3>
                          <p className="project-desc">{project.description}</p>
                        </div>
                      </div>

                      {/* Back Side */}
                      <div className="project-card-back">
                        <div className="project-content">
                          <h3 className="project-title">Tech Stack</h3>
                          <div className="tech-details">
                            {Object.entries(project.techStack).map(([key, value]) => (
                              <div key={key} className="tech-item">
                                <span className="tech-label">{key}:</span>
                                <span className="tech-value">{value}</span>
                              </div>
                            ))}
                          </div>
                          <div className="project-links" style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" onClick={e => e.stopPropagation()}>
                              <FiGithub /> Source Code
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="section section-bg" id="certifications">
          <div className="container" style={{ maxWidth: "1000px" }}>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="section-title">Certifications</motion.h2>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer} className="cert-list">
              {certs.map((cert, index) => (
                <motion.div variants={fadeInUp} className="cert-item" key={index} onClick={() => setSelectedCert(cert)}>
                  <div className="cert-image-container">
                    <img src={cert.image} alt={`${cert.name} Certificate`} className="cert-image" />
                  </div>
                  <div className="cert-info">
                    <div className="cert-name">{cert.name}</div>
                    <div className="cert-issuer">{cert.issuer}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Full Screen Image Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="modal-overlay"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="modal-content"
                onClick={e => e.stopPropagation()} // Prevent closing when clicking the image itself
              >
                <button className="modal-close" onClick={() => setSelectedCert(null)}>
                  <FiX />
                </button>
                <img src={selectedCert.image} alt={selectedCert.name} className="modal-image" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Section */}
        <section className="section" id="contact">
          <div className="container" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="section-title" style={{ textAlign: "center", display: "block", margin: "0 auto 4rem" }}>Get In Touch</motion.h2>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="contact-grid">
              <motion.div variants={fadeInUp} className="contact-card">
                <FiMapPin className="contact-icon" />
                <div className="contact-info">Kovilpatti, Tamil Nadu</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="contact-card">
                <button onClick={handleEmailClick} className="contact-btn">
                  <FiMail className="contact-icon" />
                  <div className="contact-info">Email Me</div>
                </button>
              </motion.div>
              <motion.div variants={fadeInUp} className="contact-card">
                <button onClick={handlePhoneClick} className="contact-btn">
                  <FiPhone className="contact-icon" />
                  <div className="contact-info">+91 93605 82247</div>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-name">Pooja M.</div>
            <div className="footer-title">Software Engineer | Data Engineer</div>
            <div className="social-links">
              <a href="https://github.com/pooja-456" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
              <a href="https://www.linkedin.com/in/pooja-m-122243322/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
              <button onClick={handleEmailClick} aria-label="Email"><FiMail /></button>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} Pooja M. All rights reserved. Built with React.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
