import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoListProps, TodoProps } from '../../type/todo'

const initialState: TodoListProps = []

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoProps>) => {
      state.push(action.payload)
    },

    handleCheckedTodo: (state, action: PayloadAction<number>) => {
      return state.map(todo => todo.id === action.payload
        ? { ...todo, checked: !todo.checked }
        : todo
      )
    },

    removeTodo: (state, action: PayloadAction<number>) => {
      return state.map(todo => todo.id === action.payload
        ? { ...todo, deleted: true }
        : todo
      );
    },

    removeAll: (state) => {
      return state.map(todo => ({ ...todo, deleted: true }))
    }
  },
})

export const { addTodo, removeTodo, removeAll, handleCheckedTodo } = todoSlice.actions

export default todoSlice.reducer

