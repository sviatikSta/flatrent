import styles from "../styles/search";
import { Container, Row, Col, Button } from "react-bootstrap";
import { SearchLine } from "../components/SearchLine";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import PlaceIcon from "@mui/icons-material/PlaceOutlined";
import CalenarIcon from "@mui/icons-material/CalendarMonthOutlined";
import PeoplesIcon from "@mui/icons-material/PeopleOutlineOutlined";

export const HomePage = () => {
  return (
    <Container>
      <SearchLine />
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
          <Button variant="success" style={styles.buttonInsideAd}>
            Переглянути
          </Button>
        </div>
      </Container>
      <Container
        className="mx auto"
        style={{ width: "950px", marginTop: "100px", fontSize: "28px" }}
      >
        Найпопулярнші приклади готелів, хостелів чи хатинок
      </Container>
      <Container style={styles.smallAdBox}>
        <Container style={styles.smallAd}>
          <div
            style={{
              marginTop: "auto",
              marginBottom: "25px",
              marginInline: "auto",
            }}
          >
            <Button variant="success" style={styles.buttonInsideAd}>
              Переглянути
            </Button>
          </div>
        </Container>
        <Container style={{ ...styles.smallAd, ...{ marginInline: "50px" } }}>
          <div
            style={{
              marginTop: "auto",
              marginBottom: "25px",
              marginInline: "auto",
            }}
          >
            <Button variant="success" style={styles.buttonInsideAd}>
              Переглянути
            </Button>
          </div>
        </Container>
        <Container style={styles.smallAd}>
          <div
            style={{
              marginTop: "auto",
              marginBottom: "25px",
              marginInline: "auto",
            }}
          >
            <Button variant="success" style={styles.buttonInsideAd}>
              Переглянути
            </Button>
          </div>
        </Container>
      </Container>
    </Container>
  );
};
