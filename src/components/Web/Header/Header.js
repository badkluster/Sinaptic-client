import React from "react";

import "./header.css";

export default function Header() {
  return (
    <header>
      <div class="head">
        <h1>Creamos soluciones a medida para cada cliente</h1>
      </div>

      <a href="#servicios">
        <i class="fas fa-chevron-down"></i>
      </a>
    </header>
  );
}
