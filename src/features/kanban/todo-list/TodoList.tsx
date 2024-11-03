import { tabList } from "../tabs/tabList";
import { useTabs } from "../tabs/hooks";
import { useConditions } from "./hooks";
import { TodoItem } from "../todo-item";
import { useSelector } from 'react-redux';
import { TodoListProps } from "../../type/todo";

import type { RootState } from '../../../store/store';
import { useEffect, useMemo } from "react";

export const TodoList = () => {
  const todosSelector = useSelector((state: RootState) => state.todo)

  const { currentTab, setTodosCount } = useTabs();
  const { activeTodos, allTodos, completedTodos, deletedTodos } = useConditions(todosSelector);

  const memoizedTodo = useMemo(() => {
    const todoMap: Record<string, TodoListProps> = {
      [tabList[0].value]: activeTodos,
      [tabList[1].value]: allTodos,
      [tabList[2].value]: completedTodos,
      [tabList[3].value]: deletedTodos,
    };
    return todoMap[currentTab];
  }, [currentTab, activeTodos, allTodos, completedTodos, deletedTodos]);

  useEffect(() => {
    setTodosCount({
      active: activeTodos.length,
      all: allTodos.length,
      completed: completedTodos.length,
      deleted: deletedTodos.length,
    });
  }, [activeTodos, completedTodos, deletedTodos, todosSelector, setTodosCount, allTodos.length]);

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