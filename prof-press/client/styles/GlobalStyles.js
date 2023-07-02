import React from "react";
import { jsx, css, Global, useTheme } from "@emotion/react"; /** @jsx jsx */

export function GlobalStyles() {
  const {
    mainColor: {
      primary,
      secondary,
      tertiary,
      accent,
      secondaryAccent,
      shadowColor,
      emoBackground,
    },
  } = useTheme();
  return (
    <Global
      styles={css`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        :root {
          --headerHeight: 100px;
          --footerHeight: 100px;
          --innerRadius: 2em;
          --dark: #515151;

          --pink: #ea4c89;
          --danger: #ff0e0e;

          --blue: #7cc9ff;
          --blue: ${secondaryAccent};
          --darkBlue: ${primary};
          --accent: ${accent};
          --white: ${secondary};
          --black: ${tertiary};
          --shadowColor: ${shadowColor};
        }

        body,
        html {
          margin: 0;
          padding: 0;
          font-family: "Alata", sans-serif;
          font-size: 16px;
          color: var(--white);
          line-height: 1.6;
          background-color: #1c2a34;
          ${emoBackground};
          transition: all 0.3s linear;

          @media (min-width: 900px) {
            font-size: 18px;
          }
        }

        img {
          max-height: 100%;
          display: block;
        }

        a {
          text-decoration: none;
          color: #404040;
        }

        .no-scroll {
          position: fixed;
          overflow-y: hidden;
        }

        .no-scrollbar {
          scrollbar-width: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        ////// Typography //////

        .main-heading,
        .main-heading-white,
        .main-heading-no-shadow {
          color: var(--accent);
          font-size: 2rem;
          text-shadow: none;
        }

        .main-heading-white {
          color: var(--white);
        }

        .main-heading {
          text-shadow: 0.5px 0.5px 70px var(--shadowColor);
        }

        .sub-heading {
          font-size: 1.4rem;
        }

        .date {
          grid-column: 2;
          font-size: 0.8rem;
          color: var(--blue);
        }

        .truncate {
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
        }

        ////////////BUTTONS
        .btn,
        .base-btn {
          display: inline-block;
          padding: 0.5em 1.2em;
          font-size: 0.8rem;
          font-weight: bold;
          border: solid 0.2em var(--dark);
          background: var(--white);
          cursor: pointer;
          border-radius: 8px;

          :hover,
          :focus {
            color: var(--accent);
            background: var(--dark);
          }
        }

        /////GRID LAYOUT
        .base-grid {
          display: grid;
          grid-template-columns:
            minmax(1em, 1fr) repeat(6, minmax(30px, 125px))
            minmax(1em, 1fr);

          @media (min-width: 900px) {
            grid-template-columns:
              minmax(10em, 1fr) repeat(12, minmax(50px, 125px))
              minmax(10em, 1fr);
          }
        }

        .main-layout {
          margin: 0 auto;
          display: grid;
          grid-template-rows:
            var(--headerHeight) auto
            var(--footerHeight);
        }
      `}
    />
  );
}
