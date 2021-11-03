import React from 'react'
import OptionDisplay from './OptionDisplay'
import './Form.css';
import TextField from "@mui/material/TextField";

const Form = () => {
    return (
      <div className="form">
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          style={{margin: "40px 0", width: '100%'}}
        />
        <OptionDisplay
          label={"India"}
          padding="250"
          isCheckboxVisible={false}
        />
        {/* <OptionDisplay
          label={"West Bengal"}
          padding="130"
          isCheckboxVisible={true}
        />
        <OptionDisplay
          label={"Kolkata"}
          padding="100"
          isCheckboxVisible={true}
        /> */}
      </div>
    );
}

export default Form;
