const fs = require("fs");

const getFile = (req, res) => {
  fs.readFile("./task.json", (err, file) => {
    if (err) {
      res.json({error: "File could not be opened"});
    }
    const fileContent = JSON.parse(file);
    res.json(fileContent);
  });
};

module.exports = getFile;
