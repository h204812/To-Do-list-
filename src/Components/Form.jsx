import React from "react";
import "../Styles/Form.css"
function Form({ item, setItem, addItemToList }) {
    const id= Date.now();
  // When the button is clicked, add the item and hide the form
  function handleAddTodo() {
    addItemToList(item,id); // Add the item to the list
  }

  return (
    <div className="Form">
      <input
        type="text"
        placeholder="Enter a new to-do item"
        value={item}
        onChange={(e) => setItem(e.target.value)} 
      />
      <button id="add-todo" onClick={handleAddTodo}>
        Add To-Do
      </button>
    </div>
  );
}

export default Form;
