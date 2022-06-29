import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, NavLink, Spinner, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import "../styles/App.css";

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
        <br />
        <Row style={{ paddingLeft: 10 }}>
          <Col xl="9">
            <a style={{ fontSize: 18, fontWeight: "bold" }}>
              Додаткова інформація:{" "}
            </a>
            <br />
            <a style={{ fontSize: 18 }}>{hotelInfo[0].description}</a>
          </Col>
          <Col col="3">
            <div
              style={{
                border: "1px solid rgba(0, 0, 0, 0.5)",
                borderRadius: "20px",
                display: "block",
                textAlign: "center",
                paddingTop: 15,
                paddingBottom: 15,
                boxShadow: "3px 3px 3px #9E9E9E",
              }}
            >
              <Button
                style={{
                  color: "rgba(0, 0, 0, 1)",
                  fontSize: "25px",
                  bold: "true",
                  width: "50%",
                  borderRadius: "50px",
                  border: "1px solid rgba(0, 0, 0, 0.25)",
                  // height: "65px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
                variant="outline"
                className="greenShadow"
              >
                <BookmarkBorderOutlinedIcon
                  style={{ fontSize: 36, color: "black" }}
                />
              </Button>
              <br />
              <a style={{ fontSize: 24 }}>100 грн/ніч</a>
            </div>
          </Col>
        </Row>
      </Col>
      <br />
      <br />
    </Container>
  );
};
