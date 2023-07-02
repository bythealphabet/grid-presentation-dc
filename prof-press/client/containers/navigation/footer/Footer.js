import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import {
  IoCallSharp,
  IoLocation,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
} from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

function footerStyle() {
  return css`
    background-color: var(--dark);
    grid-column: 1 / -1;
    grid-row: -1;
    min-height: 200px;

    padding: 2em 0;

    grid-template-rows: 1fr 50px 50px;
    @media (min-width: 900px) {
      grid-template-rows: 1fr;
    }

    .text {
      grid-column: 2 / -2;
      grid-row: 1;
      align-self: center;
      justify-self: center;
      text-align: center;

      color: rgba(250, 250, 250, 0.7);

      @media (min-width: 900px) {
        text-align: left;
        grid-column: 2 / span 4;
        justify-self: flex-start;
      }
    }

    .icons {
      display: flex;
      justify-content: center;
      width: 100px;
      height: 25px;
      font-size: 2em;

      grid-column: 2 / -2;
      grid-row: 2;
      align-self: center;
      justify-self: center;

      a {
        color: var(--darkBlue);
        margin: 0 0.5em;
        transition: color 0.2s ease-in-out;

        :hover {
          color: var(--pink);
        }
      }

      @media (min-width: 900px) {
        height: 35px;
        grid-column: 9 / -2;
        grid-row: 1;
        justify-self: flex-end;
      }
    }

    .this-project-repo-link {
      grid-column: 2 / -2;
      grid-row: 3;
    }
  `;
}
function Footer() {
  return (
    <div className="base-grid" css={footerStyle}>
      <div className="text">
        <p>Developed by Isaac Lucas </p>
        <p>Build on MERN STACK</p>
        <p>Hosted on Digital Ocean</p>
      </div>
      <div className="icons">
        <a href="https://www.facebook.com/curacaowebdeveloper/">
          <IoLogoFacebook />
        </a>
        <a href="https://twitter.com/bythealphabet1">
          <IoLogoTwitter />
        </a>
        {/* <a href="http://www.instagram.com">
          <IoLogoInstagram />
        </a> */}
        <a href="https://github.com/bythealphabet">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}
export default Footer;
