import { Container, Row, Col, Modal } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { useRoutes } from "./routes";
import { ModalCentered } from "./components/Modal";
import React from "react";
//import "./App.css";

function App() {
  let isAuthenticated = true;
  const routes = useRoutes(isAuthenticated);
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Router>
      <NavBar setModalShow={setModalShow} />
      <ModalCentered show={modalShow} onHide={() => setModalShow(false)} />
      {routes}
    </Router>
  );
}

export default App;
