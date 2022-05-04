import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { useRoutes } from "./routes";

//import "./App.css";

function App() {
  let isAuthenticated = true;
  const routes = useRoutes(isAuthenticated);

  return (
    <Router>
      <NavBar />
      {routes}
    </Router>
  );
}

export default App;
