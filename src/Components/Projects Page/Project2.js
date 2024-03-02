import { FaGithub } from "react-icons/fa";
import LightWave from "../Waves/LightWave";
import "./ProjectDark.css";

function Project2() {
  return (
    <article className="project dark">
      <div className="project__main">
        <div data-aos="fade-right" className="project__left">
                <h3 className="project__title project__titleDark">Facial Recognition Security System for Visually Impaired</h3>
          <p className="project__description project__body">
            Developed an AI-based facial recognition system using computer vision to analyze and identify facial landmarks and features of people entering the homes of visually impaired individuals, delivering precise and reliable results. The system's doorstep camera detects visitors and alerts the visually impaired, promoting independence and enhancing safety by reducing crime. Integrated the Dlib library to achieve a remarkable efficiency rate of 99.38%, significantly enhancing the system's accuracy and efficiency.
          </p>
          <p className="project__tech project__body">
            Python · OpenCV
          </p>
        </div>
        <img
          className="project__image project__imageDark"
          src="/images/prj2.png"
          srcset="/images/prj2.png 750w, /images/prj2.png 1468w"
          sizes="50vw"
          alt="Covid Bot Project Commands"
          width="40%"
          height="auto"
          loading="lazy"
        />
      </div>
      <LightWave />
    </article>
  );
}

export default Project2;
