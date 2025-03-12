import React from "react";
import styled from "styled-components";
import FONTFAMILY from 'C:/Users/sugi2/OneDrive/プログラミング/Ryu-frontend-basic-2024-todoapp/src/variables/font_family.js';
import COLOR from "C:/Users/sugi2/OneDrive/プログラミング/Ryu-frontend-basic-2024-todoapp/src/variables/color.js";
import TEXTS from "C:/Users/sugi2/OneDrive/プログラミング/Ryu-frontend-basic-2024-todoapp/src/variables/texts.js";

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