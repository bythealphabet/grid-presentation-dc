import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { Link } from "react-router-dom";

function Articles() {
  return (
    <main className="base-grid" css={articleStyle}>
      <h1 className="main-heading-white">Articles</h1>
      <section className="articles-list">
        {articlesArray.map(({ id, title, description }) => {
          return (
            <article key={id} className="article-card">
              <p className="date article-date">September 08, 2021</p>
              <h2 className="article-title">{title}</h2>
              <p className="article-discription">{description}</p>
              <Link className="date article-read-more" to={`article/${id}`}>
                Read more...
              </Link>
            </article>
          );
        })}
      </section>
    </main>
  );
}
export default Articles;

//// Styles

function articleStyle() {
  return css`
    grid-template-rows: 100px 60px 60px auto;
    grid-column: 1 / -1;
    grid-row: 2 / -1;

    h1 {
      grid-column: 2 / -2;
      grid-row: 2;
      align-self: flex-end;
    }

    .articles-list {
      grid-column: 2 / -2;
      grid-row: 4;

      .article-card {
        display: flex;
        flex-direction: column;
        margin-bottom: 6em;
        max-width: 633px;

        > * {
          margin-bottom: 0.8em;
        }

        .article-title {
          font-size: 1.5rem;
        }
        .article-description {
          font-size: 1rem;
        }
      }
    }
  `;
}

var articlesArray = [
  {
    id: 1,
    title: "Code splitting & lazy loading a server side rendered React app",
    description:
      "Reasoning, approach, and goals Goals Faster initial load times. Users only download the code they need for the features they are using.",
  },
  {
    id: 2,
    title: "Easy project switching with Itermocil & command line shortcuts",
    description:
      "Reasoning, approach, and goals Goals Faster initial load times. Users only download the code they need for the features they are using.",
  },
  {
    id: 3,
    title: "Code splitting & lazy loading a server side rendered React app",
    description:
      "Reasoning, approach, and goals Goals Faster initial load times. Users only download the code they need for the features they are using.",
  },
  {
    id: 4,
    title: "Easy project switching with Itermocil & command line shortcuts",
    description:
      "Reasoning, approach, and goals Goals Faster initial load times. Users only download the code they need for the features they are using.",
  },
  {
    id: 5,
    title: "Code splitting & lazy loading a server side rendered React app",
    description:
      "Reasoning, approach, and goals Goals Faster initial load times. Users only download the code they need for the features they are using.",
  },
];
