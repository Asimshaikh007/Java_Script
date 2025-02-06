const express = require("express");
//const path = require("path");
const app = express();
const port = 3000;
const cors = require("cors");
const multer = require("multer");

const upload = multer(); 
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

app.post("/calculate", upload.none(), (req, res) => {
  const { n1, n2 } = req.body;
  console.log("Recieved n1=", n1);
  console.log("Recieved n2=", n2);
  const num1 = parseFloat(n1);
  const num2 = parseFloat(n2);
  const result = num1 + num2;
  res.json({ result });
});

app.listen(port, () => {
  console.log("Asim Server running at port:", port);
});
