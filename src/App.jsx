import Products from './pages/Products';
import { Navigation } from "./component/Navigation";
import '@mantine/core/styles.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from './pages/ProductDetails';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;
