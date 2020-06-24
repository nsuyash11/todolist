import React from "react";

import "./list-styles.scss";
import ListItem from "../list-item/list-item-component";

const List = ({ items, deleteItem }) => {
  return (
    <div className="list-container">
      {items.map((item, index) => (
        <ListItem key={index} item={item} doDelete={() => deleteItem(index)} />
      ))}
    </div>
  );
};

export default List;
