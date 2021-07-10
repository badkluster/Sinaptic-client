import React from "react";

import "./Nosotros.css";

export default function Nosotros() {
  return (
    <main class="nosotros-contenedor" id="servicios">
      <h2> NUESTROS SERVICIOS </h2>
      <p>
        Las empresas constantemente suman objetivos y se enfrentan a nuevos
        desafíos, una empresa que crece debe ser dinámica y afrontar
        transformaciones para mantenerse a la vanguardia de su mercado. No se
        trata solo de tecnología: se trata de impatar en todos los puntos clave
        de la organización. Es por eso que en SINAPTIC contamos con
        profesionales con múltiples habilidades para dar soluciones integrales
        que cumplan y superen las expectativas en las necesidades de sus
        clientes.
      </p>
      <div class="nosotros-grid">
        <div class="nosotros-secciones">
          <span class="fas fa-file-excel"></span>
          <h4>SERVICIOS INTEGRALES DE OFFICE365 Y SHAREPOINT</h4>
          <p>
            Ayudamos a las organizaciones a incrementar sus fortalezas de
            negocio valiendonos
          </p>
        </div>
        <div class="nosotros-secciones">
          <a href="#">
            <span class="fas fa-tint"></span>
          </a>
          <h4>UNLIMITED COLOR OPTIONS</h4>
          <p>16.7+ Million on your fingertips</p>
        </div>
        <div class="nosotros-secciones">
          <span class="fas fa-text-width"></span>
          <h4>CUSTOMIZABLE FONTS</h4>
          <p>Unlimited Fonts & Customizations</p>
        </div>
        <div class="nosotros-secciones">
          <span class="fas fa-check"></span>
          <h4>12+ HEADER DESIGNS</h4>
          <p>Customizable Headers & Menus</p>
        </div>
        <div class="nosotros-secciones">
          <span class="fas fa-thumbs-up"></span>
          <h4>AWESOME MEGA MENU</h4>
          <p>Stylish & Simple Chunky Menus</p>
        </div>
        <div class="nosotros-secciones">
          <span class="fas fa-eye"></span>
          <h4>RETINA READY GRAPHICS</h4>
          <p>Crystal Clear Images & Icons</p>
        </div>
      </div>
    </main>
  );
}
