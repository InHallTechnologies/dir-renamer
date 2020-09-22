const express = require("express");
const fs = require("fs");
const app = express();

app.get("/change", (req, res) => {
  const data = [];
  const PHOTOS = fs.readdirSync("./Products SKU");
  PHOTOS.forEach(async (item) => {
    console.log("./Products SKU/" + item);
    const fn = fs.readdirSync("./Products SKU/" + item);
    fs.rename(
      "./Products SKU/" + item + "/" + fn,
      "./Products SKU/" + item + "/0.jpg",
      (err) => {
        console.log(err);
      }
    );
    data.push(fn);
  });
  res.send(data);
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
