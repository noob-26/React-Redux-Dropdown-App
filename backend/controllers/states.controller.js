const fs = require('fs');

const getStates = (req, res) => {
    fs.readFile("./task.json", (err, file) => {
      if (err) {
        res.json({error: "File could not be opened"});
      }
      const fileContent = JSON.parse(file);
      const states = fileContent[0].state.map((element) => (
          {id: element.id, state: element.state}
      ))
      res.json({states});
    });
}

module.exports = getStates;