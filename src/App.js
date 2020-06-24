import React, { useState } from "react";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import RefreshIcon from "@material-ui/icons/Refresh";

import List from "./components/list/list-component";

import "./App.css";

const App = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    if (item) {
      setList([...list, item]);
    }
    setItem("");
  };

  const handleClear = (event) => {
    event.preventDefault();
    if (list) {
      if (window.confirm("Are you sure to clear all tasks ?")) {
        setList([]);
        setItem("");
      }
    }
  };

  const deleteItemFromList = (id) => {
    setList(
      list.filter((item, index) => {
        return index !== id;
      })
    );
  };

  return (
    <div className="app">
      <h1>ToDo List App</h1>
      <div className="container">
        <input
          type="text"
          placeholder="Enter an item here"
          value={item}
          onChange={handleChange}
        />
        <AddCircleIcon className="add-btn" onClick={handleAdd}></AddCircleIcon>
        <RefreshIcon className="clear-btn" onClick={handleClear}></RefreshIcon>
      </div>
      <div className="list">
        <List items={list} deleteItem={deleteItemFromList} />
      </div>
    </div>
  );
};

export default App;

// hii... the system is now asking for BitLocker Recovery key for booting up
