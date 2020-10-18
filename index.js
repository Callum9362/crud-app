var express = require('express');
const app = express();
const PORT = 3000;

//Import our routes
const routes = require('./src/routes/crmRoutes')
routes(app);

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})