import { Content } from "../../feature/kanban/content"
import { Navigation } from "../../feature/kanban/navigation"

import './kanban.scss'

export const Kanban = () => {
  return (
    <div className="kanban-widget">
      <Navigation />
      <Content />
    </div>
  )
}