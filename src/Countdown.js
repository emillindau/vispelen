import React from "react";
import { useCountdown } from "./use-countdown";
import styled from "styled-components";

const Stroke = styled.span`
  -webkit-text-stroke: 0.2px #000;
`;

export const Countdown = () => {
  const { timeLeft } = useCountdown(1594339200000);
  return (
    <div className="countdown">
      <h2 className="xlarge">
        <Stroke>{timeLeft}</Stroke>
      </h2>
    </div>
  );
};
