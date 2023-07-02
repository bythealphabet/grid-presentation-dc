import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { menuStyles } from "./menuStyles";
import { Nav } from "./nav/Nav";

export function Menu({ active, position, userAuth, signout, links }) {
  return (
    <div className="menu base-grid" css={[menuStyles(active), position]}>
      <Nav
        links={links}
        signout={signout}
        userAuth={userAuth}
        position={css`
          grid-column: 1 / -1;
          grid-row: 2 / -2;
          align-self: center;
          justify-self: center;
          @media (min-width: 900px) {
            grid-column: 4 / -2;
            grid-row: 1;
            justify-self: flex-end;
          }
        `}
      />
    </div>
  );
}

///////////////// STYLES
