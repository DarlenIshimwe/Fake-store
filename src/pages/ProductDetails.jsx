import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
    const {id} = useParams()
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchSingleProduct();
  }, []); 

  if (!product) return <p>Loading...</p>; 

  return (
    <div>
       <h1>{product.title}</h1>
       <img src={product.image} alt={product.title} width="200" />
        <p>{product.description}</p>
      <p>K{product.price}</p>
     
    </div>
  );
}

export default ProductDetails;
