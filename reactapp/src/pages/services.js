import React from "react";
import service_archi from "./images/architecture.png"
import output from "./images/output.png"

const Services = () => {
  return (
    <div className="big-header">
      <h1>
        Services
      </h1>
      <h3 style={{ marginTop: "30px", marginBottom: "50px" }}>Project HIDE는 영상 속 인물을 자동으로 모자이크 처리해주는 서비스를 제공합니다.</h3>
      <h3>Background</h3>
      <h4 className="explain-text" style={{ marginTop: "10px", marginLeft: "400px", marginRight: "400px", marginBottom: "50px" }}>
        컨텐츠 산업이 나날이 성장하고 있는 현재, 다양한 편집 프로그램들이 시장에 나오고 있습니다.
        이는 여러가지 기능을 포함하고 있는데, 그 중 <ins>초상권 침해를 방지하기 위한 모자이크 편집의 중요성이 대두</ins>되고 있습니다.
        그럼에도 불구하고, 시중에 나와있는 편집 프로그램들은 일반인들이 사용하기 어려워 진입장벽이 높습니다.
        일부 프로그램들은 손쉽게 모자이크 처리 기능을 제공하지만, 이것들은 성능이 부족한 단점이 있습니다.
        따라서 <ins>저희 팀은 누구나 간편하게 사용할 수 있으면서 높은 성능을 제공하는 자동 모자이크 처리 서비스를 개발</ins>했습니다.
      </h4>

      <h3>Service Architecture</h3>

      <h4 className="explain-content" style={{ marginTop: "10px", marginLeft: "400px", marginRight: "400px" }}>
        저희 서비스는 다음과 같은 서비스 아키텍쳐를 갖고 있습니다. <br />
      </h4>

      <img className="image" src={service_archi} alt="service_architecture.jpg" width={"600px"} style={{ margin: "auto", marginBottom: "50px"}} /><br />

      <h3>Service Output</h3>
      <h4 className="explain-content" style={{ marginTop: "10px", marginLeft: "400px", marginRight: "400px" }}>
        저희 서비스는 다음과 같이 영상에서 나온 얼굴들을 모자이크 처리해서 반환해줍니다. <br />
      </h4>

      <img className="image" src={output} alt="output.jpg" width={"600px"} style={{ margin: "auto", marginBottom: "50px"}} /><br />

      <h3 className="explain-content" style={{ marginTop: "10px"}}>
        앞으로 단순 모자이크 뿐만 아니라 아바타 입히기, 눈만 가리기, 등의 기능도 추가될 예정이니, 많은 관심 부탁드립니다 :)
      </h3>

    </div>
  )
};

export default Services;