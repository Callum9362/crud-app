var express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/test', {
    useUnifiedTopology: true,
    useNewUrlParser: true 
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const BlogSchema =  require("./src/models/crmModel");
const blogModel = mongoose.model('blog', BlogSchema);

//CREATE method
app.post('/newBlog', (req, res) => {
    let blog = new blogModel(req.body);
    blog.save((err, blogModel)=>{
        if(err){
            res.send(err);
        }
        res.json(blog);
    })
})

//RETURN method
let getAllBlogs = (req, res) => {
    blogModel.find({}, (err, blogs) => {
        if(err){
            res.send(err);
        }
        res.json(blogs);
    })
}

app.get('/getBlogs', getAllBlogs);

let getBlogByID = (req, res) => {
    blogModel.findById((req.params.blogid), (err, blog) =>{
        if(err){
          res.send(err);
        }
        res.json(blog);
    })
}

app.get('/blog/:blogid', getBlogByID);

//UPDATE method
let updateBlog = (req, res) => {
    blogModel.findByIdAndUpdate({_id: req.params.blogid}, req.body, {new: true}, (err, update)=>{
       if(err){
           res.send(err);
       }
       res.json(updateBlog);
    })
}

app.put('/blog/:blogid', updateBlog);

//DELETE method

let deleteBlog = (req, res) => {
    blogModel.remove({_id: req.params.blogid}, (err) => {
        if(err){
            res.send(err);
        }
        res.json({message: 'Blog deleted successfully'})
    })
}

app.delete('/blog/:blogid', deleteBlog);

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})