import { tabList } from "../tabs/tabList";
import { useTabs } from "../tabs/hooks";
import { useConditions } from "./hooks";
import { TodoItem } from "../todo-item";
import { useSelector } from 'react-redux';

import type { RootState } from '../../../store/store';

type TodosProps = {
  id: number
  text: string
  checked: boolean
  deleted: boolean
}

export const TodoList = () => {
  const todosSelector = useSelector((state: RootState) => state.todo)
  const { currentTab } = useTabs();
  const { activeTodos, allTodos, completedTodos, deletedTodos } = useConditions(todosSelector);

  const todoMap: Record<string, TodosProps[]> = {
    [tabList[0]]: activeTodos,
    [tabList[1]]: allTodos,
    [tabList[2]]: completedTodos,
    [tabList[3]]: deletedTodos,
  };

  return (
    <>
      {todoMap[currentTab]?.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
};