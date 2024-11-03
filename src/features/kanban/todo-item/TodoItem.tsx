import { FC } from "react";
import { TodoProps } from "../../type/todo";
import { Checkbox } from "./checkbox";
import { DeleteButton } from "./delete-button";
import { useTodoItemActions } from "./hooks";

import './todoItem.scss';

export const TodoItem: FC<TodoProps> = ({
  isChecked,
  id,
  text,
}) => {
  const { handleChecked, handleRemoveTodo } = useTodoItemActions(id);

  return (
    <div className="todo-item">
      <span className={isChecked ? 'todo-item__completed' : ''}>
        {text}
      </span>

      <div className="todo-item__navigation">
        <Checkbox isChecked={isChecked} onChange={handleChecked} />
        <DeleteButton onClick={handleRemoveTodo} />
      </div>
    </div>
  );
};