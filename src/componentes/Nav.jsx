import {} from "./estilosgp.css";

const Nav = () => {
  return (
    <nav
      id="nav-bar"
      className="navbar navbar-expand-lg bg-body-tertiary sticky-top"
      data-bs-theme="light"
    >
      <div className="container">
        <a className="navbar-brand nav_texto" href="#inicio">
          <img src="./imagenes/logo.png" alt="Logo Ruta Latina" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a
              className="nav-link active nav_texto"
              aria-current="page"
              href="#inicio"
            >
              INICIO
            </a>
            <a className="nav-link nav_texto" href="#nosotros">
              NOSOTROS
            </a>
            <a className="nav-link nav_texto" href="#galeria">
              GALERIA
            </a>
            <a className="nav-link nav_texto" href="#foodtruck">
              FOOD TRUCK
            </a>
            <a className="nav-link nav_texto" href="#colaborar">
              ¿COMO COLABORAR?
            </a>
            <a className="nav-link nav_texto" href="#contacto">
              CONTACTO
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
