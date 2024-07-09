import { ReactNode } from "react";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateAmin from "../pages/Admin/CreateAmin";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreateStudent from "../pages/Admin/CreateStudent";
import { NavLink } from "react-router-dom";

type TRoute = {
  path: string;
  element: ReactNode;
};

type TAdminSidebar = {
  kay: string;
  label: ReactNode;
  children?: TAdminSidebar[];
};

const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
];
export const AdminSidebarItems = adminPaths2.reduce(
  (acc: TAdminSidebar[], item) => {
    if (item.path && item.name) {
      acc.push({
        kay: item.name,
        label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children) {
      acc.push({
        kay: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          kay: child.name,
          label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }

    return acc;
  },
  []
);

//*programitical way

export const adminRoutes = adminPaths2.reduce((acc: TRoute[], item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }

  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }

  return acc;
}, []);

//! hard codded way

// export const AdminPaths = [
//   {
//     path: "dashboard",
//     element: <AdminDashboard />,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAmin />,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty />,
//   },
//   {
//     path: "create-student",
//     element: <CreateStudent />,
//   },
// ];
