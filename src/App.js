
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import {
  Container,
  Row,
  Col,
  Button,
  Form
} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Example@email.com"
                  ></Form.Control>
                  <Form.Text className="text-muted">
                    We'll never share your email address , trust me
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="Password" required></Form.Control>
                </Form.Group>
                </Col>
            </Row>
                <Button variant="secondary" type="sumbit">
                  Login
                </Button>
              
          </Form>
        </Container>
      </header>
    </div>
  );
}

export default App;
