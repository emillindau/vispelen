/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import styled from "styled-components";

const InfoBlock = styled.div`
  background-color: #fff;
  margin: 1em;
  padding: 1em;
  font-family: "Archivo", sans-serif;
  font-size: 16px;
  line-height: 1.15;
`;

export const Info = () => {
  return (
    <InfoBlock>
      <h1>Information</h1>
      <p>
        Hej! Den stora Vibergsönhelgen är på ingång och för att öka spänningen
        vore det superkul att tillsammans med allihopa arrangera de allra första
        Vibergsönspelen!
      </p>
      <p>
        Upplägget är enkelt, en form av 7- kamp där vi tar oss igenom en rad av
        tävlingar och samlar poäng, den person med flest poäng på slutet vinner
        ett åtråvärt pris.
      </p>
      <p>
        För att skapa bredd i tävligen och säkerställa att det blir kul för
        samtliga så delegerar vi ut så att varje par ansvarar för varsin gren.
        Vilken typ av gren är helt och hållet upp till varje par
      </p>
      <p>
        (quiz, kast med liten boll, åka SUP, skära tomater, justera glasögon osv
        osv - endast fantasin sätter gränser)
      </p>
      <p>
        men tänk på: - Samtliga ska kunna medverka (inget under vatten etc) -
      </p>
      <p>
        Tävlingen ska ta ca 15 min att genomföra - Poängnivåer som delas ut är 5
        poäng till ettan, 4 poäng till tvåan, 3 poäng till trean osv - Uppenbart
        jäv ger poängavdrag! - Du deltar ej i din egen tävling
      </p>
      <p>
        Tävligen arrangeras i par, men poänginsamling sker på individuell nivå.
      </p>
      <p>Paren som arrangerar tävlingar är: </p>
      <ul>
        <li>Camilla och Pelle</li>
        <li>Jens och Christina</li>
        <li>Sissela och Jonas (och Ebba)</li>
        <li>Filippa och Emil</li>
        <li>Tobias och Ida (och Baxter)</li>
        <li>Jocke och Vera</li>
        <li>Matilda och Emil</li>
      </ul>
      <p>
        Återkom med OK och typ av tävling (fysisk, quiz etc) ni tänker er till
        mig senast den 9 juli, så ser jag till att fixa körschema.
      </p>
      <p>Lycka till och kör hårt! Låt bästa man eller kvinna vinna! 🏆🍾💫</p>
    </InfoBlock>
  );
};
