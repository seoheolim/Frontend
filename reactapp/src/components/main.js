import React, { Component } from 'react'
import './main.css'
import Fileinput from './Fileinput'

class Mainpage extends Component {


    render() {
        return (
            <div>
                <h1 className='big-header'>
                    Upload Your Video and Photo!
                </h1>
                <h4 className='main-text'>
                    모자이크 처리하고 싶은 영상과 대상의 얼굴 사진을 올려주세요
                </h4>
                <p><br /><Fileinput /></p>



            </div>
        )
    }
}

export default Mainpage