import React, {useState, useEffect} from "react";
import OptionDisplay from "./OptionDisplay";
import "./Form.css";
import TextField from "@mui/material/TextField";

const Form = () => {
  const [stateData, setStateData] = useState([]);
  const [displayStates, setDisplayStates] = useState(false);

  const getStates = async () => {
    const url = "http://localhost:5000/getstates";
    const data = await fetch(url);
    const states = await data.json();
    await setStateData(states.states);
  };

  useEffect(() => {
    getStates();
  }, []);

  return (
    <div className="form">
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        style={{margin: "40px 0", width: "100%"}}
      />
      <div onClick={() => {setDisplayStates(!displayStates)}}>
        <OptionDisplay label={"India"} width="300" isCheckboxVisible={false} />
      </div>
      {/* <OptionDisplay label={"Kolkata"} padding="100" isCheckboxVisible={true} /> */}

      {displayStates? stateData.map((ele) => (
        <OptionDisplay
          key={ele.id}
          label={ele.state}
          width="250"
          isCheckboxVisible={true}
        />
      )):''}
    </div>
  );
};

export default Form;
