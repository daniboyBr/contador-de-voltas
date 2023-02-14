import { useEffect, useState } from "react";
import Button from "./components/Button";
import MostraTempo from "./components/MostraTempo";
import MostraVoltas from "./components/MostraVoltas";

import './styles/App.css'

function App() {
  const [numVoltas, setNumVoltas] = useState(0)
  const [running, setRunning] = useState(false)
  const [tempo, setTempo] = useState(0)

  useEffect(() => {
    let timer = null
    if (running) {
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

  const toggleRunning = () => [
    setRunning(!running)
  ]

  const incrementVoltas = () => {
    setNumVoltas(numVoltas + 1)
  }

  const decrementVoltas = () => {
    if(numVoltas === 0){
      return
    }
    setNumVoltas(numVoltas - 1)
  }

  const reset = () => {
    setNumVoltas(0)
    setTempo(0)
  }

  return (
    <div className="App">
      <MostraVoltas voltas={numVoltas} />
      <br />
      <Button text='+' className="bigger" action={incrementVoltas} />
      <Button text='-' className="bigger" action={decrementVoltas} />
      {
        numVoltas > 0 && <MostraTempo tempo={Math.round(tempo / numVoltas)} />
      }
      <br />
      <Button text={running? 'Pausar' : 'Iniciar'} action={toggleRunning} />
      <Button text='Reiniciar' action={reset} />
    </div>
  );
}

export default App;
