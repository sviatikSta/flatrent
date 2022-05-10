import styles from "../styles/search";
import { Container, Row, Col, Button } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import PlaceIcon from "@mui/icons-material/PlaceOutlined";
import CalenarIcon from "@mui/icons-material/CalendarMonthOutlined";
import PeoplesIcon from "@mui/icons-material/PeopleOutlineOutlined";
import { useLayoutEffect } from "react";
import { useState } from "react";

export const SearchLine = () => {
  const [phone, setPhone] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );
  var mql = window.matchMedia("(max-width: 768px)");

  mql.onchange = (e) => {
    if (e.matches) {
      setPhone(true);
    } else {
      setPhone(false);
    }
  };

  useLayoutEffect(() => {
    console.log(window.matchMedia("(max-width: 768px)").matches);
  });

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col lg="8" style={phone ? styles.searchLinePhone : styles.searchLine}>
          <Col
            lg="2"
            style={{
              ...styles.searchParamDiv,
              ...{ alignItems: "center" },
            }}
          >
            <a style={styles.text}>Куди ?</a>
            <PlaceIcon style={styles.smallIcon} />
            {/* <div style={styles.vericalLine} /> */}
          </Col>

          <Col lg="4" style={styles.searchParamDiv}>
            <a style={styles.text}>Дата відправлення ?</a>
            <CalenarIcon style={styles.smallIcon} />
            {/* <div style={styles.vericalLine} /> */}
          </Col>

          <Col lg="3" style={styles.searchParamDiv}>
            <a style={styles.text}>Дата прибуття ?</a>
            <CalenarIcon style={styles.smallIcon} />
            {/* <div style={styles.vericalLine} /> */}
          </Col>

          <Col lg="2" style={styles.searchParamDiv}>
            <a style={styles.text}>Скільки ?</a>
            <PeoplesIcon style={styles.smallIcon} />
          </Col>
          <Col lg="1" style={{ display: "table", margin: "auto" }}>
            <Button
              variant="success"
              className="rounded-circle"
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                padding: 0,
              }}
            >
              <SearchIcon style={styles.bigIcon} />
            </Button>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};
