import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';
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
  useMantineTheme,
} from '@mantine/core';
import classes from './Reuseable.module.css';
import { Link } from "react-router-dom";


export function ReuseableCard(props) {

  return (
   <Container size="lg">
  <Link to={props.to}>

     <Card withBorder radius="md" className={classes.card}>
      <Card.Section>
          <Image src={props.image} height={180} />
      </Card.Section>

      <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
        outstanding
      </Badge>

      <Text className={classes.title} fw={500} component="a">
        {props.title}
      </Text>

      <Text fz="sm" c="dimmed" lineClamp={4}>
        {props.description}
      </Text>
       <Text fz="sm" c="dimmed" lineClamp={4}>
        {props.price}
      </Text>

      <Group justify="space-between" className={classes.footer}>
         
        <button>add to Cart</button>
      </Group>
    </Card>
    </Link>
   </Container>
  );
}