import LightWave from "../Waves/LightWave";
import { NavHashLink } from "react-router-hash-link";
import { useEffect } from "react";
import Aos from "aos";
import "./About.css";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="about" className="about">
      <div data-aos="fade-right" className="about__text">
        <h2 className="about__heading">About Me</h2>
        <p className="about__body">
          Hello My name is Sidharth N and I am a third-year Computer
          Science Student at B.M.S. Institute of Technology
          <br />
          <br />
          Passionate college student eager to explore cutting-edge technologies, specializing in web development, app creation, data analysis, and deep neural networks. Enthusiastic about learning and contributing to the world of innovation and complex problem-solving. 
          With a keen interest in emerging tech trends, I am committed to acquiring valuable skills and making meaningful contributions to the dynamic realm of technology. 
          Ready to embark on a journey of continuous growth and stay at the forefront of advancements.
        </p>
        <br />
        <p className="about__body">
          You can reach out to me on my{" "}
          <NavHashLink className="about__specialText" smooth to="#contact">
            contact
          </NavHashLink>{" "}
          page
        </p>
      </div>
      <img
        className="about__headshot"
        src="/images/face.png"
        alt="Brand Logo"
        width="300"
        height="300"
      />
      <LightWave />
    </section>
  );
}

export default About;
