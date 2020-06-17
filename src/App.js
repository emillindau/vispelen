import "./App.css";
import React from "react";
import styled from "styled-components";
import { useImage } from "./use-image";
import { Countdown } from "./Countdown";

const Fullscreen = styled.div`
  width: 100vw;
  height: 100vh;

  div::after {
    content: "";
    background: ${(props) => `url(${props.url}) no-repeat center center fixed`};
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    transition: background-image 0.3s ease-in-out;
    opacity: 0.75;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;

const Title = styled.h1`
  margin: 0;
  padding-top: 1em;
  font-size: 65px;
  text-transform: uppercase;
  font-family: "Archivo Black", "Archivo", sans-serif;
  font-weight: normal;
  display: block;
  min-height: 90px;
  height: auto;
  text-align: center;

  span {
    color: #5362f6;
    text-shadow: ${(props) => props.textShadows[0]};
    position: relative;
    animation: scatter 1.75s infinite;
  }

  span:nth-child(2n) {
    color: #ed625c;
    text-shadow: ${(props) => props.textShadows[1]};
    animation-delay: 0.3s;
  }

  span:nth-child(3n) {
    color: #ffd913;
    text-shadow: ${(props) => props.textShadows[2]};
    animation-delay: 0.15s;
  }

  span:nth-child(5n) {
    color: #555bff;
    text-shadow: ${(props) => props.textShadows[3]};
    animation-delay: 0.4s;
  }

  span:nth-child(7n),
  span:nth-child(11n) {
    color: #ff9c55;
    text-shadow: ${(props) => props.textShadows[4]};
    animation-delay: 0.25s;
  }

  @media screen and (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @media screen and (max-width: 768px) {
    font-size: 28px;
    margin: 1rem auto;
  }

  @keyframes scatter {
    0% {
      top: 0;
    }
    50% {
      top: -10px;
    }
    100% {
      top: 0;
    }
  }
`;

const Header = styled.header`
  padding-top: 15px;
  text-align: center;
  text-transform: uppercase;
  font-size: 15px;
  font-family: "Roboto Condensed", Arial, Helvetica, sans-serif;
  font-weight: 400;
  line-height: 15px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  color: #fafafa;
`;

const HiddenNextImage = styled.img`
  display: none;
`;

const START_IMAGE = 1;
const END_IMAGE = 32;
const IMAGES = [];
const loadImage = async (imageName) => {
  try {
    const img = await import(`./images/${imageName}.png`);
    IMAGES.push(img.default);
  } catch (e) {
    console.log("error", e);
  }
};

for (let i = START_IMAGE; i <= END_IMAGE; i++) {
  loadImage(i);
}

function textShadow(precision, size, color) {
  let value = [];
  let offset = 0;
  const length = size * (1 / precision) - 1;

  for (let i = 0; i <= length; i++) {
    offset = offset + precision;
    const shadow = `${offset}px ${offset}px ${color}`;
    value.push(shadow);
  }

  const rev = value.reverse();
  const res = rev.join(",");
  return res;
}

const TEXT_SHADOWS = [];
TEXT_SHADOWS.push(textShadow(0.25, 6, "#E485F8"));
TEXT_SHADOWS.push(textShadow(0.25, 6, "#F2A063"));
TEXT_SHADOWS.push(textShadow(0.25, 6, "#6EC0A9"));
TEXT_SHADOWS.push(textShadow(0.25, 6, "#E485F8"));
TEXT_SHADOWS.push(textShadow(0.25, 6, "#FF5555"));

function App() {
  const { image: imageNumber, nextImage } = useImage(START_IMAGE, END_IMAGE);
  return (
    <Fullscreen url={IMAGES[imageNumber]}>
      <Header>
        <Title textShadows={TEXT_SHADOWS}>
          <span aria-hidden="true">V</span>
          <span aria-hidden="true">i</span>
          <span aria-hidden="true">b</span>
          <span aria-hidden="true">e</span>
          <span aria-hidden="true">r</span>
          <span aria-hidden="true">g</span>
          <span aria-hidden="true">s</span>
          <span aria-hidden="true">ö</span>
          <span aria-hidden="true">n</span>
          <span aria-hidden="true">s</span>
          <span aria-hidden="true">p</span>
          <span aria-hidden="true">e</span>
          <span aria-hidden="true">l</span>
          <span aria-hidden="true">e</span>
          <span aria-hidden="true">n</span> <span aria-hidden="true">2</span>
          <span aria-hidden="true">0</span>
          <span aria-hidden="true">2</span>
          <span aria-hidden="true">0</span>
        </Title>
      </Header>
      <Countdown />
      <HiddenNextImage src={IMAGES[nextImage]} />
    </Fullscreen>
  );
}

export default App;
