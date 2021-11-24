import {
  Row, Col, Button, Image,
} from 'react-bootstrap';
import Box from '../../shared/Box';
import logo from '../../img/crypo-paper.png';

const Intro = () => (
  <Box className="mt-5 px-4 intro-home">
    <Row>
      <Col md={6} className="text-center">
        <Box as="h1" className="text-center my-5">
          Buy and Sell Crypto Easy
        </Box>
        <Box>
          <Button variant="warning" size="lg" className="w-50">Register</Button>
        </Box>
      </Col>
      <Col md={6}>
        <Box className="position-relative relative">
          <Image
            src={logo}
            rounded
            width="550"
            height="400"
            className="image-logo"
          />
        </Box>
      </Col>
    </Row>
  </Box>
);

export default Intro;
