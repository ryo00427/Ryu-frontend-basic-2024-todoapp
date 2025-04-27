import React, { useState, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import { AddTaskButton } from "../../Atoms/AddTaskButton";
import { Task } from "../../Molecules/Task";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
export const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);
  const { setAlert } = useAlertHandlerContext();
  useEffect(() => {
    const savedTasks = localStorage.getItem("taskList");
    if (savedTasks) {
      setTaskList(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    let isMounted = true;
    const savedTasks = localStorage.getItem("taskList");
    if (savedTasks && isMounted) {
      setTaskList(JSON.parse(savedTasks));
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const onAddTaskButtonClick = () => {
    setTaskList([...taskList, { name: "", initializing: true }]);
  };

  const onTaskComplete = (index) => {
    setTaskList(taskList.filter((_, i) => i !== index));
  };

  const onTaskNameChange = (value, index) => {
    if (value.trim() === "") {
      setTaskList((prevTaskList) => prevTaskList.filter((_, i) => i !== index));

      setTimeout(() => {
        setAlert("タスクの名前が設定されていません");
      }, 0);

      return;
    }
    setTaskList((prevTaskList) =>
      prevTaskList.map((task, i) =>
        i === index ? { ...task, name: value, initializing: false } : task
      )
    );
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

export default TodoCard;

const StyledWrapper = styled.div`
  padding: 20px;
  background-color: ${COLOR.LIGHT_BLACK};
  width: auto;
`;

const StyledTaskList = styled.div`
  display: flex;
  padding: 10px 0px 0px 0px;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;
