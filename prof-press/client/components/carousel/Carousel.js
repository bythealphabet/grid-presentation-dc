import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */

const isTouchDevice = () => {
  return window.matchMedia("(pointer: coarse)").matches;
};

function Carousel({ children, arraySize, position }) {
  return (
    <div
      className="project-carsousel"
      css={[carouselStyle(arraySize), position]}
    >
      <div className="project-box no-scrollbar ">{children}</div>
    </div>
  );
}
export default Carousel;

function carouselStyle(arraySize) {
  const touchDevice = isTouchDevice();
  return css`
    width: 100%;

    .no-scrollbar {
      scrollbar-width: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }

    .project-box {
      ${touchDevice
        ? css`
            overflow-y: hidden;
            overflow-x: scroll;

            display: grid;
            grid-template-columns: repeat(${arraySize}, minmax(300px, 1fr));
            grid-gap: 0.5em;

            scrollbar-width: none;
            padding: 1em 0;

            :first-of-type {
              padding-left: 0.5em;
            }

            :last-of-type {
              justify-self: stretch;
            }

            :after {
              content: "";
              width: 1em;
            }
          `
        : css`
            display: flex;
            flex-flow: row wrap;
            gap: 2%;
          `}

      > * {
        margin-bottom: 1em;
        flex-basis: 40%;

        @media (min-width: 900px) {
          flex-basis: 35%;
        }
      }
    }
  `;
}
