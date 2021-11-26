import {
  Col, Container, Row, Image,
} from 'react-bootstrap';
import { displayDta } from '../../Data';
import Box from '../../shared/Box';

const DisplayCards = () => (
  <Container className="my-5 d-none d-lg-block">
    <Row>
      {
                   displayDta.map((item) => {
                     const { key, img } = item;
                     return (
                       <Col key={key}>
                         <Box>
                           <Image
                             src={img}
                             rounded
                             height="150"
                             width="250"
                             className="pointer"
                           />
                         </Box>
                       </Col>
                     );
                   })
               }
    </Row>
  </Container>
);

export default DisplayCards;
