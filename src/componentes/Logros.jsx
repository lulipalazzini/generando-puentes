import { Col, Container, Row } from "react-bootstrap";
import {} from "./estilosgp.css";

const Logros = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="logros">
            <img
              src="./imagenes/corazonManos.png"
              alt="Corazon manos"
              className="logrosImg"
            />
            <p className="logrosNumeros">470</p>
            <p className="logrosDatos">
              Personas <br /> involucradas en las <br /> actividades
            </p>
          </div>
        </Col>
        <Col>
          <div className="logros">
            <img
              src="./imagenes/mundoMarca.png"
              alt="Mundito"
              className="logrosImg"
            />
            <p className="logrosNumeros">11</p>
            <p className="logrosDatos">
              Barrios <br /> populares
            </p>
          </div>
        </Col>
        <Col>
          <div className="logros">
            <img
              src="./imagenes/edificios.png"
              alt="Edificios"
              className="logrosImg"
            />
            <p className="logrosNumeros">7</p>
            <p className="logrosDatos">
              Proyectos de Obras <br /> de Integracion Socio <br /> Urbana
            </p>
          </div>
        </Col>
        <Col>
          <div className="logros">
            <img
              src="./imagenes/futbol.png"
              alt="Futbol"
              className="logrosImg"
            />
            <p className="logrosNumeros">6</p>
            <p className="logrosDatos">
              Escuelas de futbol <br /> con 250 personas
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Logros;
