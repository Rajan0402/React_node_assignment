import { createContext } from "react";

const NotiContext = createContext({
  openNotification: (message, placement) => {},
});

export default NotiContext;
