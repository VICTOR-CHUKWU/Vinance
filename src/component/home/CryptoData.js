/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { singleCrypto } from '../../redux/action/CryptoAction';
import Box from '../../shared/Box';
import { settings } from '../../Data';

const CryptoData = () => {
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
    <Container className="cryptodata my-5 d-none d-lg-block">
      <Row>
        <Slider {...settings}>
          {
               Cryptos.slice(0, 50).map((item) => {
                 const {
                   name, symbol, id, percent_change_1h,
                 } = item;
                 const redClass = percent_change_1h < 0 ? 'text-danger' : 'text-success';
                 return (
                   <Col key={id} xs={6} md={4} lg={3}>
                     <Box className=" card-crypto mx-3 py-3 rounded text-center" onClick={() => dispatch(singleCrypto(id))}>
                       <Link to={`crypto/${symbol}`}>
                         <Box as="h5" className="text-center text-success my-2">{name}</Box>
                         <Box as="h5">
                           {name}
                           &#125; USD
                           {' '}
                           <Box as="span" className={redClass}>
                             {percent_change_1h}
                             %

                           </Box>
                         </Box>
                       </Link>
                     </Box>
                   </Col>
                 );
               })
           }
        </Slider>
      </Row>
    </Container>
  );
};

export default CryptoData;
