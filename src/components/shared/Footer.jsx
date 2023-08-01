import React, { useContext } from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { SiLeetcode } from "react-icons/si";
import { ThemeContext } from "../../context/themeContext";
import {
  SlSocialBehance,
  SlSocialLinkedin,
  SlSocialInstagram,
} from "react-icons/sl";
const Footer = () => {
  const { theme } = useContext(ThemeContext);

  const githubUrl = "https://github.com/Arpana-Sitoula";
  const behanceUrl = "https://www.behance.net/musibirali/projects";
  const linkedinUrl = "https://www.linkedin.com/in/arpana-sitoula";
  const instagramUrl = "https://www.instagram.com/__a.illu__/";
  const leetcodeUrl = "https://leetcode.com/arpana_sitoula/";

  return (
    <div className="center-div">
      <div className="footer">
        <div className="footer__head">Follow me</div>
        <div className="footer__links">
          <a href={githubUrl} target="_blank" className={`socials i${theme}`}>
            <VscGithubAlt />
          </a>
          <a href={behanceUrl} target="_blank" className={`socials i${theme}`}>
            <SlSocialBehance />
          </a>
          <a href={linkedinUrl} target="_blank" className={`socials i${theme}`}>
            <SlSocialLinkedin />
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            className={`socials i${theme}`}
          >
            <SlSocialInstagram />
          </a>
          <a href={leetcodeUrl} target="_blank" className={`socials i${theme}`}>
            <SiLeetcode />
          </a>
        </div>
        <div className="footer__foot">
          <span>&#169;</span>
          {new Date().getFullYear()} React & SCSS Portfolio. ARPANA
        </div>
      </div>
    </div>
  );
};

export default Footer;
