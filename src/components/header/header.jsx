import "./header.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import ME from "../../assets/me.png";
import CV from "../../assets/cv.pdf";

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header_text">
          <h5>Hello i'm</h5>
          <h2>Hasan Mahmud</h2>
          <h5 className="text-light">Fullstack Developer</h5>
        </div>
        <div className="header_btn">
          <a href={CV} download className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
        <div className="header_social">
          <a href="https://linkedin.com">
            <FaLinkedin />
          </a>
          <a href="https://github.com">
            <FaGithub />
          </a>
          <a href="https://facebook.com">
            <FaFacebook />
          </a>
        </div>
        <div className="me">
          <img src={ME} alt="me photo" />
        </div>
        <div className="scroll_down">Scroll Down</div>
      </div>
    </header>
  );
};
