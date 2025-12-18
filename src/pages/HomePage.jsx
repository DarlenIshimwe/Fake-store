import { Button, Container, Overlay, Text, Title } from "@mantine/core";
import classes from "./HomePage.module.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md" mt={-120}>
        <Title className={classes.title}> Welcome to our online store</Title>
        <Text className={classes.description} size="xl" mt="xl">
          at the confort of your home, you cant get all you want from our on
          line store without wowrring about anything
          <br></br>simply grab your <b>phone</b>/<b> pic</b> and browser our
          online store
        </Text>

        <Link to="/products" style={{ textDecoration: "none", color: "white" }}>
          <Button
            variant="gradient"
            size="xl"
            radius="xl"
            className={classes.control}
          > get started</Button>
        </Link>
      </Container>
    </div>
  );
}
