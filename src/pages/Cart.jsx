import { useContext } from "react";
import classes from "./Cart.module.css";
import { Button, Group,Image, Text, TextInput, Title, Container} from '@mantine/core';
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart , removeFromCart} = useContext(CartContext);

 
  return (
    <Container spacing={4} mt={-70}>
   {cart.length <= 0 ? "Nothing has been added to the cart yet" : (<>
    {cart?.map((cart) => (
        <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>{cart.title}</Title>
        <Text fw={500} fz="lg" mb={5}>
        Category: {cart.category}
        </Text>
        <Text fz="sm" c="dimmed">
         Price: k {cart.price}
        </Text>

         <Text fz="sm" c="dimmed">
         Total: k {cart.price}
        </Text>

        <div className={classes.controls}>
         
         <Group justify="center">
               <Button size="sm">-</Button>0<Button size="sm">+</Button>
                <Button size="sm" onClick={ ()=>removeFromCart(cart.id)}>Remove cart</Button>
               </Group>
        </div>
      </div>
      <Image src={cart.image} className={classes.image} />
    </div>
    ))}
   </>)}
    </Container>
    
  );
}
