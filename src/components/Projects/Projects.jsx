// data
import projects from "../../database/projects";

// components
import Project from "../Project/Project";

import useVisible from "@/hooks/useVisible";

// styles
import styles from "../../styles/Projects.module.scss";

export default function Projects() {
  const renderProjects = () => {
    return projects.map((project) => {
      return <Project key={project.id} {...project} />;
    });
  };

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles["projects__title"]}>MY PROJECTS</h2>
      <ul className={styles["projects__list"]}>{renderProjects()}</ul>
    </section>
  );
}
