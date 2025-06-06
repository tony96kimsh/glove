// ProjectDetailModal.tsx
import { Modal, Button } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../style/Project.css";
import rehypeHighlight from "rehype-highlight";
import 'highlight.js/styles/github.css';
import 'highlight.js/styles/atom-one-dark.css';


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
        className="react-markdown"
        style={{
          maxHeight: "70vh",
          overflowY: "auto",
          paddingBottom: "5rem",
        }}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[
            [rehypeHighlight, {
              theme: 'atom-one-dark', keepBackground: true 
            }]
          ]}
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
                    maxWidth: "80%",
                    height: "auto",
                    maxHeight: isDiagram ? "none" : "60vh",
                    display: "block",
                    margin: isDiagram ? "2rem 0" : "1rem 0",
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
            pre: ({ node, ...props }) => (
              <pre
                style={{
                  backgroundColor: "#f5f5f5",
                  padding: "1rem",
                  borderRadius: "8px",
                  overflowX: "auto",
                  fontSize: "0.95rem",
                  margin: "1.5rem 0",
                  border: "1px solid #ddd",
                }}
                {...props}
              />
            ),
            code: ({ node, inline, className, ...props }) => {
              return inline ? (
                <code
                  style={{
                    backgroundColor: "#f5f5f5", // 회색 배경
                    color: "#d73a49",           // GitHub 스타일의 빨간색 (#d73a49)
                    padding: "0.2em 0.4em",
                    borderRadius: "4px",
                    fontSize: "0.95em",
                    fontFamily: "monospace",
                  }}
                  {...props}
                />
              ) : (
                <code className={className} {...props} />
              );
            },  
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