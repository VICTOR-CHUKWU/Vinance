import { useDispatch } from 'react-redux';
import {
  Image, Row, Col, Badge, Container,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import Box from '../../shared/Box';
import logo from '../../img/logo.jpg';
import { openSidebar } from '../../redux/action/SidebarAction';

const Navigation = () => {
  const dispatch = useDispatch();
  return (
    <Container fluid className="bg-white nav my-0 p-2 shadow">
      <Row className=" p-3  mx-5">
        <Col xs={8} md={9} className="d-flex align-items-center">
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
          <AiOutlineMenu className="d-lg-none mx-4 icon-click" onClick={() => dispatch(openSidebar())} />
          <Box className="d-none d-lg-flex align-items-center mx-5">
            <Link to="/buy-crypto" style={{ textDecoration: 'none' }} className="mx-3">buy crypto</Link>
            <Link to="/market" style={{ textDecoration: 'none' }} className="mx-3">market</Link>
            <Link to="/trade" style={{ textDecoration: 'none' }} className="mx-3">trade</Link>
            <Link to="/finance" style={{ textDecoration: 'none' }} className="mx-3">
              finance
              {' '}
              <Badge bg="warning">new</Badge>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }} className="mx-3">about</Link>
          </Box>
        </Col>
        <Col xs={4} md={3} className="d-none d-md-flex align-items-center text-center">
          <Link to="/account/register" style={{ textDecoration: 'none' }} className="mx-3 bg-warning rounded text-white p-1">Register</Link>
          <Link to="/account/login" style={{ textDecoration: 'none' }} className="mx-3">login</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Navigation;
