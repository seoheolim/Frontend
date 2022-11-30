import { React, useState } from 'react'
import '../main.css'

function onlyPerson(e, setStatus, setChecked) {
    if (e.target.checked) {
        setStatus("Only")
        setChecked(true)
    }
    else (setChecked(false))
    console.log(e.target.checked)
}
function exceptPerson(e, setStatus, setChecked) {
    if (e.target.checked) {
        setStatus("Except")
        setChecked(true)
    }
    else (setChecked(false))
    console.log(e.target.checked)
}

function OptionInput(props) {
    const [checkedOnly, setCheckedOnly] = useState(false)
    const [checkedExcept, setCheckedExcept] = useState(false)

    return (
        <p id='align-center'>
            대상만 모자이크
            <input type="checkbox"
                className='btn-checkbox'
                onClick={e => onlyPerson(e, props.setStatus, setCheckedOnly)}
                disabled={checkedExcept}>
            </input>
            <br />
            대상을 제외하고 모자이크
            <input type="checkbox"
                className='btn-checkbox'
                onClick={e => exceptPerson(e, props.setStatus, setCheckedExcept)}
                disabled={checkedOnly}>
            </input>
        </p>
    )

}

export default OptionInput