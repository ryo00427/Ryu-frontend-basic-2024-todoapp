import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";

const Alert = ({ text, isOpen }) => {
  return <StyledAlert isOpen={isOpen}>{text}</StyledAlert>;
};

const StyledAlert = styled.div`
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  padding: 16px 24px;
  background-color: ${COLOR.RED};
  color: ${COLOR.WHITE};
  border-radius: 8px;
  ${TEXT.M}
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transform: ${(props) =>
    props.isOpen ? "translate(-50%, 0)" : "translate(-50%, -20px)"};
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 9999;

  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    top: 40px;
    left: 20px;
    right: 20px;
    transform: ${(props) =>
      props.isOpen ? "translateY(0)" : "translateY(-20px)"};
  }
`;
export default Alert;
