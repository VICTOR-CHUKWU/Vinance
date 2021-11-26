/* eslint-disable camelcase */
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { singleCrypto } from '../../redux/action/CryptoAction';
import Box from '../../shared/Box';

const AllCryptoData = () => {
  const crypto = useSelector((state) => state.CryptoReducer);
  const dispatch = useDispatch();
  const { cryptos } = crypto;
  const Cryptos = cryptos[0];

  if (!Cryptos) {
    return (
      <Box>Loading...</Box>
    );
  }
  return (
    <Container fluid className="cryptodata">
      <Row>
        {
               Cryptos.slice(0, 50).map((item) => {
                 const {
                   name, symbol, id, percent_change_1h,
                 } = item;
                 const redClass = percent_change_1h < 0 ? 'text-danger' : 'text-success';
                 return (
                   <Col key={id} xs={12} md={6} lg={4} className=" card-cryptos py-3 text-center">
                     <Box onClick={() => dispatch(singleCrypto(id))}>
                       <Link to={`crypto/${symbol}`}>
                         <Box as="h5" className="text-success my-2">{name}</Box>
                         <Box as="h5">
                           {name}
                           &#125; USD
                           {' '}
                           <Box as="span" className={redClass}>
                             {percent_change_1h}
                             %

                           </Box>
                         </Box>
                         <Box as="h5" className="text-success my-2">{symbol}</Box>
                       </Link>
                     </Box>
                   </Col>
                 );
               })
           }
      </Row>
    </Container>
  );
};

export default AllCryptoData;
