import React from "react";
import styles from "../styles/search";
import {
  Container,
  Row,
  Col,
  Button,
  NavDropdown,
  Dropdown,
  ButtonGroup,
  FormControl,
} from "react-bootstrap";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import PlaceIcon from "@mui/icons-material/PlaceOutlined";
import CalenarIcon from "@mui/icons-material/CalendarMonthOutlined";
import PeoplesIcon from "@mui/icons-material/PeopleOutlineOutlined";
import { useLayoutEffect } from "react";
import { useState } from "react";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <Button
    ref={ref}
    style={styles.text}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    variant="outline-light"
  >
    Куди? <PlaceIcon style={styles.smallIcon} />
  </Button>
));

const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = React.useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="search"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

export const SearchLine = () => {
  // const [phone, setPhone] = useState(
  //   window.matchMedia("(max-width: 768px)").matches
  // );
  // var mql = window.matchMedia("(max-width: 768px)");

  // mql.onchange = (e) => {
  //   if (e.matches) {
  //     setPhone(true);
  //   } else {
  //     setPhone(false);
  //   }
  // };

  // useLayoutEffect(() => {
  //   console.log(window.matchMedia("(max-width: 768px)").matches);
  // });

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col lg="10" style={styles.searchLine}>
          <Row xs={1} style={{ padding: "0 0" }}>
            <Col
              lg="2"
              style={{
                textAlign: "center",
                padding: "0 0",
              }}
            >
              <Dropdown>
                <Dropdown.Toggle as={CustomToggle}></Dropdown.Toggle>
                <Dropdown.Menu as={CustomMenu}>
                  <Dropdown.Item eventKey="1">baz</Dropdown.Item>
                  <Dropdown.Item eventKey="2">foo</Dropdown.Item>
                  <Dropdown.Item eventKey="3">bar</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col
              lg="4"
              style={{
                textAlign: "center",
                padding: "0 0",
              }}
            >
              <Button variant="outline-light" style={styles.text}>
                Дата відправлення ?
                <CalenarIcon style={styles.smallIcon} />
              </Button>
            </Col>
            <Col
              lg="3"
              style={{
                textAlign: "center",
                padding: "0 0",
              }}
            >
              <Button variant="outline-light" style={styles.text}>
                Дата прибуття ?
                <CalenarIcon style={styles.smallIcon} />
              </Button>
            </Col>
            <Col
              lg="2"
              style={{
                textAlign: "center",
                padding: "0 0",
              }}
            >
              <Button variant="outline-light" style={styles.text}>
                Скільки ?
                <PeoplesIcon style={styles.smallIcon} />
              </Button>
            </Col>{" "}
            <Col
              lg="1"
              style={{
                textAlign: "center",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              <Button
                variant="success"
                className="rounded-circle"
                style={{
                  padding: 0,
                }}
              >
                <SearchIcon style={styles.bigIcon} />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
