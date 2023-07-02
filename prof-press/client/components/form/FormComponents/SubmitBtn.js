import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */

export function SubmitBtn({ text = "Submit", onClick = () => "" }) {
  const styles = css`
    width: 100%;
    max-width: 420px;
    background: var(--dark);
    border: solid 1px var(--dark);
    color: var(--pink);
    font-size: 1.2rem;
    border: none;
    padding: 0.8em;
    transition: all 0.2s ease-in-out;

    :hover,
    :focus {
      background: var(--pink);
      color: var(--white);
    }
  `;

  return (
    <button className="base-btn btn" onClick={onClick} css={styles}>
      {text}
    </button>
  );
}
