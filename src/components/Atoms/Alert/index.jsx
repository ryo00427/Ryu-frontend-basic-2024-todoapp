import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";

const Alert = ({ text, isOpen }) => {
  return (
    <Wrapper aria-hidden={!isOpen} $isOpen={isOpen}>
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
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.5s ease, visibility 0.3s ease;
  z-index: 9999;

  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    top: 40px;
    left: 50%;
    transform: translateX(-50%)
      translateY(${(props) => (props.$isOpen ? "0" : "-10px")});
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
`;

const Content = styled.div`
  background-color: ${COLOR.RED};
  color: ${COLOR.WHITE};
  padding: 12px 24px;
  border-radius: 8px;
  width: 360px;
  max-width: 100%;
  margin: 0 auto; // ← 枠は中央揃え
  box-sizing: border-box;
  ${TEXT.S};

  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    width: 280px;
    max-width: 100;
  }
`;

const TextWrapper = styled.div`
  text-align: left;
  word-break: break-word;
`;

export default Alert;
