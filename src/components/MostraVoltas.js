import '../styles/MostrarVoltas.css'

function MostraVoltas(props) {
    return (
        <p className="voltas">
            <span>{props.voltas}</span><br />
            Voltas
        </p>
    )

}

export default MostraVoltas;