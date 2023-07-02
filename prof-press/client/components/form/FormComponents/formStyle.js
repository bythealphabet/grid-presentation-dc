import { jsx, css } from "@emotion/react"; /** @jsx jsx */

export const inputStyles = (labelStyle, placeholderStyle) => css`
  display: flex;
  flex-direction: column;

  margin-bottom: 1em;

  .label {
    font-size: var(--smallSize);
    margin-bottom: 0.25em;
    ${labelStyle}
  }

  .input {
    font-family: inherit;
    text-align: inherit;
    color: var(--dark);

    width: 100%;
    max-width: 420px;

    border-radius: 0.25em;
    border: solid 0.031em var(--dark);

    /* box-shadow: 0 0 3px rgba(0, 0, 0, 0.6) inset; */

    margin-bottom: 0.75em;
    padding: 0.8em;

    transform: scale(1);
    transition: 0.3s ease;
    outline: 0;

    ::placeholder {
      color: #c5c6c7;
      ${placeholderStyle}
    }

    :focus {
      box-shadow: 1 1 3px var(--accent) inset;
      transform: scale(1.02);
    }
  }
`;
