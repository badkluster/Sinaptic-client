import React from "react";
import LogoWhite from "../../../../assets/logoblanco.webp";

import "./MyInfo.scss";

export default function MyInfo() {
  return (
    <div className="my-info">
      <img src={LogoWhite} alt="Logo Sinaptic" />
      <h4>
        Entra en el mundo del desarrollo web, disfruta creando proyectos de todo
        tipo, deja que tú imaginación fluya y crea verdaderas maravillas!!
      </h4>
    </div>
  );
}
