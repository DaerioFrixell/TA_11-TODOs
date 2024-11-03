import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { routerSetting } from './routing';
import { store } from './store/store'
import { Provider } from 'react-redux'

import "./index.scss";

const router = createBrowserRouter(routerSetting);

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
