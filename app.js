const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const User = require('./models/User');
app.use(cookieParser());
app.use(express.json());

mongoose.connect('mongodb+srv://bryce:1234@cluster0-wbncb.mongodb.net/trades?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}, ()=>{
    console.log('successfully connected to database');
});

// EXAMPLE ADDING NEW USER 
/*
const userInput = {
    username : "bryce1234",
    password : "1234",
    role : "admin"
}
const user = new User(userInput);
user.save((err,document)=>{
    if(err)
        console.log(err);
    console.log(document);
})
*/
//ENDS HERE-------------------------

app.listen(5000, ()=>{
    console.log('express server started on port 5000');
});
