import { Container, Row, Col } from "react-bootstrap";
import '../style/about.css';
import Marquee from "react-fast-marquee";

const About = () => {
  const techStacks = [

    "c", "cplusplus", "csharp", "javascript", "typescript",
    "nodejs", "react", "redux", "jquery", "bootstrap",
    "python", "mysql",
    

    "c", "cplusplus", "csharp", "javascript", "typescript",
    "nodejs", "react", "redux", "jquery", "bootstrap",
    "python", "mysql",
    

    "c", "cplusplus", "csharp", "javascript", "typescript",
    "nodejs", "react", "redux", "jquery", "bootstrap",
    "python", "mysql",    
  ];

  return (
    <section
      id="about"
      className="d-flex align-items-center"
      style={{
        minHeight: "100vh",
        padding: "4rem 1rem",
        fontFamily: "'NanumSquareRound', sans-serif",
        backgroundColor: "#fdf6ee",
        color: "#5e473e",
      }}
    >
      <Container fluid="md">
        <Row className="justify-content-center text-center mb-5">
          <Col xs={12} md={10} lg={8}>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, marginBottom: "1.5rem" }}>
              소개글
            </h2>
            <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", lineHeight: 1.8 }}>
              <strong>백엔드부터 프론트엔드, QA, 디자인까지 경험한</strong><br />
              풀스택 개발자 <strong>김성훈</strong>입니다.
              <br /><br />
              <strong>자라홈에서 RFID 시스템을 도입하며 IT에 눈을 뜨고,</strong><br />
              이후 <strong>QA 경험을 바탕으로</strong> 사용자 중심의 서비스와  
              안정적인 개발에 매력을 느껴 개발자로 전향했습니다.
              <br /><br />
              <strong>C# 데스크톱 앱 개발</strong>, <strong>React</strong>, <strong>Node.js</strong> 기반의 웹 개발,  
              그리고 <strong>퍼블리싱 및 QA 경험</strong>까지<br />
              <strong>넓고 탄탄한 개발 스펙트럼</strong>을 지닌 풀스택 주니어 개발자입니다.
            </p>
          </Col>
        </Row>

        {/* 기술스택 스크롤 영역 */}
        <div className="px-2">
          <Marquee
            className="mx-auto rounded-pill"
            gradient={false}
            speed={40} // 스크롤 속도 기본값 50
            pauseOnHover={true}
          >
            {techStacks.map((stack, i) => (
              <img
                key={i}
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${stack}/${stack}-original.svg`}
                alt={stack}
                style={{
                  width: 48,
                  height: 48,
                  margin: "0 16px",
                  opacity: 0.4,
                  boxSizing: "content-box"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.4")}
              />
            ))}
          </Marquee>
        </div>
      </Container>
    </section>
  );
};

export default About;