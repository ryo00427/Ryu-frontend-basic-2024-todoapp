import React, { createContext, useContext, useState, useRef } from "react";

const AlertHandlerContext = createContext();

const AlertHandlerProvider = ({ children }) => {
  const [alertState, setAlertState] = useState({
    visible: false,
    errorText: "",
  });

  const timeoutRef = useRef(null); // ← タイマーIDを保存

  const setAlert = (errorText) => {
    setAlertState({
      visible: true,
      errorText: errorText,
    });

    // 前回のタイマーをクリア
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // 新しいタイマーをセット
    timeoutRef.current = setTimeout(() => {
      setAlertState({
        visible: false,
        errorText: "",
      });
      timeoutRef.current = null;
    }, 5000);
  };

  const closeAlert = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setAlertState((prev) => ({
      ...prev,
      visible: false,
      // errorText はそのまま残す！
    }));
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
