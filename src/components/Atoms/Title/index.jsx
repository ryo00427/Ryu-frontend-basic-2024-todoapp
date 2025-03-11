import React from "react";
import styled from "styled-components";
import FONTFAMILY from '../../variables/font_family';
import COLOR from "../../variables/color";
import TEXTS from "/variables/texts";

export const Title = () => {
    return <StyledText>SIMPLE TODO APP</StyledText>
}

const StyledText = styled.div`
  font-family: ${FONTFAMILY.ROBOTO};
  font-size: ${TEXTS.L};
  color: ${COLOR.GREEN};

  @media (max-width: 768px) {
    font-size: ${TEXTS.M};  
  }
`;