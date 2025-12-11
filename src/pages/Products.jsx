import { useEffect, useState } from "react";
import { ReuseableCard } from "../component/ReuseableCard";
import { SimpleGrid, Box } from "@mantine/core";

function Products() {
  const [products, setProducts] = useState([]);
  console.log(products)
  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box>
      <SimpleGrid cols={4} mt={-70}>
        {products.map((product) => (
          <ReuseableCard
          key={product.id}
          title={product.title} 
          image={product.image}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
export default Products;
