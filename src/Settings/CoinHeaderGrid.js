import React from "react";
import styled from "styled-components";
import { DeletableTile } from "../Shared/Tile";

export const CoinHeaderGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const CoinSymbol = styled.div`
  justify-self: right;
  font-weight: 700;
`;

export const CoinName = styled.div`
  font-weight: 300;
  font-size: 0.7vw;
`;

const DeleteIcon = styled.div`
  justify-self: right;
  display: none;
  ${DeletableTile}:hover & {
    display: block;
    color: red;
  }
`;

export default function ({ name, symbol, topSection }) {
  return (
    <CoinHeaderGridStyled>
      <CoinName>
        {" "}
        {name}{" "}
        <div>
          <br></br>
        </div>{" "}
      </CoinName>
      {topSection ? (
        <DeleteIcon>
          <b>X</b>{" "}
        </DeleteIcon>
      ) : (
        <CoinSymbol> {symbol} </CoinSymbol>
      )}
    </CoinHeaderGridStyled>
  );
}
