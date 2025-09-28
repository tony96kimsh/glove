// Contact.tsx
import { useState, useEffect } from "react";
import { Container, Row, Col, Image, Card, Modal, Button } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [markdownContent, setMarkdownContent] = useState("");

  const handleResumeClick = () => {
    fetch("markdown/CV.md")
      .then((res) => res.text())
      .then((text) => {
        setMarkdownContent(text);
        setShowModal(true);
      });
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4" id="contact">📬 연락처</h2> <br />
      <Card className="p-4 shadow-sm border-0">
        <Row className="align-items-center">
          <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
            <Image src="/glove/img/SungHoonKim.jpg" roundedCircle width={150} alt="김성훈" />
          </Col>
          <Col xs={12} md={8}>
            <h5 className="fw-bold mb-2">👤 김성훈 (96.03.26)</h5>
            <p className="mb-1">📞 010-9626-6393</p>
            <p className="mb-1">✉️ tony96kimsh@gmail.com</p>            
            <p className="mb-2">
              <a href="https://github.com/tony96kimsh" target="_blank" rel="noopener noreferrer" className="d-inline-flex align-items-center text-decoration-none">
                <Github size={20} className="me-2" />
                깃허브: https://github.com/tony96kimsh
              </a>
            </p>
            <p>
              <Button variant="outline-dark" size="sm" onClick={handleResumeClick}>
                📄 이력서 보기
              </Button>
            </p>
            <blockquote className="blockquote fst-italic mt-4">
              “동료의 성장은 곧 나의 성장” <br />
              <span className="fw-normal">협업을 통해 함께 성장하는 개발자가 되겠습니다.</span>
            </blockquote>
          </Col>
        </Row>
      </Card>

      {/* 마크다운 모달 */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>📄 이력서</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: "70vh", overflowY: "auto" }}>
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {markdownContent}
          </ReactMarkdown>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Contact;
