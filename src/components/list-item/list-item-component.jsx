import React, { useState } from "react";

import DeleteIcon from "@material-ui/icons/Delete";

import "./list-item-styles.scss";

const ListItem = ({ item, doDelete }) => {
  return (
    <div className="list-item">
      <DeleteIcon className="delete-btn" onClick={doDelete} />
      <span className="item-name">{item}</span>
    </div>
  );
};

export default ListItem;
