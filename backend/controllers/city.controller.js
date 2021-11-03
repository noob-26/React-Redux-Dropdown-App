const fs = require("fs");

const getCitiesforState = (req, res) => {
  try {
      // Reading the json file
    fs.readFile("./task.json", (err, file) => {
      if (err) {
        res.json({
          error: "File could not be opened because of internal server error",
        });
      }
      const fileContent = JSON.parse(file);

      //Checking if state param exists
      if (!req.params.state) {
        res.json({error: "State cannot be empty"});
      }

      const state = req.params.state[0].toUpperCase() + req.params.state.slice(1);
      req.params.state = state;
      
      //filtering out the state
      const filteredState = fileContent[0].state.filter(
        (element) => element.state === req.params.state
      );
      if (!filteredState || filteredState.length === 0) {
        res.json({error: "Please Enter a valid state"});
      }
      if (filteredState.length > 0) {
          //finding cities of the state
        const cities = filteredState[0].city.map((ele) => ele);
        if (!cities) {
          res.json({error: "No city info exists for this state"});
        }
        res.json({cities});
      }
    });
  } catch (err) {
    console.log(err);
    res.send({error: err.message});
  }
};

module.exports = getCitiesforState;
