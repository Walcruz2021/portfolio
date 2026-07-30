//npm i @coreui/react

import React from "react";
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardImage,
  CCardText,
  CCardTitle,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "./CardsGroup.css";
import gestionTurnos from "../../img/gestionTurnos.png";
import pymesYa from "../../img/pymesya.png";
import AppMobile from "../../img/AppMobile.png";
import adonis from "../../img/adonis2.png";
import ucropit from "../../img/ucropit3.jpg";
import ecommerceSistemaPY from "../../img/ecommerceSistemaPY.png"
import mockupIAAsistente from "../../img/mockupIAAsistente.png"


import { useEffect, useRef } from "react";

export const CardsGroup = ({ proyectosRef }) => {

  return (
    <div ref={proyectosRef} className="scroll-mt-20">
      <CCardGroup className="card-group-container">
        <CCard>
          <CCardImage orientation="top" src={gestionTurnos} />
          <CCardBody>
            <CCardTitle className="charm-regular text-center">
              <h2 className="titleh3">Sistema de Gestión de Turnos</h2>
            </CCardTitle>
            <CCardText className="charm-regular">
              <p className="justificado-centrado">
                Sistema que mejora significativamente la productividad y la
                experiencia del cliente, aportando herramientas clave para la
                toma de decisiones estratégicas. Una solución integral que
                optimiza la administración en establecimientos dedicados al
                cuidado de mascotas.
              </p>
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small
              className="text-body-secondary"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "https://www.pymesya.com.ar/tecnologias/sistemaGestionTurnos",
                  "_blank"
                )
              }
            >
              VER SITIO
            </small>
          </CCardFooter>
        </CCard>

        <CCard>
          <CCardImage orientation="top" src={AppMobile} />
          <CCardBody>
            <CCardTitle className="charm-regular text-center">
              <h2 className="titleh3">App Mobile Gestión de Turnos PY</h2>
            </CCardTitle>
            <CCardText className="charm-regular">
              <p className="justificado-centrado">
                Aplicación móvil en construcción con la tecnología React Native.
                Será una aplicación que permitirá a los usuarios gestionar sus
                turnos, gastos e ingresos como complemento al sitio web que ya
                está en funcionamiento.
              </p>
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small
              className="text-body-secondary"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "https://github.com/Walcruz2021/GestionTurnosReactNative",
                  "_blank"
                )
              }
            >
              VER REPOSITORIO
            </small>
          </CCardFooter>
        </CCard>

        <CCard>
          <CCardImage orientation="top" src={pymesYa} />
          <CCardBody>
            <CCardTitle className="charm-regular text-center">
              <h2 className="titleh3">Plataforma PymesYa</h2>
            </CCardTitle>
            <CCardText className="charm-regular">
              <p className="justificado-centrado">
                Plataforma activa que conecta a la comunidad empresarial de
                Salta. Fundamental para fortalecer la presencia digital de Pymes
                y profesionales locales, ofreciendo una solución eficiente y
                accesible
              </p>
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small
              className="text-body-secondary"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://www.pymesya.com.ar", "_blank")
              }
            >
              VER SITIO
            </small>
          </CCardFooter>
        </CCard>

        <CCard>
          <CCardImage orientation="top" src={adonis} />
          <CCardBody>
            <CCardTitle className="titleh2 charm-regular text-center">
              <h2 className="titleh3"> Integración Adonis.js con Backend </h2>
            </CCardTitle>
            <CCardText className="charm-regular">
              <p className="justificado-centrado">
                Se integró el proyecto de Adonis.js con el Backend de la
                aplicación Ucrop.it
              </p>

              <ul>
                <li className="justificado-centrado">
                  * Desarrollo de Scripts para la edición, eliminación y creación
                  de datos masivos en producción
                </li>
                <li className="justificado-centrado"> *Integración con MongoDB y PostgresQL</li>
                <li className="justificado-centrado">
                  * Creación y Modificación de Interfaces, Modelos y Controladores
                </li>
                <li className="justificado-centrado">
                  * Modificación de scripts en cuanto a su rendimiento y
                  optimización
                </li>
              </ul>
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small
              className="text-body-secondary"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "  https://github.com/Ucropit/ucropit-command/tree/master",
                  "_blank"
                )
              }
            >
              VER REPOSITORIO
            </small>
          </CCardFooter>
        </CCard>

        <CCard>
          <CCardImage orientation="top" src={ucropit} />
          <CCardBody>
            <CCardTitle className="charm-regular text-center">
              <h2 className="titleh3 ">
                Soporte Técnico Backend y Automatización de Datos UCROPIT
              </h2>
            </CCardTitle>
            <CCardText className="charm-regular">
              <ul>
                <li className="justificado-centrado">
                  * Asistencia y Soporte continuo. Gestion de requerimientos
                  tecnicos asegurando la operatividad del sistema.
                </li>
                <li className="justificado-centrado">
                  * Desarrollo de Scripts para realizar operaciones masivas sobre
                  las base de datos en el entorno de producción
                </li>

                <li className="justificado-centrado">
                  * Implementación de cambios que luego de su versionado y
                  pusheado derivaron en actualizaciones visibles en componentes
                  específicos de la aplicación
                </li>

                <li className="justificado-centrado">
                  * Ejecución de tareas de mantenimiento y modificaciones de datos
                  asegurando la integridad de la información y la trazabilidad
                  de los cambios aplicados
                </li>
              </ul>
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small
              className="text-body-secondary"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://ucrop.it", "_blank")
              }
            >
              VER SITIO
            </small>
          </CCardFooter>
        </CCard>

        <CCard>
          <CCardImage orientation="top" src={mockupIAAsistente} />
          <CCardBody>
            <CCardTitle className="charm-regular text-center">
              <h2 className="titleh3 ">
                Asistente Inteligente Integrado con IA
              </h2>
            </CCardTitle>
            <CCardText className="charm-regular">
              <p className="justificado-centrado">
                Desarrollo de un asistente inteligente integrado al sistema de gestión, diseñado para responder consultas sobre la empresa en tiempo real utilizando lenguaje natural.
                Con solo hacer una pregunta, el usuario puede obtener información como:
              </p>
              <ul>
                <li className="justificado-centrado">
                  * Productos más vendidos y menos vendidos.
                </li>
                <li className="justificado-centrado">
                  * Productos con mayor y menor rentabilidad.
                </li>

                <li className="justificado-centrado">
                  * Indicadores clave del negocio (ventas, ganancias, ticket promedio, unidades vendidas, entre otros)
                </li>

                <li className="justificado-centrado">
                  * Recomendaciones y sugerencias para aumentar las ventas y mejorar la rentabilidad, basadas en la información de la empresa
                </li>
                <li className="justificado-centrado">
                  * Análisis del inventario y comportamiento de los producto
                </li>

                <li className="justificado-centrado">
                  * Respuestas en segundos, sin necesidad de generar reportes manualmente.
                </li>

              </ul>
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small
              className="text-body-secondary"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://www.linkedin.com/posts/inteligenciaartificial-ai-chatbot-ugcPost-7488610724093812738-ODcz/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADe5kvYBaYMeTT7z_8ZgGohIEE0IJA86JOQ", "_blank")
              }
            >
              VER SITIO
            </small>
          </CCardFooter>
        </CCard>

        <CCard>
          <CCardImage orientation="top" src={ecommerceSistemaPY} />
          <CCardBody>
            <CCardTitle className="charm-regular text-center">
              <h2 className="titleh3 ">
                Ecommerce MultiEmpresa

              </h2>
            </CCardTitle>
            <CCardText className="charm-regular">
              <ul>
                <li className="justificado-centrado">
                  * Desarrollé un módulo de ecommerce integrado a la plataforma de gestión empresarial, permitiendo que cualquier negocio genere automáticamente su propia tienda virtual utilizando el catálogo de productos ya existente en el sistema.
                </li>
                <li className="justificado-centrado">
                  * La solución elimina la doble carga de información entre sistemas, centraliza la administración de inventario y facilita la publicación inmediata de productos en internet. Además, incorpora herramientas de búsqueda y filtrado por categorías, marcas y nombres de productos para mejorar la experiencia de compra de los clientes.
                </li>

                <li className="justificado-centrado">
                  * Este enfoque permite reducir costos operativos, acelerar la transformación digital de pequeñas y medianas empresas y simplificar la gestión de ventas online desde una única plataforma.
                </li>

              </ul>
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small
              className="text-body-secondary"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://www.pymesya.com.ar/tecnologias/sistemaGestionTurnos", "_blank")
              }
            >
              VER SITIO
            </small>
          </CCardFooter>
        </CCard>

      </CCardGroup>
    </div>
  );
};
export default CardsGroup;
