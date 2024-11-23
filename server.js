// const express = require('express');
// const app = express();

// console.log("Welcome");

// app.listen(8000);

// app.set('view engine', 'ejs')

// app.get('/', (req, res) => {
//   res.render('index', {text: 'robo'});
//   console.log("Palazo");
// })

// const userRouter = require('./routes/users')

// app.use('/users', userRouter)


import mongoose from "mongoose";
import Blog from "./model/blog";

mongoose.connect("mongodb+srv://opeyemiMongo:Opeyemi1995@cluster0.t8ivj.mongodb.net/")

//Create a new blog object
const article = new Blog({
  title: 'Awesome Dad',
  slug: 'awesome-post',
  published: true,
  content: 'This is the day ever',
  tags: ['featured', 'announcement']
})

//insert the article in our MongoDb database
await article.save();

//find a single blog post
const firstArticle = await Blog.findOne({})
console.log(firstArticle);


