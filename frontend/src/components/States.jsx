import React, {useState, useEffect} from "react";
import OptionDisplay from "./OptionDisplay";
import "./States.css";

const States = ({id, label}) => {
  const [showChildren, setShowChildren] = useState(false);
  const [cityData, setcityData] = useState([]);

  const getCities = async () => {
    const url = `http://localhost:5000/getcities/${label}`;
    const data = await fetch(url);
    const cities = await data.json();
    setcityData(cities.cities);
  };

  useEffect(() => {
    getCities();
  }, []);

  return (
    <div className="state">
      <div
        onClick={() => {
          setShowChildren(!showChildren);
        }}
      >
        <OptionDisplay
          label={label}
          isCheckboxVisible={true}
          key={id}
          width="250"
        />
      </div>

      {showChildren
        ? cityData.map((e) => (
            <OptionDisplay
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
