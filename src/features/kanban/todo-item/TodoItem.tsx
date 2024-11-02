import { FC } from "react";
import { TodoProps } from "../../type/todo";
import { useDispatch } from "react-redux";
import { removeTodo } from '../todo-list/todoSlice'

export const TodoItem: FC<{ todo: TodoProps }> = ({ todo }) => {
  const dispatch = useDispatch()

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      {/* TODO сделать компонент чекбокс */}
      <input type="checkbox" checked={todo.checked} />
      <span>{todo.text}</span>
      <button onClick={() => handleRemoveTodo(todo.id)}>del</button>
    </div>
  )
};