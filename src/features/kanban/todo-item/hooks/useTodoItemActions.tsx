import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, handleCheckedTodo } from '../../todo-list/todoSlice';

export const useTodoItemActions = (id: number) => {
  const dispatch = useDispatch();

  /**
   * Перенос Todo с id в корзину за счет изменение свойства isDeleted.
   */
  const handleRemoveTodo = useCallback(() => {
    dispatch(removeTodo(id));
  }, [dispatch, id]);

  /**
   * Переключение свойства isChecked у Todo по id.
   */
  const handleChecked = useCallback(() => {
    dispatch(handleCheckedTodo(id));
  }, [dispatch, id]);

  return {
    handleRemoveTodo,
    handleChecked,
  };
};