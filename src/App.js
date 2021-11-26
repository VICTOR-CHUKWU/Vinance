import { Route, Routes } from 'react-router-dom';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Home from './component/home/Home';
import About from './pages/about/About';
import BuyCrypto from './pages/buyCrypto/BuyCrypto';
import Finance from './pages/finance/Finance';
import Market from './pages/market/Market';
import Trade from './pages/trade/Trade';
import Register from './Auth/Register';
import Login from './Auth/Login';
import Crypto from './pages/crypto/Crypto';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/market" element={<Market />} />
        <Route path="/buy-crypto" element={<BuyCrypto />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/crypto/:symbol" element={<Crypto />} />
        <Route path="/account/register" element={<Register />} />
        <Route path="/account/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
