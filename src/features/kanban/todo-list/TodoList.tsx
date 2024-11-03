import { tabList } from "../tabs/tabList";
import { useTabs } from "../tabs/hooks";
import { useConditions } from "./hooks";
import { TodoItem } from "../todo-item";
import { useSelector } from 'react-redux';
import { TodoListProps } from "../../type/todo";

import type { RootState } from '../../../store/store';
import { useMemo } from "react";

export const TodoList = () => {
  const todosSelector = useSelector((state: RootState) => state.todo)
  const { currentTab } = useTabs();
  const { activeTodos, allTodos, completedTodos, deletedTodos } = useConditions(todosSelector);

  const memoizedTodo = useMemo(() => {
    const todoMap: Record<string, TodoListProps> = {
      [tabList[0]]: activeTodos,
      [tabList[1]]: allTodos,
      [tabList[2]]: completedTodos,
      [tabList[3]]: deletedTodos,
    };
    return todoMap[currentTab];
  }, [currentTab, activeTodos, allTodos, completedTodos, deletedTodos]);

  return (
    <>
      {memoizedTodo.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          isChecked={todo.isChecked}
          isDeleted={todo.isDeleted}
        />
      ))}
    </>
  );
};