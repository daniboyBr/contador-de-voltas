import '../styles/Button.css'

function Button({
    action,
    text,
    className=''
}) {
    return (
        <button className={className} onClick={action}>{text}</button>
    )
}

 
export default Button;