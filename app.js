const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.set('view engine', 'ejs');


app.get('/', function (req, res)  {
   
    res.render('authentication.ejs')
});

const routes = require("./routes/index");

app.use(express.json()); // Middleware to parse JSON request body
app.use("/api", routes); // Base route for all APIs

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
