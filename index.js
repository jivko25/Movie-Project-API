const express = require("express");
const app = express();
const product = require("./api/product");
const mongoose = require('mongoose');

app.use(express.json({ extended: false }));

mongoose.connect('mongodb+srv://jivko25:jivko25@cluster0.detoa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', () => console.log('connected to DB'));


app.use("/api/product", product);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
