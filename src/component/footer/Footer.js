import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => (
  <Container fluid className="bg-light shadow p-3 mt-4 d-none d-lg-block">
    <Row className="mx-5">
      <Col className="d-flex flex-column">
        <Link to="/account/login" style={{ textDecoration: 'none' }} className="text-dark">about</Link>
        <Link to="/account/login" style={{ textDecoration: 'none' }} className="text-dark">about</Link>
        <Link to="/account/login" style={{ textDecoration: 'none' }} className="text-dark">about</Link>
        <Link to="/account/login" style={{ textDecoration: 'none' }} className="text-dark">about</Link>
      </Col>
      <Col className="d-flex flex-column">
        <Link to="/account/login" style={{ textDecoration: 'none' }} className="text-dark">about</Link>
        <Link to="/account/login" style={{ textDecoration: 'none' }} className="text-dark">about</Link>
        <Link to="/account/login" style={{ textDecoration: 'none' }} className="text-dark">about</Link>
        <Link to="/account/login" style={{ textDecoration: 'none' }} className="text-dark">about</Link>
      </Col>
      <Col className="d-flex flex-column">
        <Link to="/account/login" style={{ textDecoration: 'none' }} className="text-dark">about</Link>
        <Link to="/account/login" style={{ textDecoration: 'none' }} className="text-dark">about</Link>
        <Link to="/account/login" style={{ textDecoration: 'none' }} className="text-dark">about</Link>
        <Link to="/account/login" style={{ textDecoration: 'none' }} className="text-dark">about</Link>
      </Col>
    </Row>
  </Container>
);

export default Footer;
