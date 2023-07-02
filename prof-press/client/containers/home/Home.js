import React from "react";
import { jsx, css, keyframes } from "@emotion/react"; /** @jsx jsx */

function Home() {
  return (
    <main className="base-grid" css={homeStyles}>
      <h1 className="heading heading-position"><span className="heading--main">CSS Grid</span><span
          className="heading--sub">The Ultimate Layout Tool</span></h1>
    </main>
  );
}
export default Home;

/////////STYLES
function homeStyles() {
  return css`
    display: grid;
    grid-template-rows: calc(100vh - var(--headerHeight));
    grid-column: 1 / -1;
    grid-row: 2 / -1;

    .heading {
      display: flex;
      flex-flow: column nowrap;
      line-height: 1;
      color: var(--color-dotcontrol-pink);

      &--main {
        font-weight: 700;
        font-size: 15rem;
        transform: translateX(-1rem);
        line-height: .8;

        @media (min-width: 900px) {
          font-size: 18rem;
        }
      }

      &--sub {
        font-size: 8rem;
        color: var(--color-white);

        @media (min-width: 1440px) {
          font-size: 10rem;
        }
      }
    }
    
    .heading-position {
      grid-column: 2 / -2;
      gr
  `;
}
