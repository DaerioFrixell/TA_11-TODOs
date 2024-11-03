import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TodoListProps, TodoProps } from '../../type/todo';

const loadStateFromLocalStorage = (): TodoListProps => {
  const storedTodos = localStorage.getItem('todos');
  return storedTodos ? JSON.parse(storedTodos) : [];
};

const initialState: TodoListProps = loadStateFromLocalStorage();

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoProps>) => {
      state.push(action.payload);
      localStorage.setItem('todos', JSON.stringify(state));
    },

    handleCheckedTodo: (state, action: PayloadAction<number>) => {
      const updatedTodos = state.map(todo =>
        todo.id === action.payload
          ? { ...todo, isChecked: !todo.isChecked }
          : todo
      );
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    },

    removeTodo: (state, action: PayloadAction<number>) => {
      const updatedTodos = state.map(todo =>
        todo.id === action.payload
          ? { ...todo, isDeleted: true }
          : todo
      );
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    },

    removeAll: (state) => {
      const updatedTodos = state.map(todo => ({ ...todo, isDeleted: true }));
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    }
  },
});

export const { addTodo, removeTodo, removeAll, handleCheckedTodo } = todoSlice.actions;

export default todoSlice.reducer;