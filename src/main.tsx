import { createRoot } from 'react-dom/client'
import "./styles.scss"
import { TodoApp } from './components/TodoApp'

createRoot(document.getElementById('root')!).render(
  <TodoApp />
)
