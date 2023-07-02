import React from "react";
import { navStyle } from "./NavStyles";
import { Link } from "react-router-dom";

export function Nav({ position, links }) {
  return (
    <nav css={[navStyle, position]}>
      <ul>
        {links.map(({ name, path, btn }, index) => {
          return (
            <li key={`${name},${path}${index}`}>
              <Link className={btn ? "nav-btn" : ""} to={path}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
