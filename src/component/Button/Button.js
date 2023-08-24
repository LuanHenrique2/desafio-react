import './Button.css'

function rendershow (label) {
    alert(`A label desse botão é "${label}"`)
}

function Button ({label}) {
    return <button className="btn" onClick={() => rendershow(label)}>{label}</button>
}

Button.defaultProps = {
    label: 'Clique Aqui'
}

export default Button