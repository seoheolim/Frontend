import React, { useState } from 'react'
import './main.css'
import axios from "axios"

function handleFileInput(e, setFile, setFileName) {
    setFile(e.target.files[0])
    setFileName(e.target.files[0].name)
    console.log(e.target.files[0])
}

const handleEmailInput = (e, setEmail) => {
    setEmail(e.target.value)
    console.log(e.target.value)
}

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

function handlePost(image, video, status, email) {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('video', video);
    formData.append('option', status);
    formData.append('email', email);
    axios.post("http://54.180.220.9/api/upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
    ).then(res => {
        alert('성공')
    }).catch(err => {
        alert('Failed')
    })
}

function Fileinput() {
    const [image, setImage] = useState();
    const [video, setVideo] = useState();
    const [email, setEmail] = useState();
    const [status, setStatus] = useState();

    const [vidName, setVidName] = useState();
    const [imgName, setImgName] = useState();

    return (
        <div className="filebox">
            <p className='align-center'>
                <input className="upload-name" placeholder="첨부파일" defaultValue={vidName || ""} />
                <label htmlFor='vid-file'>영상 찾기</label>
                <input type="file" id="vid-file" onChange={e => handleFileInput(e, setVideo, setVidName)} />
            </p>

            <p className='align-center'>
                <input className="upload-name" placeholder="첨부파일" defaultValue={imgName || ""} />
                <label htmlFor='img-file'>사진 찾기</label>
                <input type="file" id="img-file" onChange={e => handleFileInput(e, setImage, setImgName)} />
            </p>

            <p className='align-center' id='need-space'>
                대상만 모자이크<input type="checkbox" className='btn-checkbox' onClick={e => onlyPerson(e, setStatus)}></input>
                <br />
                대상을 제외하고 모자이크<input type="checkbox" className='btn-checkbox' onClick={e => exceptPerson(e, setStatus)}></input>
            </p>

            <h4 className='main-text'>결과물을 받을 이메일을 입력해주세요!</h4>
            <p className='align-center'>

                <br />
                <br />


                <input className="email-input" placeholder="E-Mail을 입력해주세요" type="text" onChange={e => handleEmailInput(e, setEmail)}></input>
            </p>

            <p className='align-center'><button id="btn-submit" type="button" onClick={() => handlePost(image, video, status, email)}>제출하기</button></p>
        </div>
    );
}

export default Fileinput;