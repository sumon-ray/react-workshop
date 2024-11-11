import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children:[
        {
            path:'',
            element:
        },
        {
          path:'/',
          element:
      
        }
      ]
    },
  ]);
  