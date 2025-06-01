import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";

const Alert = ({ text, isOpen }) => {
  return (
    <Wrapper $isOpen={isOpen}>
      <Content>
        <TextWrapper>{text || ""}</TextWrapper>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%)
    translateY(${(props) => (props.$isOpen ? "0" : "-10px")});
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  pointer-events: none;
  transition: all 0.5s ease;
  z-index: 9999;

  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    top: 40px;
  }
`;

const Content = styled.div`
  background-color: ${COLOR.RED};
  color: ${COLOR.WHITE};
  padding: 12px 24px;
  border-radius: 8px;
  width: 360px;
  max-width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  ${TEXT.S};

  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    width: 280px;
    padding: 12px 16px;
  }
`;

const TextWrapper = styled.div`
  text-align: left;
  word-break: break-word;
`;

export default Alert;
