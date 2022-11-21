import React from 'react'
import './main.css'


function handleFileInput(e, setFile, setFileName) {
    setFile(e.target.files[0])
    setFileName(e.target.files[0].name)
    console.log(e.target.files[0])
}

function Fileinput(props) {

    return (
        <div className="filebox" id='align-center'>
            <input className="upload-name" placeholder="첨부파일" defaultValue={props.fileName || ""} />
            <label htmlFor={props.fileId}>{props.fileType} 찾기</label>
            <input type="file" id={props.fileId} onChange={e => handleFileInput(e, props.setFile, props.setFileName)} />
        </div>
    );
}

export default Fileinput;