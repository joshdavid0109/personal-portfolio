import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <main id="home" className="main">
        <section
          className="hero"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(10,13,20,1) 0%, rgba(10,13,20,0) 40%),   /* fade left */
              linear-gradient(to left, rgba(10,13,20,1) 0%, rgba(10,13,20,0) 40%),   /* fade right */
              linear-gradient(to bottom, rgba(10,13,20,1) 0%, rgba(10,13,20,0) 40%), /* fade top */
              linear-gradient(to top, rgba(10,13,20,1) 0%, rgba(10,13,20,0) 40%),    /* stronger fade bottom */
              url('/profile.jpg')
            `,
            backgroundSize: 'auto, auto, auto, auto, 350px auto',
            backgroundPosition: 'center, center, center, center, calc(100% - 350px)', // crops bottom a bit
            backgroundRepeat: 'no-repeat',
            minHeight: '68vh',
          }}
        >
          <div className="container hero__inner">
            <div className="hero__text">
              <p className="eyebrow">Hello, I’m</p>
              <h1 className="hero__title">Joshua Daniel David</h1>
              <p className="hero__subtitle">Computer Science Graduate | Magna Cum Laude</p>

              <div className="social-icons">
                <a
                  className="icon-btn"
                  href="https://www.linkedin.com/in/joshuadanieldavid"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0zM7 20.452H3.9V9H7v11.452zM5.337 7.433c-1.144 0-2.069-.927-2.069-2.071 0-1.144.925-2.069 2.069-2.069 1.144 0 2.069.925 2.069 2.069 0 1.144-.925 2.071-2.069 2.071zM20.447 20.452h-3.554V14.89c0-1.327-.025-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.943v5.656H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.602 0 4.267 2.371 4.267 5.455v6.288z"/>
                  </svg>
                </a>
                <a
                  className="icon-btn"
                  href="https://github.com/joshdavid0109"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.79 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.87 1.25 1.87 1.25 1.08 1.86 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.47-1.33-5.47-5.9 0-1.3.47-2.36 1.24-3.19-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.22.96-.27 1.98-.41 3-.41s2.04.14 3 .41c2.29-1.54 3.3-1.22 3.3-1.22.66 1.66.24 2.88.12 3.18.77.83 1.24 1.89 1.24 3.19 0 4.58-2.81 5.59-5.49 5.89.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.21.7.82.58C20.56 21.79 24 17.3 24 12 24 5.37 18.63 0 12 0z"/>
                  </svg>
                </a>
              </div>

              <p className="hero__blurb">
                Full-stack developer specializing in cross-platform apps and cloud-based systems. Experienced in React Native,
                Laravel, and cloud platforms (Supabase, Firebase) with a strong background in AI/NLP. Proven record in building
                scalable, mobile-first solutions and presenting research at national and international tech conferences.
              </p>
              <div className="cta-group">
                <a href="/resume.pdf" className="btn btn--ghost" target="_blank" rel="noreferrer">Download CV</a>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <h2 className="section__title">Featured Projects</h2>
            <div className="grid">
              <article className="card">
                <div className="card__body">
                  <h3 className="card__title">D'Xplorer Travel & Tours App</h3>
                  <p className="card__text">React Native, Supabase, Tailwind — Cross-platform booking app with authentication, booking workflows, and real-time updates. Built admin panel (React, Tailwind) for managing users, bookings, and content.</p>
                </div>
              </article>

              <article className="card">
                <div className="card__body">
                  <h3 className="card__title">Blue Phoenix Reviewer</h3>
                  <p className="card__text">Android Studio/Java, Firebase — Bar Exam preparation platform with responsive UI/UX, practice questions, progress tracking, and push notifications. Used Firestore, Auth, Cloud Storage, and FCM. Includes a React web CMS/admin panel.</p>
                </div>
              </article>

              <article className="card">
                <div className="card__body">
                  <h3 className="card__title">Ilocano Language Learning App</h3>
                  <p className="card__text">Flask, Bootstrap, Seq2Seq NLP — Adaptive gamified learning using a sequence-to-sequence model for translation tasks.</p>
                </div>
              </article>

              <article className="card">
                <div className="card__body">
                  <h3 className="card__title">Cloud-based RoBERTa SDG Assessment Tool</h3>
                  <p className="card__text">NLP, RoBERTa — ML model deployed on Google Cloud to assess HEI documents for SDG compliance. Integrated with a web app for document analysis.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="skills" className="section section--alt">
          <div className="container">
            <h2 className="section__title">Skills</h2>
            <ul className="chip-list" aria-label="Technical skills">
              <li className="chip">Java</li>
              <li className="chip">JavaScript</li>
              <li className="chip">TypeScript</li>
              <li className="chip">Python</li>
              <li className="chip">PHP</li>
              <li className="chip">Kotlin</li>
              <li className="chip">React</li>
              <li className="chip">React Native</li>
              <li className="chip">Laravel</li>
              <li className="chip">Flask</li>
              <li className="chip">Bootstrap</li>
              <li className="chip">Tailwind</li>
              <li className="chip">PostgreSQL</li>
              <li className="chip">Firebase</li>
              <li className="chip">Supabase</li>
              <li className="chip">MySQL</li>
              <li className="chip">Git</li>
              <li className="chip">Figma</li>
              <li className="chip">Docker</li>
              <li className="chip">Postman</li>
              <li className="chip">VS Code</li>
              <li className="chip">REST APIs</li>
              <li className="chip">RLS Policies</li>
              <li className="chip">NLP</li>
              <li className="chip">Firebase Cloud Messaging</li>
            </ul>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <h2 className="section__title">Experience</h2>
            <div className="card">
              <div className="card__body">
                <h3 className="card__title">Web Developer / IT Technician — Philippine Military Academy</h3>
                <p className="card__text">Fort Del Pilar, Baguio City — June 2024 - July 2024</p>
                <p className="card__text">Developed the cadet management (CRUD of cadets, subjects, and courses) using Laravel and AJAX, reducing manual entry tasks by 50%. Supported 100+ users by maintaining academy-wide network and hardware infrastructure.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section section--alt">
          <div className="container">
            <h2 className="section__title">Education</h2>
            <div className="card">
              <div className="card__body">
                <h3 className="card__title">Saint Louis University — BS in Computer Science</h3>
                <p className="card__text">Magna Cum Laude — August 2021 - June 2025</p>
              </div>
            </div>
            <div className="card" style={{ marginTop: 12 }}>
              <div className="card__body">
                <h3 className="card__title">University of the Cordilleras — STEM</h3>
                <p className="card__text">Graduated with High Honors — August 2019 - May 2021</p>
              </div>
            </div>
          </div>
        </section>

        <section id="research" className="section">
          <div className="container">
            <h2 className="section__title">Research & Presentations</h2>
            <div className="card">
              <div className="card__body">
                <h3 className="card__title">25th Philippine Computing Science Congress</h3>
                <p className="card__text">University of the Cordilleras, Baguio City, Philippines — May 8 - 10, 2025</p>
                <p className="card__text">Presented research on cloud-based SDG classification using RoBERTa.</p>
              </div>
            </div>
            <div className="card" style={{ marginTop: 12 }}>
              <div className="card__body">
                <h3 className="card__title">2025 IEEE Symposium on Computers & Informatics (ISCI2025)</h3>
                <p className="card__text">Kuala Lumpur, Malaysia — August 9, 2025</p>
                <p className="card__text">Co-authored and presented on cloud-based SDG classification using RoBERTa; developed a web app integrating the NLP model with cloud services.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="certifications" className="section section--alt">
          <div className="container">
            <h2 className="section__title">Certifications</h2>
            <div className="card">
              <div className="card__body">
                <h3 className="card__title">AI - Natural Language Processing Capacity Program</h3>
                <p className="card__text">National University — March 7, 2024</p>
              </div>
            </div>
            <div className="card" style={{ marginTop: 12 }}>
              <div className="card__body">
                <h3 className="card__title">Information and Communication Technology Specialist — Proficiency in Computer Programming</h3>
                <p className="card__text">Department of Information and Communications Technology — February 2025</p>
              </div>
            </div>
            <div className="card" style={{ marginTop: 12 }}>
              <div className="card__body">
                <h3 className="card__title">12th TOPCIT Philippines</h3>
                <p className="card__text">Institute for Information & Communications Technology Promotion — July 2025</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section section--tight">
          <div className="container contact">
            <h2 className="section__title">Get In Touch</h2>
            <p>Baguio City, Philippines</p>
            <p><a className="btn" href="tel:+639608360277">+63 960 836 0277</a></p>
            <a className="btn btn--primary" href="mailto:joshdan.david@gmail.com">joshdan.david@gmail.com</a>
          </div>
        </section>
      </main>

      {/* footer removed */}
    </div>
  );
}

export default App;
