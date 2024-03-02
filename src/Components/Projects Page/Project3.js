import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";

function Project3() {
  return (
    <article className="project light">
      <div className="project__main">
        <img
          className="project__image"
          src="/images/prj3.png"
          srcset="/images/prj3.png 750w, /images/prj3.png 1468w"
          sizes="50vw"
          alt="Flavout Flow Landing Page"
          width="50%"
          height="auto"
          loading="lazy"
        />
        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">Online Agricultural Market</h3>
          <p className="project__description project__body">
            Established a user-friendly platform that allows consumers to browse, select, and purchase a wide range of agricultural products directly from local farmers. Implemented automatic inventory updates, ensuring that product availability is real-time and accurate as customers place their orders.
          </p>
          <p className="project__tech project__body">
            PHP · HTML · CSS · MySQL
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/sidddot/agriculture"
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

export default Project3;
