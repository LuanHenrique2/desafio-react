function Text ({textColor, text}) {
    return <p style={{color: textColor, textTransform: 'uppercase', fontWeight: 700}}>{text}</p>
}

Text.defaultProps = {
    textColor: '#ff3453',
    text: 'A paragraph default'
}

export default Text