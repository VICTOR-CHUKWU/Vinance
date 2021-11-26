import { Container } from 'react-bootstrap';
import Box from '../../shared/Box';

const About = () => (
  <Container className="about min-height">
    <Box as="h3">About Vinance</Box>
    <Box>
      <Box as="p">
        We are a crypto based group that wants to help you trade crypto
      </Box>
    </Box>
  </Container>
);

export default About;
