import { Navbar, NavDropdown, Nav, Container, Row, Col } from "react-bootstrap";

export const NavBar = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <img
            alt=""
            src="https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-4/256/home-icon.png"
            width="35"
            height="35"
            className="d-inline-block align-top"
          />{" "}
          <text style={{ marginLeft: 10, fontSize: 25, color: "black" }}>
            FlatRent
          </text>
        </Navbar.Brand>

        <Navbar.Collapse
          className="justify-content-center"
          style={{ marginLeft: 250 }}
        >
          <Navbar.Text>
            <a href="#login">Готелі </a>
          </Navbar.Text>

          <Navbar.Text style={{ marginInline: 25 }}>
            <a href="#login">Хостели</a>
          </Navbar.Text>

          <Navbar.Text>
            <a href="#login">Хатинки</a>
          </Navbar.Text>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Stepan Bandera</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
