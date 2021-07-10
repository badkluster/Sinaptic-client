import React from "react";
import { Route, Switch } from "react-router-dom";
// import MenuTop from "../components/Web/MenuTop";
import Navbar from "../components/Web/NavBar/Navbar.jsx";
import Footer from "../components/Web/Footer";

import "./LayoutBasic.scss";

export default function LayoutBasic(props) {
  const { routes } = props;

  return (
    <>
      {/* <MenuTop /> */}
      <Navbar />

      <LoadRoutes routes={routes} />
      <Footer />
    </>
  );
}

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
