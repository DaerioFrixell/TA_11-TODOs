import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.scss";
import { routerSetting } from './routing';

const router = createBrowserRouter(routerSetting);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
