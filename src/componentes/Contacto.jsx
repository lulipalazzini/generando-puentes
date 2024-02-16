import {} from "./estilosgp.css";

const Contacto = () => {
  return (
    <div id="contacto">
      <h2 className="otros_titulos derecha">CONTACTO</h2>
      <div className="contacto_contenedor">
        <div className="iconos">
          <img
            src="imagenes/iconoFacebook.png"
            alt="Facebook"
            className="icono"
          />
          <img
            src="imagenes/iconoInstagram.png"
            alt="Instagram"
            className="icono"
          />
          <img src="imagenes/iconoWeb.png" alt="Pagina Web" className="icono" />
        </div>
        <p className="white">
          <br />
          Provincia de Mendoza, Argentina <br />
          <br />
          Tel: +54 9 261 5070161
          <br />
          <br />
          +54 9 261 3297119
          <br />
          <br />
          +54 9 261 250-7188
          <br />
          <br />
          generandopuentes@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Contacto;
