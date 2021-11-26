/* eslint-disable camelcase */
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import Box from '../../shared/Box';

const Crypto = () => {
  const crypto = useSelector((state) => state.SingleCryptoReducer);
  const { payload } = crypto;

  if (!payload) {
    return (
      <Box>Loading...</Box>
    );
  }
  const {
    name, symbol,
    price_btc, price_usd, tsupply,
    percent_change_1h, percent_change_24h, percent_change_7d,
  } = payload;
  const redClass = percent_change_1h < 0 ? 'text-danger' : 'text-success';
  const redClass2 = percent_change_24h < 0 ? 'text-danger' : 'text-success';
  const redClass3 = percent_change_7d < 0 ? 'text-danger' : 'text-success';
  return (
    <Container className="min-height">
      <Row>
        <Col xs={12} md={6}>
          <Box className="shadow rounded p-3 mx-3 my-5">
            <Box as="h4">
              Name:
              {' '}
              {name}
            </Box>
            <Box as="h4">
              Symbol:
              {' '}
              {symbol}
            </Box>
            <Box as="h4">
              Total supply:
              {' '}
              {tsupply}
            </Box>
          </Box>
        </Col>
        <Col xs={12} md={6}>
          <Box className="shadow rounded p-3 mx-3 my-5">
            <Box as="h4">
              Price per BTC:
              {' '}
              {price_btc}
            </Box>
            <Box as="h4">
              Price per USD:
              {' '}
              {price_usd}
            </Box>
            <Box as="h4">
              {' '}
              Change per hour:
              {' '}
              <Box as="span" className={redClass}>
                {percent_change_1h}
                %

              </Box>
            </Box>
            <Box as="h4">
              {' '}
              Change per day:
              {' '}
              <Box as="span" className={redClass2}>
                {percent_change_24h}
                %

              </Box>
            </Box>
            <Box as="h4">
              {' '}
              Change per week:
              {' '}
              <Box as="span" className={redClass3}>
                {percent_change_7d}
                %

              </Box>
            </Box>
          </Box>
        </Col>
      </Row>
    </Container>
  );
};

export default Crypto;
