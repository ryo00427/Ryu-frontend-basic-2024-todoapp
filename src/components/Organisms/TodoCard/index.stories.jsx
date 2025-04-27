import React from "react";
import AlertHandlerProvider from "../../../contexts/alert_handler";
import AlertManager from "../../Organisms/AlertManager";
import { TodoCard } from "./index";
export default { component: TodoCard };

export const Default = {};
Default.decorators = [
  (Story) => (
    <AlertHandlerProvider>
      <Story />
      <AlertManager />
    </AlertHandlerProvider>
  ),
];
