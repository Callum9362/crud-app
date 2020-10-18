var express = require('express');
const app = express();
const PORT = 3000;

//Import our routes
//const routes = require('./src/routes/crmRoutes')
//routes(app);

app.get('/', function(req, res, next){
    console.log('Req Method: ', req.method)
    next();
}, function(req, res, next){
    console.log('Request Original Url', req.originalUrl);
    next();
}, function(req, res, next){
    res.send('Request was successful');
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})