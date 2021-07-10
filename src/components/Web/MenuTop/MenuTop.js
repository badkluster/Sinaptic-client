import React from "react";

import logoWhite from "../../../assets/logoblanco.webp";

import "./MenuTop.css";

export default function MenuTop() {
  return (
    <>
      <div class="menu-principal">
        <div class="logo" id="logo">
          <img src={logoWhite} alt="Logo" />
        </div>

        <div class="menu-bar" id="menuBar">
          <i class="fas fa-angle-right" id="btnMenuClose"></i>
          <nav class="enlaces" id="enlaces">
            <ul>
              <li>
                <a href="#servicios">About Me</a>
              </li>
              <li>
                <a href="#proyectos">Proyectos</a>
              </li>
              <li>
                <a href="./estudios.html">Estudios</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </nav>

          <div class="sociales">
            <a href="https://www.facebook.com/badkluster" target="_blank">
              <span class="fab fa-facebook"></span>
            </a>
            <a href="https://www.instagram.com/dominjor22/" target="_blank">
              <span class="fab fa-instagram"></span>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=+542214205710"
              target="_blank"
            >
              <span class="fab fa-whatsapp"></span>
            </a>
            <a href="https://github.com/badkluster" target="_blank">
              <span class="fab fa-github"></span>
            </a>
          </div>
        </div>
        <i class="fas fa-bars" id="btnMenuOpen"></i>
      </div>
      <header>
        <div class="head">
          <h1>Jorge Emanuel Dominguez</h1>
        </div>
        <a href="#contacto" class="btn-contact btn">
          {" "}
          CONTACTAME{" "}
        </a>

        <a href="#servicios">
          <i class="fas fa-chevron-down"></i>
        </a>
      </header>
    </>
  );
}
