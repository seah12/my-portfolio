import { useState } from 'react'
import './App.css'
import profilePic from './assets/profile.jpg'
import resumePdf from './assets/Shaine-Nace-CV.pdf'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const currentYear = new Date().getFullYear()

  const handleFormSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! I will get back to you soon.')
    e.target.reset()
  }

  return (
    <>
      {/* NAVIGATION */}
      <header className="site-header">
        <nav className="nav container">
          <a className="logo" href="#home"><span></span></a>

          <button
            className="menu-toggle"
            id="menuToggle"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="navLinks"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`} id="navLinks">
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
            <li><a href="#certificates" onClick={() => setMenuOpen(false)}>Certificates</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* HOME / HERO SECTION */}
        <section className="hero container" id="home">
          <div className="hero-copy">
            <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>

            <h1>
              Hello, I&apos;m
              <span>Shaine Dando Nace</span>
            </h1>

            <h2>Information Technology Student</h2>

            <p className="intro">
              I am a BSIT student passionate about technology,
              web development, and creating digital solutions.
              I enjoy learning new skills and turning ideas into
              meaningful projects.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button">
                Explore My Work
              </a>

              <a href="#contact" className="button button-outline">
                Get In Touch
              </a>
            </div>
          </div>

          {/* PROFILE PICTURE */}
          <div className="hero-image">
            <div className="profile-frame">
             <img src={profilePic} alt="Portrait of Shaine Dando Nace" />
            </div>

            <p className="profile-caption">
              BSIT STUDENT · LSPU
            </p>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="section section-alt" id="about">
          <div className="container narrow">
            <p className="eyebrow">GET TO KNOW ME</p>

            <h2 className="section-title">About Me</h2>

            <p>
              I am currently a third-year Bachelor of Science in
              Information Technology student at Laguna State
              Polytechnic University – Siniloan Campus.
              I am developing my knowledge and skills in web
              development, database management, and other areas
              of information technology.
            </p>

            <p>
              I believe that learning is a continuous process.
              Through academic projects and personal development,
              I aim to improve my technical abilities and gain
              practical experience in the IT field.
            </p>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="section container" id="skills">
          <p className="eyebrow">WHAT I CAN DO</p>

          <h2 className="section-title">My Skills</h2>

          <div className="cards">
            <article className="card">
              <h3>Technical Skills</h3>

              <ul>
                <li>Digital Marketing</li>
                <li>Computer Literacy</li>
                <li>Microsoft Word and Excel</li>
                <li>Google Docs and Sheets</li>
                <li>Canva and Google Drive</li>
              </ul>
            </article>

            <article className="card">
              <h3>Professional Skills</h3>

              <ul>
                <li>Communication</li>
                <li>Teamwork and Collaboration</li>
                <li>Time Management</li>
                <li>Adaptability</li>
                <li>Problem Solving</li>
                <li>Willingness to Learn</li>
              </ul>
            </article>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="section section-alt" id="projects">
          <div className="container">
            <p className="eyebrow">MY RECENT WORK</p>

            <h2 className="section-title">Featured Projects</h2>

            <div className="cards">
              <article className="card project-card">
                <span className="tag">Academic Project</span>

                <h3>LSPU SOAR PORTAL</h3>

                <p>
                  A proposed web-based portal for student
                  organization activities and lost and found recovery.
                </p>

                <p className="project-tech">
                  Web Development · Recovery · Attendance
                </p>
              </article>

              <article className="card project-card">
                <span className="tag">Academic Project</span>

                <h3>BAO: A Web-based Online Store and Secondhand Marketplace</h3>

                <p>
                  A proposed project to help students buy and sell
                  their old uniforms at low cost.
                </p>

                <p className="project-tech">
                  System Proposal · Requirements Analysis
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section className="section container" id="education">
          <p className="eyebrow">MY BACKGROUND</p>

          <h2 className="section-title">Education</h2>

          <article className="card education-card">
            <span className="tag">Currently Studying</span>

            <h3>Bachelor of Science in Information Technology</h3>

            <p className="school">
              Laguna State Polytechnic University –
              Siniloan Campus
            </p>

            <p>Third-Year College Student</p>

            <p>Major in Service Management Program</p>
          </article>
        </section>

        {/* CERTIFICATES SECTION */}
        <section className="section section-alt" id="certificates">
          <div className="container">
            <p className="eyebrow">LEARNING AND GROWTH</p>

            <h2 className="section-title">Certificates &amp; Achievements</h2>

            <div className="card">
              <p>
                Critical Career Skills, Professional Communication
              </p>

              <p className="small-note">
                November 2026 Passer
              </p>
            </div>
          </div>
        </section>

        {/* RESUME SECTION */}
        <section className="section container" id="resume">
          <p className="eyebrow">MY QUALIFICATIONS</p>

          <h2 className="section-title">My Résumé</h2>

          <p>
            Interested in learning more about my educational
            background, skills, and qualifications?
            You can view or download my résumé below.
          </p>

          <a
            href={resumePdf} className="button" download="Shaine-Nace-CV.pdf">
            Download My CV
          </a>
        </section>

        {/* CONTACT SECTION */}
        <section className="section section-alt" id="contact">
          <div className="container narrow">
            <p className="eyebrow">LET&apos;S CONNECT</p>

            <h2 className="section-title">Get In Touch</h2>

            <p>
              I am open to learning opportunities,
              professional connections, and experiences
              that will help me grow in the IT industry.
            </p>

            <form id="contactForm" className="contact-form" onSubmit={handleFormSubmit}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />

              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />

              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message"
                required
              ></textarea>

              <button type="submit" className="button">
                Send a Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <a className="logo footer-logo" href="#home">
            Thankyou for visiting!<span></span>
          </a>

          <p>
            © <span id="year">{currentYear}</span>{' '}
            This portfolio is for educational purposes only.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App