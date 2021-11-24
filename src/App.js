import { Route, Routes } from 'react-router-dom';
import Footer from './component/footer/Footer';
import Header from './component/header/Nav';
import Home from './component/home/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
