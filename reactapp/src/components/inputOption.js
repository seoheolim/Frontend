import React from 'react'
import './main.css'

function onlyPerson(e, setStatus) {
    if (e.target.checked) {
        setStatus("Only")
    }
    else {
        setStatus("Except")
    }
    console.log(e.target.checked)
}
function exceptPerson(e, setStatus) {
    if (e.target.checked) {
        setStatus("Except")
    }
    else {
        setStatus("Only")
    }
    console.log(e.target.checked)
}

function OptionInput(props) {

    return (
        <p id='align-center'>
            대상만 모자이크<input type="checkbox" className='btn-checkbox' onClick={e => onlyPerson(e, props.setStatus)}></input>
            <br />
            대상을 제외하고 모자이크<input type="checkbox" className='btn-checkbox' onClick={e => exceptPerson(e, props.setStatus)}></input>
        </p>
    )

}

export default OptionInput