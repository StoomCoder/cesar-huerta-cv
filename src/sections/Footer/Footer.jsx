import React from "react";
import styles from "./Styles.module.css";

const Footer = () => {
  return (
    <section id="footer" className={styles.container}>
      <p>
        {" "}
        &copy; 2024 César Huerta. <br />
        All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
