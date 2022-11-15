import React, { Component } from 'react'
import './main.css'
import axios from "axios"

class Fileinput extends Component {

    constructor(props){
        super(props);
        this.state = {
          selectedFile: null,
        }
      }

    handleFileInput(e){
        this.setState({
          selectedFile : e.target.files[0],
        })
        console.log(e.target.files[0])
      }

    handlePost(){
        const formData = new FormData();
        formData.append('file', this.state.selectedFile);
    
        return axios.post("./", formData).then(res => {
          alert('성공')
        }).catch(err => {
          alert('실패')
        })
      }

    render() {
        return (
            <div className="filebox">
                <input class="upload-name" value="첨부파일" placeholder="첨부파일"></input>
                <label for="file">파일찾기</label>
                <input type="file" id="file" onChange={e => this.handleFileInput(e)}></input>

                <button type="button" onClick={this.handlePost()}>Upload</button>
            </div>
        )
    }
}

export default Fileinput