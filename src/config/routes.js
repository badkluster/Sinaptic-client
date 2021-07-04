//Layout
import LayoutAdmin from "../layouts/LayoutAdmin";

//Admin Pages
import AdminHome from "../pages/Admin";
import AdminSingIn from "../pages/Admin/SignIn";

//Layout users
import LayoutBasic from "../layouts/LayoutBasic";

//Pages users
import Home from "../pages/Home";

//Other
import Error404 from "../pages/Error404";

const routes = [
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/admin",
        component: AdminHome,
        exact: true,
      },
      {
        path: "/admin/login",
        component: AdminSingIn,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
  {
    path: "/",
    component: LayoutBasic,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
