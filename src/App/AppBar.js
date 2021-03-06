import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "./AppProvider";

const Logo = styled.div`
  font-size: 2.5rem;
`;

const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: 180px auto 100px 100px;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      text-shadow: 0px 0px 10px #e3a829;
      color: #e3a829;
    `}
  ${(props) =>
    props.hidden &&
    css`
      display: none;
    `}
`;

function toProperCase(lower) {
  return lower.charAt(0).toUpperCase() + lower.substring(1);
}

function ControlButton({ name }) {
  return (
    <AppContext.Consumer>
      {({ firstVisit, page, setPage }) => (
        <ControlButtonElem
          active={page === name}
          onClick={() => setPage(name)}
          hidden={firstVisit && name === "dashboard"}
        >
          {toProperCase(name)}
        </ControlButtonElem>
      )}
    </AppContext.Consumer>
  );
}

export default function () {
  return (
    <Bar>
      <Logo> CryptoDash </Logo>
      <div />
      <ControlButton active name="dashboard" />
      <ControlButton name="settings" />
    </Bar>
  );
}
