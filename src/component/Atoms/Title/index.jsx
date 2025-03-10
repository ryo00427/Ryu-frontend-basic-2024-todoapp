import React from "react";
import styled from "styled-components";
export const Title = () => {
  return <StyledText>SIMPLE TODO APP</StyledText>;
}
const StyledText = styled.div`
  font-family: "ROBOTO";
  font-size:36px;
  line-height:52px;
  color: white;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 35px;
  }
`;