const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const upload = multer();

app.post("/api/Exclusive", upload.none(), (req, res) => {
  const { amount, gst } = req.body;
  console.log("amt=", amount);
  console.log("gst=", gst);
  const amt = parseFloat(amount);
  const gstfloat = parseFloat(gst);

  let result = { gst: 0.0, postgst: 0.0, pregst: 0.0 };
  const per = gstfloat / 100;
  result.gst = amt * per;
  result.postgst = amt + result.gst;
  result.pregst = amt / (1 + per); // Corrected calculation for pregst
  console.log(result);
  res.json(result); // Directly return the result object
});

const port = 3000;
app.listen(port, () => {
  console.log("Server running on port:", port);
});
