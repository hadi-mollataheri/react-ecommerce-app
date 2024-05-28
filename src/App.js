import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './pages/cart/Cart';
import Landing from './pages/landing/Landing';
import ShopContextProvider from './context/ShopContextProvider';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <ShopContextProvider>
                <Landing />
              </ShopContextProvider>
            }
          />
          <Route
            path='/cart'
            element={
              <ShopContextProvider>
                <Cart />
              </ShopContextProvider>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

