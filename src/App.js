import { Col, Container, Row } from 'react-bootstrap';
import Cards from './components/Cards';

import cats from './mocks/cats.json';

function App() {
  return (
    <Container>
      <Row>
        <Col sm={4} style={{backgroundColor: 'red'}}>
          hello
        </Col>
        <Col sm={8}>
          <Cards cats={cats} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
