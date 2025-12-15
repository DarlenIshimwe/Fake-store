import { Button, Image, Text, TextInput, Title } from '@mantine/core';
// import { Image } from "@mantine/core";
import classes from './Cart.module.css';

export  default function Cart() {

//  const { state } = useLocation();
//   const { image, title, price } = state || {};
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Dear customer</Title>
        <Text fw={300} fz="lg" mb={3}>
         thenk you for shopping with us,<br/> the product you selected has been added to you <b>Cart</b>, soon you'll recieve it
        </Text>
        <Text fz="sm" c="dimmed">
            follow us for more goodies and
          You will never miss important product updates,Our
          new products are availabe  once a week, every Sunday.
        </Text>

        <div className={classes.controls}>
          <TextInput
            placeholder="Your email"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
            radius="md"
            size="md"
          />
          <Button className={classes.control} radius="md" size="md">
           Send
          </Button>
        </div>
      </div>
      <Image src={Image.src} className={classes.image} />
    
    </div>
  );
}



