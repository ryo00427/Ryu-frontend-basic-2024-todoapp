import React, { useState } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import { AddTaskButton  } from "../../Atoms/AddTaskButton";
import { Task } from "../../Molecules/Task";
export const TodoCard = ()=> {
  const [taskList, setTaskList] = useState([]);

  const onAddTaskButtonClick = () => {
    setTaskList([...taskList, { name: "", initializing: true }]);
  };

  const onTaskComplete = (index) => {
    setTaskList(taskList.filter((_, i) => i !== index));
  };

  const onTaskNameChange = (value, index) => {
    setTaskList((prevTaskList) => {
      // タスク名が空文字列なら削除
      if (value.trim() === "") {
        return prevTaskList.filter((_, i) => i !== index);
      }
      // タスク名を更新
      return prevTaskList.map((task, i) =>
        i === index ? { ...task, name: value, initializing: false } : task
      );
    });
  };

  return (
    <StyledWrapper>
  <AddTaskButton onClick={onAddTaskButtonClick} />
  <StyledTaskList>
    {taskList.map((task, index) => (
      <Task
        key={index}
        onTaskComplete={() => onTaskComplete(index)}
        onTaskNameChange={(value) => onTaskNameChange(value, index)}
        taskName={task.name}
        defaultIsEditing={task.initializing}
      />
    ))}
  </StyledTaskList>
</StyledWrapper>
  );
};

export default TodoCard

const StyledWrapper = styled.div`
  padding: 20px;
  overflow: hidden;
  background-color: ${COLOR.BLACK};
  border-radius: 2px;
  width: auto;
  flex-direction: column;
  margin-top: 0px;
`;

const StyledTaskList = styled.div`
  display: flex;
  background-color: ${COLOR.BLACK};
  border-radius: 2px;
  padding: 4px;
  border: none;
  outline: none;
  width: 100%;
  flex-direction: column
`;

