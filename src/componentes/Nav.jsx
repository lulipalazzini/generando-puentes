import {} from "./estilosgp.css";

const Nav = () => {
  return (
    <nav
      id="nav-bar"
      className="navbar navbar-expand-lg bg-body-tertiary sticky-top"
      data-bs-theme="light"
    >
      <div className="container">
        <a className="navbar-brand nav_texto" href="">
          Ruta Latina
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
              href=""
            >
              INICIO
            </a>
            <a className="nav-link nav_texto" href="">
              NOSOTROS
            </a>
            <a className="nav-link nav_texto" href="">
              GALERIA
            </a>
            <a className="nav-link nav_texto" href="">
              ABASTECIMIENTO
            </a>
            <a className="nav-link nav_texto" href="">
              ¿COMO COLABORAR?
            </a>
            <a className="nav-link nav_texto" href="">
              CONTACTO
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
