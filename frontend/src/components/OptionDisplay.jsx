import React from "react";
import "./OptionDisplay.css";

const OptionDisplay = ({label, width, isCheckboxVisible}) => {
  const val = width;
  return (
    <div className="OptionDisplay">
      <label
        className="formfield"
        style={{marginBottom: "20px", width: `${val}px`}}
      >
        {isCheckboxVisible ? <input type="checkbox" name="" /> : ""}
        {label}
      </label>
    </div>
  );
};

export default OptionDisplay;
