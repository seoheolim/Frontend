import React, { Component, useState } from 'react'
import './main.css'
import axios from "axios"

class Fileinput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
        }
    }

    handleFileInput(e) {
        this.setState({
            selectedFile: e.target.files[0],
        })
        console.log(e.target.files[0])
    }

    handlePost() {
        const formData = new FormData();
        formData.append('file', this.state.selectedFile);

        return axios.post("http://3.34.44.236:9000/api/upload", formData).then(res => {
            alert('성공')
        }).catch(err => {
            alert('Failed')
        })
    }

    render() {
        return (
            <div className="filebox">
                <input type="file" id="file" onChange={e => this.handleFileInput(e)} />

                <button type="button" onClick={this.handlePost}>Upload</button>
            </div>
        )
    }
}

export default Fileinput