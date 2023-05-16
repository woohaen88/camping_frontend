import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/routes/Home";
import NotFound from "./components/routes/NotFound";
import CampGroundDetail from "./components/CampGroundDetail";

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
        path: "camping/:campGroundId/",
        element: <CampGroundDetail />,
      },
    ],
  },
]);

export default router;
