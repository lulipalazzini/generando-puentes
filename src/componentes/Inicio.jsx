import {} from "./estilosgp.css";
import { Card, Carousel } from "react-bootstrap";

const Inicio = () => {
  return (
    <header
      id="inicio"
      className="position-relative d-flex justify-content-start align-items-center"
    >
      <div
        id="homeCard"
        className="card text-start z-3 position-absolute text-white bg-transparent w-50"
      >
        <Card.Body className="bg-transparent">
          <Card.Title className="text-black">
            <h1 className="inicio_titulo">
              RUTA <br /> LATINA
            </h1>
            <h3 className="inicio_parrafo">
              Comida latinoamericana con <br /> impacto social
            </h3>
          </Card.Title>
        </Card.Body>
      </div>
      <div id="carouselFade" className="carousel slide carousel-fade">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselFade"
            data-bs-slide-to="0"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselFade"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <Carousel fade>
          <Carousel.Item>
            <div className="overlay z-2"></div>
            <img
              src="/imagenes/foodTruck.png"
              className="d-block w-100"
              alt="carouselImage1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <div className="overlay z-2"></div>
            <img
              src="/imagenes/foodTruck2.png"
              className="d-block w-100"
              alt="carouselImage2"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </header>
  );
};

export default Inicio;
