import styles from "../styles/search";
import { Container, Row, Col, Button } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import PlaceIcon from "@material-ui/icons/PlaceOutlined";
import CalenarIcon from "@material-ui/icons/CalendarTodayOutlined";
import PeoplesIcon from "@material-ui/icons/PeopleOutlineSharp";

export const HomePage = () => {
  return (
    <Container>
      <Container className="mx auto" style={styles.searchLine}>
        <div style={styles.searchParam}>
          <a style={styles.text}>Куди ?</a>
          <PlaceIcon style={styles.smallIcon} />
        </div>

        <div style={styles.vericalLine} />

        <div style={styles.searchParam}>
          <a style={styles.text}>Дата відправлення ?</a>
          <CalenarIcon style={styles.smallIcon} />
        </div>

        <div style={styles.vericalLine} />

        <div style={styles.searchParam}>
          <a style={styles.text}>Дата прибуття ?</a>
          <CalenarIcon style={styles.smallIcon} />
        </div>
        <div style={styles.vericalLine} />

        <div style={styles.searchParam}>
          <a style={styles.text}>Скільки ?</a>
          <PeoplesIcon style={styles.smallIcon} />
        </div>

        <Button
          variant="success"
          className="rounded-circle"
          style={{ marginTop: "4px", marginBottom: "4px" }}
        >
          <SearchIcon style={styles.bigIcon} />
        </Button>
      </Container>
      <Container className="mx auto" style={styles.bigAd}>
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
