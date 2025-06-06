// ProjectDetailModal.tsx
import { Modal, Button } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// MermaidRenderer 삭제됨


type Props = {
  show: boolean;
  onHide: () => void;
  content: string;
  project: {
    github?: string;
    deploy?: string;
    url?: string;
  } | null;
};

const ProjectDetailModal = ({ show, onHide, content, project }: Props) => {
  return (
    <Modal show={show} onHide={onHide} centered size="xl">
      <Modal.Header closeButton>
        <Modal.Title style={{ fontSize: "1.8rem", fontWeight: 700 }}>
          📌 프로젝트 상세보기
        </Modal.Title>
      </Modal.Header>

      <Modal.Body
        style={{
          maxHeight: "70vh",
          overflowY: "auto",
          paddingBottom: "5rem",
        }}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            p: ({ node, ...props }) => (
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  marginBottom: "1rem",
                }}
                {...props}
              />
            ),
            img: ({ node, ...props }) => {
              if (props.src?.includes("img.shields.io")) {
                return (
                  <img
                    {...props}
                    style={{
                      height: "1.5rem",
                      margin: "0 0.25rem 0 0",
                      verticalAlign: "middle",
                      display: "inline-block",
                    }}
                  />
                );
              }

              const isDiagram = props.src?.includes("diagram");

              return (
                <img
                  {...props}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    maxHeight: isDiagram ? "none" : "60vh",
                    display: "block",
                    margin: isDiagram ? "2rem auto" : "1rem 0",
                    border: isDiagram ? "2px solid #444" : "1px solid #000",
                    borderRadius: isDiagram ? "12px" : "8px",
                    boxShadow: isDiagram
                      ? "0 6px 20px rgba(0, 0, 0, 0.2)"
                      : "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                />
              );
            },
            table: ({ node, ...props }) => (
              <table
                {...props}
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  marginTop: "1rem",
                  fontSize: "1rem",
                }}
                className="markdown-table"
              />
            ),
          }}
        >
          {content}
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
          {project?.github && (
            <Button
              variant="dark"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ flex: 1 }}
            >
              깃허브에서 보기
            </Button>
          )}
          {project?.deploy && (
            <Button
              variant="secondary"
              href={project.deploy}
              target="_blank"
              rel="noopener noreferrer"
              style={{ flex: 1 }}
            >
              배포 확인
            </Button>
          )}
          {project?.url && (
            <Button
              variant="secondary"
              href={project.url}
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
  );
};

export default ProjectDetailModal;