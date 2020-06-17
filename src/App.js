import React, { useState, useEffect } from "react";
import "./App.css";
import { useCountdown } from "./use-countdown";
import styled from "styled-components";
import { useImage } from "./use-image";
import defaultImage from "./images/1.png";

const Fullscreen = styled.div`
  background: ${(props) => `url(${props.url}) no-repeat center center fixed`};
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  transition: background-image 0.3s ease-in-out;
`;

const Title = styled.h1`
  margin: 0;
`;

const Header = styled.header`
  padding-top: 15px;
  text-align: center;
  text-transform: uppercase;
  font-size: 15px;
  font-family: "Roboto Condensed", Arial, Helvetica, sans-serif;
  font-weight: 400;
  border-bottom: 1px solid #666;
  line-height: 15px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  color: #fafafa;
`;

const IMAGES = [];
const loadImage = async (imageName) => {
  try {
    const img = await import(`./images/${imageName}.png`);
    IMAGES.push(img.default);
  } catch (e) {
    console.log("error", e);
  }
};

for (let i = 1; i < 33; i++) {
  loadImage(i);
}

function App() {
  const { timeLeft } = useCountdown(1594339200000);
  const imageNumber = useImage();

  return (
    <Fullscreen url={IMAGES[imageNumber]}>
      <Header>
        <Title>Vibergsönspelen 2020</Title>
      </Header>
      <div className="countdown">
        <h2 className="xlarge">{timeLeft}</h2>
      </div>
    </Fullscreen>
  );
}

export default App;
