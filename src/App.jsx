import Frase from "./Components/Frase";
import { Container, Button } from "react-bootstrap";
import logo from "./img/logosimpson.png";
import { useEffect, useState } from "react";
import Spinner from "./Components/Spinner";

function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true)

  //ciclo de vida
  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      //actualizar el state del spinner
      setMostrarSpinner(true);
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      const dato = await respuesta.json();
      console.log(dato[0]);
      setPersonaje(dato[0]);
      //actualizar el state del spinner
      setTimeout(() => {
        setMostrarSpinner(false)
      }, 2500);
    } catch (error) {
      console.log(error);
      //mostrar un cartel al usuario
      setMostrarSpinner(false);
    }
  };

// operador ternario
// (condicion logica)? (codigo cuando la condicion es true):(codigo cuando la condicion es false);

  const mostrarComponente = (mostrarSpinner === true)? (<div className="d-flex justify-content-center">
  <Spinner></Spinner>
</div>): (  <Frase personaje={personaje}></Frase>)

  return (
    <>
      <Container className="my-5 text-center">
        <img src={logo} alt="Logo Simpsons" className="w-100" />
        <Button variant="warning" onClick={consultarAPI}>
          Obtener Frase
        </Button>
      </Container>
      {
        mostrarComponente
      }
     
    </>
  );
}

export default App;
