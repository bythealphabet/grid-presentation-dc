import React, { useEffect } from "react";
import useAnime from "../../hooks/useAnime";
import { jsx, css } from "@emotion/react"; /** @jsx jsx **/

function HeroPara({ showText }) {
  const animeObj = {
    targets: ".para-hero",
    autoplay: false,
    duration: setDuration,
    delay: setDelay,
    translateY: [100, xPosRelative],
    opacity: [0, 1],
    easing: "easeInOutSine",
  };

  const { animeRef } = useAnime(animeObj);

  useEffect(() => {
    if (showText) {
      animeRef.current.play();
    }
  }, [showText]);

  return (
    <div
      css={css`
        p {
          max-width: 280px;
          font-size: 1rem;
          @media (min-width: 900px) {
            max-width: 500px;
          }

          span {
            color: var(--pink);
            font-weight: bold;
          }

          @media (min-width: 900px) {
            font-size: 1.5rem;
          }
        }
      `}
    >
      <p className="para-hero"> Hi, my name is Isaac Lucas,</p>
      <p className="para-hero">
        I'm a <span>Front-end Developer</span>
      </p>

      <p className="para-hero">living in Beautiful Curacao 🌴.</p>
    </div>
  );
}

export default HeroPara;

function setOpacity(node, index) {
  return;
}

function xPosAbsolute(node, index) {
  return index * 100;
}

function xPosRelative(node, index) {
  return `-= ${index * 1 + 100}`;
}

function xInitial(node, index) {
  return index * 50 + 50;
}

function setDuration(node, index) {
  return index * 200 + 500;
}

function setDelay(node, index) {
  return index * 100;
}

//
