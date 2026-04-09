//npm install react-bootstrap bootstrap
//config nueva en vit.config.js


import typescript from "../../img/typescript.png";
import typescript2 from "../../img/typescript2.png";
import jenkins from "../../img/jenkins.png";
import graphql from "../../img/graphQL.png";
import domManip from "../../img/domManip.png";
import javascript from "../../img/javascript.png";
import { Carousel } from "react-bootstrap";
import udemy from "../../img/udemyHtml.png";
import "./carrusel.css";

const Carrusel1 = () => {
  return (
    <Carousel data-bs-theme="dark" className="container-carrusel">
      <Carousel.Item>
        <img
          className="d-block mx-auto carrusel-img"
          src={typescript}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto carrusel-img"
          src={typescript2}
          alt="Second slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto carrusel-img"
          src={jenkins}
          alt="Third slide"
        />
     
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block mx-auto carrusel-img"
          src={graphql}
          alt="Third slide"
        />
     
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block mx-auto carrusel-img"
          src={domManip}
          alt="Third slide"
        />
     
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block mx-auto carrusel-img"
          src={javascript}
          alt="Third slide"
        />
     
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block mx-auto carrusel-img"
          src={udemy}
          alt="Third slide"
        />
     
      </Carousel.Item>
    </Carousel>
  );
};
export default Carrusel1;
