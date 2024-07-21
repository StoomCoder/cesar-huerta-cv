import React from "react";
import { skills } from "../../common/commons";
import style from "./style.module.css";
function List() {
  return (
    <>
      <div>
        <h2 className={style.skillTittle}>Lenguajes</h2>
        <div className={style.orderedSections}>
          {skills.skill
            .filter((skill) => skill.type === "Lenguage")
            .map((skill) => (
              <span key={skill.id}>
                <img
                  className={style.sizeIco}
                  src={skill.img}
                  alt={skill.alt}
                />
                <div>
                  <p>{skill.name}</p>
                  <progress value={skill.progress} max={100} />
                </div>
              </span>
            ))}
        </div>
        <h2 className={style.skillTittle}>Frameworks</h2>
        <div className={style.orderedSections}>
          {skills.skill
            .filter((skill) => skill.type === "Framework")
            .map((skill) => (
              <span key={skill.id}>
                <img
                  className={style.sizeIco}
                  src={skill.img}
                  alt={skill.alt}
                />
                <div>
                  <p>{skill.name}</p>
                  <progress value={skill.progress} max={100} />
                </div>
              </span>
            ))}
        </div>
        <h2 className={style.skillTittle}>SoftSkills</h2>
        <div className={style.orderedSections}>
          {skills.skill
            .filter((skill) => skill.type === "SoftSkill")
            .map((skill) => (
              <span key={skill.id}>
                <img
                  className={style.sizeIco}
                  src={skill.img}
                  alt={skill.alt}
                />
                <div>
                  <p>{skill.name}</p>
                  <progress value={skill.progress} max={100} />
                </div>
              </span>
            ))}
        </div>
      </div>
    </>
  );
}

export default List;
