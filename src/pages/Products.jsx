import { useEffect, useState } from "react";

import { ReuseableCard } from "../component/ReuseableCard";
import { SimpleGrid, Box } from "@mantine/core";
import Loading from "../component/Loading";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(products);
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
              key={product.id}
              to={`/product/${product?.id}`}
              title={product.title}
              description={product.description}
              price={`K${product.price}`}
              image={product.image}
              category={product.category}
              rating={product.rating}
            />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}
export default Products;
