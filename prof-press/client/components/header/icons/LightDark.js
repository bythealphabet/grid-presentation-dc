import React, { useContext, useEffect } from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { ThemeContext } from "../../../context/ThemeContext";
import useAnime from "../../../hooks/useAnime";

const sunAnime = {
  targets: [".sun", ".suns-hallo"],
  autoplay: false,
  translateY: [100, 0],
  opacity: [0, 1],
  // easing: "easeInOutSine",
};

const showMoonAnime = {
  targets: [".moon-hallo", ".moon"],
  autoplay: false,
  translateX: [200, 0],
  opacity: [0, 1],
  // easing: "easeInOutSine",
};

const hideMoonAnime = {
  targets: [".moon-hallo", ".moon", ".cloud", ".stars"],
  autoplay: false,
  translateX: [0, 200],
  opacity: [1, 0],
  // easing: "easeInOutSine",
};

const starsAnime = {
  targets: [".cloud", ".stars"],
  autoplay: false,
  translateY: [200, 0],
  opacity: [0, 1],
  // easing: "easeInOutSine",
};

function SunMoon({ position }) {
  const { active, setActive } = useContext(ThemeContext);
  const { animeRef: sunRef } = useAnime(sunAnime);
  const { animeRef: moonRef } = useAnime(showMoonAnime);
  const { animeRef: hideMoonRef } = useAnime(hideMoonAnime);
  const { animeRef: starsRef } = useAnime(starsAnime);

  useEffect(() => {
    clickHandler();
  }, [active]);

  const clickHandler = async () => {
    if (active) {
      console.log("sun");
      await sunRef.current.play();
      await hideMoonRef.current.play();
    } else {
      console.log("moon");
      await moonRef.current.play();
      await starsRef.current.play();
    }
  };

  const style = css`
    /* .stars {
      opacity: 0;
    } */

    .moon-hallo,
    .moon,
    .stars {
      ${!active ? "opacity: 0;" : "opacity: 1;"}
    }

    .sun-full {
      ${active ? "opacity: 1;" : "opacity: 0;"}
    }
  `;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50%"
      height="50%"
      fill="none"
      viewBox="0 0 400 390"
      css={[style, position]}
      onClick={() => setActive((prev) => !prev)}
    >
      <g id="solokuluna" clipPath="url(#clip0_632_486)">
        <path fill={false ? "#2A3D45" : ""} d="M0 0H399.213V390H0z"></path>
        <g id="Group 18">
          <g id="5">
            <g className="moonandhallo">
              <g
                className="clouds"
                id="clouds"
                filter="url(#filter0_b_632_486)"
              >
                <g id="clouds_2" filter="url(#filter1_i_632_486)">
                  <path
                    fill="url(#paint0_linear_632_486)"
                    d="M322.376 183.679c.302-1.711.459-3.47.459-5.265 0-16.797-13.754-30.414-30.719-30.414-12.613 0-23.45 7.526-28.181 18.289a21.844 21.844 0 00-14.241-5.255c-12.118 0-21.942 9.835-21.942 21.966 0 .676.031 1.344.09 2.004-5.829 2.827-9.842 8.758-9.842 15.617 0 9.598 7.859 17.379 17.554 17.379h82.892c9.695 0 17.554-7.781 17.554-17.379 0-8.261-5.821-15.176-13.624-16.942z"
                  ></path>
                </g>
              </g>
              <g
                className="moon-hallo"
                id="moon-hallo"
                filter="url(#filter2_f_632_486)"
              >
                <path
                  fill="#FFEE94"
                  d="M225.855 131.134c-25.067 34.034-29.413 80.48-7.301 118.78 22.112 38.299 64.509 57.758 106.516 53.067-8.932 12.127-20.494 22.678-34.428 30.723-53.038 30.621-120.346 13.334-150.338-38.613-29.991-51.946-11.308-118.881 41.73-149.502 13.933-8.045 28.852-12.783 43.821-14.455z"
                ></path>
              </g>
              <g className="moon" id="moon" filter="url(#filter3_i_632_486)">
                <path
                  fill="url(#paint1_linear_632_486)"
                  d="M223.517 145.476c-22.881 31.067-26.849 73.465-6.664 108.426 20.185 34.961 58.886 52.724 97.232 48.441-8.154 11.07-18.708 20.701-31.428 28.045-48.414 27.952-109.856 12.172-137.233-35.247-27.377-47.418-10.323-108.518 38.092-136.471 12.719-7.343 26.338-11.668 40.001-13.194z"
                ></path>
              </g>
              <g
                className="clouds"
                id="clouds_3"
                filter="url(#filter4_b_632_486)"
              >
                <g id="clouds_4" filter="url(#filter5_i_632_486)">
                  <path
                    fill="url(#paint2_linear_632_486)"
                    d="M208.68 313.253c.449-2.552.684-5.178.684-7.858 0-25.071-20.514-45.395-45.819-45.395-18.811 0-34.975 11.232-42.032 27.297a32.561 32.561 0 00-21.24-7.842c-18.075 0-32.727 14.678-32.727 32.785 0 1.009.045 2.006.134 2.991C58.986 319.45 53 328.303 53 338.541c0 14.326 11.722 25.94 26.182 25.94h123.636c14.46 0 26.182-11.614 26.182-25.94 0-12.33-8.683-22.651-20.32-25.288z"
                  ></path>
                </g>
              </g>
              <g className="stars" id="1" filter="url(#filter6_di_632_486)">
                <path
                  fill="url(#paint3_linear_632_486)"
                  d="M247.765 61.382c-10.516 4.67-14.621 8.616-18.383 18.383-2.996-9.465-6.68-13.686-18.382-18.383C223.038 57.46 226.305 52.92 229.382 43c3.782 9.143 6.117 14.132 18.383 18.382z"
                ></path>
              </g>
              <g className="stars" id="1_2" filter="url(#filter7_di_632_486)">
                <path
                  fill="url(#paint4_linear_632_486)"
                  d="M140.765 148.382c-10.516 4.67-14.621 8.616-18.383 18.383-2.996-9.465-6.68-13.686-18.382-18.383 12.038-3.922 15.305-8.462 18.382-18.382 3.782 9.143 6.117 14.132 18.383 18.382z"
                ></path>
              </g>
              <g className="stars" id="1_3" filter="url(#filter8_di_632_486)">
                <path
                  fill="url(#paint5_linear_632_486)"
                  d="M313.382 267.765c-10.516 4.669-14.62 8.616-18.382 18.382-2.996-9.465-6.68-13.686-18.383-18.382 12.038-3.922 15.305-8.463 18.383-18.383 3.781 9.143 6.116 14.133 18.382 18.383z"
                ></path>
              </g>
            </g>
          </g>
          <g className="sun-full" id="3">
            <g id="sunandhallo">
              <g
                className="suns-hallo"
                id="sun-hallo"
                filter="url(#filter9_f_632_486)"
              >
                <rect
                  width="240"
                  height="226"
                  x="87"
                  y="99"
                  fill="#FFEF9A"
                  rx="94"
                ></rect>
              </g>
              <g className="sun" id="sun" filter="url(#filter10_i_632_486)">
                <path
                  fill="url(#paint6_linear_632_486)"
                  d="M311 230c0 57.438-46.562 104-104 104s-104-46.562-104-104 46.562-104 104-104 104 46.562 104 104z"
                ></path>
              </g>
            </g>
            <g
              className="sun-cloud"
              id="clouds_5"
              filter="url(#filter11_b_632_486)"
            >
              <g id="clouds_6" filter="url(#filter12_i_632_486)">
                <path
                  fill="url(#paint7_linear_632_486)"
                  d="M238.445 281.828c.588-3.347.894-6.79.894-10.304 0-32.874-26.808-59.524-59.876-59.524a59.902 59.902 0 00-54.929 35.793c-7.47-6.411-17.164-10.283-27.757-10.283-23.62 0-42.769 19.247-42.769 42.99 0 1.322.06 2.63.176 3.922C42.823 289.954 35 301.562 35 314.986 35 333.772 50.319 349 69.215 349h161.57C249.681 349 265 333.772 265 314.986c0-16.167-11.346-29.7-26.555-33.158z"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_b_632_486"
          width="172"
          height="124"
          x="191"
          y="121"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImage"
            stdDeviation="13.5"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_632_486"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_632_486"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter1_i_632_486"
          width="118"
          height="80"
          x="218"
          y="148"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="11"></feOffset>
          <feGaussianBlur stdDeviation="5"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
          <feBlend in2="shape" result="effect1_innerShadow_632_486"></feBlend>
        </filter>
        <filter
          id="filter2_f_632_486"
          width="305.076"
          height="323.713"
          x="72.994"
          y="78.134"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_632_486"
            stdDeviation="26.5"
          ></feGaussianBlur>
        </filter>
        <filter
          id="filter3_i_632_486"
          width="181.723"
          height="202.735"
          x="132.362"
          y="145.476"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="4"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0"></feColorMatrix>
          <feBlend in2="shape" result="effect1_innerShadow_632_486"></feBlend>
        </filter>
        <filter
          id="filter4_b_632_486"
          width="230"
          height="158.481"
          x="26"
          y="233"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImage"
            stdDeviation="13.5"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_632_486"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_632_486"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter5_i_632_486"
          width="176"
          height="114.481"
          x="53"
          y="260"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="11"></feOffset>
          <feGaussianBlur stdDeviation="5"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
          <feBlend in2="shape" result="effect1_innerShadow_632_486"></feBlend>
        </filter>
        <filter
          id="filter6_di_632_486"
          width="54.3"
          height="56.532"
          x="202.233"
          y="43"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="11"></feOffset>
          <feGaussianBlur stdDeviation="4.384"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0.285052 0 0 0 0 0.179688 0 0 0 0 0.9375 0 0 0 1 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_632_486"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_632_486"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.44 0"></feColorMatrix>
          <feBlend in2="shape" result="effect2_innerShadow_632_486"></feBlend>
        </filter>
        <filter
          id="filter7_di_632_486"
          width="54.3"
          height="56.532"
          x="95.233"
          y="130"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="11"></feOffset>
          <feGaussianBlur stdDeviation="4.384"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0.285052 0 0 0 0 0.179688 0 0 0 0 0.9375 0 0 0 0.28 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_632_486"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_632_486"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.44 0"></feColorMatrix>
          <feBlend in2="shape" result="effect2_innerShadow_632_486"></feBlend>
        </filter>
        <filter
          id="filter8_di_632_486"
          width="54.3"
          height="56.532"
          x="267.85"
          y="249.382"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="11"></feOffset>
          <feGaussianBlur stdDeviation="4.384"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0.285052 0 0 0 0 0.179688 0 0 0 0 0.9375 0 0 0 0.8 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_632_486"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_632_486"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.44 0"></feColorMatrix>
          <feBlend in2="shape" result="effect2_innerShadow_632_486"></feBlend>
        </filter>
        <filter
          id="filter9_f_632_486"
          width="394"
          height="380"
          x="10"
          y="22"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_632_486"
            stdDeviation="38.5"
          ></feGaussianBlur>
        </filter>
        <filter
          id="filter10_i_632_486"
          width="208"
          height="213"
          x="103"
          y="126"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="5"></feOffset>
          <feGaussianBlur stdDeviation="9"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.81 0"></feColorMatrix>
          <feBlend in2="shape" result="effect1_innerShadow_632_486"></feBlend>
        </filter>
        <filter
          id="filter11_b_632_486"
          width="284"
          height="191"
          x="8"
          y="185"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImage"
            stdDeviation="13.5"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_632_486"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_632_486"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter12_i_632_486"
          width="230"
          height="147"
          x="35"
          y="212"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="11"></feOffset>
          <feGaussianBlur stdDeviation="5"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
          <feBlend in2="shape" result="effect1_innerShadow_632_486"></feBlend>
        </filter>
        <linearGradient
          id="paint0_linear_632_486"
          x1="225.505"
          x2="344.487"
          y1="211.75"
          y2="122.711"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.58"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_632_486"
          x1="228.5"
          x2="192.175"
          y1="129"
          y2="348.951"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFEE94"></stop>
          <stop offset="1" stopColor="#F90"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_632_486"
          x1="64.194"
          x2="241.749"
          y1="355.152"
          y2="222.375"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.58"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear_632_486"
          x1="224.064"
          x2="241.366"
          y1="81.487"
          y2="49.003"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F90"></stop>
          <stop offset="1" stopColor="#FFEE94"></stop>
        </linearGradient>
        <linearGradient
          id="paint4_linear_632_486"
          x1="117.064"
          x2="134.366"
          y1="168.487"
          y2="136.003"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F90"></stop>
          <stop offset="1" stopColor="#FFEE94"></stop>
        </linearGradient>
        <linearGradient
          id="paint5_linear_632_486"
          x1="286.064"
          x2="303.366"
          y1="269.487"
          y2="237.003"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F90"></stop>
          <stop offset="1" stopColor="#FFEE94"></stop>
        </linearGradient>
        <linearGradient
          id="paint6_linear_632_486"
          x1="191.203"
          x2="276.772"
          y1="286.608"
          y2="136.532"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F90"></stop>
          <stop offset="1" stopColor="#FFEE94"></stop>
        </linearGradient>
        <linearGradient
          id="paint7_linear_632_486"
          x1="49.629"
          x2="282.224"
          y1="336.768"
          y2="163.419"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.58"></stop>
        </linearGradient>
        <clipPath id="clip0_632_486">
          <path fill="#fff" d="M0 0H399.213V390H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default SunMoon;
