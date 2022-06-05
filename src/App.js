import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout';
import ProductList from './pages/ProductList/ProductList';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
