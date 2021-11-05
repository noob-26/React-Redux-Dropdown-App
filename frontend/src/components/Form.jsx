import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import "./Form.css";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import States from "./States";

const Form = () => {
  const [stateData, setStateData] = useState([]);
  const [displayStates, setDisplayStates] = useState(false);
  const selectedStates = useSelector((state) => state.states.selectedStates);
  const selectedCities = useSelector((state) => state.states.selectedCities);
  const [searchvalue, setSearchvalue] = useState('');

  const getStates = async () => {
    try {
      const url = "http://localhost:5000/getstates";
      const data = await fetch(url);
      const states = await data.json();
      await setStateData(states.states);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStates();
  }, []);

  return (
    <div className="form">
      <TextField
        value={searchvalue}
        onChange={(e) => setSearchvalue(e.target.value)}
        id="outlined-basic"
        label="Search"
        variant="outlined"
        style={{margin: "40px 0", width: "100%"}}
      />
      <div
        onClick={() => {
          setDisplayStates(!displayStates);
        }}
      >
        <div className="OptionDisplay">
          <div
            className="formfield"
            style={{marginBottom: "20px", width: `300px`}}
          >
            {"India"}
          </div>
        </div>
      </div>

      {displayStates
        ? stateData.map((ele) => (
            <States key={ele.id} label={ele.state} search={searchvalue} />
          ))
        : ""}

      <Button
        onClick={(e) => {
          e.preventDefault();
          console.log("Selected States : ", selectedStates);
          console.log("Selected Cities: ", selectedCities);
        }}
        variant="contained"
      >
        Submit
      </Button>
    </div>
  );
};

export default Form;
