import React from "react";
import styles from "./Styles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/moon.svg";
import moon from "../../assets/sun.svg";
import twitterLight from "../../assets/twitter-light.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import githubLight from "../../assets/github-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? moon : sun;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.heroImg}
          src={heroImg}
          alt="Profile picture of César Huerta"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          César <br />
          Huerta
        </h1>
        <h2>FullStack Developer</h2>
        <span>
          <a href="https://www.linkedin.com/in/stoomcode/" target="_blank">
            <img src={twitterIcon} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/stoomcode/" target="_blank">
            <img src={githubIcon} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/stoomcode/" target="_blank">
            <img src={linkedinIcon} alt="" />
          </a>
        </span>
        <p className={styles.description}>
          I am a strong asset in my field, committed to excellence and always
          ready to adapt to different environments and needs.
        </p>
        <a href={CV} download>
          <button className={styles.hover}>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
