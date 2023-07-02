import { jsx, css } from "@emotion/react"; /** @jsx jsx */

export function navStyle() {
  return css`
    z-index: 11;
    display: flex;

    @media (min-width: 900px) {
      background: transparent;
    }

    .nav-auth {
      margin-left: 1em;
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @media (min-width: 900px) {
        width: 100%;
        flex-direction: row;
        align-items: center;
      }

      li {
        @media (min-width: 900px) {
          margin: 0 0.7em;
          padding: 0 0.7em;
          border: none;

          :hover {
            background: transparent;
          }

          :last-of-type {
            padding-right: 0;
            margin-right: 0;
          }
        }

        .nav-btn {
          cursor: pointer;
          display: inline-block;
          padding: 0.5em 1.2em;
          font-size: 1.3rem;
          font-weight: 700;
          text-align: center;
          background: var(--blue);
          color: var(--darkBlue);

          border-radius: 6px;
          width: 100%;
          margin: 0.5em 0;
          transition: all 0.2s ease-in-out;

          @media (min-width: 900px) {
            font-size: 0.8rem;
            border: solid 0.2em var(--accent);
            color: var(--accent);
            background: transparent;
          }

          :hover,
          :focus {
            color: var(--white);
            background: var(--pink);
            /* border: solid 0.2em var(--pink); */
          }
        }

        a {
          text-decoration: none;
          display: flex;
          justify-content: space-between;
          font-size: 2rem;
          text-transform: capitalize;
          color: white;
          transition: color 0.2s ease-in-out;

          :hover {
            color: var(--pink);
          }

          @media (min-width: 900px) {
            font-size: 1.2rem;
            color: var(--white);
            text-align: center;
            font-weight: bold;
          }
        }
      }
    }
  `;
}
