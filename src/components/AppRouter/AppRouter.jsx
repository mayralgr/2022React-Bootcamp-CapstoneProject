import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import Checkout from '../../pages/Checkout/Checkout';
import ProductList from '../../pages/ProductList/ProductList';
import ProductDetail from '../../pages/ProductDetail/ProductDetail';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/checkout" element={<Checkout />} />
    
    <Route path="/products" element={<ProductList />} />
    {/* <Route path="/products?category=categorySlug" element={<ProductList />} /> */}
    <Route path="/productDetail" element={<ProductDetail />} />
    <Route path="/*" element={<Home />} />
    <Route path="*/" element={<Home />} />
    <Route path="*/home*" element={<Home />} />
  </Routes>
);

export default AppRouter;
