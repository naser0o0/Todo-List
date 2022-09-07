import { useState } from "react";
import List from "./components/List";
import "./App.css";

export default function App() {
  const [currentItem, setCurrentItem] = useState(null);
  const [itemList, updateItemList] = useState([]);

  const onChangeHandler = (e) => {
    // console.log("currentValue", e.target.value);
    setCurrentItem(e.target.value);
  };

  const addItemToList = (e) => {
    updateItemList([...itemList, { item: currentItem, key: Date.now() }]);
    console.log("list item", itemList);
    setCurrentItem("");
  };

  return (
    <div className="App">
      <div className="todo-list">
        <h1>Todo List</h1>
        <div>
          <input
            placeholder="Add item"
            value={currentItem}
            onChange={onChangeHandler}
            className="input-list"
            type="text"
          />
          <button onClick={addItemToList} className="btn">
            add
          </button>
        </div>
        <br />
        <hr />
        <List itemList={itemList} updateItemList={updateItemList} />
      </div>
    </div>
  );
}
