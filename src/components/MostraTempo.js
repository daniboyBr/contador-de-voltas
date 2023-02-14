import '../styles/MostrarTempo.css'

function MostraTempo(props) {
    const tempo = props?.tempo
    const minutos = (''+Math.round(tempo / 60)).padStart(2, 0)
    const segundos = (''+(tempo % 60)).padStart(2,0)
    return (
        <p className='tempo'> 
            <span>{`${minutos}:${segundos}`}</span><br />
            Tempo médio por volta
        </p>
    )
}


export default MostraTempo;