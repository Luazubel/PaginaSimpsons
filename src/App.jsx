import Frase from "./Components/Frase";
import { Container, Button} from "react-bootstrap";

function App() {
  return (
    <>
  <Container className="my-5 text-center">
  <img src="../public/img/logosimpson.png" alt="Logo Simpsons" />
  <Button variant="warning">Obtener Frase</Button>
 </Container>
 <Frase></Frase>
    </>

  );
}

export default App;
