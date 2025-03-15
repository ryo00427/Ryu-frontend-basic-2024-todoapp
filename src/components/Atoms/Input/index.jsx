import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

export const Input = ({ onEditComplete, defaultValue = "" }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleBlur = () => {
    onEditComplete(ref.current.value);
  };

  const handleKeyDown = (event) => {
    if (event.key !== "Enter") return;
    onEditComplete(ref.current.value);
  };

  return (
    <StyledInput
      defaultValue={defaultValue}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      ref={ref}
    />
  );
};
export default Input;

const StyledInput = styled.input`
  background-color: ${COLOR.BLACK};
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S}
  border-radius: 2px;
  padding: 0 4px;
  border: none;
  outline: none;
  width: 100%;
`;