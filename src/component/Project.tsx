import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { projectList } from "../data/datas";
import "../style/Project.css";

import ProjectDetailModal from "./ProjectDetailModal";

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
    } else {
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
          marginRight: "0.5rem",
          whiteSpace: "nowrap",
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
    <section id="projects" style={{ backgroundColor: "#fffaf3", padding: "6rem 0" }}>
      <Container>
        <h2
          className="text-center"
          style={{ fontWeight: 900, fontSize: "3rem", marginBottom: "4rem" }}
        >
          프로젝트
        </h2>

        {["C# / Python", "web", "design"].map((category) => {
          const filtered = projectList.filter((p) => p.category === category);
          if (filtered.length === 0) return null;

          return (
            <div key={category} className="mb-5">
              <h3
                style={{
                  fontWeight: 800,
                  fontSize: "2rem",
                  textTransform: "capitalize",
                  marginBottom: "2rem",
                  marginTop: "4rem",
                }}
              >
                {category}
              </h3>
              <hr className="mb-4" />
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
                        <Card.Title style={{ fontWeight: 700, fontSize: "1.2rem" }}>
                          {project.title}
                        </Card.Title>
                        <Card.Text style={{ fontSize: "0.95rem", lineHeight: 1.5 }}>
                          {project.summary}
                        </Card.Text>
                        <div className="mt-3 d-flex flex-row flex-wrap justify-content-start align-items-center gap-2">
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

        <ProjectDetailModal
          show={showModal}
          onHide={() => setShowModal(false)}
          content={markdownContent}
          project={selectedProject}
        />
      </Container>
    </section>
  );
};

export default Projects;
