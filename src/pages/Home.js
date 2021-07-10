import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Web/Header";
import Nosotros from "../components/Web/Nosotros";
import Portfolio from "../components/Web/Portfolio";
import Clientes from "../components/Web/Clientes";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Sinaptic || Applied Technology</title>
        <meta
          name="description"
          content="Sinaptic || Applied Technology"
          data-react-helmet="true"
        />
      </Helmet>
      <Header />
      <Nosotros />
      <Portfolio />
      <Clientes />
    </>
  );
}
