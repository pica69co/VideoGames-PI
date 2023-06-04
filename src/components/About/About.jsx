import React from "react";
import github from '../../images/github2.png'
import linkedin from '../../images/linkedin.png'
import postgre from '../../images/postgre.png'
import facebook from '../../images/facebook.png'
import express from '../../images/express.png'
import react from '../../images/react.png'
import node from '../../images/node.png'
import css from '../../images/css.png'
import { Link } from "react-router-dom";
import styles from "../About/About.module.css";

function About() {
       //About me: portada estilo portfolio. 
      return (
        <div className={styles.aboutBody}>
          {/*START NAV*/}
          <nav className={styles.nav}>
              <div className={styles.addGame}>
                <Link to={`/videogames`} className={styles.navLink}>
                  <button className={styles.boton}>Home</button>
                </Link>
              </div >
            {/* <ul className={styles.navList}>
              <li>About</li>
              <li>Work</li>
              <li>Contact</li>
            </ul> */}
          </nav>
          {/*END NAV*/}
          {/*START WELCOME SECTION*/}
          <section className={styles.welcomeSection}>
            <h1><span className={styles.spanGreeting}>Hey! I am</span> Oskar</h1>
            <p>a FullStack web developer</p>
          </section>
          {/*END WELCOME SECTION*/}
          {/*START PROJECTS SECTION*/}
          <section className={styles.projectSection}>
            <h2 className={styles.projectSectionHeader}>These are some of my projects</h2>
            <div className={styles.projectGrid}>
                       
              <p className={styles.projectTitle}> <span className={styles.code}>&lt;</span>MuscleLab Gym-app<strong></strong><span className={styles.code}>&#47;&gt;</span></p>
              <p className={styles.projectTitle}> <span className={styles.code}>&lt;</span>Rick and Morty App-Wiki<span className={styles.code}>&#47;&gt;</span></p>
              <p className={styles.projectTitle}> <span className={styles.code}>&lt;</span>Emplyee Management System-App<span className={styles.code}>&#47;&gt;</span></p>
            </div>
          </section>
          {/*END PROJECTS SECTION */}

          {/*START CONTACT SECTION*/}
          {/* <section className={styles.contactSection}>
            <div className={styles.contactSectionHeader}>
              <h2>Let's work together...</h2>
              <p></p>
            </div>
            <div className={styles.contactLinks}>
              <i>Call me</i>
            </div>
          </section> */}
          {/*END CONTACT SECTION*/}
          {/*START FOOTER SECTION*/}
          <footer>
              {/* <p>**This is my portfolio under construction**</p>
              <p>&copy; Oscar Arrieta R /2023</p> */}
              



    <div className='container-fluid '>
        <div className="row p-3 pb-2 bg-dark text-white">
            <div className="col-xs-12 col-md-6 col-lg-3 link-offset-2 link-underline link-underline-opacity-0">
                <p className='h2 text-white'>Oscar Arrieta R.</p>
                <div className="mb-2">
                    <div className="text-secondary text-start text-decoration-none">FullStackDeveloper</div>
                </div>
                <div className="mb-2">
                    <div className="text-secondary text-start text-decoration-none">oscarwarrieta@gmail.com</div>
                </div>
            </div>

            <div className="col-xs-12 col-md-6 col-lg-3">
                <p className='h5  mb-3 text-white'>Tecnologias</p>
                <div className="mb-2 ">
                    <div className="text-secondary text-start text-decoration-none">Postgresql <img className={styles.Icon} src={postgre} alt='Icono de postgre' /></div>
                </div>
                <div className="mb-2">
                    <div className="text-secondary text-start text-decoration-none">Express <img className={styles.Icon} src={express} alt='Icono de express' /></div>
                </div>
                <div className="mb-2">
                    <div className="text-secondary text-start text-decoration-none">React Js <img className={styles.Icon} src={react} alt='Icono de react' /></div>
                </div>
                <div className="mb-2">
                    <div className="text-secondary text-start text-decoration-none">Node <img className={styles.Icon} src={node} alt='Icono de node' /></div>
                </div>
                <div className="mb-2">
                    <div className="text-secondary text-start text-decoration-none">Html, css <img className={styles.Icon} src={css} alt='Icono de css' /></div>
                </div>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-3">
                <p className='h5 mb-3 text-white'>Contacto</p>
                <div className="mb-2 text-start">
                <a className="link-offset-2 link-underline link-underline-opacity-0" target="_blank" href="https://www.linkedin.com/in/oscar-w-arrieta-ramos-986700267/" rel='noreferrer'><img className={styles.Icon} src={linkedin} alt='Icono de linkedIn' /></a>
                </div>
                <div className="mb-2 text-start">
                <a className="link-offset-2 link-underline link-underline-opacity-0" target="_blank" href="https://github.com/pica69co" rel='noreferrer'><img className={styles.Icon} src={github} alt='Icono de github' /></a>
                </div>
                <div className="mb-2 text-start">
                    <a className="link-offset-2 link-underline link-underline-opacity-0" target="_blank" href="https://web.facebook.com/profile.php?id=100090650611801" rel='noreferrer'><img className={styles.Icon} src={facebook} alt='Icono de facebook' /></a>
                    
                </div>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-3">
                <p className='h5 mb-3 text-white'>Proyectos</p>
                <div className="mb-2 text-start">
                   <a className="link-offset-2 link-underline link-underline-opacity-0" target="_blank" href="https://github.com/pica69co" rel='noreferrer'>Rick and Morty-App</a>
                </div>
                {/* <div className="mb-2">
                    <a target="_blank" href="https://github.com/pica69co" rel='noreferrer' className="link-offset-2 link-underline link-underline-opacity-0">e-Commerce</a>
                </div> */}
                <div className="mb-2 text-start">
                    
                    <a target="_blank" href="https://muscle-lab-six.vercel.app" rel='noreferrer' className="link-offset-2 link-underline link-underline-opacity-0">MuscleLab Gym App</a>
                </div>
                <div className="mb-2 text-start">
                    <a target="_blank" href="https://github.com/pica69co" rel='noreferrer' className="link-offset-2 link-underline link-underline-opacity-0">Employees Management System</a>
                </div>
                <div className="col-xs-12 pt-2">
                    <p className="text-white text-center">&copy; 2023 </p>
                </div>
            </div>
        </div>
        
    </div>
  
             
          </footer>
        </div>
      )
}

export default About;