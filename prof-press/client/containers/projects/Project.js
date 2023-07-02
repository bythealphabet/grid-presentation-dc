import React, { useState, useEffect } from "react";
import { jsx, css, useTheme } from "@emotion/react"; /** @jsx jsx */
import { projectInfoArray } from "./projectsInfo";
import { useParams, Link } from "react-router-dom";
import ProjectCarousel from "../../components/carousel/ProjectsCarousel";
import MarkdownComponent from "./markdown/MarkdownComponent";

function Project() {
  const theme = useTheme();
  const [projectInfo, setProjectInfo] = useState("");
  const [otherProjects, setOtherProjects] = useState([]);
  const { id: projectID } = useParams();

  useEffect(() => {
    findProject();
  }, [projectID]);

  function findProject() {
    const info = projectInfoArray.filter((info) => info.id === projectID);
    const other = projectInfoArray.filter((other) => other.id !== projectID);
    setProjectInfo(...info);
    setOtherProjects(other);
  }

  console.log("projectID:", projectInfo);

  return (
    <main className="base-grid" css={projectStyles(theme, projectInfo?.name)}>
      <h1 className="main-heading project-heading">{projectInfo.name}</h1>

      <MarkdownComponent md={projectInfo.md} />

      <div className="other-projects">
        <h3>Other Projects</h3>
        <ProjectCarousel projectArr={otherProjects} />
      </div>
    </main>
  );
}
export default Project;

////STYLES////

function projectStyles(theme, name) {
  console.log("animejsn:", name);
  return css`
    display: grid;
    grid-template-rows:
      100px 60px minmax(300px, auto) 100px minmax(300px, auto)
      200px 200px;

    grid-column: 1 / -1;
    grid-row: 2 / -1;
    overflow-x: hidden;

    .project-heading {
      grid-column: 2 / -2;
      grid-row: 2;
      align-self: flex-end;
    }

    img {
      object-position: center;
    }

    .other-projects {
      grid-column: 2 / -2;
      grid-row: 5 / span 2;

      h3 {
        margin-bottom: 2em;
      }
    }
  `;
}
