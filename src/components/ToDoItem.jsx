import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function ToDoItem(props) {
  const btnstyle = {
    padding: 0,
    height: "24px",
    marginRight: "1.5rem",
    backgroundColor: "#ffeaa7"
  };

  return (
    <div>
      <li>
        {props.text}
       
        <div>
          <button
            style={btnstyle}
            onClick={() => {
              props.onChecked(props.id);
            }}
          >
            <DeleteIcon />
          </button>

          <button  onClick={() => {
             const str= prompt("Edit");
             props.onAdd(str,);
             props.onChecked(props.id);
             
            }} style={btnstyle}>
            <EditIcon />
          </button>
        </div>
      </li>
    </div>

    // <div
    //   onClick={() => {
    //     props.onChecked(props.id);
    //   }}
    // >
    //   <li>{props.text}</li>
    // </div>
  );
}

export default ToDoItem;
