import {
  Image, Row, Col, Badge,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Box from '../../shared/Box';
import logo from '../../img/logo.jpg';

const Header = () => (
  <Box className="container-fluid bg-white my-0 py-2 shadow">
    <Row className="mx-5 my-2">
      <Col md={9} className="d-flex align-items.center">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Box as="span" className="d-flex align-items.center text-warning font-weight-bold ">
            <Image
              src={logo}
              roundedCircle
              width="30"
              height="30"
              className="mx-3"
            />
            Vinace
          </Box>
        </Link>

        <Box className="d-flex align-items-center mx-5">
          <Link to="/" style={{ textDecoration: 'none' }} className="mx-3">buy crypto</Link>
          <Link to="/" style={{ textDecoration: 'none' }} className="mx-3">market</Link>
          <Link to="/" style={{ textDecoration: 'none' }} className="mx-3">trade</Link>
          <Link to="/" style={{ textDecoration: 'none' }} className="mx-3">
            finance
            {' '}
            <Badge bg="warning">new</Badge>
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }} className="mx-3">about</Link>
        </Box>
      </Col>
      <Col md={3} className="d-flex align-items.center">
        <Link to="/" style={{ textDecoration: 'none' }} className="mx-3 bg-warning rounded text-white p-1">Register</Link>
        <Link to="/" style={{ textDecoration: 'none' }} className="mx-3">login</Link>
      </Col>
    </Row>
  </Box>
);

export default Header;
