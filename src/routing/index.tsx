import { AuthPage } from "../pages/auth";
import { ErrorPage } from "../pages/error-page";
import { KanbanPage } from "../pages/kanban/KanbanPage";

export const routerSetting = [
  {
    path: "/",
    element: <KanbanPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
];