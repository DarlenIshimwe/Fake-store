import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IconCheck } from "@tabler/icons-react";
import {
  Button,
  Container,
  Group,
  Image,
  List,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
// import image from './image.svg';
import Cart from "./Cart";
import classes from "./ProductDetails.module.css";

function ProductDetails() {
   let cart = [];
  console.log("cart", cart);
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  console.log("single product::", product);

 
  useEffect(() => {
    const fetchSingleProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchSingleProduct();
    setLoading(false);
  }, []);

  if (!product) return <p>Loading...</p>;

  // const addToCart = (product) => {
  //   console.log("cart product::", product);
  //   cart.push({
  //     id: product.id,
  //     title: product.title,
  //     price: product.price,
  //   });


  // };

  return (
    <Container size="md" mt={-80}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>{product.title}</Title>
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
            <Text>
              <b>Category : </b>
              {product.category}
            </Text>
            <Text>
              <b>price : </b>
              {`K${product.price}`}
            </Text>
            <Text>
              <b>rating : </b>
              {product.rating.rate}
            </Text>
          </List>

          <Group mt={30}>
            {/* <Link to="/Cart"> */}
            <Button
              radius="xl"
              size="md"
              className={classes.control}
              // navigate
              // to="/cart"
              // onClick={addToCart}
            >
              Add to Cart
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="md"
              className={classes.control}
            >
              Remove from Cart
            </Button>
            {/* </Link> */}
          </Group>
        </div>
        <Image src={product.image} className={classes.image} />
        <Cart />;
      </div>
    </Container>
  );
}

export default ProductDetails;
