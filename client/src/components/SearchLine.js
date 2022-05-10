import styles from "../styles/search";
import { Container, Row, Col, Button } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import PlaceIcon from "@mui/icons-material/PlaceOutlined";
import CalenarIcon from "@mui/icons-material/CalendarMonthOutlined";
import PeoplesIcon from "@mui/icons-material/PeopleOutlineOutlined";
import { useLayoutEffect } from "react";
import { useState } from "react";

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
      <Row className="justify-content-md-center" style={{ margin: "75px 0" }}>
        <Col lg="10" style={styles.searchLine}>
          <Row xs={1} style={{ padding: "0 0" }}>
            <Col
              lg="2"
              style={{
                textAlign: "center",
                padding: "0",
              }}
            >
              <Button variant="outline-light" style={styles.text}>
                Куди ?
                <PlaceIcon style={styles.smallIcon} />
              </Button>
            </Col>
            <Col
              lg="4"
              style={{
                textAlign: "center",
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
                alignItems: "center",
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
