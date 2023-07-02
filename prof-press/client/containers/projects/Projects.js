import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { projectInfoArray } from "./projectsInfo";
import ProjectCarousel from "../../components/carousel/ProjectsCarousel";

function Projects() {
  return (
    <main className="base-grid" css={projectStyles}>
      <h1 className="main-heading project-heading">Projects</h1>

      <p className="project-sub-heading sub-heading">
        It has been great creating and, mantaining these websites, I hope you
        like them.
      </p>
      <section className="projects-box">
        <ProjectCarousel projectArr={projectInfoArray} />
      </section>
    </main>
  );
}
export default Projects;

////STYLES////

function projectStyles() {
  return css`
    grid-template-rows: 100px 60px 60px 60px 40px auto 100px;
    grid-column: 1 / -1;
    grid-row: 2 / -1;
    overflow-x: hidden;

    .project-heading {
      grid-column: 2 / -2;
      grid-row: 2;
      align-self: flex-end;
    }

    .project-sub-heading {
      max-width: 350px;
      grid-column: 2 / -2;
      grid-row: 3 / span 2;
      align-self: center;

      @media (min-width: 900px) {
        max-width: 500px;
      }
    }

    .projects-box {
      grid-column: 2 / -2;
      grid-row: 6;
    }
  `;
}
