import React, { useState } from 'react'
import '../main.css'

function HandleEmailInput2(e, setEmail) {
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.com$/;
    const [isChanged, setIsChanged] = useState(0);
    if (regex.test(e.target.value)) {
        setEmail(e.target.value)
        setIsChanged(1)
        console.log(e.target.value)
    }

    return (
        <div>
            {
                isChanged === 0
                    ? (<div>맞아요!</div>)
                    : (<div>틀려요!</div>)
            }
        </div>
    )

}

export default HandleEmailInput2