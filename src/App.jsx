import Frase from "./Components/Frase";
import { Container, Button } from "react-bootstrap";
import logo from "./img/logosimpson.png";
import {useEffect, useState} from 'react';

function App() {
  const [personaje, setPersonaje] = useState({});

  //ciclo de vida
  useEffect(()=>{
    consultarAPI();
  },[])

  const consultarAPI = async()=>{
    try{
      const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
      const dato = await respuesta.json();
      console.log(dato[0]);
      setPersonaje(dato[0]);

    }catch(error){
      console.log(error);
      //mostrar un cartel al usuario
    }
  }

  return (
    <>
      <Container className="my-5 text-center">
        <img src={logo} alt="Logo Simpsons" className="w-100" />
        <Button variant="warning">Obtener Frase</Button>
      </Container>
      <Frase personaje={personaje}></Frase>
    </>
  );
}

export default App;
