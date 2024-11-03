import { useMemo } from "react";
import { TodoListProps } from "../../../type/todo";

export const useConditions = (todos: TodoListProps) => {
  const { allTodos, activeTodos, completedTodos, deletedTodos } = useMemo(() => {
    const allTodos: TodoListProps = [];
    const activeTodos: TodoListProps = [];
    const completedTodos: TodoListProps = [];
    const deletedTodos: TodoListProps = [];

    todos.forEach(todo => {
      if (todo.isDeleted) {
        deletedTodos.push(todo);
        return;
      }

      allTodos.push(todo);

      if (todo.isChecked) {
        completedTodos.push(todo);
      } else {
        activeTodos.push(todo);
      }
    });

    return { allTodos, activeTodos, completedTodos, deletedTodos };
  }, [todos]);

  return { allTodos, activeTodos, completedTodos, deletedTodos };
};