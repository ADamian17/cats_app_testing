import { Container } from 'react-bootstrap';
import Cards from './components/Cards';

import cats from './mocks/cats.json';

function App() {
  return (
    <Container>
      <Cards cats={cats} />
    </Container>
  );
}

export default App;
