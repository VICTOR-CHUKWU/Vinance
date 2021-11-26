import { Container, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Box from '../../shared/Box';

const MarketTrend = () => {
  const crypto = useSelector((state) => state.CryptoReducer);
  const { cryptos } = crypto;
  const Cryptos = cryptos[0];
  return (
    <Container className="my-5 d-none d-lg-block">
      <Box as="h3">
        Market Trend
      </Box>

      {
        Cryptos
          ? (
            <Table responsive>
              <thead>
                <tr>
                  <th>name</th>
                  <th>Last Price</th>
                  <th>24h Change</th>
                </tr>
              </thead>

              <tbody>
                {
           Cryptos.slice(0, 10).map((item) => {
             const redClass = item.percent_change_1h < 0 ? 'text-danger' : 'text-success';
             return (
               <tr key={item.id}>
                 <td>{item.name}</td>
                 <td>{item.symbol}</td>
                 <td className={redClass}>
                   {item.percent_change_1h}
                   %
                 </td>
               </tr>
             );
           })
              }
              </tbody>

            </Table>
          )

          : <Box as="h2">Loading...</Box>
    }
    </Container>
  );
};

export default MarketTrend;
