require('dotenv').config();
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Wellcome to home page');
});

app.get('*',(req,res)=> {
    res.redirect('/');
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server online")
});