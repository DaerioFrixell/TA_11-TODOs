import { useContext } from "react";
import { TabsContext } from "../../tabs-context/createContext";
import { TabsContextProps } from "../../tabs-context/type/tabsContext";

export const useTabs = (): TabsContextProps => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('Нужно использовать провайдер!');
  }

  return context;
};