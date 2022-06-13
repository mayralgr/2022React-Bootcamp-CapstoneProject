import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import Checkout from '../../pages/Checkout/Checkout';
import ProductList from '../../pages/ProductList/ProductList';

const AppRouter = () => (
  <Routes>
    <Route exact path="/checkout" element={<Checkout />} />
    <Route exact path="/products" element={<ProductList />} />
    <Route path="/*" element={<Home />} />
    <Route path="*/" element={<Home />} />
    <Route path="*/home*" element={<Home />} />
  </Routes>
);

export default AppRouter;
