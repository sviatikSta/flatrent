import React from "react";
import styles from "../styles/search";
import {
  Container,
  Row,
  Col,
  Button,
  Dropdown,
  FormControl,
} from "react-bootstrap";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import PlaceIcon from "@mui/icons-material/PlaceOutlined";
import CalenarIcon from "@mui/icons-material/CalendarMonthOutlined";
import PeoplesIcon from "@mui/icons-material/PeopleOutlineOutlined";
import { useLayoutEffect } from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { QuantityPicker } from "react-qty-picker";
import moment from "moment";

var dateToButtonBlocked = true;

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <Button
    ref={ref}
    style={styles.text}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    variant="outline-light"
    disabled={children[0] === "Дата вибуття?" && dateToButtonBlocked}
  >
    {children}
  </Button>
));

const CustomDropList = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = React.useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="search"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value ||
              child.props.children.startsWith(value) ||
              child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

const CustomCalendar = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        {children}
      </div>
    );
  }
);

export const SearchLine = () => {
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();
  const [where, setWhere] = useState("Куди?");
  const [quantity, setQuantity] = useState();

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col lg="10" style={styles.searchLine}>
          <Row xs={1} style={{ padding: "0 0" }}>
            <Col
              lg="2"
              style={{
                textAlign: "center",
                padding: "0 0",
              }}
            >
              <Dropdown>
                <Dropdown.Toggle as={CustomToggle}>
                  {where} <PlaceIcon style={styles.smallIcon} />
                </Dropdown.Toggle>
                <Dropdown.Menu as={CustomDropList}>
                  <Dropdown.Item
                    eventKey="1"
                    onClick={(e) => setWhere(e.target.text)}
                  >
                    Київ
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="2"
                    onClick={(e) => setWhere(e.target.text)}
                  >
                    Одеса
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="3"
                    onClick={(e) => setWhere(e.target.text)}
                  >
                    Львів
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col
              lg="4"
              style={{
                textAlign: "center",
                padding: "0 0",
              }}
            >
              <Dropdown>
                <Dropdown.Toggle as={CustomToggle}>
                  {dateFrom === undefined
                    ? "Дата прибуття?"
                    : moment(dateFrom).format("DD.MM.YYYY")}
                  <CalenarIcon style={styles.smallIcon} />
                </Dropdown.Toggle>
                <Dropdown.Menu as={CustomCalendar}>
                  <Calendar
                    minDate={new Date()}
                    onClickDay={(e) => {
                      setDateFrom(e);
                      dateToButtonBlocked = false;
                    }}
                  />
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col
              lg="3"
              style={{
                textAlign: "center",
                padding: "0 0",
              }}
            >
              <Dropdown>
                <Dropdown.Toggle as={CustomToggle}>
                  {dateTo === undefined
                    ? "Дата вибуття?"
                    : moment(dateFrom).format("DD.MM.YYYY")}
                  <CalenarIcon style={styles.smallIcon} />
                </Dropdown.Toggle>
                <Dropdown.Menu as={CustomCalendar}>
                  <Calendar
                    minDate={
                      dateFrom === "Дата прибуття?"
                        ? new Date()
                        : new Date(moment(dateFrom).toString())
                    }
                    onClickDay={(e) => setDateTo(e)}
                  />
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col
              lg="2"
              style={{
                textAlign: "center",
                padding: "0 0",
              }}
            >
              <Dropdown>
                <Dropdown.Toggle as={CustomToggle}>
                  {quantity === undefined ? "Скільки?" : quantity}
                  <PeoplesIcon style={styles.smallIcon} />
                </Dropdown.Toggle>
                <Dropdown.Menu as={CustomCalendar}>
                  <QuantityPicker
                    min={1}
                    value={1}
                    max={10}
                    onChange={(e) => setQuantity(e)}
                  />
                </Dropdown.Menu>
              </Dropdown>
            </Col>{" "}
            <Col
              lg="1"
              style={{
                textAlign: "center",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              <Button
                variant="success"
                className="rounded-circle"
                onClick={() => console.log(quantity)}
                style={{
                  padding: 0,
                }}
              >
                <SearchIcon style={styles.bigIcon} />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
