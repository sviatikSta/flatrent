import styles from "../styles/search";
import {
  Container,
  Row,
  Col,
  Button,
  Carousel,
  Card,
  CardGroup,
} from "react-bootstrap";
import { SearchLine } from "../components/SearchLine";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import PlaceIcon from "@mui/icons-material/PlaceOutlined";
import CalenarIcon from "@mui/icons-material/CalendarMonthOutlined";
import PeoplesIcon from "@mui/icons-material/PeopleOutlineOutlined";

export const HomePage = () => {
  return (
    <Container>
      <SearchLine />
      <Row>
        <Col className="mx-auto my-5">
          <Carousel className="mx-auto w-100">
            <Carousel.Item>
              <img
                className="img-fluid border border-secondary border-3 rounded w-100"
                src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRO40eY0EmxVduwc2CtHqYFVL45bINPY-vDLVvInHNXYZ6hhFLdrPNbYRj6T-hY"
                alt="First slide"
                style={{ minHeight: 100, maxHeight: 600 }}
              />
              <Carousel.Caption>
                <h3>Довіртесь нашому вибору</h3>
                <Button variant="success" style={styles.buttonInsideAd}>
                  Переглянути
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="img-fluid border border-secondary border-3 rounded w-100"
                src="https://vgorode.ua/img/article/4251/9_main-v1577261948.jpg"
                alt="First slide"
                style={{ minHeight: 100, maxHeight: 600 }}
              />

              <Carousel.Caption>
                <h3>Довіртесь нашому вибору</h3>
                <Button variant="success" style={styles.buttonInsideAd}>
                  Переглянути
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="img-fluid border border-secondary border-3 rounded w-100"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Operniy-1.jpg/1200px-Operniy-1.jpg"
                alt="First slide"
                style={{ minHeight: 100, maxHeight: 600 }}
              />

              <Carousel.Caption>
                <h3>Довіртесь нашому вибору</h3>
                <Button variant="success" style={styles.buttonInsideAd}>
                  Переглянути
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Container className="mx-auto fs-4 my-4">
        Найпопулярніші приклади готелів, хостелів чи хатинок
      </Container>
      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://24tv.ua/resources/photos/news/202107/1685585.jpg?v=1637318430000&w=1200&h=675&fit=cover"
            />
            <Card.Body>
              <Card.Title>Одеса</Card.Title>
              <Button variant="success" style={styles.buttonInsideAd}>
                Переглянути
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://kirillovka.ks.ua/wp-content/uploads/2018/11/odessa-25-evgeniy-danshin.jpg"
            />
            <Card.Body>
              <Card.Title>Київ</Card.Title>
              <Button variant="success" style={styles.buttonInsideAd}>
                Переглянути
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://bees.aero/storage/2111/4ZOhJ1xSXvpULQZkJBRWK72zgLyJuW1q2OKmBxnJ.jpeg"
            />
            <Card.Body>
              <Card.Title>Львів</Card.Title>
              <Button variant="success" style={styles.buttonInsideAd}>
                Переглянути
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <br />
    </Container>
  );
};
