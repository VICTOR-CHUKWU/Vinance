import { Container, Table } from 'react-bootstrap';
import Box from '../../shared/Box';

const MarketTrend = () => (
  <Container className="my-5">
    <Box as="h3">
      Market Trend
    </Box>
    <Table responsive>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  </Container>
);

export default MarketTrend;
