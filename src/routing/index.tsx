import { ErrorPage } from "../pages/error-page";
import { KanbanPage } from "../pages/kanban/KanbanPage";

export const routerSetting = [
  {
    path: "/",
    element: <KanbanPage />,
    errorElement: <ErrorPage />,
  },

  // TODO сделать авторизацию через localStorage
  // {
  //   path: "/auth",
  //   element: <Auth />,
  // },
];