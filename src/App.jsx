import Frase from "./Components/Frase";
import { Container, Button } from "react-bootstrap";
import logo from "./img/logosimpson.png";

function App() {
  return (
    <>
      <Container className="my-5 text-center">
        <img src={logo} alt="Logo Simpsons" className="w-100" />
        <Button variant="warning">Obtener Frase</Button>
      </Container>
      <Frase></Frase>
    </>
  );
}

export default App;
