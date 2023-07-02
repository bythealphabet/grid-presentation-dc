import React, { useState, useContext } from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { ThemeContext } from "../../context/ThemeContext";
import { AiFillMail } from "react-icons/ai";
import { contact } from "./api-contact";
import { usePost } from "../../hooks/useFetch";
import useFormData from "../../hooks/useFormData";
import {
  IoCallSharp,
  IoLocation,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
} from "react-icons/io5";
import {
  Input,
  Textarea,
  SubmitBtn,
} from "../../components/form/FormComponents";
import Modal from "../../components/modal/Modal";
import { FaGithub } from "react-icons/fa";

const formObj = {
  name: "",
  email: "",
  comment: "",
};

function Contact() {
  const [active, setActive] = useState(false);
  const [data, onSubmit, message, success, error] = usePost();
  const [inputData, inputHandler, setInputData] = useFormData(formObj);
  const { saveGlasses } = useContext(ThemeContext);

  async function submit(e) {
    e.preventDefault();
    setInputData(formObj);
    const userData = await onSubmit(contact, inputData);
    console.log("userData", userData);

    await userData;

    userData.status === "success" ? setActive(true) : null;
    saveGlasses();
  }

  return (
    <div className="base-grid" css={aboutStyles}>
      <h1 className="main-heading">Contact</h1>

      <form action="" className="contact-form" onSubmit={submit}>
        <Input
          label={"Name"}
          type="text"
          change={inputHandler("name")}
          value={inputData?.name}
          placeholder=""
        />
        <Input
          label={"Email"}
          type="email"
          change={inputHandler("email")}
          value={inputData?.email}
          placeholder=""
        />
        <Textarea
          label={"Comment"}
          change={inputHandler("comment")}
          value={inputData?.comment}
          maxlength="500"
          placeholder="comment"
        />
        <SubmitBtn onClick={submit} />
      </form>
      <div className="contact-info">
        <ul className="contact-info-list">
          <li>
            <span>
              <IoCallSharp />
            </span>{" "}
            + 599 9 5168764
          </li>
          <li>
            <span>
              <AiFillMail />
            </span>
            lucas@bythealphabet.com
          </li>
          <li>
            <span>
              <IoLocation />
            </span>
            Willemstad Curacao
          </li>
        </ul>
        <h3>Follow me on social networks</h3>
        <div className="contact-info-social-icons">
          <a
            href="https://www.facebook.com/curacaowebdeveloper/"
            target="_blank"
          >
            <IoLogoFacebook />
          </a>
          <a href="https://twitter.com/bythealphabet1" target="_blank">
            <IoLogoTwitter />
          </a>
          {/* <a href="http://www.instagram.com">
            <IoLogoInstagram />
          </a> */}
          <a href="https://github.com/bythealphabet" target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>
      {active && (
        <Modal setModalActive={setActive}>
          <p
            className="main-heading-no-shadow content-para"
            css={css`
              width: 500px;
              height: 300px;
              padding: 1em;

              position: relative;
              text-align: center;
              color: var(--black);
              font-weight: bold;

              span {
                height: 100px;
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0.5em;

                display: block;

                padding: 2em 0;
                color: var(--blue);
                font-size: 1.3rem;
              }
            `}
          >
            {message}
            <span>Check your email for a confirmation</span>
          </p>
        </Modal>
      )}
    </div>
  );
}
export default Contact;

////STYLES////

function aboutStyles() {
  return css`
    display: grid;
    grid-template-rows: 100px 60px 20px auto auto 150px;

    grid-column: 2 / -2;
    grid-row: 2 / -1;

    @media (min-width: 900px) {
      grid-template-rows: 100px 60px 50px minmax(300px, auto) 400px;

      grid-column: 1 / -1;
    }

    h1 {
      grid-column: 2 / -2;
      grid-row: 2;
    }

    .contact-form {
      grid-column: 2 / -2;
      grid-row: 5;
      margin-bottom: 2em;

      @media (min-width: 900px) {
        grid-column: 2 / span 5;
        grid-row: 4;
      }
    }

    .contact-info {
      grid-column: 2 / -2;
      grid-row: 4;
      justify-self: center;

      font-weight: 300;
      margin: 2em 0 5em;

      @media (min-width: 900px) {
        grid-column: 9 / -2;
        grid-row: 4;
        margin: 0;
      }

      .contact-info-list {
        margin: 1em 0 4em;

        li {
          font-size: 1.3em;
          span {
            color: var(--pink);
          }
        }

        span {
          font-size: 1.5rem;
          margin-right: 1em;
        }
      }
      .contact-info-social-icons {
        display: flex;
        justify-content: center;
        a {
          font-size: 2rem;
          margin-right: 1em;
          color: var(--accent);
        }
      }
    }
  `;
}
