import "./App.css";
import Nav from "./componentes/Nav";
import Inicio from "./componentes/Inicio";
import Nosotros from "./componentes/Nosotros";
import Logros from "./componentes/Logros";
import Galeria from "./componentes/Galeria";
import Foodtruck from "./componentes/Foodtruck";
import Colaborar from "./componentes/Colaborar";
import Contacto from "./componentes/Contacto";

function App() {
  return (
    <>
      <Nav></Nav>
      <Inicio></Inicio>
      <Nosotros></Nosotros>
      <Logros></Logros>
      <Galeria></Galeria>
      <Foodtruck></Foodtruck>
      <Colaborar></Colaborar>
      <Contacto></Contacto>
    </>
  );
}

export default App;
