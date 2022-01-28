import React from "react"
import perfile from "../assets/img/perfil.png"
import resume from "../assets/pdf/Ansel-Cv.pdf"

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <span className="home__greeting">Hello, I'm</span>
          <h1 className="home__name">Henry Nguyen</h1>
          <h3 className="home__education">Frontend Developer</h3>

          <div className="home__buttons">
            <a target="__blank" href={resume} className="button button--ghost">
              Download CV
            </a>
            <a href="#about" className="button">
              About me
            </a>
          </div>
        </div>

        <div className="home__handle">
          <img src={perfile} alt={"perfile"} className="home__img" />
        </div>

        <div className="home__social">
          <a href="https://www.linkedin.com/" className="home__social-link">
            <i class="bx bxl-linkedin-square"></i>
          </a>
          <a href="https://github.com/" className="home__social-link">
            <i class="bx bxl-github"></i>
          </a>
          <a href="https://codepen.io/" className="home__social-link">
            <i class="bx bxl-codepen"></i>
          </a>
        </div>

        <a href="#about" className="home__scroll">
            <i className="bx bx-mouse home__scroll-icon"></i>
            <span className="home__scroll-name">Scroll Down</span>
        </a>
      </div>
    </section>
  )
}

export default Home
