import { FC, ReactNode, useState } from "react";
import { TabsContext } from "./createContext";
import { tabList } from "../tabs/tabList";
import { tabListProps } from "../../type/tab";

export const TabsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentTab, setCurrentTab] = useState(tabList[1].value);
  const [todosCount, setTodosCount] = useState<Record<string, number>>({
    active: 0,
    all: 0,
    completed: 0,
    deleted: 0,
  });

  const toSetTab = (tab: tabListProps) => {
    setCurrentTab(tab.value);
  };

  return (
    <TabsContext.Provider value={{ currentTab, toSetTab, todosCount, setTodosCount }}>
      {children}
    </TabsContext.Provider>
  );
};
