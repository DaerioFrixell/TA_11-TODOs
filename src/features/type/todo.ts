export type TodoProps = {
  id: number
  text: string
  isChecked: boolean
  isDeleted: boolean
}

export type TodoListProps = TodoProps[];