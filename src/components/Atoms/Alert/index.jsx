import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";

const Alert = ({ text, isOpen }) => {
  return (
    <Wrapper aria-hidden={!isOpen} $isOpen={isOpen}>
      <Content>
        <span aria-hidden={!isOpen}>{text || ""}</span>
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
    left: 20px;
    right: 20px;
    transform: ${(props) =>
      props.$isOpen ? "translateY(0)" : "translateY(-10px)"};
  }
`;

const Content = styled.div`
  background-color: ${COLOR.RED};
  color: ${COLOR.WHITE};
  padding: 12px 24px;
  border-radius: 6px;
  min-width: 200px;
  min-height: 40px;
  box-sizing: border-box;
  text-align: center;
  ${TEXT.S}
`;

export default Alert;
