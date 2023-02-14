import { useState, useEffect } from "react";
import Button from "./components/Button";
import MostrarTempo from "./components/MostrarTempo";
import MostrarVoltas from "./components/MostrarVoltas";

function App() {
  const [numVoltas, setNumVoltas] = useState(0)
  const [running, setRunning] = useState(false)
  const [tempo, setTempo] = useState(0)

  useEffect(() => {
    let timer = null
    if(running) {
      timer = setInterval(() => {
        setTempo(old => old + 1)
      }, 1000)
    }

    return () => {
      if(timer) {
        clearInterval(timer)
      }
    }
  }, [running])

  const toggleRunning = () => { 
    setRunning(!running);
  }

  const increment = () => {
    setNumVoltas(numVoltas + 1); 
  }

  const decrement = () => {
    if(numVoltas === 0){
      return
    }

    setNumVoltas(numVoltas - 1);
  }
 
  return (
    <div className="App">
      <MostrarVoltas voltas={numVoltas} />
      <Button text="+" click={increment}/>
      <Button text="-" click={decrement}/>
      <MostrarTempo tempo={tempo} />
      <Button text="Iniciar" click={toggleRunning} />
      <Button text="Reiniciar"/>
    </div>
  );
}

export default App;
