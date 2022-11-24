import React, { useState } from 'react'
import '../components/main.css'
import FileInput from '../components/mainpage/inputFile'
import EmailInput from '../components/mainpage/inputEmail'
import FileOutput from '../components/mainpage/outputFunction'
import OptionInput from '../components/mainpage/inputOption'

function Home() {
    const [image, setImage] = useState();
    const [video, setVideo] = useState();
    const [email, setEmail] = useState();
    const [status, setStatus] = useState("");

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

            <br /><br /><br />
            <h4 className='main-text'>
                편집된 영상을 받을 이메일을 입력해주세요
            </h4>
            <EmailInput setEmail={setEmail} />

            {status && <p className='email-warning'>이메일을 올바르게 입력했습니다</p>}
            <br /><br /><br />


            <OptionInput setStatus={setStatus}></OptionInput>
            <br /><br />
            <FileOutput image={image} video={video} email={email} status={status}></FileOutput>

        </div>
    )
}

export default Home