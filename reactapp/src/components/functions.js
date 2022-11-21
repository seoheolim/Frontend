import React, { useState } from 'react'
import './main.css'
import axios from "axios"


function handleFileInput(e, setFile, setFileName) {
    setFile(e.target.files[0])
    setFileName(e.target.files[0].name)
    console.log(e.target.files[0])
}

function handlePost(image, video) {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('video', video);

    axios.post("http://54.180.122.160:9000/api/upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
    ).then(res => {
        alert('성공')
    }).catch(err => {
        alert('Failed')
    })
    return (formData)
}

function Fileinput() {
    const [image, setImage] = useState();
    const [video, setVideo] = useState();
    const [vidName, setVidName] = useState();
    const [imgName, setImgName] = useState();

    return (
        <div>
            <p>
                <input className="upload-name" placeholder="첨부파일" defaultValue={vidName || ""} />
                <label htmlFor='vid-file'>동영상 찾기</label>
                <input type="file" id="vid-file" onChange={e => handleFileInput(e, setVideo, setVidName)} />
            </p>



            <p>
                <input className="upload-name" placeholder="첨부파일" defaultValue={imgName || ""} />
                <label htmlFor='img-file'>사진 찾기</label>
                <input type="file" id="img-file" onChange={e => handleFileInput(e, setImage, setImgName)} />
            </p>
            <p><button type="button" className='btn-submit' onClick={() => handlePost(image, video)}>Upload</button></p>
        </div>
    );
}

export default Fileinput;

