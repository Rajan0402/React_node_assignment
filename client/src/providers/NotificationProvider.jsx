import { notification } from "antd";
import NotiContext from "../context/notificationContext";
import { CheckCircleFilled } from "@ant-design/icons";

export const NotificatioProvider = ({ children }) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (message, placement) => {
    api.info({
      message,
      placement,
      icon: <CheckCircleFilled style={{ color: "#00b96b", fontSize: 20 }} />,
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
