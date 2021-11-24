import Box from '../../shared/Box';
import CryptoData from './CryptoData';
import DisplayCards from './DisplayCards';
import Intro from './Intro';
import MarketTrend from './MarketTrend';
import StayInTouch from './StayInTouch';
import TradeNow from './TradeNow';

const Home = () => (
  <Box>
    <Intro />
    <CryptoData />
    <DisplayCards />
    <MarketTrend />
    <StayInTouch />
    <TradeNow />
  </Box>
);

export default Home;
