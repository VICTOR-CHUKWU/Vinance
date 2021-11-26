import {
  Container, Tab, Tabs, Form, Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Box from '../shared/Box';

const Login = () => (
  <Container className="min-height register mt-5">
    <Box as="h4">Login to your Vinance account</Box>
    <Box as="p">Login with email or mobile</Box>
    <Form>
      <Tabs defaultActiveKey="Email" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="Email" title="Email">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Tab>
        <Tab eventKey="Mobile" title="Mobile">
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="telephone" placeholder="Enter Phone" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Tab>
      </Tabs>
      <Button variant="warning" type="submit">
        Login
      </Button>
    </Form>
    <Box as="p">
      Dont have an account?.
      {' '}
      <Link to="/account/register" style={{ textDecoration: 'none' }} className="text-warning my-4">Register</Link>
      {' '}
    </Box>
  </Container>
);

export default Login;
