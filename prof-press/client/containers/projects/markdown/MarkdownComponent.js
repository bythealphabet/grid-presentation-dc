import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import Markdown from "markdown-to-jsx";

function MarkdownComponent({ md }) {
  return (
    <article className="project-text-intro" css={mardownComponentStyle}>
      {md ? <Markdown>{md}</Markdown> : <div>Loading .....</div>}
    </article>
  );
}
export default MarkdownComponent;

////STYLES/////

function mardownComponentStyle() {
  return css`
    grid-column: 2 / -2;
    align-self: center;
    grid-row: 3;

    @media (min-width: 900px) {
      grid-column: 2 / span 8;
    }

    h2 {
      max-width: 300px;
      font-size: 1.3rem;
      margin-bottom: 1.5em;

      @media (min-width: 900px) {
        max-width: 500px;
      }
    }

    img {
      max-width: 100%;
      object-fit: contain;
      margin-bottom: 3em;
    }

    p {
      margin-bottom: 2em;
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 400;
      color: var(--accent);
    }

    a {
      font-size: 1.2rem;
      color: var(--pink);
    }
  `;
}
