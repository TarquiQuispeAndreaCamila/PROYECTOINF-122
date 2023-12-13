import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GenericPage from "./pages/GenericPage/GenericPage";
import Home from "./pages/Home/Home";
import "./index.css";
import GenericPage2 from "./pages/GenericPage2/GenericPage2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/v1/:page",
    element: <GenericPage2 />,
  },
  {
    path: "/v2/:page",
    element: <GenericPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// );
