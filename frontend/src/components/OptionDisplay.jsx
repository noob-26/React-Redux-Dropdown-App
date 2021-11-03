import React from "react";
import "./OptionDisplay.css";

const OptionDisplay = ({label, width, isCheckboxVisible, checked}) => {
  const val = width;
  return (
    <div className="OptionDisplay">
      <div
        className="formfield"
        style={{marginBottom: "20px", width: `${val}px`}}
      >
        {isCheckboxVisible ? <input onClick={(e) => {e.stopPropagation()}} type="checkbox" name="" /> : ""}
        {label}
      </div>
    </div>
  );
};

export default OptionDisplay;
