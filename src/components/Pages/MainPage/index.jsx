import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import { Title } from "../../Atoms/Title";
import { TodoCard } from "../../Molecules/TodoCard";
export const MainPage = ()=> {
  return (
    <StyledWrapper>
     <Title/>
     <TodoCard/>
   </StyledWrapper>
);
  
};
const StyledWrapper = styled.div`
  display: flex;
  padding: 20px;
  overflow: hidden;
  background-color: ${COLOR.BLACK};
  border-radius: 2px;
  gap: 0px;
  border: none;
  outline: none;
  width: 100%;
  flex-direction: column;
  margin-top: 10px;
`;

const StyledTaskList = styled.div`
  background-color: ${COLOR.BLACK};
  border-radius: 2px;
  padding: 4 4px;
  border: none;
  outline: none;
  width: 100%;
  flex-direction: column
`;