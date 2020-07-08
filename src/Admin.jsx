import React, { Fragment } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { listenOnChanges, writeUserData } from "./store";
import { useState } from "react";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Admin = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    listenOnChanges(setPlayers);
  }, []);

  const handleAddPoints = (player) => {
    const newPoints = player.points + 1;
    writeUserData(player.index, player.name, newPoints);
  };

  const handleRemovePoints = (player) => {
    const newPoints = player.points - 1;
    writeUserData(player.index, player.name, newPoints);
  };

  return (
    <div>
      <h1>Admin</h1>
      <Container>
        <div>Namn</div>
        <div>Poäng</div>

        {players.map((player, idx) => {
          return (
            <Fragment key={player.index}>
              <div>{player.name}</div>
              <div>
                {player.points}
                <button
                  onClick={() => {
                    handleAddPoints(player);
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    handleRemovePoints(player);
                  }}
                >
                  -
                </button>
              </div>
            </Fragment>
          );
        })}
      </Container>
    </div>
  );
};
