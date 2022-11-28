import { React, useState } from 'react'
import '../main.css'
import axios from "axios"
import Loading from "../loading"


function handlePost(image, video, status, email, setSendState, setLoading) {
    const formData = new FormData();
    setLoading(true)
    formData.append('image', image);
    formData.append('video', video);
    formData.append('option', status);
    formData.append('email', email);
    axios.post("http://54.180.220.9/api/upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
    ).then(res => {
        setSendState(1)
        setLoading(false)
    }).catch(err => {
        setSendState(0)
        setLoading(false)
    })
}


function FileOutput(props) {
    const [loading, setLoading] = useState(false)

    return (
        <p id='align-center'>
            <button id="btn-submit"
                type="button"
                onClick={() => handlePost(props.image,
                    props.video,
                    props.status,
                    props.email,
                    props.setSendState,
                    setLoading)}
            >
                
                {loading === false && <h4>제출하기</h4>}
                <div className='loading' style={{marginLeft:"23px"}}>{loading ? <Loading /> : ""}</div>
            </button>
        </p>
    );
}

export default FileOutput;