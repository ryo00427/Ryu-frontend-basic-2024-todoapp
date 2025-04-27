import React, { useEffect } from "react";
import Alert from "../../Atoms/Alert";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";

const AlertManager = () => {
  const { visible, errorText, closeAlert } = useAlertHandlerContext();

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        closeAlert();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [visible, closeAlert]);

  return <Alert text={errorText} isOpen={visible} />;
};
export default AlertManager;
