import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoListProps, TodoProps } from '../../type/todo'


const initialState: TodoListProps = [
  {
    id: 0,
    text: 'false all',
    checked: false,
    deleted: false,
  },
  {
    id: 1,
    text: 'check only',
    checked: true,
    deleted: false,
  },
  {
    id: 2,
    text: 'del only',
    checked: false,
    deleted: true,
  },
  {
    id: 3,
    text: 'true all',
    checked: true,
    deleted: true,
  },
]

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoProps>) => {
      state.push(action.payload)
    },

    removeTodo: (state, action: PayloadAction<number>) => {
      state.map(todo => {
        if (todo.id === action.payload) {
          return todo.deleted = true;
        }
        return;
      })
    },
  },
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer

