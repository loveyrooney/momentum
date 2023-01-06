const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const app = express();
const port = 8090;
const router = require("./routes/index");

dotenv.config({path : path.join(__dirname, '.env')});
app.set("view engine", "ejs");

app.use("/public", express.static(`${__dirname}/public`));
app.use("/", router);

app.get("*", (req, res) => {
    res.send("주소가 존재하지 않습니다. 다시 한 번 확인해주세요.");
});
  
app.listen(port, () => {
    console.log("server open: ", port);
});