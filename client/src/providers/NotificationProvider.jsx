import { notification } from "antd";
import NotiContext from "../context/notificationContext";

export const NotificatioProvider = ({ children }) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (message, placement) => {
    api.info({
      message,
      placement,
    });
  };
  const contextValue = { openNotification };

  return (
    <NotiContext.Provider value={contextValue}>
      {contextHolder}
      {children}
    </NotiContext.Provider>
  );
};
