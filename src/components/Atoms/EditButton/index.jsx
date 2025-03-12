import React from "react";
import styled from "styled-components";
import pencil from "../../../assets/svg/pencil.svg";
import COLOR  from "../../../variables/color";
export const EditButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <img src={pencil} />
    </StyledButton>
  );
};


const StyledButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  width: 20px;
  height: 20px;
  background: none;
  padding: 0;
  border-radius: 50%;
  background-color: ${COLOR.LIGHT_GRAY_TRANSPARENT};
  transition: 0.2s;
  
  &:hover {
    background-color: ${COLOR.LIGHT_GRAY_TRANSLUCENT};
  }
`;
