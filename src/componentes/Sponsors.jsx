import Carousel from "react-bootstrap/Carousel";
import {} from "./estilosgp.css";

const Sponsors = () => {
  return (
    <div id="sponsors">
      <h2 className="otros_titulos izquierda">NOS ACOMPAÑAN</h2>
      <div className="sponsors_contenedor">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-50 fotos"
              src="/imagenes/marcas.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50 fotos"
              src="/imagenes/marcas.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50 fotos"
              src="/imagenes/marcas.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Sponsors;
