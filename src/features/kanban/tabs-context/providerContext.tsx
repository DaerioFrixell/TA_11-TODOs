import { FC, ReactNode, useState } from "react";
import { TabsContext } from "./createContext";
import { tabList } from "../tabs/tabList";

export const TabsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentTab, setCurrentTab] = useState(tabList[1]);

  const toSetTab = (tab: string) => {
    setCurrentTab(tab);
  };

  return (
    <TabsContext.Provider value={{ currentTab, toSetTab }}>
      {children}
    </TabsContext.Provider>
  );
};
