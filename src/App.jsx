import React, { useState } from "react";
import Header from "./Components/Header";
import Middle from "./Components/Middle";
import Form from "./Components/Form";
import Item from "./Components/Item";

function App() {
  const [item, setItem] = useState(""); // The value of the to-do item
  const [showForm, setShowForm] = useState(false); // To toggle form visibility
  const [itemsList, setItemsList] = useState([]); // To store the list of to-do items
  const [isClickedList, setClicked] = useState([]);

  const addItemToList = (newItem, id) => {
    const new_val = { id: id, item: newItem };
    const new_itemList = [...itemsList, new_val];
    const new_isClicketList = [...isClickedList, { id: id, val: false }];
    setClicked(new_isClicketList);
    setItemsList(new_itemList);
    setItem("");
    setShowForm(false);
  };

  const delEvent = (id) => {
    setItemsList(itemsList.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header />
      <Middle setShowForm={setShowForm} />
      {showForm && <Form item={item} setItem={setItem} addItemToList={addItemToList} />}
      {itemsList.map((itemObj, index) => (
        <Item
          key={itemObj.id}
          item={itemObj}
          delEvent={delEvent}
          isClicked={isClickedList[index]}
        />
      ))}
    </>
  );
}

export default App;
