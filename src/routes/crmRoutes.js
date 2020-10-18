const routes = (app) => {

    // As the routes use the same endpoint we can use the chaining practice.
    app.route('/')
    .get((req, res) => {
        res.send(`This is a GET method`)
    })
    
    .post((req, res) => {
        res.send(`This is a POST method`)
    })
    
    .put((req, res) => {
        res.send(`This is a PUT method`)
    })
    
    .delete((req, res) => {
        res.send(`This is a DELETE method`)
    })

}

// Gives the ability to use the routes outside of this file
module.exports = routes;




