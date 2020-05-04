import Dashboard from "views/Dashboard.jsx";
import Maps from "views/Map.jsx";
import UserPage from "views/User.jsx";
import Staff from "views/Staff";
import Drug from "./views/Drug";
import Disease from "./views/Disease";


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin"
  },
  {
    path: "/staff",
    name: "Staff List",
    icon: "nc-icon nc-tile-56",
    component: Staff,
    layout: "/admin"
  },
  {
    path: "/disease",
    name: "Disease",
    icon: "nc-icon nc-tile-56",
    component: Disease,
    layout: "/admin"
  },
  {
    path: "/drugs",
    name: "Drugs",
    icon: "nc-icon nc-tile-56",
    component: Drug,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Staff Locations",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin"
  },
];
export default routes;
