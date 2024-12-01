import React, { useState } from 'react'

function Solution() {
    const [name, setName] = useState("")

    // const handleInput = (e) => {
    //     setName(e.target.value)
    // }

    return (
        <div>
            <label>Enter your name:</label>
            <br></br>
            <br></br>
            <input
                type='text'
                value={name}
                onChange={(e) => {setName(e.target.value)}}
            />
            <br></br>
            <h3>{name}</h3>

        </div>

    )
}

export default Solution