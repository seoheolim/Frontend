import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
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
    const [sendState, setSendState] = useState(2)

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

            <br /><br />

            <OptionInput setStatus={setStatus}> status={status}</OptionInput>
            <br /><br /><br />

            <h4 className='main-text'>
                편집된 영상을 받을 이메일을 입력해주세요
            </h4>
            <EmailInput setEmail={setEmail} />


            {email && <p className='email-alarm' style={{ color: "blue" }}>이메일을 올바르게 입력했습니다</p>}
            {email === "" && <p className='email-alarm' style={{ color: "red" }}>이메일 형식을 확인해주세요</p>}

            <br /><br />

            <FileOutput image={image} video={video} email={email} status={status} setSendState={setSendState}></FileOutput>

            {sendState === 1 && <Navigate to='/success' />}
            {sendState === 0 && <h4 style={{ color: "red", textAlign: "center", marginBottom: "150px" }}>
                제출에 실패했습니다. 파일과 정보를 확인해주세요
            </h4>}
            <br /><br />
        </div>
    )
}

export default Home