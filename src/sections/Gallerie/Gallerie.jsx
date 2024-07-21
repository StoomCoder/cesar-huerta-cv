import React from "react";
import styles from "./Styles.module.css";
import Cards from "../../Components/Cards/Cards";


function Gallerie() {
  return (
    <section id="gallerie" className={styles.container}>
      <h1 className={styles.tittleText}>Gallerie</h1>
      <div className={styles.projectsContainer}>
        <Cards/>
      </div>
    </section>
  );
}

export default Gallerie;
