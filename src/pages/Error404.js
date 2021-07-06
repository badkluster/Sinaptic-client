import React from "react";
import Erro404 from "../assets/error-404.webp";

import "./Error404.scss";

export default function Error404() {
  return (
    <div className="err404">
      <h4>Pagina No Fund</h4>
      <Erro404 />
    </div>
  );
}
