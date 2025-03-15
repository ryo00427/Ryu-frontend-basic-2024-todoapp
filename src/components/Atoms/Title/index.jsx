import React from "react";
import styled from "styled-components";
import FONTFAMILY from '../../../variables/font_family.js';
import COLOR from "../../../variables/color";
import TEXTS from "../../../variables/texts.js";

export const Title = () => {
    return <StyledText>SlMPLE TODO APP</StyledText>
}

const StyledText = styled.div`
   font-family: ${FONTFAMILY.ROBOTO};
   ${TEXTS.L};
  color: ${COLOR.WHITE};

  @media (max-width: 768px) {
     ${TEXTS.M};  
  }
`;