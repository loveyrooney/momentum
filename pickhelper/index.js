const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const path = require('path');
const app = express();
const router = require("./routes/index");
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({extended:true})); 
app.use(express.json());
app.use("/public", express.static(`${__dirname}/public`));
app.use("/", router);

app.listen(process.env.PORT, () => {
    console.log("server open: ", process.env.PORT);
});