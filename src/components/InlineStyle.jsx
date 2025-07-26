export const InlineStyle = () => {
    const containerStyle = {
        border: 'solid 2px #e82043',
        borderRadius: '20px',
        padding: '8px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
    const titleStyle = {
        color: '#008800'
    }
    const buttonStyle = {
        backgroundColor: '#aaa'
    }
    return (
        <div style={containerStyle}>
            <p style={titleStyle}>--InlineStyle--</p>
            <button style={buttonStyle}>FIGHT!!</button>
        </div>
    )
}