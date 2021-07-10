import React from "react";

import WillisLogo from "../../../assets/willislogo.webp";
import SingentaLogo from "../../../assets/syngentalogo.webp";

import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section class="portfolio">
      <h2> Portfolio </h2>
      <div class="contenidos-portfolio">
        <div class="contenido-portfolio portfolio-left">
          <img src={WillisLogo} alt=""></img>
          <p>
            Los equipos involucrados en el proceso de gestión de siniestros,
            presentaban dificultades en el manejo del flujo de trabajo. El
            principal motivo era la falta de visibilidad, trazabilidad y
            unificación del sistema de gestión. Para ello se valían de correos
            electrónicos y planillas de cálculo como soporte a la operatoria.
            Esto generaba sobrecarga de trabajo, falta de control de estado
            global, incumplimiento en los tiempos de completitos de las tareas,
            desconocimiento del vencimiento de las mismas, imposibilidad de
            generar reportes para el análisis, entre dificultades. No disponían
            de la información de manera eficiente y centralizada para detectar
            fallas en el proceso y poder ajustarlo para mejorar.
          </p>

          <h3>Trabajo realizado por Sinaptic.</h3>
          <p>
            Enfocada puramente en el usuario aplicando estándares UX en el
            diseño de la herramienta. Workflow de gestión del ciclo de vida de
            un siniestro. Generación de tareas por equipo según estado del
            siniestro. Detalle de estado, archivos, comentarios e información
            general del siniestro. Dashboard con reporta de siniestros por
            estado; tareas por estado; tareas vencidas; agin de siniestros.
          </p>

          <h3>Equipo</h3>
          <dl>
            <dd>Especialistas de Sharepoint</dd>
            <dd>Desarrolladores UX</dd>
            <dd>Especialistas de gestión de siniestros</dd>
            <dd>Diseñadores gráficos</dd>
          </dl>

          <h3>Tecnologías</h3>
          <dl>
            <dd>Sharepoint 2010/2019</dd>
            <dd>Jquery</dd>
            <dd>CSOM</dd>
          </dl>
        </div>
        <div class="contenido-portfolio portfolio-rigth">
          <img src={SingentaLogo} alt=""></img>
          <p>
            La empresa requería tener un medio para comunicar su portfolio de
            productos (Insecticidas, Herbicidas, Fungicidas y Tratamiento de
            Semillas), poder en él también especificar las características
            generales de productos, sus recomendaciones de uso, control de
            plagas/malezas y la información de dosis.
          </p>

          <h3>Trabajo realizado por Sinaptic.</h3>
          <p>
            A partir de un relevamiento inicial de las necesidades de la
            empresa, se desarrolló una aplicacion mobile acorde a lo que estaban
            necesitando llamada Syngenta Agrimecum. Para su desarollo se utilizó
            Ionic con Angular para generar una aplicación hibrica que permite su
            publicación tanto en Android como en IOs. La base de datos se montó
            sobre Google Firebase.
          </p>

          <h3>Equipo</h3>
          <dl>
            <dd>Desarrollador Ionic</dd>
            <dd>Diseñador gráfico</dd>
            <dd>Arquitecto / analista</dd>
          </dl>

          <h3>Tecnologías</h3>
          <dl>
            <dd>Ionic</dd>
            <dd>Angular</dd>
            <dd>Google Firebase</dd>
          </dl>
        </div>
      </div>
    </section>
  );
}
