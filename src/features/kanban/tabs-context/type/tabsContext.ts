import { tabListProps } from "../../../type/tab";

export type TabsContextProps = {
  currentTab: string
  toSetTab: (tab: tabListProps) => void
  todosCount: Record<string, number>
  setTodosCount: (count: Record<string, number>) => void;
}