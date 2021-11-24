import { Container, Button } from 'react-bootstrap';
import Box from '../../shared/Box';

const TradeNow = () => (
  <Container className=" text-center my-5">
    <Box as="h3" className=" my-3">Start Trading Now</Box>
    <Box className=" text-center">
      <Button variant="warning" size="lg" className="mx-3">Register Now</Button>
      <Button variant="secondary" size="lg" className="mx-3">Trade Now</Button>
    </Box>
  </Container>
);

export default TradeNow;
