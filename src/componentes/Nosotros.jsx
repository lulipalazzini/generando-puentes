import {} from "./estilosgp.css";

const Nosotros = () => {
  return (
    <div id="nosotros">
      <h2 className="otros_titulos derecha">NOSOTROS</h2>
      <div className="nosotros_contenedor">
        <img
          src="/imagenes/elipseBlanca.png"
          alt="Elipse Blanca"
          className="elipseBlanca"
        />
        <img
          src="/imagenes/manosChicos.png"
          alt="Manos juntas"
          className="fotoManos"
        />
        <p className="nosotros_parrafo">
          El <strong className="white">Food Truck</strong> es una propuesta para
          generar ingresos con el fin de <br />
          sostener económicamente los proyectos activos de
          <strong className="white"> Generando Puentes</strong>. <br />
          La ONG constituye una
          <strong className="white"> iniciativa social</strong> concebida con el
          propósito de <br />
          instaurar procesos de autonomía y asegurar el acceso a oportunidades
          <br />
          para comunidades situadas en condiciones de pobreza extrema, <br />
          exclusión y vulnerabilidad social. <br />
          <br />
          Generando Puentes busca fomentar la creación de redes de organización
          <br />y participación entre residentes de barrios populares, entidades
          <br />
          gubernamentales, organizaciones sociales y otras instituciones en
          <br />
          <strong className="white">Mendoza, Argentina</strong>.
        </p>
      </div>
    </div>
  );
};

export default Nosotros;
