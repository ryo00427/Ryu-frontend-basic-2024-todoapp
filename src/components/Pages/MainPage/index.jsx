import React from "react";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint";
import { Title } from "../../Atoms/Title";
import { TodoCard } from "../../Organisms/TodoCard";
export const MainPage = () => {
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
  padding: 20px;
  gap: 10px;
  @media (min-width: ${BREAKPOINT.MEDIUM}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 60px 20px 10px;
  }
`;

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 93%;
  flex-direction: column;
  @media (min-width: ${BREAKPOINT.MEDIUM}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
  }
`;
