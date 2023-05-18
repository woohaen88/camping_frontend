import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/routes/Home";
import NotFound from "./components/routes/NotFound";
import CampGroundDetail from "./components/CampGroundDetail";
import UploadCampGround from "./components/routes/UploadCampGround";
import KakaoLogin from "./components/routes/KakaoLogin";

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
      {
        path: "social/",
        children: [
          {
            path: "kakao/",
            element: <KakaoLogin />,
          },
        ],
      },
    ],
  },
]);

export default router;
