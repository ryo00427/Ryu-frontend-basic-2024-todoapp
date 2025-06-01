import React from "react";
import AlertHandlerProvider from "../../../contexts/alert_handler";
import { TodoCard } from "./index";
export default { component: TodoCard };

export const Default = {};
Default.decorators = [
  (Story) => (
    <AlertHandlerProvider>
      <Story />
    </AlertHandlerProvider>
  ),
];
