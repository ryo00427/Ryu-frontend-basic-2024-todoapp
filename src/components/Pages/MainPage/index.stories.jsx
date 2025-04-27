import React from "react";
import MainPage from "./index";
import AlertHandlerProvider from "../../../contexts/alert_handler";
import AlertManager from "../../Organisms/AlertManager";
export default { component: MainPage };

export const Default = {};
Default.args = {};
/*以下を追加*/
Default.decorators = [
  (Story) => (
    <AlertHandlerProvider>
      <Story />
      <AlertManager />
    </AlertHandlerProvider>
  ),
];
