import React from "react";
import styled from "styled-components";
import { Title } from "../../Atoms/Title";
import { TodoCard } from "../../Organisms/TodoCard";
export const MainPage = ()=> {
  return (
    <StyledWrapper>
      <Title />
      <StyledTaskList>
        <TodoCard />
      </StyledTaskList>
    </StyledWrapper>
);
  
};
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 52px;
  gap: 10px;
  line-height: 52px;
  @media (min-width: 768px) {
        line-height: 52px;
  }
`;

const StyledTaskList = styled.div`
  align-items: center;
  width: 40%;
  flex-direction: column;
  @media (min-width: 768px) {
    align-items: center;
    line-height: 52px;
  }
`;