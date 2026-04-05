import { createBrowserRouter } from "react-router-dom";
import Template from "../component/Template";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
