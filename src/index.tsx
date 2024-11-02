import { createRoot } from 'react-dom/client'
import { TodoApp } from './components/TodoApp'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.scss";
import { ErrorPage } from './page/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoApp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/asd",
    element: <div>asd</div>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
