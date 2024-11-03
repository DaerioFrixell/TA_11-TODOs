import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TodoListProps, TodoProps } from '../../type/todo';

const initialState: TodoListProps = [];

// TODO: подумать, куда лучше переместить слайс, т.к. здесь ему точно не место.
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoProps>) => {
      state.push(action.payload)
    },

    handleCheckedTodo: (state, action: PayloadAction<number>) => {
      return state.map(todo => todo.id === action.payload
        ? { ...todo, isChecked: !todo.isChecked }
        : todo
      )
    },

    removeTodo: (state, action: PayloadAction<number>) => {
      return state.map(todo => todo.id === action.payload
        ? { ...todo, isDeleted: true }
        : todo
      );
    },

    removeAll: (state) => {
      return state.map(todo => ({ ...todo, isDeleted: true }))
    }
  },
});

export const { addTodo, removeTodo, removeAll, handleCheckedTodo } = todoSlice.actions;

export default todoSlice.reducer;

