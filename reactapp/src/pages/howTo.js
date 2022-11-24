import React from "react";
import vid_upload from "./images/vid.jpg"
import img_upload from "./images/img.png"
import checkbox from "./images/checkbox.png"

const HowTo = () => {
  return (
    <div className="big-header">
      <h1>
        How To
      </h1>
      <h4 className="explain-content" style={{ marginTop: "30px", marginBottom: "200px"}}>
        1. 먼저 원하는 영상을 올려주세요<br />
        <img className="image" src={vid_upload} alt="vid_upload.jpg" width={"500px"} /><br />
        2. 다음으로 영상 속 기준이 되는 대상의 안면 사진을 올려주세요<br />
        <img className="image" src={img_upload} alt="img_upload.jpg" width={"700px"} /><br />
        3. 대상을 제외하고 모자이크 처리를 원하시는지, 혹은 대상만 모자이크 처리하고 싶은지 선택해주세요<br />
        <img className="image" src={checkbox} alt="checkbox.jpg" width={"400px"} /><br />
        <h4 style={{ color: "red" }}>(체크 박스 중 하나만 선택해주세요)</h4>
        4. 편집된 영상을 받을 이메일을 입력하시고 제출하기 버튼을 누르시면 영상이 변환되는 대로 이메일로 보내드립니다!<br />
        (소요 시간은 영상 길이에 따라 상이합니다)
        
      </h4>
    </div>
  )
};

export default HowTo;