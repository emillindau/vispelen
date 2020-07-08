import React from "react";
import { InfoBlock } from "./Info";

export const Schedule = () => {
  return (
    <InfoBlock>
      <h1>Schema</h1>
      <p>
        Första spelet drar igång vid 13 - tills vi är klara med halvlekspaus och
        time out för mellis, öl och middag!{" "}
      </p>
      <p>Tävlingarna kommer hållas i följande ordning</p>
      <ol>
        <li>Pelle & Camilla</li>
        <li>Filippa & Emil</li>
        <li>Jocke & Vera</li>
        <li>Sissela & Jonas</li>
        <li>Matilda & Emil</li>
        <li>Tobbe & Ida</li>
        <li>Jens & Christina</li>
      </ol>
    </InfoBlock>
  );
};
