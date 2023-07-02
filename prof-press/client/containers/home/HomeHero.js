import React, { useState, useContext, useEffect } from "react";
import { jsx, css, keyframes } from "@emotion/react"; /** @jsx jsx */
import HeroImg from "./HeroImg";
import { ThemeContext } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";

import HeroPara from "./HeroPara";

function HomeHero() {
  const [showText, setShowText] = useState(false);
  const [wasClicked, setWasClicked] = useState(false);
  const { setActive } = useContext(ThemeContext);

  useEffect(() => {
    setShowText(false);
  }, []);

  function typing(typewriter) {
    typewriter
      .start()
      .typeString(`Let's Build some Beautiful Web Applications`)
      .callFunction(() => setShowText(true));
  }

  const startTextAnime = (ref) => animeRef.current.play();

  const clikedOnceAlready = (play) => {
    if (!wasClicked) {
      setWasClicked(true);
    }
    setActive((prev) => !prev);
  };

  return (
    <section className="base-grid" css={heroStyles(showText)}>
      {/* <div className="hero-img ">
        <HeroImg
          click={clikedOnceAlready}
          showText={showText}
          wasClicked={wasClicked}
        />
      </div> */}

      <article className="description">
        <h1 className="main-heading">
          <Typewriter
            options={{
              autoStart: true,
              deleteSpeed: 10,
              loop: false,
            }}
            onInit={typing}
          />
        </h1>
        {/* className="shape-hero missionimg" */}
        <HeroPara showText={showText} />
      </article>
    </section>
  );
}

export default HomeHero;

///// Styles

function heroStyles(showText) {
  return css`
    display: grid;
    grid-column: 1 / -1;
    grid-template-rows: 30px 200px 100px 50px;
    /* margin-bottom: 5em; */
    overflow: hidden;

    @media (min-width: 900px) {
      grid-template-rows: 100px 200px 200px;
    }

    .missionimg {
      float: right;
      shape-outside: polygon(
        35.84% 94.87%,
        34.64% 87.05%,
        51.64% 4.06%,
        55.1% 2.38%
      );
      max-height: 211px;
    }

    .hero-img {
      z-index: 20;
      margin-top: 5em;
      cursor: pointer;
      grid-column: 4 / span 4;
      grid-row: 2 / span 3;
      align-self: flex-end;

      @media (min-width: 900px) {
        grid-column: 7 / span 5;
        grid-row: 2 / span 3;
      }

      svg {
        width: 300px;
        height: 300px;

        @media (min-width: 900px) {
          width: 400px;
          height: 400px;
        }
      }
    }

    .description {
      z-index: 11;
      margin-top: 2em;
      grid-column: 2 / span 6;
      grid-row: 1 / span 3;
      display: flow-root;
      overflow: hidden;

      /* max-width: 00px; */

      @media (min-width: 900px) {
        grid-column: 2 / span 7;
        align-self: center;
      }

      h1 {
        margin-bottom: 1.2rem;
        color: var(--accent);
        font-size: 2rem;

        @media (min-width: 900px) {
          max-width: 600px;
          font-size: 2.5rem;
        }
      }
    }
  `;
}
