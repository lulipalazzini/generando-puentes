import "./App.css";
import Nav from "./componentes/Nav";
import Inicio from "./componentes/Inicio";
import Nosotros from "./componentes/Nosotros";
import Galeria from "./componentes/Galeria";
import Abastecimiento from "./componentes/Abastecimiento";
import Colaborar from "./componentes/Colaborar";
import Contacto from "./componentes/Contacto";

function App() {
  return (
    <>
      <Nav></Nav>
      <Inicio></Inicio>
      <Nosotros></Nosotros>
      <Galeria></Galeria>
      <Abastecimiento></Abastecimiento>
      <Colaborar></Colaborar>
      <Contacto></Contacto>
    </>
  );
}

export default App;
