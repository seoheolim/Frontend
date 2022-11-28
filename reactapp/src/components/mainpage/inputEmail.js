import React from 'react'
import '../main.css'

const handleEmailInput = (e, setEmail) => {
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.com$/;
    if (regex.test(e.target.value)) {
        setEmail(e.target.value)
        console.log(e.target.value)
    }
    else {
        setEmail("")
    }

}

function EmailInput(props) {

    return (
        <div className="filebox" id='align-center'>
            <input className="email-input" placeholder="E-Mail을 입력해주세요" type="text" onChange={e => handleEmailInput(e, props.setEmail)}></input>
        </div>
    );
}

export default EmailInput;