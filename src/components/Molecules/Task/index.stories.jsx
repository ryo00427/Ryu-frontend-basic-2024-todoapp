import { Task } from "./index";

export default { component: Task };

export const Default = {
    args: {
      taskName: "taskName",
      onTaskNameChange: (newName) => console.log("taskname changed", newName),
      onTaskComplete: () => console.log("Task completed"),
      defaultIsEditing: false,
    },
  };