import { Content } from "../../features/kanban/content";
import { Navigation } from "../../features/kanban/navigation";
import { useAuth } from "../../features/auth/hooks/useAuth";

import './kanban.scss';

export const Kanban = () => {
  useAuth();

  return (
    <div className="kanban-widget">
      <Navigation />
      <Content />
    </div>
  )
}