import { Container } from 'react-bootstrap';
import Box from '../../shared/Box';

const Market = () => (
  <Container className="min-height">
    <Box as="h3">Checkout what the market says today</Box>
    <Box>
      <Box as="p">
        Market trends
      </Box>
    </Box>
  </Container>
);

export default Market;
