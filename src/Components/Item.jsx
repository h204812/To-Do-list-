import React, { useState } from "react";
import "../Styles/item.css";

function Item(props) {
  const [clicked, setClicked] = useState(false); // State to track if heart is clicked

  function Handledel() {
    props.delEvent(props.item.id);
  }

  function handleClick() {
    setClicked(!clicked); // Toggle clicked state
  }

  return (
    <div className="row">
      {/* Check Mark Icon */}
      <div className="col-2 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-check2-circle"
          viewBox="0 0 16 16"
          style={{ width: "24px", height: "24px", cursor: "pointer" }}
        >
          <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
          <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
        </svg>
      </div>

      {/* To-Do Item */}
      <div className="col-6 toDo">{props.item.item}</div>

      {/* Heart Icon */}
      <div className="col-2 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-heart-fill"
          viewBox="0 0 16 16"
          onClick={handleClick}
          style={{
            width: "24px",
            height: "24px",
            cursor: "pointer",
            backgroundColor: clicked ? "pink" : "transparent", // Conditionally set background color
          }}
        >
          <path
            fillRule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
          />
        </svg>
      </div>

      {/* Delete Button */}
      <div className="col-2 text-center">
        <button type="button" className="btn btn-light" onClick={Handledel}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Item;
