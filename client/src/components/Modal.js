import { Modal, Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../styles/App.css";

export const ModalCentered = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body
        style={{
          margin: -18,
          padding: 0,
        }}
      >
        <Row
          style={{
            borderRadius: "25px",
            overflow: "hidden",
          }}
        >
          <Col xxl="7" style={{ backgroundColor: "red", paddingLeft: "0px" }}>
            <img
              src={
                "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
              }
              height={"500px"}
            />
          </Col>
          <Col xxl="5" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <Row
              className="mx-auto "
              style={{
                marginTop: "55%",
              }}
            >
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Username"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  className="greenShadow"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  className="greenShadow"
                />
              </InputGroup>
              <Button variant="success">Success</Button>
            </Row>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
