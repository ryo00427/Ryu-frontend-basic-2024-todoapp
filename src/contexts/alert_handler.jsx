import React, { createContext, useContext, useState } from "react";

const AlertHandlerContext = createContext();

const AlertHandlerProvider = ({ children }) => {
  const [alertState, setAlertState] = useState({
    visible: false,
    errorText: "",
  });

  const setAlert = (errorText) => {
    setAlertState({
      visible: true,
      errorText: errorText,
    });

    // 3秒後に自動で非表示にする
    setTimeout(() => {
      setAlertState({
        visible: false,
        errorText: "",
      });
    }, 3000);
  };

  const closeAlert = () => {
    setAlertState({
      visible: false,
      errorText: "",
    });
  };

  const contextValue = {
    ...alertState,
    setAlert,
    closeAlert,
  };

  return (
    <AlertHandlerContext.Provider value={contextValue}>
      {children}
    </AlertHandlerContext.Provider>
  );
};

export const useAlertHandlerContext = () => useContext(AlertHandlerContext);
export default AlertHandlerProvider;
