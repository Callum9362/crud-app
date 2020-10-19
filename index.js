var express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {
    useUnifiedTopology: true,
    useNewUrlParser: true 
});

const Cat = mongoose.model('Cat', {name: String});

const kitty = new Cat({name: 'Mimi'});

kitty.save().then((res =>{
    console.log(res);
    console.log('Meow');
}))

//Import our routes
//const routes = require('./src/routes/crmRoutes')
//routes(app);

app.get('/', function(req, res, next){
    console.log('Req Method: ', req.method)
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})