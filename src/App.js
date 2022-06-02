import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout';
function App() {
  //const { data, isLoading } = useFeaturedBanners();

  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
