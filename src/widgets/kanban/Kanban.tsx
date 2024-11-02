import { Content } from "../../features/kanban/content"
import { Navigation } from "../../features/kanban/navigation"

import './kanban.scss'

export const Kanban = () => {
  return (
    <div className="kanban-widget">
      <Navigation />
      <Content />
    </div>
  )
}