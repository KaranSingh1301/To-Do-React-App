import React from "react";

function ButtonAdd(props) {
  return (
    <button
      onClick={() => {
        props.onAdd(props.valueText);
        props.onSet("");
      }}
    >
      <span>Add</span>
    </button>
  );
}

export default ButtonAdd;
