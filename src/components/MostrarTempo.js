function MostrarTempo(props) {
  const tempo = props?.tempo
  const minutos = Math.round(tempo / 60)
  const segundos = tempo % 60


  return (
    <p>
      {`${minutos}:${segundos}`} <br />
      Tempo médio por volta
    </p>
  )
}

export default MostrarTempo;