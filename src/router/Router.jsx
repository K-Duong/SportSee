import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";

import Nav from "../layouts/Navbar/Navbar";
import VerticalMenu from "../layouts/VerticalMenu/VerticalMenu";

import Dashboard from "../layouts/pages/dashboard/Dashboard";

import "./style.scss"

export const router = createBrowserRouter([
  {
    path: "/",
    // FIXME: how to set default page to dashboard
    element: <Root />,

    children: [
      // {
      //       index: true, element: <Navigate to="/user/12" replace />
      // },
      {
        path: "/user",

        //TODO: besoin de la page Error ? errorElement: <ErrorPage/>,

        children: [
          
          {
            // to create dynamic path id
            path: ":id",
            element: <Dashboard />,
            // récupérer les infos générales sur l'utilisateur + les infos sur la complétion et l'objectif journalier

            children: [
              {
                path: "activity",
                element: {
                  // récupérer les informations sur le poids et les calories brulées + les infos sur les calories, protéines, glucides et lipides de la journée.
                },
              },
              {
                path: "average-sessions",
                element: {
                  // récupérer les infors sur la durée moyenne des sessions
                },
              },
              {
                path: "performances",
                element: {
                  // récupérer les infors sur le radar chart
                },
              },
            ],
          },
        ],
      },
    ],
  },
]);

function Root() {
  return (
    <>
      <Nav />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
