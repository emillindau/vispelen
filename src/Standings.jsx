import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { listenOnChanges, sortFn } from "./store";
import { Fragment } from "react";
import { InfoBlock } from "./Info";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Header = styled.div`
  font-weight: 900;
  font-size: 22px;
`;

export const Standings = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    listenOnChanges((val) => setPlayers(sortFn(val)));
  }, []);

  return (
    <InfoBlock>
      <h1>Poängställning</h1>
      <Grid>
        <Header>#</Header>
        <Header>Namn</Header>
        <Header>Poäng</Header>

        {players.map((player, idx) => {
          return (
            <Fragment key={player.index}>
              <div>{idx + 1}.</div>
              <div>{player.name}</div>
              <div>{player.points}</div>
            </Fragment>
          );
        })}
      </Grid>
    </InfoBlock>
  );
};
