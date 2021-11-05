import React, {useState, useEffect} from "react";
import OptionDisplay from "./OptionDisplay";
import "./States.css";
import {useDispatch} from "react-redux";
import addInfo from "../actionCreators/addInfo";
import addState from "../actionCreators/addState";
import removeState from "../actionCreators/removeState";

const States = ({label, search}) => {
  const [showChildren, setShowChildren] = useState(false);
  const [cityData, setcityData] = useState([]);
  const [checked, setChecked] = useState(false);
  const [checkchild, setCheckchild] = useState(0);
  const dispatch = useDispatch();

  const getCities = async () => {
    try {
      const url = `http://localhost:5000/getcities/${label}`;
      const data = await fetch(url);
      const cities = await data.json();
      setcityData(cities.cities);
      let arr = cities.cities.map((e) => e.name);
      dispatch(addInfo(label, arr));
      arr = arr.map(e => e.toLowerCase());
      if(arr.includes(search.toLowerCase())){
        alert(`Searched state exists inside ${label}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCities();
  }, [search]);

  return (
    <div className="state">
      <div
        onClick={() => {
          setShowChildren(!showChildren);
        }}
      >
        <div className="OptionDisplay">
          <div
            className="formfield"
            style={{marginBottom: "20px", width: `250px`}}
          >
            <input
              onChange={(e) => {
                setChecked(!checked);
                if (e.target.checked) {
                  dispatch(addState(label));
                } else {
                  dispatch(removeState(label));
                }
              }}
              checked={
                checked === true ? true : checkchild === 0 ? false : true
              }
              onClick={(e) => {
                e.stopPropagation();
              }}
              type="checkbox"
              name="state"
            />

            {label}
          </div>
        </div>
      </div>
      {showChildren
        ? cityData.map((e) => (
            <OptionDisplay
              setChanger={setCheckchild}
              search={search}
              checked={checked}
              type="city"
              label={e.name}
              isCheckboxVisible={true}
              key={e.id}
              width="200"
            />
          ))
        : ""}
    </div>
  );
};

export default States;
