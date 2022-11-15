import React, { useState } from 'react'
import './main.css'
import axios from "axios"

function handleFileInput(e, setFile) {
    setFile(e.target.files[0])
    console.log(e.target.files[0])
}

function handlePost(image, video) {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('video', video);

    axios.post("http://3.34.44.236:9000/api/upload",
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


    return (
        <div className="filebox">
            <p><input type="file" id="file" onChange={e => handleFileInput(e, setImage)} /></p>
            <p><input type="file" id="file" onChange={e => handleFileInput(e, setVideo)} /></p>
            <p><button type="button" onClick={() => handlePost(image, video)}>Upload</button></p>
        </div>
    );
}

export default Fileinput;