const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();
const path = require('path')

app.set('view engine','ejs')

app.use(express.static(path.join(__dirname,'Public')))

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;

// Import the router files
const userRoutes = require('./Routes/UserRoutes');
const candidateRoutes = require('./Routes/candidateRoutes');

// Use the routers
app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);

app.get("/",(req,res)=>{
    res.render("index")
})

app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})