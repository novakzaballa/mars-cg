import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "./Error";

export const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage/>,
    },
  ]);
