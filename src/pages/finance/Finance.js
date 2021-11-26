import { Container, Button } from 'react-bootstrap';
import Box from '../../shared/Box';

const Finance = () => (
  <Container className="min-height">
    <Box as="h3">check out stock market</Box>
    <Box>
      <Box as="p">
        check your finace
      </Box>
      <Button variant="warning" size="lg">Register</Button>
    </Box>
  </Container>
);

export default Finance;
