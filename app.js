const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const userRouter = require('./routes/User');
app.use(cookieParser());
app.use(express.json());

mongoose.connect('mongodb+srv://bryce:1234@cluster0-wbncb.mongodb.net/trades?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}, ()=>{
    console.log('successfully connected to database');
});

app.use('/user',userRouter);

app.listen(5000, ()=>{
    console.log('express server started on port 5000');
});
