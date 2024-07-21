import React from "react";
import styles from "./Styles.module.css";
import checkmark from "../../assets/checkmark-dark.svg";
import List from "../../Components/List/List";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className={styles.sectionTittle}>Skills</h1>
      <div className={styles.SkillList}>
        <List />
      </div>
    </section>
  );
}

export default Skills;
