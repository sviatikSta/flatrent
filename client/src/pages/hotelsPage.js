import { style } from "@mui/system";
import { Col, Container, Row } from "react-bootstrap";
import { SearchLine } from "../components/SearchLine";
import styles from "../styles/hotels";
import StarIcon from "@mui/icons-material/Star";

export const HotelsPage = () => {
  return (
    <Container>
      <SearchLine />
      <Container
        className="mx auto"
        style={{ marginTop: "75px", fontSize: "28px", marginBottom: "25px" }}
      >
        Київ: Один результат пошуку
      </Container>
      <Container style={styles.hotelBox}>
        <Col xs lg="4">
          <img
            src="https://www.aroell.com/wp-content/uploads/2017/12/wallpapers-3d-hotel-design-hd-wallpaper-artistic-hd-wallpapers.jpg"
            width="400"
            height="250"
            style={styles.hotelPhoto}
          ></img>
        </Col>
        <Col></Col>
        <Col lg="8" style={styles.hotelInfo}>
          <Col style={{ color: "rgba(0, 0, 0, 0.5)" }}>Київ</Col>
          <Col style={{ fontWeight: "bold" }}>
            П'яти зірковий готель в багатому стилі
          </Col>
          <br />
          <Col lg="4" style={{ color: "rgba(0, 0, 0, 0.5)" }}>
            Двохмісні та трьохмісні номери Wifi, Кухня та Опалення
          </Col>
          <br />
          <br />
          <br />
          <Row>
            <Col g="1">
              <StarIcon style={{ color: "yellow", marginRight: "5px" }} />
              5.0(відгуки)
            </Col>
            <Col lg="2">100грн/год</Col>
          </Row>
        </Col>
      </Container>
      <hr />
    </Container>
  );
};
