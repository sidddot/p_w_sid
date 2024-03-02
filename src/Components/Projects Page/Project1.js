import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";
import { useMediaQuery } from "react-responsive";

function Project1({ id }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 769px)",
  });

  return (
    <article id={id} className="project light">
      <h2 className="project__header">Projects</h2>
      <div className="project__main">
        <img
          className="project__image project__specialMobileImage"
          src="/images/prj1.png"
          alt="Health Fusion Project Home Page"
          width="40%"
          height="auto"
          loading="lazy"
        />
        {/* {isDesktopOrLaptop && (
          <>
            <img
              className="project__image"
              src="/images/prj1.png"
              alt="Health Fusion Map Page"
              width="15%"
              height="auto"
              loading="lazy"
            />
          </>
        )} */}

        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">Ananda Life</h3>
          <p className="project__description project__body">
            An overall fitness app leveraging computer vision for workout monitoring and tracking, a nutritional planner, and AI-based mental health assistance. Designed to offer comprehensive fitness guidance, the app enhances user well-being through personalized fitness and mental health support.
          </p>
          <p className="project__tech project__body">
            React js · Node js · HTML · CSS · Python · MySQL
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/sidddot/Ananda-Life"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Project1;
