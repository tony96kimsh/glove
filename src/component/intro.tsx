import { Container, Row, Col } from "react-bootstrap";

const Intro = () => {
  return (
    <div
      id="home"
      className="vh-100 d-flex flex-column justify-content-center align-items-center position-relative"
      style={{
        backgroundColor: "#ffffff",
        fontFamily: "'NanumSquareRound', sans-serif",
      }}
    >
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={10} lg={8}>
            <p              
              style={{
                fontSize: "2.8rem",
                fontWeight: 700,
                lineHeight: 1.6,
                marginBottom: 0,
              }}
            >
              <span className="shine-text">안녕하세요<br />
              사람을 위한 개발을 지향하는<br /></span>
              <span style={{ fontSize: "3.2rem", fontWeight: 900}} className="no-glow">
                개발자 김성훈입니다.
              </span>
            </p>
          </Col>
        </Row>
      </Container>

      {/* 아래 스크롤 유도 아이콘 */}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          animation: "bounce 2s infinite",
          fontSize: "2rem",
          color: "#888888",
        }}
      >
        ↓
      </div>
    </div>
  );
};

export default Intro;