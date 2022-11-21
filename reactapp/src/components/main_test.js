import React, { useState } from 'react'
import './main.css'
import FileInput from './inputFunction'
import EmailInput from './inputEmail'
import FileOutput from './outputFunction'
import OptionInput from './inputOption'

function Mainpage() {
    const [image, setImage] = useState();
    const [video, setVideo] = useState();
    const [email, setEmail] = useState();
    const [status, setStatus] = useState();

    const [vidName, setVidName] = useState();
    const [imgName, setImgName] = useState();

    return (
        <div>
            <h1 className='big-header'>
                Upload Your Video and Photo!
            </h1>
            <h4 className='main-text'>
                모자이크 처리하고 싶은 영상과 대상의 얼굴 사진을 올려주세요
            </h4>
            <FileInput fileType={"영상"} setFile={setVideo} setFileName={setVidName} fileName={vidName} fileId={"vid-file"} />
            <FileInput fileType={"사진"} setFile={setImage} setFileName={setImgName} fileName={imgName} fileId={"img-file"} />
            <EmailInput setEmail={setEmail} />
            <OptionInput setStatus={setStatus}></OptionInput>
            <FileOutput image={image} video={video} email={email} status={status}></FileOutput>

        </div>
    )
}

export default Mainpage