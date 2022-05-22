import { style } from "@mui/system";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { SearchLine } from "../components/SearchLine";
import styles from "../styles/hotels";
import StarIcon from "@mui/icons-material/Star";
import { useEffect, useLayoutEffect, useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";

export const HotelsPage = () => {
  const [hotels, setHotels] = useState("");
  const navigate = useNavigate();
  const hotelCity = useParams().id;
  const [dataToChild, setDataToChild] = useState();
  const [hotelsCount, setHotelsCount] = useState();

  useEffect(() => {
    fetch("/api/hotels/getAllCities")
      .then((res) => res.json())
      .then((result) => {
        setDataToChild(result);
      });

    if (hotelCity) {
      fetch("/api/hotels/searchByCity/" + hotelCity, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        body: null,
      })
        .then((res) => res.json())
        .then((result) => {
          setHotels(result);
          setHotelsCount(result.length);
        });
    } else {
      fetch("api/hotels/getAllHotels")
        .then((res) => res.json())
        .then((result) => {
          setHotels(result);
        });
    }
  }, []);

  if (!hotels.length) {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Spinner
            animation="border"
            style={{ height: 100, width: 100, marginTop: 25 }}
          />
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <SearchLine refresh={true} selectedCity={hotelCity}>
        {dataToChild}
      </SearchLine>
      <Container
        className="mx auto"
        style={{ marginTop: "75px", fontSize: "28px", marginBottom: "25px" }}
      >
        {hotelCity === undefined ? (
          <h4>Всі готелі</h4>
        ) : (
          <h4>
            {hotelCity}: {hotelsCount} результати(-ів) пошуку
          </h4>
        )}
        <hr />
      </Container>
      {hotels.map((hotel, index) => {
        return (
          <Container
            style={{
              cursor: "pointer",
              borderRadius: 25,
            }}
            className="hover-zoom py-2 shadow p-3 mb-3 bg-white"
            onClick={() => navigate("/hotel/" + hotel._id)}
          >
            <Row>
              <Col xl="5" xxl="4">
                <img
                  src={hotel.photo}
                  width="400"
                  height="250"
                  style={styles.hotelPhoto}
                  className="mw-100 mh-80"
                ></img>
              </Col>
              <Col xl="7" xxl="8" style={styles.hotelInfo}>
                <Col xl="2" style={{ color: "rgba(0, 0, 0, 0.5)" }}>
                  {hotel.city}
                </Col>
                <Col xl="5" style={{ fontWeight: "bold" }}>
                  {hotel.name}
                </Col>
                <Col>
                  <br />
                </Col>
                <Col xl="6" style={{ color: "rgba(0, 0, 0, 0.5)" }}>
                  {hotel.description}
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
            {/* <hr /> */}
          </Container>
        );
      })}
      <br />
      <br />
    </Container>
  );
};
