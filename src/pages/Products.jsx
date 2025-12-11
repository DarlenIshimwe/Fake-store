import { useEffect, useState } from "react";
import { ReuseableCard } from "../component/ReuseableCard";
import { SimpleGrid, Box } from "@mantine/core";
import Loading from "../component/Loading";
function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)
  console.log(products)
  const fetchProducts = () => {
   
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
      
  };
  useEffect(() => {
    setLoading(true)
    fetchProducts();
    setLoading(false)
  }, []);


  return (
    <Box>
      {loading ? "loading" : (<SimpleGrid cols={4} mt={-70}>
        {products.map((product) => (
          <ReuseableCard
          key={product.id}
          title={product.title} 
          image={product.image}
          />
        ))}
      </SimpleGrid>)}
    </Box>
  );
}
export default Products;
