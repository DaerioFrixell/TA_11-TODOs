import { ErrorPage } from "../page/error-page";
import { KanbanPage } from "../page/kanban/KanbanPage";

export const routerSetting = [
  {
    path: "/",
    element: <KanbanPage />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/auth",
  //   element: <Auth />,
  // },
];