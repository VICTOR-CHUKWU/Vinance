import { Container, Button } from 'react-bootstrap';
import Box from '../../shared/Box';

const Trade = () => (
  <Container className="min-height">
    <Box as="h3">Trade your cryptocurrency</Box>
    <Box>
      <Box as="p">
        you can trade on binance
      </Box>
      <Button variant="warning" size="lg">Register to trade</Button>
    </Box>
  </Container>
);

export default Trade;
