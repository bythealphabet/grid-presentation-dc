import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */

function styles(active) {
  return css`
    position: fixed;
    overflow-y: hidden;
    z-index: 12;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-rows: repeat(3, 1fr);

    .modal-background {
      z-index: 13;
      width: 100%;
      height: 100%;

      top: 0;
      background-color: rgb(0, 0, 0);
      background-color: rgba(250, 0, 0, 0.7);
      grid-column: 1 / -1;
      grid-row: 1 / -1;
    }

    .modal-content {
      z-index: 100;
      background-color: var(--white);
      margin: auto;

      border: 1px solid #888;
      grid-column: 1 / -1;
      grid-row: 1 / span 2;
      align-self: flex-end;
      border-radius: 8px;
      display: flex;
      flex-flow: column nowrap;
      box-shadow: 0 0 50px 0 var(--white);

      .content-m {
        flex-basis: 100%;
        align-self: center;
      }

      .close {
        color: #aaaaaa;

        font-size: 2rem;
        font-weight: bold;
        align-self: flex-end;
        flex-basis: 100%;
        padding-right: 0.5em;

        @media (min-width: 900px) {
          font-size: 3rem;
        }

        :hover,
        :focus {
          color: #000;
          text-decoration: none;
          cursor: pointer;
        }
      }
    }
  `;
}

function Modal({ setModalActive, children }) {
  return (
    <div id="myModal" className="modal base-grid" css={[styles]}>
      <div
        className="modal-background"
        onClick={() => setModalActive(false)}
      ></div>
      <div className="modal-content">
        <span className="close" onClick={() => setModalActive(false)}>
          ×
        </span>
        <div className="content-m">{children}</div>
      </div>
    </div>
  );
}
export default Modal;
