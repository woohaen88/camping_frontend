import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/routes/Home";
import NotFound from "./components/routes/NotFound";
import CampGroundDetail from "./components/CampGroundDetail";
import UploadCampGround from "./components/routes/UploadCampGround";

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
        path: "camping/upload/",
        element: <UploadCampGround />,
      },
      {
        path: "camping/:campGroundId/",
        element: <CampGroundDetail />,
      },
    ],
  },
]);

export default router;
