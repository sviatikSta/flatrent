import styles from "../styles/search";
import { Container, Row, Col } from "react-bootstrap";

export const HomePage = () => {
  return (
    <Container className="mx auto" style={styles.circle}>
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
  );
};
