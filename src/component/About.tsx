import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#fdf6ee", // 따뜻한 베이지톤
        padding: "80px 0",
        fontFamily: "'NanumSquareRound', sans-serif",
        color: "#5e473e",
      }}
    >
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col md={10} lg={8}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1.5rem" }}>
              About Me
            </h2>
            <p style={{ fontSize: "1.2rem", lineHeight: 1.8 }}>
              디자인부터 QA, 프론트엔드, 백엔드까지 경험한<br />
              풀스택 주니어 개발자 <strong>김성훈</strong>입니다.
              <br /><br />
              ZARA Home에서 RFID 시스템을 도입하며 IT에 흥미를 느끼게 되었고,<br />
              이후 QA 업무를 통해 사용자 중심의 관점과 꼼꼼함을 키워왔습니다.<br />
              <br />
              React 기반 프론트엔드부터 Node.js 백엔드 API 연동,<br />
              HTML/CSS 퍼블리싱과 테스트까지 넓은 스펙트럼의 개발 경험을 지니고 있습니다.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <h3 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "1rem" }}>핵심 가치</h3>
            <ul style={{ fontSize: "1.1rem", lineHeight: 1.8, paddingLeft: 0, listStyle: "none" }}>
              <li>✅ 사용자 중심 개발</li>
              <li>✅ 프론트와 백을 아우르는 풀스택 지향</li>
              <li>✅ 협업을 통해 함께 성장하는 개발자</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;