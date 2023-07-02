import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { Link } from "react-router-dom";

function HomeArticleList() {
  return (
    <section css={articlesStyles}>
      <h3 className="sub-heading">Latest Articles</h3>
      <Link to="/articles">
        {" "}
        All articles <span>&#8594;</span>
      </Link>

      <div className="articles-box">
        <div className="article-card">
          <div className="icon icon-1"></div>
          <p>How to animate using animejs in a react project</p>
          <p className="date">September 08, 2019</p>
        </div>
        <div className="article-card">
          <div className="icon icon-2"></div>
          <p>Styling your SSR MERN STACK project with Emotion js</p>
          <p className="date">September 08, 2019</p>
        </div>
        <div className="article-card">
          <div className="icon icon-3"></div>
          <p>How to make a design system using Figma</p>
          <p className="date">September 08, 2019</p>
        </div>
      </div>
    </section>
  );
}
export default HomeArticleList;

//// Styles

function articlesStyles() {
  return css`
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 50px 1fr;
    grid-column: 2 / -2;

    h3,
    a {
      grid-row: 1;
    }

    h3 {
      grid-column: 1 / span 2;
    }

    a {
      display: flex;
      grid-column: 2;
      color: var(--white);
      font-size: 0.8rem;

      @media (min-width: 900px) {
        font-size: 1rem;
      }

      span {
        margin-left: 0.5em;
      }
    }

    .article-card {
      margin: 1.5em 0;

      grid-column: 1;
      grid-row: 2;

      display: grid;
      grid-template-columns: 35px 4fr;
      grid-template-rows: auto 30px;
      @media (min-width: 900px) {
        grid-template-rows: 50px 30px;
        margin: 1em 0;
      }

      :first-of-type {
        margin-top: 0;
      }

      .icon,
      p {
        @media (min-width: 900px) {
          align-self: center;
        }
      }

      .icon {
        width: 22px;
        height: 22px;

        grid-column: 1;
      }

      .icon-1 {
        background-color: #f7df1e;
      }

      .icon-2 {
        background-color: #61dafb;
      }

      .icon-3 {
        background-color: #ff4785;
      }

      p {
        font-size: 1.2rem;
        grid-column: 2;
      }
    }
  `;
}
