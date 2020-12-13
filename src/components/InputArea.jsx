import React, { useState } from "react";
import ButtonAdd from "./ButtonAdd";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

 

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />

      <ButtonAdd
        onAdd={props.onAdd}
        onSet={setInputText}
        valueText={inputText}
      />

      {/* <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button> */}
    </div>
  );
}

export default InputArea;
