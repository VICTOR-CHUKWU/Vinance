import {
  Row, Col, Button, Image,
} from 'react-bootstrap';
import Box from '../../shared/Box';
import logo from '../../img/crypo-paper.png';

const Intro = () => (
  <Box className="mt-5 px-2 px-md-4 intro-home">
    <Row>
      <Col xs={12} md={6} className="text-center my-3">
        <Box as="h1" className=" my-2 my-md-5">
          Buy and Sell Crypto Easy
        </Box>
        <Box>
          <Button variant="warning" size="lg" className="w-50">Register</Button>
        </Box>
      </Col>
      <Col xs={12} md={6}>
        <Box className="position-relative relative text-center my-3 my-lg-0">
          <Image
            src={logo}
            rounded
            className="image-logo"
          />
        </Box>
      </Col>
    </Row>
  </Box>
);

export default Intro;
