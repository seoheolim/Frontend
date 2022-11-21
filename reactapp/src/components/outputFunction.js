import React from 'react'
import './main.css'
import axios from "axios"


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


function FileOutput(props) {

    return (
        <p id='align-center'>
            <button id="btn-submit" type="button" onClick={() => handlePost(props.image, props.video, props.status, props.email)}>
                제출하기
            </button>
        </p>
    );
}

export default FileOutput;