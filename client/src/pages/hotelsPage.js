import { style } from "@mui/system";
import { Col, Container, Row } from "react-bootstrap";
import { SearchLine } from "../components/SearchLine";
import styles from "../styles/hotels";
import StarIcon from "@mui/icons-material/Star";
import { useEffect, useLayoutEffect, useCallback, useState } from "react";

export const HotelsPage = () => {
  const [hotels, setHotels] = useState();

  useEffect(() => {
    fetch("api/hotels/getAllHotels")
      .then((res) => res.json())
      .then((result) => {
        setHotels(result);
      });
  }, []);

  return (
    <Container>
      <SearchLine />
      <Container
        className="mx auto"
        style={{ marginTop: "75px", fontSize: "28px", marginBottom: "25px" }}
      >
        Київ: Один результат пошуку
        <hr />
      </Container>
      <Container>
        <Row>
          <Col xl="5" xxl="4">
            <img
              src="https://www.aroell.com/wp-content/uploads/2017/12/wallpapers-3d-hotel-design-hd-wallpaper-artistic-hd-wallpapers.jpg"
              width="400"
              height="250"
              style={styles.hotelPhoto}
            ></img>
          </Col>
          <Col xl="7" xxl="8" style={styles.hotelInfo}>
            <Col xl="2" style={{ color: "rgba(0, 0, 0, 0.5)" }}>
              Київ
            </Col>
            <Col xl="5" style={{ fontWeight: "bold" }}>
              П'яти зірковий готель в багатому стилі
            </Col>
            <Col>
              <br />
            </Col>
            <Col xl="6" style={{ color: "rgba(0, 0, 0, 0.5)" }}>
              Двохмісні та трьохмісні номери Wifi, Кухня та Опалення
            </Col>
            <Col className="mb-xxl-5">
              <br />
              <br />
            </Col>
            <Row>
              <Col xl="9" xs="9">
                <StarIcon style={{ color: "yellow", marginRight: "5px" }} />
                <a>5.0(відгуки)</a>
              </Col>

              <Col xl="3" xs="3">
                <a>100грн/год</a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <hr />
    </Container>
  );
};
