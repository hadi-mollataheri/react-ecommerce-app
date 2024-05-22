import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './pages/cart/Cart';
import Landing from './pages/landing/Landing';

function App() {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing setCartProducts={setCartProducts} />} />
          <Route path='/cart' element={<Cart cartProducts={cartProducts} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

