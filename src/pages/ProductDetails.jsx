import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IconCheck } from '@tabler/icons-react';
import { Button, Container, Group, Image, List, Text, ThemeIcon, Title } from '@mantine/core';
// import image from './image.svg';
import Cart from "./Cart";
import classes from './ProductDetails.module.css';

function ProductDetails() {
    const {id} = useParams()
  const [product, setProduct] = useState();
  console.log(product)

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
    
     <Container size="md" mt={-80}>
      
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            {product.title}
          </Title>
          <Text c="dimmed" mt="md">
            {product.description}
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck size={12} stroke={1.5} />
              </ThemeIcon>
            }
          >
            < Text>
              <b>Category : </b>{product.category}
            </Text>
            <Text>
               <b>price : </b>{`K${product.price}`}
            </Text>
            <Text>
             <b>rating : </b>{product.rating.rate}
            </Text>
          </List>

          <Group mt={30}>
            <Link to ="/Cart"
            
            >
            <Button radius="xl" size="md" className={classes.control} 
             navigate to="/cart"
            >
             Add to Cart
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.control}>
              Remove from Cart
            </Button>
            </Link>
          </Group>
        </div>
        <Image src={product.image} className={classes.image} />
        <Cart product={product} />;
        
      </div>
      
    
    </Container>
  );
}

export default ProductDetails;
