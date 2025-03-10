import React from "react";
import "../Styles/Middle.css";

function Middle({ setShowForm }) {
  // When Add button is clicked, show the form
  function handleAddClick() {
    setShowForm(true);  // Set showForm to true to display the form
  }

  return (
    <div className="Middle">
      <button
        type="button"
        className="btn btn-warning btnSizeadd"
        onClick={handleAddClick}  // Trigger form visibility when clicked
      >
        Add
      </button>
    </div>
  );
}

export default Middle;

