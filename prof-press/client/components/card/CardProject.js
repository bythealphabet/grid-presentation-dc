import React from "react";
import { jsx, css, useTheme } from "@emotion/react"; /** @jsx jsx */
import { Link } from "react-router-dom";

function CardProject({ id, name, description, color, url }) {
  const { name: themeName } = useTheme();
  return (
    <div css={cardProjectStyles(themeName)}>
      <div
        className="side-color-stroke"
        css={css`
          background-color: ${color};
        `}
      ></div>
      <div className="project-box-content">
        <h4 className="project-header">{name}</h4>
        <p className="project-description truncate">{description}</p>
        <Link to={`/project/${id}`} className="btn project-btn">
          Discover
        </Link>
      </div>
    </div>
  );
}

export default CardProject;

function cardProjectStyles(name) {
  return css`
    overflow: hidden;
    /* min-width: 300px;
    height: 100%; */
    ${name == "brown"
      ? css`
          border: solid 0.5px var(--dark);
        `
      : ""}

    border-radius: 8px 0 0 8px;

    background-color: var(--darkBlue);

    display: grid;
    grid-template-columns: 0.3fr 1fr 6fr;

    .side-color-stroke {
      grid-column: 1;
      height: 100%;
    }

    .project-box-content {
      grid-column: 3;
      width: 97%;
      height: 100%;

      display: flex;
      flex-direction: column;

      .project-description {
        height: 120px;
      }

      .project-header {
        margin: 1em 0;
        color: var(--white);
        font-size: 1.5rem;
      }

      .project-btn {
        border: solid 1px var(--blue);
        background-color: transparent;
        color: var(--white);
        font-size: 1rem;
        font-weight: 700;
        padding: 0.5em 1.2em;

        margin: auto 0 1em 0;
        align-self: flex-start;
        transition: all 0.2s ease-out;

        :hover {
          background-color: var(--pink);
          border: solid 1px var(--dark);
          color: var(--white);
        }
      }
    }
  `;
}
