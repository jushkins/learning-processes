import mongoose from "mongoose";
import express from "express";
import morgan from "morgan";
import Blog from "../MongoDB/models/blog.js";

const app = express()
const uri = "mongodb+srv://techguy:George.1o1@just-kidding.jaumqv6.mongodb.net/techguy?retryWrites=true&w=majority";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(4000))
  .catch((err) => console.log(err));

// app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(morgan("dev"));

app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "Hello niggas wassap 2",
    snippet: "I know who you are and I will find you soon",
    body: "wassap niggas more about my new niggas",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/all-blogs", (req, res) => {
  Blog.find().then((result) => {
    res.send(result);
  })
    .catch((err) => {
      console.log(err);
    });
})

app.get("/one-blog", (req, res) => {
  Blog.findById('64da06466bbfd7efe506db94')
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});