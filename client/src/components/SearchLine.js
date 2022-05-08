import styles from "../styles/search";
import { Container, Row, Col, Button } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import PlaceIcon from "@mui/icons-material/PlaceOutlined";
import CalenarIcon from "@mui/icons-material/CalendarMonthOutlined";
import PeoplesIcon from "@mui/icons-material/PeopleOutlineOutlined";

export const SearchLine = () => {
  return (
    <Container>
      <Container className="mx auto" style={styles.searchLine}>
        <div style={styles.searchParamDiv}>
          <a style={styles.text}>Куди ?</a>
          <PlaceIcon style={styles.smallIcon} />
        </div>

        <div style={styles.vericalLine} />

        <div style={styles.searchParamDiv}>
          <a style={styles.text}>Дата відправлення ?</a>
          <CalenarIcon style={styles.smallIcon} />
        </div>

        <div style={styles.vericalLine} />

        <div style={styles.searchParamDiv}>
          <a style={styles.text}>Дата прибуття ?</a>
          <CalenarIcon style={styles.smallIcon} />
        </div>
        <div style={styles.vericalLine} />

        <div style={styles.searchParamDiv}>
          <a style={styles.text}>Скільки ?</a>
          <PeoplesIcon style={styles.smallIcon} />
        </div>

        <Button
          variant="success"
          className="rounded-circle"
          style={{ marginTop: "auto", marginBottom: "auto", padding: 0 }}
        >
          <SearchIcon style={styles.bigIcon} />
        </Button>
      </Container>
    </Container>
  );
};
