import { Col, Container, Row } from 'react-bootstrap';
import Box from '../../shared/Box';
import { getInTouchData } from '../../Data';

const StayInTouch = () => (
  <Container className="my-5">
    <Box as="h4" className="my-3">
      Get in Touch. Stay in Touch
    </Box>
    <Row>
      {
            getInTouchData.map((item) => {
              const {
                key, title, text, icon,
              } = item;
              return (
                <Col key={key} xs={12} sm={6} lg={3}>
                  <Box className="text-center">
                    <Box style={{ fontSize: '2em', color: 'orange' }}>{icon}</Box>
                    <Box as="h5">{title}</Box>
                    <Box as="p">{text}</Box>
                  </Box>
                </Col>
              );
            })
        }
    </Row>
  </Container>
);

export default StayInTouch;
