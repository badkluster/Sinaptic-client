import React from "react";

import ImgCenter from "../../assets/header-bg.webp";

import "./Admin.css";

export default function Admin() {
  return (
    <div className="contenedor-admin">
      <h1>Bienvenidos Team-Sinaptic</h1>
      <h2>
        éste es el panel de control de la pagina web, desde acá podran
        administrar usuarios, crear nuevos "Post" para el Blog, revisar emails
        añadidos desde el Newsletter y administrar el menu de la web
        dinamicamente.
      </h2>
      <img
        className="imgCenter"
        src={ImgCenter}
        alt="Imagen central de Admin"
      />
    </div>
  );
}
