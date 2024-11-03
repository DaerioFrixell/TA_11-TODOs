import { FC } from "react";
import { TodoProps } from "../../type/todo";
import { useDispatch } from "react-redux";
import { removeTodo, handleCheckedTodo } from '../todo-list/todoSlice';
import { Checkbox } from "./checkbox";
import { DeleteButton } from "./delete-button";

import './todoItem.scss';

export const TodoItem: FC<{ todo: TodoProps }> = ({ todo }) => {
  const dispatch = useDispatch()

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  const handleChecked = (id: number) => {
    dispatch(handleCheckedTodo(id));
  };

  return (
    <div className={`todo-item`}>
      <span className={todo.checked === true ? `todo-item__completed` : undefined}>{todo.text}</span>
      <div className="todo-item__navigation">
        <Checkbox isChecked={todo.checked} onChange={() => handleChecked(todo.id)} />
        <DeleteButton onClick={() => handleRemoveTodo(todo.id)} />
      </div>
    </div>
  )
};