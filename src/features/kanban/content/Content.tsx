import { Tabs } from "../tabs";
import { TodoList } from "../todo-list";
import { TabsProvider } from "../tabs-context/providerContext";

import './content.scss';

export const Content = () => {
  return (
    <div className="content">
      <TabsProvider>
        <Tabs />
        <TodoList />
      </TabsProvider>
    </div>
  )
}