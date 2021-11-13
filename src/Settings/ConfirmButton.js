import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";
import {
  fontSize1,
  greenBoxShadow,
  orangeBoxShadow,
  color3,
} from "../Shared/Styles";

const ConfirmedButtonStyled = styled.div`
  margin: 20px;
  color: #e3a829;
  ${fontSize1}
  padding: 5px;
  cursor: pointer;
  &:hover {
    ${orangeBoxShadow}
  }
`;

export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

export default function () {
  return (
    <AppContext.Consumer>
      {({ confirmFavorites }) => (
        <CenterDiv>
          <ConfirmedButtonStyled onClick={confirmFavorites}>
            Confirm Favorites
          </ConfirmedButtonStyled>
        </CenterDiv>
      )}
    </AppContext.Consumer>
  );
}
