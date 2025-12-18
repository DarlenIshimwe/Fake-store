import { useEffect, useState, useContext } from "react";

import { ReuseableCard } from "../component/ReuseableCard";
import { SimpleGrid, Box } from "@mantine/core";
import Loading from "../component/Loading";
import { CartContext } from "../context/CartContext";
import { Container } from "postcss";

function Products() {
    const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // console.log(cart);
  const fetchProducts = () => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  
  return (
    <Box>
      {loading ? (
        <Loading />
      ) : (
        <SimpleGrid cols={4} mt={-70}>
          {products.map((product) => (
            <ReuseableCard
           
              to={`/product/${product?.id}`}
              title={product.title}
              description={product.description}
              price={`K${product.price}`}
              image={product.image}
              category={product.category}
              rating={product.rating}
              add="Add to cart "
              view="  View product"
              addToCart={() => addToCart(product)}
            />
          ))}
          
        </SimpleGrid>
      )}
    </Box>
  );
}
export default Products;
