import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import AboutUs from './pages/AboutUs'; // Import your components
import Events from './pages/Events';
import Team from './pages/Team';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [ // Define child routes
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "team",
        element: <Team />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
