import {useContext} from "react"
import { IconSearch } from "@tabler/icons-react";
import { Autocomplete, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
import { CartContext } from "../context/CartContext";




export function Navigation() {
   const { cart } = useContext(CartContext);
  const [opened, { toggle }] = useDisclosure(false);

  const links = [
  { link: "/", label: "Home" },
  { link: "/products", label: "Products" },
  { link: "/cart", label:  `🛒 ${cart.length}` },
  { link: "/about", label: "About" },
];
  const items = links.map((link) => (
    <Link key={link.label} to={link.link} className={classes.link}>
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <b>Online store</b>
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>

          <Autocomplete
            className={classes.search}
            placeholder="Search"
            leftSection={<IconSearch size={16} stroke={1.5} />}
            data={[
              "React",
              "Angular",
              "Vue",
              "Next.js",
              "Riot.js",
              "Svelte",
              "Blitz.js",
            ]}
            visibleFrom="xs"
          />
        </Group>
      </div>
    </header>
  );
}
