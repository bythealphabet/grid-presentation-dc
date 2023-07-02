import { jsx, css } from "@emotion/react"; /** @jsx jsx */

/////////////////
/// universal colors
const orange = "#ce871d";
const yellow = "#FC6";
const black = "#515151";
const white = "#f2f2f2";
const lightGray = "#333";
const eyesBlue = "#54BBFF";

const blueGreen = "#009E8F";
const darkBlueGreen = "#007E97";
const lightBlueGreen = "#88CAC6";
// const lightBlueGreen = "#b0fbbc";

const bodyBrown = "#BF8E5F";
const darkBrown = "#A27A51";
const gray = "#ccc";
const darkGray = "#E6E6E6";
const otherBlue = "#007E97";

const darkText = "#363636";

const owlDefault = {
  feet: orange,
  head: yellow,
  pik: black,
  outerEyes: lightGray,
  eyesIris: eyesBlue,
  eyesWhite: white,
  eyebrowsSmall: gray,
  eyebrowsBig: darkGray,
  feathers: otherBlue,
};

export const brownTheme = {
  name: "brown",
  owlDefault,
  mainColor: {
    primary: "#e6e6e6",
    secondary: "#515151",
    tertiary: "#f2f2f2",
    accent: "#bf8e5f",
    secondaryAccent: "#007E97",
    shadowColor: "rgba(206, 135, 29, 0.3)",
    emoBackground: css`
      background-color: #e5e4ea;
    `,
    modalBackground: css``,
  },
  colors: {
    forhead: darkBrown,
    outerEyes: bodyBrown,
    inerEyes: darkBrown,
    chest: bodyBrown,
    mustage: darkBrown,
    body: bodyBrown,
    wings: darkBrown,
    accent: blueGreen,
  },
};

export const blueTheme = {
  name: "blue",
  owlDefault,
  mainColor: {
    primary: "#1c2c35",
    secondary: "#ecf8ff",
    tertiary: "#111a20",
    accent: "#b0fbbc",
    secondaryAccent: "#7cc9ff",
    shadowColor: "rgba(176, 251, 188, 0.8)",
    emoBackground: css`
      background-image: linear-gradient(to bottom, #1c2a34 0%, #111a20 100%);
    `,
    modalBackground: css``,
  },
  colors: {
    forhead: blueGreen,
    outerEyes: lightBlueGreen,
    inerEyes: darkBlueGreen,
    mustage: darkBlueGreen,
    chest: lightBlueGreen,
    body: lightBlueGreen,
    wings: blueGreen,
    accent: orange,
  },
};
