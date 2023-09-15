import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Root from "./components/Root";
import NotFound from "./routes/NotFound";
import About from "./routes/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about/",
        element: <About />,
      },
    ],
  },
]);

export default router;
