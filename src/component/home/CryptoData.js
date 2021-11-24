import { Col, Container, Row } from 'react-bootstrap';
import Box from '../../shared/Box';
import { data } from '../../Data';

const CryptoData = () => (
  <Container className="cryptodata">
    <Row>
      {
               data.map((item) => (
                 <Col key={item}>
                   <Box>
                     {item}
                   </Box>
                 </Col>
               ))
           }
    </Row>
  </Container>
);

export default CryptoData;
