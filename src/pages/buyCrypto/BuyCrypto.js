import { Container, Button } from 'react-bootstrap';
import Box from '../../shared/Box';

const BuyCrypto = () => (
  <Container className="min-height">
    <Box as="h3">You can buy and sell crypto so easy</Box>
    <Box>
      <Box as="p">
        buy crypto here
      </Box>
      <Button variant="warning" size="lg">Click to buy</Button>
    </Box>
  </Container>
);

export default BuyCrypto;
