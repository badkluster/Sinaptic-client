import React from "react";

import "./clientes.css";
import ImagenClientes from "../../../assets/bannerclientescolor.webp";

export default function Clientes() {
  return (
    <section class="clientes">
      <h2>Algunos de Nuestros Clientes.</h2>
      <img src={ImagenClientes} alt="imagen de clientes"></img>
    </section>
  );
}
