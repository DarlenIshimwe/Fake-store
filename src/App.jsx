import Products from './pages/Products';
import { Navigation } from "./component/Navigation";
import '@mantine/core/styles.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from './pages/ProductDetails';
import HomePage from "./pages/HomePage"
import Cart from "./pages/Cart"
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
           <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;
