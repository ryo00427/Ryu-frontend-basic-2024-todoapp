import React from "react";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint";
import { Title } from "../../Atoms/Title";
import { TodoCard } from "../../Organisms/TodoCard";
const MainPage = () => {
  return (
    <StyledWrapper>
      <Title />
      <StyledTaskList>
        <TodoCard />
      </StyledTaskList>
    </StyledWrapper>
  );
};
export default MainPage;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
  @media (min-width: ${BREAKPOINT.MEDIUM}) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 60px 20px 10px;
  }
`;

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: ${BREAKPOINT.MEDIUM}) {
    display: flex;
    flex-direction: column;
    width: 30%;
  }
`;
