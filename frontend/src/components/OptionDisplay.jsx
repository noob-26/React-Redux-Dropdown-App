import React from "react";
import "./OptionDisplay.css";
import {useState} from "react";
import {useDispatch} from "react-redux";
import addCity from "../actionCreators/addCity";
import removeCity from "../actionCreators/removeCity";

const OptionDisplay = ({label, width, checked, setChanger, search}) => {
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();

  const val = width;
  return (
    <div className="OptionDisplay">
      <div
        className="formfield"
        style={{marginBottom: "20px", width: `${val}px`}}
      >
        <input
          onChange={(e) => {
            if(e.target.checked && !checked){
              setSelected(true);
              setChanger(prev => prev + 1);
              dispatch(addCity(label));
            }else if(!e.target.checked && !checked){
              setSelected(false);
              setChanger(prev => prev - 1);
              dispatch(removeCity(label));
            }
          }}
          checked={(checked === true) ? true : ((selected === true) ? true : false)}
          onClick={(e) => {
            e.stopPropagation();
            if(checked === true){
              alert('Please unselect state to select individual cities.')
            }
          }}
          type="checkbox"
          name="city"
        />

        <span style={(search === label)?{color: 'red'}:{}}>{label}</span>
      </div>
    </div>
  );
};

export default OptionDisplay;
