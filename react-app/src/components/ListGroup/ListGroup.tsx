import { useState } from "react";
import styles from "./ListGroup.module.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 10px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectedItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1 style={{ color: "red" }}>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <List>
        {items.map(function (item, index) {
          return (
            <ListItem
              active={index === selectedIndex}
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectedItem(item);
              }}
            >
              {item}
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

export default ListGroup;
