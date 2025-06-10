// Experience.tsx
import { Container, Row, Col } from "react-bootstrap";
import "../style/experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <Container>
        {/* 제목 */}
        <Row className="justify-content-center text-center mb-5">
          <Col xs={12} md={10}>
            <h2 className="experience-title">Experience</h2>
          </Col>
        </Row>

        {/* QA 업무 */}
        <Row className="justify-content-center mb-5 text-center">
          <Col xs={12} md={10}>
            <h4 className="section-subtitle">
              QA 업무 <span style={{ fontSize: "1rem", fontWeight: 500 }}>(2023.05 ~ 2025.01 / 1년 8개월)</span>
            </h4>

            <Row className="g-3 mt-3">
              <Col xs={12} md={4}>
                <img
                  src="img/image 35.png"
                  alt="QA1"
                  className="img-fluid rounded shadow-sm"
                />
              </Col>
              <Col xs={12} md={4}>
                <img
                  src="img/image 36.png"
                  alt="QA2"
                  className="img-fluid rounded shadow-sm"
                />
              </Col>
              <Col xs={12} md={4}>
                <img
                  src="img/image 37.png"
                  alt="QA3"
                  className="img-fluid rounded shadow-sm"
                />
              </Col>
            </Row>

            <div className="mt-4 text-start" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
              <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>주요 업무 및 경험</p>
              <ul style={{ paddingLeft: "1rem" }}>
                <li><strong>JIRA</strong>를 통한 이슈 등록, 우선순위 조정, 리포트 작성 등 QA 프로세스 전반 관리하였습니다.</li>
                <li>카카오모빌리티의 <strong>트럭커 앱</strong>과 Electron 기반 앱 <strong>카카오T물류</strong>, <strong>로지노트</strong> 기능 및 UI 테스트를 진행하였습니다.</li>
                <li><strong>Swagger, JIRA, Figma, Slack</strong> 등 협업 도구에 익숙합니다.</li>
              </ul>
            </div>
          </Col>
        </Row>

          {/* RFID 재고 시스템 */}
          <Row className="justify-content-center mb-5">
            <Col xs={12} md={10}>
              <h4 className="section-subtitle">
                RFID 재고 시스템 관리 "ZARAHOME" <span style={{ fontSize: "1rem", fontWeight: 500 }}>(2019. 01 ~ 2022. 02 / 1년 8개월)</span>
              </h4>
              <Row className="g-3 mt-3">
                {["38", "39", "40"].map((num) => (
                  <Col xs={12} md={4} key={num}>
                    <img
                      src={`img/image ${num}.png`}
                      alt={`Zara${num}`}
                      className="img-fluid rounded shadow-sm"
                    />
                  </Col>
                ))}
              </Row>

              <p className="mt-4 mb-2 fw-bold">주요 업무</p>
              <ul>
                <li><strong>RFID 재고관리 시스템 도입</strong>을 위한 지점 리더업무 진행하였습니다.</li>
                <li>RFID 재고 정보를 기반한 <strong>물류 재고 관리 업무</strong>수행하였습니다.</li>
              </ul>
            </Col>
          </Row>

        {/* 경력 요약 */}
        <Row className="justify-content-center mb-5">
          <Col xs={12} md={10}>
            <h5 style={{ fontWeight: 700, textAlign: "left", marginBottom: "1rem" }}>경력</h5>
            <ul style={{ lineHeight: 2, paddingLeft: 0, listStyle: "none", textAlign: "left" }}>
              <li>
                - 테스트이앤씨 (카카오모빌리티 트럭커 QA){" "}
                <strong
                  style={{
                    background: "linear-gradient(to top, #fff3e0 50%, transparent 50%)",
                    fontWeight: 700,
                    padding: "0 4px",
                    borderRadius: 4,
                    color: "#222",
                  }}
                >
                  1년 8개월
                </strong>
              </li>
              <li>
                - 자라홈리테일코리아 (RFID 재고 시스템 관리){" "}
                <strong
                  style={{
                    background: "linear-gradient(to top, #fff3e0 50%, transparent 50%)",
                    fontWeight: 700,
                    padding: "0 4px",
                    borderRadius: 4,
                    color: "#222",
                  }}
                >
                  3년 2개월
                </strong>
              </li>
            </ul>
          </Col>
        </Row>

        {/* 교육 이수 */}
        <Row className="justify-content-center mb-5">
          <Col xs={12} md={10}>
            <h5 className="section-heading">교육 이수</h5>
            <ul className="section-list">
              <li>Node.js 풀스택 개발자 양성 과정 – KOSTA (2025.02 ~ 2025.07)</li>
              <li>프론트엔드 리액트 – 이젠아카데미 (2022.09 ~ 2022.12)</li>
              <li>바닐라 자바스크립트 – 이젠아카데미 (2022.09 ~ 2022.12)</li>
              <li>스마트 UI/UX 웹디자인 & 퍼블리셔 – 하이미디어 (2022.03 ~ 2022.09)</li>
              <li>원어민 화상영어 Cambly – 177시간 수료</li>
            </ul>
            <Row className="g-3 mt-3 text-center">
              {["cambly.jpg", "cambly2.jpg", "cambly3.jpg"].map((img, i) => (
                <Col xs={12} md={4} key={i}>
                  <img
                    src={`img/${img}`}
                    alt={`cambly${i + 1}`}
                    className="img-fluid rounded shadow-sm"
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* 자격증 */}
        <Row className="justify-content-center">
          <Col xs={12} md={10}>
            <h5 className="section-heading">자격증</h5>
            <ul className="section-list">
              <li>ISTQB CTFL (Certified Tester Foundation Level) – 2024.04.25</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;