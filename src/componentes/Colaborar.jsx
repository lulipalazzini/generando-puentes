import {} from "./estilosgp.css";

const Colaborar = () => {
  return (
    <div id="colaborar">
      <h2 className="otros_titulos izquierda">¿COMO COLABORAR?</h2>
      <div className="contenedorUnoColaborar">
        <p className="textoColaborar">
          La contribución personal de individuos como tú posibilita transformar
          la realidad de numerosos jóvenes en condiciones de pobreza, así como
          la de sus familias y comunidades, mediante apoyo en áreas como la
          educación, la inserción laboral y la asistencia humanitaria. <br />
          <br /> Con tu apoyo, Generando Puentes puede extender su impacto y
          seguir gestando oportunidades que promuevan un cambio positivo en la
          vida de aquellos que más lo necesitan. <br />
          <br />{" "}
          <strong>
            ¡Únete a nosotros y contribuye a hacer posible un cambio positivo en
            nuestra comunidad!
          </strong>
        </p>
        <img
          src="imagenes/manosJuntas.png"
          alt="Manos juntas"
          className="manosJuntas"
        />
        <img
          src="imagenes/elipseAzul.png"
          alt="Elipse azul"
          className="elipseAzul"
        />
      </div>
      <div className="contenedorDosColaborar">
        <h2 className="apoyoColaborar">¡Contamos con tu apoyo!</h2>
        <p className="textoApoyoColaborar">
          Participá por medio de un aporte regular a través de los siguientes
          links:
        </p>
        <div className="botonesColaborar">
          <button className="botonRedondo mensual">
            Aporte <br /> mensual
          </button>

          <button className="botonRedondo semestral">
            Aporte <br /> semestral
          </button>

          <button className="botonRedondo anual">
            Aporte <br /> anual
          </button>
        </div>
        <div className="contenedorAnimaciones">
          <a href="https://bit.ly/3fUjEez">
            <img
              src="./imagenes/animacionAzulprueba1.png"
              alt="Animacion azul"
              className="mensualAzul"
            />
          </a>
          <a href="https://bit.ly/3izJ0jx">
            <img
              src="./imagenes/animacionAmarilloprueba1.png"
              alt="Animacion amarillo"
              className="semestralAmarillo"
            />
          </a>
          <a href="https://bit.ly/3jHU6T8">
            <img
              src="./imagenes/animacionVerdeprueba1.png"
              alt="Animacion verde"
              className="anualVerde"
            />
          </a>
        </div>
        <p className="parrafoColaborar">
          O genera un pago único por <strong>Mercado Pago</strong> al alias:
        </p>
        <button className="aliasColaborar" disabled>
          generando.puentes
        </button>
      </div>
    </div>
  );
};

export default Colaborar;
