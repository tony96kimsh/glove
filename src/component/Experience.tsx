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
        <Row className="justify-content-center mb-5">
          <Col xs={12} md={10}>
            <h4 className="section-subtitle">
              QA 업무 <span className="subtitle-detail">(2023.05 ~ 2025.01 / 1년 8개월)</span>
            </h4>
            <Row className="g-3 mt-3">
              {["35", "36", "37"].map((num) => (
                <Col xs={12} md={4} key={num}>
                  <img
                    src={`img/image ${num}.png`}
                    alt={`QA${num}`}
                    className="img-fluid rounded shadow-sm"
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* RFID 재고 시스템 */}
        <Row className="justify-content-center mb-5">
          <Col xs={12} md={10}>
            <h4 className="section-subtitle">
              RFID 재고 시스템 관리 <span className="subtitle-detail">"ZARAHOME"</span>
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