import styled from "styled-components";
import {
  subtleBoxShadow,
  tileColour,
  greenBoxShadow,
  redBoxShadow,
  smoothShadow,
} from "./Styles";

export const Tile = styled.div`
  ${subtleBoxShadow}
  ${tileColour}
  border-radius:0px;
  border-radius: 15px;
  padding: 10px;
  transition: all 0.5s ease-in-out;
  ${smoothShadow}
`;

export const SelectableTile = styled(Tile)`
  background: #2b3f5e;
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-0%, -20%);
    opacity: 70;
  }
`;

export const DeletableTile = styled(SelectableTile)`
  &:hover {
    cursor: pointer;
    ${redBoxShadow}
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-5%, -20%);
    opacity: 70;
  }
`;

export const DisabledTile = styled(Tile)`
  pointer-events: none;
  opacity: 0.4;
`;

export const HighlightTile = styled.div`
  ${subtleBoxShadow}
  ${tileColour}
  border-radius: 25px;
  background-color: beige;
  border-radius: 15px;
  padding: 10px;
  transition: all 0.5s ease-in-out;
`;
