import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { useNavigate } from "react-router-dom";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Navbar collapseOnSelect className="shadow-sm" expand="lg">
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

          <Button
            className="d-flex justify-content-end"
            variant="light"
            style={{
              border: "2px solid rgba(0, 0, 0, 0.5)",
              borderRadius: "50px",
              paddingTop: "2px",
              paddingBottom: "2px",
            }}
          >
            <DensityMediumIcon
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                marginInline: "10px",
                fontSize: "30px",
              }}
            />
            <AccountCircleIcon
              style={{
                fontSize: "40px",
                marginRight: "1px",
                color: "#198754",
              }}
            />
          </Button>
        </Navbar.Collapse>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </Container>
    </Navbar>
  );
};
