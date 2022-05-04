import { Navbar, NavDropdown, Nav, Container, Row, Col } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Navbar collapseOnSelect className="shadow-sm" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand
          href="#"
          onClick={() => navigate("/categories")}
          className="fs-5"
        >
          {" "}
          <img
            alt=""
            src="https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-4/256/home-icon.png"
            width="35"
            height="35"
            className="d-inline-block align-top"
          />{" "}
          FlatRent
        </Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="justify-content-center mx-auto"
            variant="pills"
            defaultActiveKey="#"
          >
            <Nav.Item className="px-3 fs-5">
              <Nav.Link onClick={() => navigate("/hotels")}>Готелі</Nav.Link>
            </Nav.Item>
            <Nav.Item className="px-3 fs-5">
              <Nav.Link onClick={() => navigate("/hostels")}>Хостели</Nav.Link>
            </Nav.Item>
            <Nav.Item className="px-3 fs-5">
              <Nav.Link onClick={() => navigate("/houses")}>Хатинки</Nav.Link>
            </Nav.Item>
          </Nav>

          <Nav className="d-flex justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Stepan Bandera</a>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </Container>
    </Navbar>
  );
};
