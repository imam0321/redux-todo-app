import App from "@/App";
import Tasks from "@/pages/Tasks";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "user",
        element: <User />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
    ],
  },
]);
