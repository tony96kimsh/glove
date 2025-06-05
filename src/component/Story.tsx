import { Container, Row, Col } from "react-bootstrap";

const Story = () => {
  return (
    <section
      id="glove-story"
      className="py-5"
      style={{
        backgroundColor: "#ffffff",
        transition: "background-color 0.3s ease",
      }}
    >
      <Container>
        <h2 className="text-center mb-4" style={{ fontWeight: 800, fontSize: "2.2rem" }}>
          Glove Project
        </h2>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <img
              src="img/glove.jpg"              
              className="img-fluid mb-4"
              alt="Glove 프로젝트 이미지"
              style={{
                maxHeight: "300px",
                objectFit: "contain",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            />
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
              글로브 프로젝트로 이름을 정한 이유는 QA 업무 경험 이후 프로젝트를 <strong>완성도 있게 정리하며 마무리</strong> 짓고 싶었기 때문입니다.
              <br />
              <strong>야구에서 좋은 공이든 나쁜 공이든 포수의 글로브에 안정적으로 안착하듯이</strong>, 모든 결과를 책임지고 담아내는 프로젝트가 되길 바랐습니다.
              <br />
              또한 "Glove"라는 단어는 <strong>발음에서 주는 기분 좋은 울림과 감각</strong>이 있어 저의 개발 철학과 잘 어울린다고 느꼈습니다.
              <br />
              이전에는 디자인과 설계에 많은 시간을 쏟았다면, 이번 프로젝트는 <strong>개발에만 집중하며 기술적으로 완성해낸 결과물</strong>입니다.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Story;