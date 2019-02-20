const express = require("express");
const bodyParser= require("body-parser");
const mongoose = require("mongoose");
const postsRoutes = require ("./routes/posts");
const menuRoutes = require ("./routes/menu");
const userRoutes = require ("./routes/user");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/coshare',{ useNewUrlParser: true }).then(()=>{
  console.log('Connected to database!');
}).catch(()=>{
  console.log('Connected failed!');
}
);


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});


app.use("/api/posts",postsRoutes);
app.use("/api/user",userRoutes);
app.use("/api/menu",menuRoutes);
module.exports = app;
