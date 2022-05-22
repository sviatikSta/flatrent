import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, NavLink, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

export const OneHotelPage = () => {
  const navigate = useNavigate();
  const hotelId = useParams().id;
  const [hotelInfo, setHotelInfo] = useState("");

  useEffect(() => {
    fetch("/api/hotels/searchByID/" + hotelId, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      body: null,
    })
      .then((res) => res.json())
      .then((result) => {
        setHotelInfo(result);
      });
  }, []);

  if (!hotelInfo.length) {
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
      <Col xxl="10" className="mx-auto">
        <Row style={{ paddingLeft: 10 }}>
          <a style={{ fontSize: 36, marginTop: 25 }}>{hotelInfo[0].name}</a>
        </Row>
        <Row style={{ paddingLeft: 10 }}>
          <NavLink
            style={{
              fontSize: 20,
              color: "black",
            }}
            className="pt-0 pb-3 fs-5"
            onClick={() => navigate("/hotels/" + hotelInfo[0].city)}
          >
            Місто:{" "}
            <a style={{ textDecorationLine: "underline" }}>
              {hotelInfo[0].city}{" "}
            </a>
          </NavLink>
        </Row>
        <Row>
          <img
            className="mx-auto"
            style={{ borderRadius: 25, width: 1080 }}
            src={hotelInfo[0].photo}
          />
        </Row>
        <Row style={{ paddingLeft: 10, paddingTop: 15 }}>
          <hr />
          <a style={{ fontSize: 18, fontWeight: "bold" }}>
            Додаткова інформація:{" "}
          </a>
          <a style={{ fontSize: 18 }}>{hotelInfo[0].description}</a>
        </Row>
      </Col>
      <br />
      <br />
    </Container>
  );
};
