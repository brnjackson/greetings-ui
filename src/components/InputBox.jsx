import React, { useState } from 'react' 

const InputBox = () => {
    const [ name, setName ] = useState('')
    return (
        <div className="container">
            <input type="text" className="inputbox" name="name" 
            onChange= {event => setName(event.target.value)} />
            <div className="message">
                <p>{ name ? 'Its nice to meet you, ' : ''}
                <span className="name">{ name }</span></p>
            </div>
        </div>
    )
}

export default InputBox