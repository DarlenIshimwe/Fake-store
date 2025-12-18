import { Button, Image, Text, TextInput, Title } from "@mantine/core";
// import { Image } from "@mantine/core";
import classes from "./Cart.module.css";

export default function Cart() {

  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Dear customer</Title>
        <Text fw={300} fz="lg" mb={3}>
          thenk you for shopping with us,
          <br /> the product you selected has been added to you <b>Cart</b>,
          soon you'll recieve it
        </Text>
        <Text fz="sm" c="dimmed">
          follow us for more goodies and You will never miss important product
          updates,Our new products are availabe once a week, every Sunday.
        </Text>
        {/* <div className="cart-item">
          <Image src={product.image} alt={product.name} width={100} />
          <h3>{ product.name}</h3>
          <p>${product.price}</p>
          <p>{product.rating}</p>
        </div> */}

        <div className={classes.controls}>
          <TextInput
            placeholder="Your email"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
            radius="md"
            size="md"
          />
          <Button className={classes.control} radius="md" size="md">~
            Send
          </Button>
        </div>
      </div>
      {/* <Image src={product.image} className={classes.image} /> */}
    </div>
  );
}
