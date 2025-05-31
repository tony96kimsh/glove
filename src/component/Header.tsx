import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      style={{
        backgroundColor: "#fdf6ee",
        fontFamily: "'NanumSquareRound', sans-serif",
        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
        zIndex: 1000,
      }}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          style={{
            fontWeight: 800,
            fontSize: "1.5rem",
            color: "#000000", // 블랙 로고 텍스트
          }}
        >
          Glove
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#about" style={navLinkStyle}>
              About
            </Nav.Link>
            <Nav.Link href="#projects" style={navLinkStyle}>
              Projects
            </Nav.Link>
            <Nav.Link href="#contact" style={navLinkStyle}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const navLinkStyle = {
  fontWeight: 600,
  color: "#000000", // 블랙 텍스트
  marginLeft: "1rem",
  transition: "color 0.2s ease",
};

export default Header;