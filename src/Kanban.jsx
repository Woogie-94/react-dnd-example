import React, { useState } from "react";
import ItemList from "./ItemList";
import { KanbanContainer, ListDropZone } from "./style";

const Kanban = (props) => {
  const [lists, setLists] = useState([
    { title: "To Do", items: ["item_1", "item_2", "item_4"] },
    { title: "In Progress", items: ["item_5"] },
    { title: "Done", items: ["item_3"] },
  ]);

  const [items] = useState({
    item_1: { id: 1, title: "item_1" },
    item_2: { id: 2, title: "item_2" },
    item_3: { id: 3, title: "item_3" },
    item_4: { id: 4, title: "item_4" },
    item_5: { id: 5, title: "item_5" },
  });

  return (
    <KanbanContainer>
      <ListDropZone>
        {lists.map((list, index) => (
          <ItemList list={list} items={items} />
        ))}
      </ListDropZone>
    </KanbanContainer>
  );
};

export default Kanban;
