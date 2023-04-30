// data
import projects from "../../database/projects";

// components
import Project from "../Project/Project";

// styles
import styles from "../../styles/Projects.module.scss";
import useVisible from "@/hooks/useVisible";

export default function Projects() {
  const { value, elemRef } = useVisible();

  const renderProjects = () => {
    return projects.map((project) => {
      return <Project key={project.id} {...project} />;
    });
  };

  return (
    <section
      style={{
        opacity: `${value ? 1 : 0}`,
        transition: `${value ? "0.7s all" : ""}`,
      }}
      ref={elemRef}
      id="projects"
      className={styles.projects}
    >
      <h2 className={styles["projects__title"]}>MY PROJECTS</h2>
      <ul className={styles["projects__list"]}>{renderProjects()}</ul>
    </section>
  );
}
