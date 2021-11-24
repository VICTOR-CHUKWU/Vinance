import { Col, Container, Row } from 'react-bootstrap';
import Box from '../../shared/Box';

const Footer = () => (
  <Container fluid className="bg-light shadow p-3 mt-4">
    <Row className="mx-5">
      <Col>
        <Box as="h4">Footer</Box>
      </Col>
    </Row>
  </Container>
);

export default Footer;
