import { jsx, css, keyframes } from "@emotion/react"; /** @jsx jsx */

export function hamburgerStyles(active) {
  return css`
    cursor: pointer;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    @media (min-width: 900px) {
      display: none;
    }

    label {
      z-index: 1000;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: 4em;
      width: 4em;

      border-radius: 50%;
      transition: 2ms ease;
      text-align: center;

      grid-column: 1;
      grid-row: 1;
      align-self: center;
      justify-self: flex-start;

      span {
        position: relative;
        background-color: ${active ? "transparent" : "var(--white)"};
        width: 2.5em;
        height: 0.25em;
        display: inline-block;
        transform: translateY(0);

        transition: all 0.3s;

        :before,
        :after {
          content: "";
          background-color: var(--white);
          width: 2.5em;
          height: 0.25em;
          display: inline-block;

          position: absolute;
          left: 0;
          transition: all 0.3s;
        }

        :before {
          top: ${active ? "0" : "-0.8rem"};
          transform: ${active ? "rotate(135deg)" : "rotate(0)"};
        }

        :after {
          top: ${active ? "0" : "0.8rem"};

          transform: ${active ? "rotate(-135deg)" : "rotate(0)"};
        }
      }
    }
  `;
}
