import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */

function About() {
  return (
    <main
      className="base-grid"
      css={css`
        grid-template-rows: 100px 60px 60px auto 400px;
        grid-column: 1 / -1;
        grid-row: 2 / -1;

        h1 {
          grid-column: 2 / -2;
          grid-row: 2;
          align-self: flex-end;
        }

        .article-list {
          grid-column: 2 / -2;
          grid-row: 4;
          margin-bottom: 5em;
          max-width: 633px;

          article {
            margin-bottom: 3em;

            h2 {
              margin-bottom: 1em;
            }

            :last-of-type {
              p {
                margin-bottom: 1em;
              }
            }
          }
        }

        figure {
          grid-column: 1 / -1;
          grid-row: 5;
          display: flex;
          flex-direction: column;
          position: relative;
          height: 100%;

          background-image: url("https://bythealphabet.s3.amazonaws.com/personal/239306994_4338196299574029_8536881342476572261_n.jpg"),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.8) 0%,
              rgba(0, 0, 0, 0.8) 100%
            );
          background-size: cover;
          background-repeat: no-repeat;
          background-blend-mode: multiply, multiply;
          background-position: 95% center;

          figcaption {
            position: absolute;

            right: 5em;
            bottom: 0;

            display: flex;

            @media (min-width: 900px) {
              flex-direction: column;
              align-items: flex-end;
            }
            p {
              font-size: 0.8em;
              @media (min-width: 900px) {
                font-size: 2em;

                :last-of-type {
                  font-size: 1em;
                }
              }
            }
          }
        }
      `}
    >
      <h1 className="main-heading">About</h1>
      <div className="article-list">
        <article>
          <p>
            My Name is <span className="about-name">Isaac Lucas</span>, I'm a
            life-long learner and{" "}
            <span className="about-ocupation">Front-end Developer</span>.
            <br />
            <br />
            It has been four years since I picked up HTML, CSS and, Javascript.
            I fell in love with designing websites, especially with programming
            in Javascript.
            <br />
            <br />
            I'm always looking for ways to strengthening my knowledge of
            Javascript. This way I can build MERN projects faster, and build
            functional websites that are pleasant to use.
            <br />
            <br />
            Most of my projects are build on The MERN STACK, using (Nodejs,
            React Express and, MongoDB. Other packages that you will find in my
            projects are Webpack, Redux, Emotionjs, Bulma and, Material UI.
          </p>
        </article>

        <article>
          <h2 className="sub-heading">Personal</h2>
          <p>
            I love playing video games with my kids, specialy Rocket League.
          </p>
          <p>2 sports that I love doing the most are Basketball and Chess.</p>
          <p>
            I play the guitar, love playing song out of the Real Book of Jazz.{" "}
          </p>
        </article>
      </div>

      <figure>
        <figcaption>
          <p className="sub-heading">Whatching the Sunset at Daaibooi Beach</p>
        </figcaption>
      </figure>
    </main>
  );
}
export default About;
