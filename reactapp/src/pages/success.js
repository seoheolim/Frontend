import React from "react";
import success from "./images/success.png"

const Success = () => {
  return (
    <div className="big-header">
      <img src={success} alt="success.jpg" width={"150"} style={{ margin: "auto", marginBottom: "50px" }} /><br />
      <h1>
        요청이 성공적으로 접수되었습니다!
      </h1>
      <h4>(소요시간은 영상의 길이에 따라 상이하며, 완료 시 이메일로 파일이 전송됩니다)</h4>
      <br/><br/>
      <h2>
        HIDE 서비스를 이용해주셔서 감사합니다 :)
      </h2>

    </div>
  )
};

export default Success;