import { Tabs } from "../tabs"
import { TodoList } from "../todo-list"
import { TabsProvider } from "../tabs-context/providerContext"

export const Content = () => {
  return (
    <div>
      <TabsProvider>
        <Tabs />
        <TodoList />
      </TabsProvider>
    </div>
  )
}