import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import Carousel from "../../components/carousel/Carousel";
import CardProject from "../../components/card/CardProject";
import { Link } from "react-router-dom";

function HomeProjects({ projectsArr }) {
  return (
    <section className="base-grid " css={homeProjectsStyles(projectsArr)}>
      <Link className="project-box-header" to="/projects">
        <h3 className="sub-heading ">Projects</h3>
      </Link>
      <Carousel
        arraySize={projectsArr.length}
        position={css`
          grid-column: 2 / -2;
        `}
      >
        {projectsArr.map((project, index) => {
          return <CardProject key={project.id} {...project} />;
        })}
      </Carousel>
    </section>
  );
}
export default HomeProjects;

//////STYLES

function homeProjectsStyles(projectsArr) {
  return css`
    grid-column: 1 / -1;

    @media (min-width: 900px) {
      margin: 6em 0 0;
    }

    .project-box-header {
      padding: 0.3em 0.7em;
      color: var(--white);
      grid-column: 2;
      border-radius: 50%;
      transition: text-shadow 0.3s ease-in-out;
      text-align: center;

      :hover {
        box-shadow: 3px -1px 8px var(--pink);
      }
    }
  `;
}
