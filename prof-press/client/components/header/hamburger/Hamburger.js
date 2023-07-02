import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { hamburgerStyles } from "./hamburgerStyles";

export function Hamburger({ active = true, setActive, position }) {
  return (
    <div
      css={[hamburgerStyles(active), position]}
      onClick={setActive}
      aria-label="Open main menu"
    >
      <label htmlFor="navi-toggle" hidden>
        <span>&nbsp;</span>
      </label>
    </div>
  );
}
