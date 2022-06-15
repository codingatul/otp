import React from "react";
import "./Input.css";

function Input(props) {
  return (
    <div>
      <input
        pattern="[0-9]*"
        ref={props.refe}
        maxLength={1}
        className="input__box"
        type="text"
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
}

export default Input;
