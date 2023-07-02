import React, { useState } from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import CardProject from "../card/CardProject";

const isTouchDevice = () => {
  return window.matchMedia("(pointer: coarse)").matches;
};

function ImgAnimation({ img, title }) {
  const [active, setActive] = useState(false);

  const styles = () => css``;

  return (
    <img
      src={img}
      alt={title}
      onClick={() => setActive(!active)}
      css={css`
        transform: translateX(0%);
        transition: all 0.5s ease-in-out;
        ${active && isTouchDevice()
          ? css`
              transform: translateX(-57%);
            `
          : null}
      `}
    />
  );
}

function ProjectCarousel({ projectArr = ["", ""] }) {
  const touchDevice = isTouchDevice();

  if (projectArr.length === 0) {
    return <p>Loading .....</p>;
  }

  return (
    <section className="projectonan" css={projectCarouselStyles(touchDevice)}>
      {projectArr.map((info, i) => {
        return (
          <figure className="projecto-f" key={info.id}>
            <CardProject {...info} />
            <ImgAnimation {...info} />
          </figure>
        );
      })}
    </section>
  );
}
export default ProjectCarousel;

/////STYLE/////

function projectCarouselStyles(touchDevice) {
  return css`
    display: grid;
    grid-template-columns: repeat(auto-fill, 500px);
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 1em;

    .projecto-f {
      overflow: hidden;

      display: grid;
      grid-template-columns: minmax(300px, 1fr) minmax(100px, 1fr);

      @media (min-width: 900px) {
        overflow-x: hidden;
      }

      img {
        overflow: hidden;
        width: 500px;
        height: 100%;
        object-fit: cover;
        object-position: left top;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;

        ${!touchDevice
          ? css`
              :hover {
                transform: translateX(-57%);
                @media (min-width: 900px) {
                  transform: translateX(-130px);
                }
              }
            `
          : null}
      }
    }
  `;
}
