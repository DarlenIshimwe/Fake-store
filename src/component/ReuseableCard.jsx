import { IconBookmark, IconHeart, IconShare } from "@tabler/icons-react";
import {
  ActionIcon,
  Avatar,
  Badge,
  Card,
  Center,
  Group,
  Image,
  Text,
  Container,
  Button,
  useMantineTheme,
} from "@mantine/core";
import classes from "./Reuseable.module.css";
import { Link } from "react-router-dom";

export function ReuseableCard(props) {
  const {} = props
  return (
    <Container size="lg">
      <Link
        to={props.to}
        style={{ textDecoration: "none" }}
        state={{ image: props.image, title: props.title, price: props.price }}
      >
        <Card withBorder radius="md" className={classes.card}>
          <Card.Section>
            <Image src={props.image} height={180} />
          </Card.Section>

          <Badge
            className={classes.rating}
            variant="gradient"
            gradient={{ from: "yellow", to: "red" }}
          >
            outstanding
          </Badge>

          <Text className={classes.title} fw={500} component="a">
            {props.title}
          </Text>

          <Text fz="sm" c="dimmed" lineClamp={4}>
            {props.description}
          </Text>
          <Text fz="lg" c="black" size="lg" lineClamp={4}>
            {props.price}
          </Text>

          <Group className={classes.footer} style={{display:"flex",justifyContent:"space-between"}}>
            <Button radius="sm" size="sm" className={classes.control} >
              {props.view}
            </Button>
             <Button
          radius="sm"
          size="sm"

          className={classes.control}
          onClick={() => addToCart()}
        >
          {props.add}
        </Button>
          </Group>
        </Card>
      </Link>
      <Group justify="space-between" className={classes.footer}>
       
      </Group>
    </Container>
  );
}
