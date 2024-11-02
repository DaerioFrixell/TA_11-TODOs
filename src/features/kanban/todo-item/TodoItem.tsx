import { FC } from "react";
import { TodoProps } from "../../type/todo";
import { useDispatch } from "react-redux";
import { removeTodo, handleCheckedTodo } from '../todo-list/todoSlice'

export const TodoItem: FC<{ todo: TodoProps }> = ({ todo }) => {
  const dispatch = useDispatch()

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  const handleChecked = (id: number) => {
    dispatch(handleCheckedTodo(id));
  };

  return (
    <div>
      {/* TODO сделать компонент чекбокс */}
      <input type="checkbox" checked={todo.checked} onChange={() => handleChecked(todo.id)} />
      <span>{todo.text}</span>
      <button onClick={() => handleRemoveTodo(todo.id)}>del</button>
    </div>
  )
};