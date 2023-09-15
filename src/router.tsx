import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Root from "./components/Root";
import NotFound from "./routes/NotFound";
import About from "./routes/About";
import Detail from "./routes/Detail";

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
      {
        path: "campgrounds/:campgroundId",
        element: <Detail />,
      },
    ],
  },
]);

export default router;
