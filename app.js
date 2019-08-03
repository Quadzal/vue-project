const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

app.use(express.static(path.join(__dirname, '/dist')))
app.get("/",(req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"))
})

app.listen(process.env.PORT);



