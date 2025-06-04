import { useState } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import { projectList } from "../data/datas";
import "../style/Project.css";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projectList[0] | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleCardClick = (project: typeof projectList[0]) => {
    if (project.markdown) {
      fetch(project.markdown)
        .then((res) => res.text())
        .then((text) => {
          setMarkdownContent(text);
          setSelectedProject(project);
          setShowModal(true);
        });
    } else if (project.github) {
      setSelectedProject(project);
      setMarkdownContent("");
      setShowModal(true);
    }
  };

  const SkillBadge = ({
    skill,
  }: {
    skill: { skillName: string; skillLogo: string };
  }) => {
    return (
      <span
        className="d-inline-flex align-items-center px-3 py-1 rounded-pill shadow-sm text-dark"
        style={{
          backgroundColor: "#f1f3f5",
          fontSize: "0.95rem",
          fontWeight: 500,
        }}
      >
        <img
          src={skill.skillLogo}
          alt={skill.skillName}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
          style={{
            width: "20px",
            height: "20px",
            marginRight: "0.5rem",
            objectFit: "contain",
          }}
        />
        {skill.skillName}
      </span>
    );
  };

  return (
    <section id="projects" className="py-5" style={{ backgroundColor: "#fffaf3" }}>
      
      <Container>
        <h2 className="text-center mb-5" style={{ fontWeight: 800, fontSize: "2.5rem" }}>
          Projects
        </h2>

        {["desktop", "web", "design"].map((category) => {
          const filtered = projectList.filter((p) => p.category === category);
          if (filtered.length === 0) return null;

          return (
            <div key={category}>
              <h3 className="mt-5 mb-4" style={{ fontWeight: 700, fontSize: "1.75rem", textTransform: "capitalize" }}>
                {category}
              </h3>
              <hr /> <br />
              <Row className="g-4">
                {filtered.map((project, index) => (
                  <Col key={index} xs={12} sm={6} md={4}>
                    <Card
                      className={`h-100 shadow-sm project-card ${
                        hoveredIndex !== null && hoveredIndex !== index ? "faded" : ""
                      }`}
                      style={{ cursor: "pointer" }}
                      onClick={() => handleCardClick(project)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <Card.Img
                        variant="top"
                        src={project.images}
                        alt={project.title}
                        style={{ objectFit: "cover", height: "180px" }}
                      />
                      <Card.Body>
                        <Card.Title style={{ fontWeight: 700, fontSize: "1.1rem" }}>
                          {project.title}
                        </Card.Title>
                        <Card.Text style={{ fontSize: "0.95rem", lineHeight: 1.5 }}>
                          {project.summary}
                        </Card.Text>
                        <div className="mt-3 d-flex flex-wrap gap-2">
                          {project.skills.map((skill, i) => (
                            <SkillBadge key={i} skill={skill} />
                          ))}
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          );
        })}

        <Modal show={showModal} onHide={() => setShowModal(false)} centered size="xl">
          <Modal.Header closeButton>
            <Modal.Title>프로젝트 상세보기</Modal.Title>
          </Modal.Header>

          <Modal.Body style={{ maxHeight: "70vh", overflowY: "auto", paddingBottom: "5rem" }}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                img: ({ node, ...props }) => (
                  <img
                    {...props}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      display: "block",
                      margin: "1rem auto",
                      borderRadius: "8px",
                    }}
                  />
                ),
              }}
            >
              {markdownContent}
            </ReactMarkdown>
          </Modal.Body>

          <div
            style={{
              position: "sticky",
              bottom: 0,
              backgroundColor: "#fff",
              padding: "1rem",
              borderTop: "1px solid #dee2e6",
              zIndex: 10,
            }}
          >
            <div style={{ display: "flex", gap: "1rem" }}>
              {selectedProject?.github && (
                <Button
                  variant="dark"
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ flex: 1 }}
                >
                  깃허브에서 보기
                </Button>
              )}
              {selectedProject?.deploy && (
                <Button
                  variant="secondary"
                  href={selectedProject.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ flex: 1 }}
                >
                  배포 확인
                </Button>
              )}
              {selectedProject?.url && (
                <Button
                  variant="secondary"
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ flex: 1 }}
                >
                  사이트 방문
                </Button>
              )}
            </div>
          </div>
        </Modal>
      </Container>
    </section>
  );
};

export default Projects;