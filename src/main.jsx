import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './Layouts/Dashboard/Dashboard';
import Home from './Pages/Home';
import Listings from './Pages/Other/Listings';
import Orders from './Pages/Other/Orders';
import Stats from './Pages/Other/Stats';
import Finances from './Pages/Other/Finances';
import Marketing from './Pages/Other/Marketing';
import Integrations from './Pages/Other/Integrations';
import Reports from './Pages/Other/Reports';
import Settings from './Pages/Other/Settings';
import Inbox from './Pages/Other/Inbox';
import Notifications from './Pages/Other/Notifications';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "listings",
        element: <Listings></Listings>
      },
      {
        path: "orders",
        element: <Orders></Orders>
      },
      {
        path: "stats",
        element: <Stats></Stats>
      },
      {
        path: "finances",
        element: <Finances></Finances>
      },
      {
        path: "marketing",
        element: <Marketing></Marketing>
      },
      {
        path: "integrations",
        element: <Integrations></Integrations>
      },
      {
        path: "reports",
        element: <Reports></Reports>
      },
      {
        path: "settings",
        element: <Settings></Settings>
      },
      {
        path: "inbox",
        element: <Inbox></Inbox>
      },
      {
        path: "notifications",
        element: <Notifications></Notifications>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
