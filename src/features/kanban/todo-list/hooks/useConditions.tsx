import { useMemo } from "react";

type TodosProps = {
  id: number
  text: string
  checked: boolean
  deleted: boolean
}

type TodoListProps = TodosProps[];

export const useConditions = (todos: TodoListProps) => {
  const { allTodos, activeTodos, completedTodos, deletedTodos } = useMemo(() => {
    const allTodos: TodoListProps = [];
    const activeTodos: TodoListProps = [];
    const completedTodos: TodoListProps = [];
    const deletedTodos: TodoListProps = [];

    todos.forEach(todo => {
      if (todo.deleted) {
        deletedTodos.push(todo);
        return;
      }

      allTodos.push(todo);

      if (todo.checked) {
        completedTodos.push(todo);
      } else {
        activeTodos.push(todo);
      }
    });

    return { allTodos, activeTodos, completedTodos, deletedTodos };
  }, [todos]);

  return { allTodos, activeTodos, completedTodos, deletedTodos };
};