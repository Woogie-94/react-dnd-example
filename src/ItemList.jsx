import React from "react";
import Item from "./Item";
import { ItemDropsZone, ListContainer, ListTitle } from "./style";

const ItemList = ({ list, items }) => {
  return (
    <ListContainer>
      <ListTitle>{list.title}</ListTitle>
      <ItemDropsZone>
        {list.items.map((item) => (
          <Item item={item} items={items} />
        ))}
      </ItemDropsZone>
    </ListContainer>
  );
};

export default ItemList;
