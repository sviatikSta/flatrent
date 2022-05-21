import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, NavLink } from "react-bootstrap";

export const OneHotelPage = () => {
  const hotelId = useParams().id;
  const navigate = useNavigate();

  return (
    <Container>
      <Col xxl="10" className="mx-auto">
        <Row style={{ paddingLeft: 10 }}>
          <a style={{ fontSize: 36, marginTop: 25 }}>
            Крутий готель в японському стилі
          </a>
        </Row>
        <Row style={{ paddingLeft: 10 }}>
          <NavLink
            style={{
              textDecorationLine: "underline",
              fontSize: 20,
              color: "black",
            }}
            onClick={() => navigate("/hotels/" + "Київ")}
          >
            Київ
          </NavLink>
        </Row>
        <Row>
          <img
            className="mx-auto"
            style={{ borderRadius: 25, width: 1080 }}
            src="https://cdn.wallpapersafari.com/36/30/IwygkQ.jpg"
          />
        </Row>
        <Row style={{ paddingLeft: 10, paddingTop: 15 }}>
          <hr />
          <a style={{ fontSize: 18 }}>
            Багато болю дуже важливо. Або уникнення, а як вони не знають часів,
            а внутрішня ненависть, а не часів і болю, чи всього всього, чи
            навіть цього. Це не біль, це найменший біль, який ми можемо
            отримати, щоб вибрати там, де немає болю, і коли ми вибираємо ці
            речі, ми вболіваємо за це.
          </a>
        </Row>
      </Col>
    </Container>
  );
};
