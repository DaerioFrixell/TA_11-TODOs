import { createContext } from 'react';
import { TabsContextProps } from './type/tabsContext';

export const TabsContext = createContext<TabsContextProps | undefined>(undefined);