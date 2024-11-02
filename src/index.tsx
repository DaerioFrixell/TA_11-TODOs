import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { routerSetting } from './routing';

import "./index.scss";

const router = createBrowserRouter(routerSetting);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
