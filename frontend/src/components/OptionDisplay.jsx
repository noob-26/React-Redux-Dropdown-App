import React from "react";
import "./OptionDisplay.css";

const OptionDisplay = ({label, padding, isCheckboxVisible}) => {
  const val = padding;
  return (
    <div className="OptionDisplay">
      <label
        className="formfield"
        style={{paddingRight: `${val}px`, marginBottom: "20px"}}
      >
        {isCheckboxVisible ? <input type="checkbox" name="" /> : ""}
        {label}
      </label>
    </div>
  );
};

export default OptionDisplay;
