import React from "react";
import { useCountdown } from "./use-countdown";
import styled from "styled-components";

const Stroke = styled.span`
  -webkit-text-stroke: 0.2px #000;
`;

const ListItem = styled.li`
  display: inline-block;
  font-size: 1.5em;
  list-style-type: none;
  padding: 0.5em;
  margin: 0.5em;
  text-transform: uppercase;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  span {
    display: block;
    font-size: 4.5rem;
  }
`;

export const Countdown = ({ whenDone }) => {
  const { hours, days, minutes, seconds, done } = useCountdown(1594339200000);
  if (done) {
    whenDone();
  }

  return (
    <div className="countdown">
      <ul>
        <ListItem color="#5362f6">
          <span id="days">{days}</span>Dagar
        </ListItem>
        <ListItem color="#ed625c">
          <span id="hours">{hours}</span>Timmar
        </ListItem>
        <ListItem color="#ffd913">
          <span id="minutes">{minutes}</span>Minuter
        </ListItem>
        <ListItem color="#ff9c55">
          <span id="seconds">{seconds}</span>Sekunder
        </ListItem>
      </ul>
    </div>
  );
};
