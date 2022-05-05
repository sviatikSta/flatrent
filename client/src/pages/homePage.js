import styles from "../styles/search";
import { Container, Row, Col, Button } from "react-bootstrap";

export const HomePage = () => {
  return (
    <Container>
      <Container className="mx auto" style={styles.searchCircle}>
        <a style={styles.text}>Куди ?</a>
        <div style={styles.vericalLine} />
        <a style={styles.text}>Дата відправлення ?</a>
        <div style={styles.vericalLine} />
        <a style={styles.text}>Дата прибуття ?</a>
        <div style={styles.vericalLine} />
        <a style={styles.text}>Скільки ?</a>
        <img
          width="55"
          height="55"
          style={{ marginTop: "auto", marginBottom: "auto" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/500px-Search_Icon.svg.png"
        />
      </Container>
      <Container className="mx auto" style={styles.bigAdd}>
        <div
          style={{
            marginTop: "auto",
            marginBottom: "25px",
            marginInline: "auto",
          }}
        >
          <span
            style={{
              fontSize: "25px",
              margin: "auto",
              display: "table",
            }}
          >
            Довіртесь уже спланованим маршрутам
          </span>
          <Button
            variant="success"
            style={{
              height: "50px",
              width: "250px",
              borderRadius: "25px",
              marginTop: "12px",
              marginInline: "auto",
              display: "table",
            }}
          >
            Переглянути
          </Button>
        </div>
      </Container>
    </Container>
  );
};
